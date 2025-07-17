'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function SharePage() {
  const searchParams = useSearchParams();
  
  const characterName = searchParams.get('character') || '探求者タイプ';
  const shareUrl = typeof window !== 'undefined' ? `${window.location.origin}/` : '';
  const shareText = `私の診断結果は「${characterName}」でした！\n算命学×性格診断で自分の本質を知ろう！`;

  const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
  const lineShareUrl = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`;
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      alert('リンクをコピーしました！');
    } catch (err) {
      console.error('コピーに失敗しました:', err);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <main className="max-w-md w-full space-y-8">
        <div className="text-center space-y-4">
          <div className="text-6xl">🎉</div>
          <h1 className="text-3xl font-bold text-gray-900">
            診断完了！
          </h1>
          <p className="text-lg text-gray-600">
            あなたの診断結果をシェアしよう
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg space-y-6">
          <div className="text-center space-y-2">
            <p className="text-sm text-gray-600">あなたのタイプ</p>
            <p className="text-2xl font-bold text-indigo-600">{characterName}</p>
          </div>

          <div className="space-y-3">
            <h2 className="text-sm font-medium text-gray-700 text-center">SNSでシェア</h2>
            
            <a
              href={twitterShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-3 w-full bg-[#1DA1F2] text-white font-medium py-3 px-6 rounded-full hover:bg-[#1a8cd8] transition-all"
            >
              <span>Xでシェア</span>
            </a>

            <a
              href={lineShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-3 w-full bg-[#00B900] text-white font-medium py-3 px-6 rounded-full hover:bg-[#00a000] transition-all"
            >
              <span>LINEでシェア</span>
            </a>

            <a
              href={facebookShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-3 w-full bg-[#1877F2] text-white font-medium py-3 px-6 rounded-full hover:bg-[#166fe5] transition-all"
            >
              <span>Facebookでシェア</span>
            </a>

            <button
              onClick={handleCopyLink}
              className="flex items-center justify-center space-x-3 w-full bg-gray-200 text-gray-700 font-medium py-3 px-6 rounded-full hover:bg-gray-300 transition-all"
            >
              <span>リンクをコピー</span>
            </button>
          </div>

          <div className="pt-4 border-t space-y-3">
            <Link
              href="/result"
              className="block w-full text-center bg-white border-2 border-indigo-500 text-indigo-500 font-medium py-3 px-6 rounded-full hover:bg-indigo-50 transition-all"
            >
              結果を詳しく見る
            </Link>
            <Link
              href="/"
              className="block w-full text-center text-gray-500 hover:text-gray-700 transition-all"
            >
              トップページへ
            </Link>
          </div>
        </div>

        <p className="text-xs text-gray-500 text-center">
          友達にもこの診断を教えてあげよう！
        </p>
      </main>
    </div>
  );
}