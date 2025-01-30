// app/layout.tsx
import '@/app/globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import HelpButton from '@/components/help-button';

/**
 * Poppins のローカルフォント読み込み設定
 * src: には実際に配置したファイル・フォルダ構成に合わせて設定
 */
const poppins = localFont({
  src: [
    {
      path: './fonts/Poppins/Poppins-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Poppins/Poppins-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/Poppins/Poppins-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    // 必要に応じて italic ファイルも追加
  ],
  variable: '--font-poppins', // カスタムプロパティ名
  display: 'swap',            // Google Fonts のように表示戦略を設定
});

export const metadata: Metadata = {
  title: 'Wanderlust Japan',
  description: 'Explore the wonders of Japan with curated travel experiences',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-sans antialiased">
        <HelpButton />
        {children}
      </body>
    </html>
  );
}
