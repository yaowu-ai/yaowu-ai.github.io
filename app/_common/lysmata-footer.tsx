'use client'

import { GitHubIcon } from './icons'

export function LysmataFooter() {
  const appIconUrl = 'http://static.jxxqtech.com/static/lysmata/icon.png'

  return (
    <footer className="bg-gray-900 py-14 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center mb-4">
              <img
                src={appIconUrl}
                alt="Lysmata icon"
                className="mr-3 h-9 w-9 rounded-lg"
              />
              <span className="text-xl font-bold">Lysmata</span>
            </div>
            <p className="text-gray-400">
              Desktop client for OpenClaw Gateway management
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6">
            <a
              href="https://github.com/yaowu-ai/lysmata"
              className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
            >
              <GitHubIcon />
              GitHub
            </a>
            <a
              href="https://github.com/yaowu-ai/lysmata/releases"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Releases
            </a>
            <a
              href="https://github.com/yaowu-ai/lysmata/issues"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Issues
            </a>
            <a
              href="https://openclaw.ai"
              className="text-gray-300 hover:text-white transition-colors"
            >
              OpenClaw
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>
            © 2026 Lysmata. Built for OpenClaw. All rights reserved.
          </p>
          <p className="mt-2 text-sm">
            Open source under MIT License. Made with ❤️ by the OpenClaw community.
          </p>
        </div>
      </div>
    </footer>
  )
}