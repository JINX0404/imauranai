import { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | undefined }>;
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const params = await searchParams;
  const character = params.character || '探求者タイプ';
  const description = `私の診断結果は「${character}」でした！算命学×性格診断で自分の本質を知ろう！`;
  
  const ogImageUrl = `/api/og?character=${encodeURIComponent(character)}`;

  return {
    title: `${character} - 算命学×性格診断`,
    description,
    openGraph: {
      title: `${character} - 算命学×性格診断`,
      description,
      images: [ogImageUrl],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${character} - 算命学×性格診断`,
      description,
      images: [ogImageUrl],
    },
  };
}

export default async function SharedResultPage({ searchParams }: Props) {
  const params = await searchParams;
  
  // この画面は実際には表示されず、OGPのためだけに存在
  // 実際の結果は/resultページで表示される
  
  if (!params.character) {
    notFound();
  }

  // すぐに通常の結果ページにリダイレクト
  if (typeof window !== 'undefined') {
    window.location.href = `/result?${new URLSearchParams(params as Record<string, string>).toString()}`;
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-indigo-500 mx-auto"></div>
        <p className="mt-4 text-gray-600">リダイレクト中...</p>
      </div>
    </div>
  );
}