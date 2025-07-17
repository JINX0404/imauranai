'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { UserInput, PersonalityType, Prefecture } from '@/types';
import { generatePatternId } from '@/lib/diagnosis';

const PREFECTURES: Prefecture[] = [
  '北海道', '青森県', '岩手県', '宮城県', '秋田県', '山形県', '福島県',
  '茨城県', '栃木県', '群馬県', '埼玉県', '千葉県', '東京都', '神奈川県',
  '新潟県', '富山県', '石川県', '福井県', '山梨県', '長野県', '岐阜県',
  '静岡県', '愛知県', '三重県', '滋賀県', '京都府', '大阪府', '兵庫県',
  '奈良県', '和歌山県', '鳥取県', '島根県', '岡山県', '広島県', '山口県',
  '徳島県', '香川県', '愛媛県', '高知県', '福岡県', '佐賀県', '長崎県',
  '熊本県', '大分県', '宮崎県', '鹿児島県', '沖縄県'
];

const PERSONALITY_TYPES: { value: PersonalityType; label: string; description: string }[] = [
  { value: '直感型', label: '直感型', description: 'ひらめきと感覚を大切にする' },
  { value: '論理型', label: '論理型', description: '分析と理性を重視する' },
  { value: '感情型', label: '感情型', description: '共感と調和を大切にする' },
  { value: '現実型', label: '現実型', description: '実践と結果を重視する' }
];

export default function DiagnosisPage() {
  const router = useRouter();
  const [formData, setFormData] = useState<UserInput>({
    birthDate: '',
    birthPlace: '東京都',
    birthTime: '',
    personalityType: '直感型'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const patternId = generatePatternId(formData);
    const queryParams = new URLSearchParams({
      pattern: patternId,
      ...formData
    });
    
    router.push(`/result?${queryParams.toString()}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <main className="max-w-md w-full space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-gray-900">診断情報入力</h1>
          <p className="text-gray-600">あなたの情報を入力してください</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg space-y-5">
          <div className="space-y-2">
            <label htmlFor="birthDate" className="block text-sm font-medium text-gray-700">
              生年月日 <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              id="birthDate"
              required
              value={formData.birthDate}
              onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="birthPlace" className="block text-sm font-medium text-gray-700">
              出生地 <span className="text-red-500">*</span>
            </label>
            <select
              id="birthPlace"
              required
              value={formData.birthPlace}
              onChange={(e) => setFormData({ ...formData, birthPlace: e.target.value as Prefecture })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            >
              {PREFECTURES.map((pref) => (
                <option key={pref} value={pref}>{pref}</option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="birthTime" className="block text-sm font-medium text-gray-700">
              出生時刻（任意）
            </label>
            <input
              type="time"
              id="birthTime"
              value={formData.birthTime}
              onChange={(e) => setFormData({ ...formData, birthTime: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              性格傾向 <span className="text-red-500">*</span>
            </label>
            <div className="space-y-2">
              {PERSONALITY_TYPES.map((type) => (
                <label
                  key={type.value}
                  className={`block cursor-pointer p-3 rounded-lg border transition-all ${
                    formData.personalityType === type.value
                      ? 'border-indigo-500 bg-indigo-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="personalityType"
                    value={type.value}
                    checked={formData.personalityType === type.value}
                    onChange={(e) => setFormData({ ...formData, personalityType: e.target.value as PersonalityType })}
                    className="sr-only"
                  />
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-gray-900">{type.label}</div>
                      <div className="text-sm text-gray-500">{type.description}</div>
                    </div>
                    {formData.personalityType === type.value && (
                      <div className="text-indigo-500">✓</div>
                    )}
                  </div>
                </label>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-full hover:from-indigo-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg"
          >
            診断結果を見る
          </button>
        </form>
      </main>
    </div>
  );
}