// /lib/i18n-config.ts

/**
 * Edge でも問題なく使えるよう、
 * Nodeモジュール (fs, path, negotiator等) を一切利用しない。
 * ただの静的オブジェクトと型定義だけ。
 */
export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'ja', 'zh', 'ko'],
  defaultNamespaces: ['common', 'navigation', 'regions', 'activities'],
} as const;

export type Locale = (typeof i18n)['locales'][number];

export const localeNames = {
  en: 'English',
  ja: '日本語',
  zh: '中文',
  ko: '한국어',
} as const;

export const localeMetadata = {
  en: {
    name: 'English',
    locale: 'en-US',
    ogLocale: 'en_US',
  },
  ja: {
    name: '日本語',
    locale: 'ja-JP',
    ogLocale: 'ja_JP',
  },
  zh: {
    name: '中文',
    locale: 'zh-CN',
    ogLocale: 'zh_CN',
  },
  ko: {
    name: '한국어',
    locale: 'ko-KR',
    ogLocale: 'ko_KR',
  },
} as const;
