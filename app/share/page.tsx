'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function SharePage() {
  const searchParams = useSearchParams();
  
  const characterName = searchParams.get('character') || '探求者タイプ';
  const resultId = searchParams.get('id') || Date.now().toString();
  const shareUrl = typeof window !== 'undefined' 
    ? `${window.location.origin}/result/${resultId}?character=${encodeURIComponent(characterName)}`
    : '';
  
  // SNS拡散用のハッシュタグとテキスト
  const hashtags = ['算命学診断', '性格診断', '占い', characterName.replace('タイプ', '')];
  const shareText = `【診断結果】私は「${characterName}」でした！✨\n\nあなたはどのタイプ？\n無料で診断してみよう👇\n\n#${hashtags.join(' #')}`;

  const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
  const lineShareUrl = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`;
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;

  const handleCopyLink = async () => {
    try {
      const copyText = `${shareText}\n${shareUrl}`;
      await navigator.clipboard.writeText(copyText);
      alert('診断結果とリンクをコピーしました！');
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

          {/* おすすめハッシュタグ */}
          <div className="bg-indigo-50 rounded-lg p-4 space-y-2">
            <p className="text-xs font-medium text-gray-700">📱 コピペで使えるハッシュタグ</p>
            <div className="flex flex-wrap gap-2">
              {hashtags.map((tag, idx) => (
                <span key={idx} className="text-xs bg-white px-2 py-1 rounded-full text-indigo-600">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-sm font-medium text-gray-700 text-center">SNSでシェア</h2>
            
            <a
              href={twitterShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-3 w-full bg-[#1DA1F2] text-white font-medium py-3 px-6 rounded-full hover:bg-[#1a8cd8] transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              <span>Xでシェア</span>
            </a>

            <a
              href={lineShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-3 w-full bg-[#00B900] text-white font-medium py-3 px-6 rounded-full hover:bg-[#00a000] transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.349 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/></svg>
              <span>LINEでシェア</span>
            </a>

            <a
              href={facebookShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-3 w-full bg-[#1877F2] text-white font-medium py-3 px-6 rounded-full hover:bg-[#166fe5] transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              <span>Facebookでシェア</span>
            </a>

            <button
              onClick={handleCopyLink}
              className="flex items-center justify-center space-x-3 w-full bg-gray-200 text-gray-700 font-medium py-3 px-6 rounded-full hover:bg-gray-300 transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <span>テキストとリンクをコピー</span>
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

        <div className="text-center space-y-2">
          <p className="text-sm font-medium text-gray-700">
            🎯 SNSでシェアすると...
          </p>
          <div className="text-xs text-gray-600 space-y-1">
            <p>• 友達の診断結果も見れて盛り上がる！</p>
            <p>• みんなで性格タイプを比較できる！</p>
            <p>• 相性の良いタイプが見つかるかも？</p>
          </div>
        </div>
      </main>
    </div>
  );
}