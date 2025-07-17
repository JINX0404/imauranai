import { MBTIType } from '@/types';

export interface MBTIInfo {
  type: MBTIType;
  name: string;
  nameJa: string;
  description: string;
  cognitiveFunctions: string[];
}

export const MBTI_TYPES: MBTIInfo[] = [
  {
    type: 'INTJ',
    name: 'The Architect',
    nameJa: '建築家',
    description: '独創的な戦略家',
    cognitiveFunctions: ['Ni', 'Te', 'Fi', 'Se']
  },
  {
    type: 'INTP',
    name: 'The Thinker',
    nameJa: '論理学者',
    description: '革新的な発明家',
    cognitiveFunctions: ['Ti', 'Ne', 'Si', 'Fe']
  },
  {
    type: 'ENTJ',
    name: 'The Commander',
    nameJa: '指揮官',
    description: '大胆な指導者',
    cognitiveFunctions: ['Te', 'Ni', 'Se', 'Fi']
  },
  {
    type: 'ENTP',
    name: 'The Debater',
    nameJa: '討論者',
    description: '賢い挑戦者',
    cognitiveFunctions: ['Ne', 'Ti', 'Fe', 'Si']
  },
  {
    type: 'INFJ',
    name: 'The Advocate',
    nameJa: '提唱者',
    description: '静かな理想主義者',
    cognitiveFunctions: ['Ni', 'Fe', 'Ti', 'Se']
  },
  {
    type: 'INFP',
    name: 'The Mediator',
    nameJa: '仲介者',
    description: '詩的な理想主義者',
    cognitiveFunctions: ['Fi', 'Ne', 'Si', 'Te']
  },
  {
    type: 'ENFJ',
    name: 'The Protagonist',
    nameJa: '主人公',
    description: 'カリスマ的な指導者',
    cognitiveFunctions: ['Fe', 'Ni', 'Se', 'Ti']
  },
  {
    type: 'ENFP',
    name: 'The Campaigner',
    nameJa: '広報運動家',
    description: '熱意あふれる創造者',
    cognitiveFunctions: ['Ne', 'Fi', 'Te', 'Si']
  },
  {
    type: 'ISTJ',
    name: 'The Logistician',
    nameJa: '管理者',
    description: '実務的な組織者',
    cognitiveFunctions: ['Si', 'Te', 'Fi', 'Ne']
  },
  {
    type: 'ISFJ',
    name: 'The Defender',
    nameJa: '擁護者',
    description: '献身的な保護者',
    cognitiveFunctions: ['Si', 'Fe', 'Ti', 'Ne']
  },
  {
    type: 'ESTJ',
    name: 'The Executive',
    nameJa: '幹部',
    description: '優れた管理者',
    cognitiveFunctions: ['Te', 'Si', 'Ne', 'Fi']
  },
  {
    type: 'ESFJ',
    name: 'The Consul',
    nameJa: '領事官',
    description: '思いやりある援助者',
    cognitiveFunctions: ['Fe', 'Si', 'Ne', 'Ti']
  },
  {
    type: 'ISTP',
    name: 'The Virtuoso',
    nameJa: '巨匠',
    description: '大胆で実践的な実験者',
    cognitiveFunctions: ['Ti', 'Se', 'Ni', 'Fe']
  },
  {
    type: 'ISFP',
    name: 'The Adventurer',
    nameJa: '冒険家',
    description: '柔軟な芸術家',
    cognitiveFunctions: ['Fi', 'Se', 'Ni', 'Te']
  },
  {
    type: 'ESTP',
    name: 'The Entrepreneur',
    nameJa: '起業家',
    description: '賢明でエネルギッシュな認識者',
    cognitiveFunctions: ['Se', 'Ti', 'Fe', 'Ni']
  },
  {
    type: 'ESFP',
    name: 'The Entertainer',
    nameJa: 'エンターテイナー',
    description: '自発的で熱心な楽しみを求める人',
    cognitiveFunctions: ['Se', 'Fi', 'Te', 'Ni']
  }
];

export function getMBTIInfo(type: MBTIType): MBTIInfo | undefined {
  return MBTI_TYPES.find(info => info.type === type);
}