import type { Metadata } from 'next'
import '../../global.css'

export const metadata: Metadata = {
  title: 'Lysmata - OpenClaw Gateway 的桌面管理客户端',
  description: '在一个简洁的桌面体验中，连接、配置并协作管理多个 OpenClaw Gateway。本地优先设计，数据安全存储在本地机器上。',
  keywords: ['lysmata', 'openclaw', 'tauri', '桌面客户端', '多 bot', 'ai agent', '网关管理'],
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