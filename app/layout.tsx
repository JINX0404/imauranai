import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  title: "算命学×性格診断 - あなたの本質を知る",
  description: "生年月日と性格傾向から、算命学と性格診断を組み合わせてあなたの本質を読み解く無料診断アプリ",
  keywords: "算命学, 性格診断, 占い, 五行, 命式",
  openGraph: {
    title: "算命学×性格診断",
    description: "あなたの本質を知る無料診断",
    type: "website",
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#6366f1',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${notoSansJP.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
