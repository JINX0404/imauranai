export interface Country {
  code: string;
  name: string;
  nameJa: string;
  regions?: Region[];
}

export interface Region {
  code: string;
  name: string;
  nameJa: string;
}

export const COUNTRIES: Country[] = [
  {
    code: 'JP',
    name: 'Japan',
    nameJa: '日本',
    regions: [
      { code: 'hokkaido', name: 'Hokkaido', nameJa: '北海道' },
      { code: 'aomori', name: 'Aomori', nameJa: '青森県' },
      { code: 'iwate', name: 'Iwate', nameJa: '岩手県' },
      { code: 'miyagi', name: 'Miyagi', nameJa: '宮城県' },
      { code: 'akita', name: 'Akita', nameJa: '秋田県' },
      { code: 'yamagata', name: 'Yamagata', nameJa: '山形県' },
      { code: 'fukushima', name: 'Fukushima', nameJa: '福島県' },
      { code: 'ibaraki', name: 'Ibaraki', nameJa: '茨城県' },
      { code: 'tochigi', name: 'Tochigi', nameJa: '栃木県' },
      { code: 'gunma', name: 'Gunma', nameJa: '群馬県' },
      { code: 'saitama', name: 'Saitama', nameJa: '埼玉県' },
      { code: 'chiba', name: 'Chiba', nameJa: '千葉県' },
      { code: 'tokyo', name: 'Tokyo', nameJa: '東京都' },
      { code: 'kanagawa', name: 'Kanagawa', nameJa: '神奈川県' },
      { code: 'niigata', name: 'Niigata', nameJa: '新潟県' },
      { code: 'toyama', name: 'Toyama', nameJa: '富山県' },
      { code: 'ishikawa', name: 'Ishikawa', nameJa: '石川県' },
      { code: 'fukui', name: 'Fukui', nameJa: '福井県' },
      { code: 'yamanashi', name: 'Yamanashi', nameJa: '山梨県' },
      { code: 'nagano', name: 'Nagano', nameJa: '長野県' },
      { code: 'gifu', name: 'Gifu', nameJa: '岐阜県' },
      { code: 'shizuoka', name: 'Shizuoka', nameJa: '静岡県' },
      { code: 'aichi', name: 'Aichi', nameJa: '愛知県' },
      { code: 'mie', name: 'Mie', nameJa: '三重県' },
      { code: 'shiga', name: 'Shiga', nameJa: '滋賀県' },
      { code: 'kyoto', name: 'Kyoto', nameJa: '京都府' },
      { code: 'osaka', name: 'Osaka', nameJa: '大阪府' },
      { code: 'hyogo', name: 'Hyogo', nameJa: '兵庫県' },
      { code: 'nara', name: 'Nara', nameJa: '奈良県' },
      { code: 'wakayama', name: 'Wakayama', nameJa: '和歌山県' },
      { code: 'tottori', name: 'Tottori', nameJa: '鳥取県' },
      { code: 'shimane', name: 'Shimane', nameJa: '島根県' },
      { code: 'okayama', name: 'Okayama', nameJa: '岡山県' },
      { code: 'hiroshima', name: 'Hiroshima', nameJa: '広島県' },
      { code: 'yamaguchi', name: 'Yamaguchi', nameJa: '山口県' },
      { code: 'tokushima', name: 'Tokushima', nameJa: '徳島県' },
      { code: 'kagawa', name: 'Kagawa', nameJa: '香川県' },
      { code: 'ehime', name: 'Ehime', nameJa: '愛媛県' },
      { code: 'kochi', name: 'Kochi', nameJa: '高知県' },
      { code: 'fukuoka', name: 'Fukuoka', nameJa: '福岡県' },
      { code: 'saga', name: 'Saga', nameJa: '佐賀県' },
      { code: 'nagasaki', name: 'Nagasaki', nameJa: '長崎県' },
      { code: 'kumamoto', name: 'Kumamoto', nameJa: '熊本県' },
      { code: 'oita', name: 'Oita', nameJa: '大分県' },
      { code: 'miyazaki', name: 'Miyazaki', nameJa: '宮崎県' },
      { code: 'kagoshima', name: 'Kagoshima', nameJa: '鹿児島県' },
      { code: 'okinawa', name: 'Okinawa', nameJa: '沖縄県' }
    ]
  },
  {
    code: 'US',
    name: 'United States',
    nameJa: 'アメリカ合衆国',
    regions: [
      { code: 'CA', name: 'California', nameJa: 'カリフォルニア州' },
      { code: 'NY', name: 'New York', nameJa: 'ニューヨーク州' },
      { code: 'TX', name: 'Texas', nameJa: 'テキサス州' },
      { code: 'FL', name: 'Florida', nameJa: 'フロリダ州' },
      { code: 'HI', name: 'Hawaii', nameJa: 'ハワイ州' },
      // 他の州は省略（必要に応じて追加）
    ]
  },
  {
    code: 'CN',
    name: 'China',
    nameJa: '中国',
    regions: [
      { code: 'beijing', name: 'Beijing', nameJa: '北京市' },
      { code: 'shanghai', name: 'Shanghai', nameJa: '上海市' },
      { code: 'guangdong', name: 'Guangdong', nameJa: '広東省' },
      // 他の省は省略
    ]
  },
  {
    code: 'KR',
    name: 'South Korea',
    nameJa: '韓国',
    regions: [
      { code: 'seoul', name: 'Seoul', nameJa: 'ソウル特別市' },
      { code: 'busan', name: 'Busan', nameJa: '釜山広域市' },
      // 他の地域は省略
    ]
  },
  {
    code: 'GB',
    name: 'United Kingdom',
    nameJa: 'イギリス',
    regions: [
      { code: 'england', name: 'England', nameJa: 'イングランド' },
      { code: 'scotland', name: 'Scotland', nameJa: 'スコットランド' },
      { code: 'wales', name: 'Wales', nameJa: 'ウェールズ' },
      { code: 'ni', name: 'Northern Ireland', nameJa: '北アイルランド' }
    ]
  },
  {
    code: 'FR',
    name: 'France',
    nameJa: 'フランス'
  },
  {
    code: 'DE',
    name: 'Germany',
    nameJa: 'ドイツ'
  },
  {
    code: 'IT',
    name: 'Italy',
    nameJa: 'イタリア'
  },
  {
    code: 'ES',
    name: 'Spain',
    nameJa: 'スペイン'
  },
  {
    code: 'CA',
    name: 'Canada',
    nameJa: 'カナダ'
  },
  {
    code: 'AU',
    name: 'Australia',
    nameJa: 'オーストラリア'
  },
  {
    code: 'BR',
    name: 'Brazil',
    nameJa: 'ブラジル'
  },
  {
    code: 'IN',
    name: 'India',
    nameJa: 'インド'
  },
  {
    code: 'OTHER',
    name: 'Other',
    nameJa: 'その他'
  }
];