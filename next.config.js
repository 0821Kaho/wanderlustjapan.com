/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        // 「(?!en|_next|api|favicon\\.ico|.*\\..*)」で除外し、
        // 残りをすべてキャッチ (:path*で複数セグメント対応)
        source: '/:path((?!en|_next|api|favicon\\.ico|.*\\..*).*)*',
        destination: '/en/:path*',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
