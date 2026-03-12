import type { Metadata } from 'next'
import './global.css'

export const metadata: Metadata = {
  title: 'Lysmata',
  description: 'Desktop client for OpenClaw Gateway management and configuration',
  keywords: ['lysmata', 'openclaw', 'tauri', 'desktop client', 'multi bot'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}