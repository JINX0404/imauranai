export type PersonalityType = '直感型' | '論理型' | '感情型' | '現実型';

export type MBTIType = 
  | 'INTJ' | 'INTP' | 'ENTJ' | 'ENTP'
  | 'INFJ' | 'INFP' | 'ENFJ' | 'ENFP'
  | 'ISTJ' | 'ISFJ' | 'ESTJ' | 'ESFJ'
  | 'ISTP' | 'ISFP' | 'ESTP' | 'ESFP';

export type Prefecture = 
  | '北海道' | '青森県' | '岩手県' | '宮城県' | '秋田県' | '山形県' | '福島県'
  | '茨城県' | '栃木県' | '群馬県' | '埼玉県' | '千葉県' | '東京都' | '神奈川県'
  | '新潟県' | '富山県' | '石川県' | '福井県' | '山梨県' | '長野県' | '岐阜県'
  | '静岡県' | '愛知県' | '三重県' | '滋賀県' | '京都府' | '大阪府' | '兵庫県'
  | '奈良県' | '和歌山県' | '鳥取県' | '島根県' | '岡山県' | '広島県' | '山口県'
  | '徳島県' | '香川県' | '愛媛県' | '高知県' | '福岡県' | '佐賀県' | '長崎県'
  | '熊本県' | '大分県' | '宮崎県' | '鹿児島県' | '沖縄県';

export interface BirthLocation {
  country: string;
  region?: string; // 都道府県/州など
  latitude?: number;
  longitude?: number;
}

export interface UserInput {
  birthDate: string;
  birthLocation: BirthLocation;
  birthTime?: string;
  personalityType: PersonalityType;
  mbtiType?: MBTIType;
}

export interface FiveElements {
  wood: number;
  fire: number;
  earth: number;
  metal: number;
  water: number;
}

export interface DiagnosisResult {
  patternId: string;
  characterName: string;
  characterDescription: string;
  sanmeigaku: {
    dayMaster: string;
    fiveElementBalance: FiveElements;
    interpretation: string;
  };
  personality: {
    strengths: string[];
    weaknesses: string[];
    advice: string;
  };
  career: {
    suitable: string[];
    unsuitable: string[];
    recommendation: string;
  };
  compatibility: {
    bestMatch: string[];
    challenging: string[];
    advice: string;
  };
  lifePath: {
    overview: string;
    keyPoints: string[];
  };
}