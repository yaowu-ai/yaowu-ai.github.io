'use client'

import { DownloadIcon } from './icons'

interface HeroProps {
  title: string
  subtitle: string
  downloadBtn: string
}

export function LysmataHero({ title, subtitle, downloadBtn }: HeroProps) {
  const appIconUrl = 'http://static.jxxqtech.com/static/lysmata/icon.png'

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-white py-24 md:py-32 lg:py-36">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
      <div className="container relative mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-100 px-3.5 py-1.5 text-sm font-medium text-blue-700">
            <img
              src={appIconUrl}
              alt="Lysmata icon"
              className="h-5 w-5 rounded-md"
            />
            <span>OpenClaw Desktop Client</span>
          </div>
          <h1 className="mb-7 text-4xl font-bold tracking-tight text-gray-900 md:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mb-12 max-w-3xl text-xl text-gray-600 md:text-2xl">
            {subtitle}
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-5">
            <a
              href="https://github.com/yaowu-ai/lysmata/releases/latest"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-blue-700 hover:shadow-lg"
            >
              <DownloadIcon />
              {downloadBtn}
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-8 py-4 text-lg font-semibold text-gray-700 transition-all hover:bg-gray-50"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}