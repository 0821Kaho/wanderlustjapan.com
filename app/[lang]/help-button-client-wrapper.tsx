// app/[lang]/help-button-client-wrapper.tsx
'use client'

import dynamic from 'next/dynamic'

// HelpButton をクライアントサイドのみ動的インポート (SSRなし)
const HelpButton = dynamic(() => import('@/components/help-button'), {
  ssr: false,
})

export default function HelpButtonClientWrapper() {
  return <HelpButton />
}
