import type { Metadata } from 'next'
import './global.css'

export const metadata: Metadata = {
  title: 'lysmata | YaoWu AI',
  description: 'lysmata project homepage and links',
  keywords: ['lysmata', 'yaowu', 'ai', 'github pages'],
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
              <li><a href="#highlights">Highlights</a></li>
              <li><a href="#links">Links</a></li>
            </ul>
          </div>
        </nav>
        {children}
        <footer className="footer">
          <p>&copy; 2026 lysmata</p>
        </footer>
      </body>
    </html>
  )
}