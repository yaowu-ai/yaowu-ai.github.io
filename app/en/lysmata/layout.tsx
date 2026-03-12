import type { Metadata } from 'next'
import '../../global.css'

export const metadata: Metadata = {
  title: 'Lysmata - Desktop client for OpenClaw Gateway management',
  description: 'Connect, configure, and collaborate with multiple OpenClaw gateways from one clean desktop experience. Local-first design keeps your data secure on your machine.',
  keywords: ['lysmata', 'openclaw', 'tauri', 'desktop client', 'multi bot', 'ai agent', 'gateway management'],
  icons: {
    icon: 'http://static.jxxqtech.com/static/lysmata/icon.png',
  },
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}