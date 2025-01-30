// app/regions/[...rest]/page.tsx
import { headers, cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { i18n } from '@/lib/i18n-config';

export default function RegionsRedirectPage({ params }: { params: { rest: string[] } }) {
  // Gather subPath
  const subPath = params.rest.join('/');

  // 1. Check a cookie named NEXT_LOCALE
  const c = cookies();
  const forcedLocale = c.get('NEXT_LOCALE')?.value;

  if (forcedLocale && i18n.locales.includes(forcedLocale as any)) {
    return redirect(`/${forcedLocale}/regions/${subPath}`);
  }

  // 2. Fallback: Check Accept-Language header
  const h = headers();
  const acceptLang = h.get('accept-language') || '';
  // parse acceptLang & match to i18n.locales...
  // if no match, use i18n.defaultLocale
  const matched = i18n.defaultLocale; // (Simplified)

  redirect(`/${matched}/regions/${subPath}`);
}