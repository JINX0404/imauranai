import { UserInput, DiagnosisResult } from '@/types';

const DAY_MASTERS = ['甲木', '乙木', '丙火', '丁火', '戊土', '己土', '庚金', '辛金', '壬水', '癸水'];

export function calculateDayMaster(birthDate: string): string {
  const date = new Date(birthDate);
  const baseDate = new Date('1900-01-01');
  const diffTime = Math.abs(date.getTime() - baseDate.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  return DAY_MASTERS[diffDays % 10];
}

export function calculateFiveElementTendency(dayMaster: string, birthPlace: string): string {
  const elementMap: { [key: string]: string } = {
    '甲木': '木', '乙木': '木',
    '丙火': '火', '丁火': '火',
    '戊土': '土', '己土': '土',
    '庚金': '金', '辛金': '金',
    '壬水': '水', '癸水': '水'
  };
  
  const element = elementMap[dayMaster] || '木';
  
  const northernPrefectures = ['北海道', '青森県', '岩手県', '秋田県'];
  const southernPrefectures = ['沖縄県', '鹿児島県', '宮崎県', '熊本県'];
  
  let tendency = '';
  if (northernPrefectures.includes(birthPlace)) {
    tendency = '水強火弱';
  } else if (southernPrefectures.includes(birthPlace)) {
    tendency = '火強水弱';
  } else {
    tendency = '均衡型';
  }
  
  return tendency;
}

export function generatePatternId(userInput: UserInput): string {
  const dayMaster = calculateDayMaster(userInput.birthDate);
  const fiveElementTendency = calculateFiveElementTendency(dayMaster, userInput.birthPlace);
  
  return `${dayMaster}_${fiveElementTendency}_${userInput.personalityType}`;
}

export async function loadDiagnosisResult(patternId: string): Promise<DiagnosisResult | null> {
  try {
    const response = await fetch(`/data/${patternId}.json`);
    if (response.ok) {
      return await response.json();
    }
    
    const fallbackPatterns = await findSimilarPatterns(patternId);
    if (fallbackPatterns.length > 0) {
      const fallbackResponse = await fetch(`/data/${fallbackPatterns[0]}.json`);
      if (fallbackResponse.ok) {
        return await fallbackResponse.json();
      }
    }
    
    const defaultResponse = await fetch('/data/default.json');
    if (defaultResponse.ok) {
      return await defaultResponse.json();
    }
    
    return null;
  } catch (error) {
    console.error('診断結果の読み込みに失敗しました:', error);
    return null;
  }
}

async function findSimilarPatterns(targetPattern: string): Promise<string[]> {
  const [dayMaster, elementTendency, personality] = targetPattern.split('_');
  
  const similarPatterns = [
    `${dayMaster}_均衡型_${personality}`,
    `${dayMaster}_${elementTendency}_直感型`,
    `辛金_${elementTendency}_${personality}`,
  ];
  
  return similarPatterns;
}

export function calculateCompatibility(dayMaster1: string, dayMaster2: string): number {
  const elementMap: { [key: string]: string } = {
    '甲木': '木', '乙木': '木',
    '丙火': '火', '丁火': '火',
    '戊土': '土', '己土': '土',
    '庚金': '金', '辛金': '金',
    '壬水': '水', '癸水': '水'
  };
  
  const element1 = elementMap[dayMaster1] || '木';
  const element2 = elementMap[dayMaster2] || '木';
  
  const compatibilityMatrix: { [key: string]: { [key: string]: number } } = {
    '木': { '木': 80, '火': 90, '土': 60, '金': 40, '水': 85 },
    '火': { '木': 85, '火': 75, '土': 90, '金': 50, '水': 30 },
    '土': { '木': 65, '火': 85, '土': 80, '金': 90, '水': 60 },
    '金': { '木': 45, '火': 55, '土': 85, '金': 75, '水': 90 },
    '水': { '木': 90, '火': 35, '土': 65, '金': 85, '水': 80 }
  };
  
  return compatibilityMatrix[element1]?.[element2] || 50;
}