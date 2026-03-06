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
        <nav className="navbar">
          <div className="container">
            <a href="/" className="logo">lysmata</a>
            <ul className="nav-links">
              <li><a href="#overview">Overview</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#architecture">Architecture</a></li>
              <li><a href="#links">Links</a></li>
            </ul>
          </div>
        </nav>
        {children}
        <footer className="footer">
          <p>&copy; 2026 lysmata. Built for OpenClaw.</p>
        </footer>
      </body>
    </html>
  )
}