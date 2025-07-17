'use client';

import { useState } from 'react';

interface ShareButtonProps {
  characterName: string;
  className?: string;
}

export default function ShareButton({ characterName, className = '' }: ShareButtonProps) {
  const [isSharing, setIsSharing] = useState(false);

  const handleShare = async () => {
    const shareUrl = typeof window !== 'undefined' ? window.location.origin : '';
    const shareText = `私の診断結果は「${characterName}」でした！✨\n算命学×性格診断で自分の本質を知ろう！`;

    // Web Share APIが使える場合（主にモバイル）
    if (navigator.share) {
      try {
        setIsSharing(true);
        await navigator.share({
          title: '算命学×性格診断',
          text: shareText,
          url: shareUrl,
        });
      } catch (err) {
        // ユーザーがキャンセルした場合も含む
        console.log('Share cancelled or failed:', err);
      } finally {
        setIsSharing(false);
      }
    } else {
      // Web Share APIが使えない場合はシェアページへ遷移
      window.location.href = `/share?character=${encodeURIComponent(characterName)}`;
    }
  };

  return (
    <button
      onClick={handleShare}
      disabled={isSharing}
      className={`relative overflow-hidden group ${className}`}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {isSharing ? (
          <>
            <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
            <span>シェア中...</span>
          </>
        ) : (
          <>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m9.632 4.316a3 3 0 01-5.368 0m5.368 0A3 3 0 0021 12a3 3 0 00-1.684-2.658m0 5.316a3 3 0 01-5.368 0m0-5.316A3 3 0 0112 9a3 3 0 00-1.684 2.658m5.368 0A3 3 0 0115 12a3 3 0 01-1.316 2.342" />
            </svg>
            <span>結果をシェア</span>
          </>
        )}
      </span>
      <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
    </button>
  );
}