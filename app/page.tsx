import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <main className="max-w-md w-full text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">
            算命学×性格診断
          </h1>
          <p className="text-lg text-gray-600">
            生年月日と性格傾向から
            <br />
            あなただけの運命を読み解きます
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg space-y-6">
          <div className="space-y-4">
            <div className="text-6xl">🔮</div>
            <h2 className="text-xl font-semibold text-gray-800">
              あなたの本質を知る旅へ
            </h2>
            <p className="text-sm text-gray-600">
              東洋の叡智「算命学」と現代の性格分析を融合した、
              新しい自己発見ツール
            </p>
          </div>

          <div className="space-y-3 text-left text-sm text-gray-600">
            <div className="flex items-start space-x-2">
              <span className="text-indigo-500">✓</span>
              <span>生年月日から導く命式</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-indigo-500">✓</span>
              <span>五行バランスの可視化</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-indigo-500">✓</span>
              <span>性格タイプ別アドバイス</span>
            </div>
          </div>

          <Link
            href="/diagnosis"
            className="block w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold py-4 px-6 rounded-full hover:from-indigo-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg"
          >
            診断を始める
          </Link>
        </div>

        <p className="text-xs text-gray-500">
          ※ 診断は無料でご利用いただけます
        </p>
      </main>
    </div>
  );
}