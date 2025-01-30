// app/[lang]/page.tsx

import { i18n } from '@/lib/i18n-config';
import HomePage from '@/components/home-page';
import type { Locale } from '@/lib/i18n-config';

// 非同期で静的パラメータを生成し、返り値に型を明示
export async function generateStaticParams(): Promise<Array<{ lang: Locale }>> {
  return i18n.locales.map((locale) => ({
    lang: locale,
  }));
}

// ページコンポーネント (必要に応じて async でOK)
export default async function Page({
  params,
}: {
  params: { lang: Locale };
}) {
  return <HomePage lang={params.lang} />;
}

