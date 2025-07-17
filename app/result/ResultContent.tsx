'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { DiagnosisResult } from '@/types';
import { loadDiagnosisResult } from '@/lib/diagnosis';
import FiveElementsChart from '@/components/FiveElementsChart';
import ShareButton from '@/components/ShareButton';

export default function ResultContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [result, setResult] = useState<DiagnosisResult | null>(null);
  const [loading, setLoading] = useState(true);
  const [showSharePopup, setShowSharePopup] = useState(false);

  useEffect(() => {
    const pattern = searchParams.get('pattern');
    if (!pattern) {
      router.push('/diagnosis');
      return;
    }

    loadDiagnosisResult(pattern).then((data) => {
      setResult(data);
      setLoading(false);
      // 結果表示後、3秒後にシェアポップアップを表示
      setTimeout(() => setShowSharePopup(true), 3000);
    });
  }, [searchParams, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-indigo-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">診断結果を読み込んでいます...</p>
        </div>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">診断結果が見つかりませんでした</p>
          <Link href="/diagnosis" className="mt-4 text-indigo-500 hover:underline">
            診断に戻る
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-8 px-4">
      <main className="max-w-2xl mx-auto space-y-6">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg space-y-6">
          <div className="text-center space-y-4">
            <h1 className="text-3xl font-bold text-gray-900">診断結果</h1>
            <div className="text-6xl">✨</div>
            <h2 className="text-2xl font-semibold text-indigo-600">
              {result.characterName}
            </h2>
            <p className="text-gray-600 max-w-md mx-auto">
              {result.characterDescription}
            </p>
          </div>

          <div className="border-t pt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">命式と五行バランス</h3>
            <div className="space-y-4">
              <div className="text-center">
                <p className="text-sm text-gray-600">日干</p>
                <p className="text-xl font-semibold text-gray-900">{result.sanmeigaku.dayMaster}</p>
              </div>
              <FiveElementsChart elements={result.sanmeigaku.fiveElementBalance} />
              <p className="text-sm text-gray-600 text-center">
                {result.sanmeigaku.interpretation}
              </p>
            </div>
          </div>

          <div className="border-t pt-6 space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">性格の特徴</h3>
            
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-2">強み</h4>
              <ul className="space-y-1">
                {result.personality.strengths.map((strength, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-green-500 mr-2">◆</span>
                    <span className="text-sm text-gray-600">{strength}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-2">課題</h4>
              <ul className="space-y-1">
                {result.personality.weaknesses.map((weakness, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-orange-500 mr-2">◆</span>
                    <span className="text-sm text-gray-600">{weakness}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-indigo-50 rounded-lg p-4">
              <p className="text-sm text-gray-700">{result.personality.advice}</p>
            </div>
          </div>

          <div className="border-t pt-6 space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">適職・キャリア</h3>
            
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-2">向いている仕事</h4>
              <div className="flex flex-wrap gap-2">
                {result.career.suitable.map((job, idx) => (
                  <span key={idx} className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                    {job}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-sm text-gray-600">{result.career.recommendation}</p>
          </div>

          <div className="border-t pt-6 space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">人生の指針</h3>
            <p className="text-sm text-gray-600">{result.lifePath.overview}</p>
            <ul className="space-y-2">
              {result.lifePath.keyPoints.map((point, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-indigo-500 mr-2">•</span>
                  <span className="text-sm text-gray-600">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* シェア促進ポップアップ */}
        {showSharePopup && (
          <div className="fixed bottom-4 left-4 right-4 bg-white rounded-2xl shadow-2xl p-4 border-2 border-indigo-200 animate-bounce md:max-w-sm md:mx-auto">
            <button
              onClick={() => setShowSharePopup(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
            <div className="text-center space-y-2">
              <div className="text-2xl">🎉</div>
              <p className="font-semibold text-gray-800">診断結果をシェアしよう！</p>
              <p className="text-xs text-gray-600">
                友達にもこの診断を教えてあげて
                <br />
                みんなの結果も見てみよう！
              </p>
              <Link
                href={`/share?character=${encodeURIComponent(result.characterName)}`}
                className="block bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium py-2 px-4 rounded-full text-sm hover:from-pink-600 hover:to-purple-700 transition-all"
              >
                シェアする ✨
              </Link>
            </div>
          </div>
        )}

        {/* 将来の有料機能へのプレースホルダー */}
        <div className="bg-gray-100 rounded-2xl p-6 text-center space-y-4">
          <h3 className="text-lg font-semibold text-gray-600">プレミアム機能（準備中）</h3>
          <div className="space-y-2 text-sm text-gray-500">
            <p>🔐 相性診断</p>
            <p>🔐 年間運勢</p>
            <p>🔐 詳細な人生設計アドバイス</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <ShareButton
            characterName={result.characterName}
            className="flex-1 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-full hover:from-indigo-600 hover:to-purple-700 transition-all text-center shadow-lg"
          />
          <Link
            href="/diagnosis"
            className="flex-1 bg-white border-2 border-indigo-500 text-indigo-500 font-semibold py-3 px-6 rounded-full hover:bg-indigo-50 transition-all text-center"
          >
            もう一度診断する
          </Link>
        </div>
      </main>
    </div>
  );
}