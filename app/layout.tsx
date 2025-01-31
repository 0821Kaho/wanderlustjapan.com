import '@/app/globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import dynamic from 'next/dynamic';

const HelpButton = dynamic(() => import('@/components/help-button'), {
  ssr: false
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Wanderlust Japan',
  description: 'Explore the wonders of Japan with curated travel experiences',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    viewportFit: 'cover', // Enable viewport-fit for iOS safe areas
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-sans antialiased safe-area-fix">
        <HelpButton />
        {children}
      </body>
    </html>
  );
}
