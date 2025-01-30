// /lib/get-dictionary.ts

import 'server-only'; // このファイルは server runtime でのみ呼び出す
import type { Locale } from './i18n-config';

/**
 * 各言語ごとに messages/*.json を動的に import する。
 * Next.js のサーバーコンポーネント/SSR 環境で呼び出す想定。
 * middleware (Edge) では呼ばないこと！
 */
const dictionaries = {
  en: () => import('../messages/en.json').then((mod) => mod.default),
  ja: () => import('../messages/ja.json').then((mod) => mod.default),
  zh: () => import('../messages/zh.json').then((mod) => mod.default),
  ko: () => import('../messages/ko.json').then((mod) => mod.default),
};

export async function getDictionary(locale: Locale) {
  // localesm -> "en", "ja", "zh", "ko" のいずれか
  const loader = dictionaries[locale];
  const dict = loader ? await loader() : {};
  return dict;
}
