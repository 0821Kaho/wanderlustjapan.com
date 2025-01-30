// app/[lang]/layout.tsx
import '@/app/globals.css';
import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { notFound } from 'next/navigation';
import { Poppins } from 'next/font/google';
import dynamic from 'next/dynamic';
import SearchButton from '@/components/search-button';
import LanguageSwitcher from '@/components/language-switcher';
import { i18n, localeMetadata, type Locale } from '@/lib/i18n-config';

// 動的インポート例（HelpButton）
// ※ Server Component で { ssr: false } はNGですが、今回は別件なので割愛
const HelpButton = dynamic(() => import('@/components/help-button'));

// フォント設定
const poppins = Poppins({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
});

export function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export function generateMetadata({
  params,
}: {
  params: { lang: Locale };
}): Metadata {
  const meta = localeMetadata[params.lang];
  if (!meta) {
    return {
      title: 'Invalid Locale',
      description: 'Unsupported locale parameter',
    };
  }
  return {
    metadataBase: new URL('https://wanderlust-japan.com'),
    title: {
      default: 'Wanderlust Japan - Discover Hidden Gems & Travel Experiences',
      template: '%s | Wanderlust Japan',
    },
    description:
      'Explore authentic Japanese experiences, from hidden local spots to popular destinations. Book guided tours, activities, and cultural experiences across Japan.',
    keywords: [
      'Japan travel',
      'Japanese culture',
      'travel experiences',
      'guided tours',
      'local activities',
      'cultural experiences',
      'Japan tourism',
    ],
    authors: [{ name: 'Wanderlust Japan' }],
    creator: 'Wanderlust Japan',
    publisher: 'Wanderlust Japan',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      type: 'website',
      locale: meta.ogLocale,
      alternateLocale: Object.values(localeMetadata)
        .filter((l) => l.ogLocale !== meta.ogLocale)
        .map((l) => l.ogLocale),
      url: `https://wanderlust-japan.com/${params.lang}`,
      siteName: 'Wanderlust Japan',
      title: 'Wanderlust Japan - Discover Hidden Gems & Travel Experiences',
      description:
        'Explore authentic Japanese experiences, from hidden local spots to popular destinations.',
      images: [
        {
          url: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e',
          width: 1200,
          height: 630,
          alt: 'Wanderlust Japan - Travel Experiences',
        },
      ],
    },
    alternates: {
      canonical: `https://wanderlust-japan.com/${params.lang}`,
      languages: Object.entries(localeMetadata).reduce(
        (acc, [key, value]) => ({
          ...acc,
          [value.locale]: `https://wanderlust-japan.com/${key}`,
        }),
        {}
      ),
    },
  };
}

// ↓ async を付ける
export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  // 1. lang がサポートされていないなら 404へ
  const meta = localeMetadata[params.lang as Locale];
  if (!meta) {
    notFound();
  }

  // 2. Cookie読み取り
  //    cookies() が Promiseを返す定義になっているなら await が必要
  const cookieStore = await cookies();
  const currentLocale = cookieStore.get('NEXT_LOCALE')?.value;

  return (
    <html lang={meta.locale} className={poppins.variable}>
      <body className="font-sans antialiased bg-[#042759]">
        <div className="fixed top-0 w-full z-50 flex justify-between items-center p-4">
          <SearchButton />
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <div className="h-10">
              <HelpButton />
            </div>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
