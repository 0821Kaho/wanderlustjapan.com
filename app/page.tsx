// app/page.tsx

import { redirect } from 'next/navigation';
import { i18n } from '@/lib/i18n-config';

export default function RootPage() {
  // ここでは単純にデフォルトロケールへリダイレクト
  // 例: i18n.defaultLocale が "en" なら "/en" に移動
  redirect("/" + i18n.defaultLocale);
}



