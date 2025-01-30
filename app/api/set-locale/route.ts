// app/api/set-locale/route.ts
import { NextResponse } from 'next/server';

/**
 * 例:
 *   /api/set-locale?lang=ja
 * へアクセスすると、
 *   1) NEXT_LOCALE=ja クッキーをセット
 *   2) /ja にリダイレクト
 */
export async function GET(request: Request) {
  // 1. URL からクエリパラメータを取得
  const { searchParams } = new URL(request.url);
  const lang = searchParams.get('lang') || 'en'; // デフォルト 'en'

  // 2. Redirectレスポンスを作成
  //    ここで移動先は必要に応じて書き換え可
  const response = NextResponse.redirect(`/${lang}`);

  // 3. Cookieをセット
  //    maxAge: 例として1年(秒単位)を指定
  //    path: '/' にすると、サイト全体で有効
  response.cookies.set('NEXT_LOCALE', lang, {
    path: '/',
    maxAge: 60 * 60 * 24 * 365, // 1年
  });

  return response;
}