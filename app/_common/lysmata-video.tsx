'use client'

import { useEffect, useRef } from 'react'

interface VideoProps {
  heroTitle: string
  heroDesc: string
}

export function LysmataVideo({ heroTitle, heroDesc }: VideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      video.muted = true
      video.play().catch(() => {
        // Autoplay failed, show controls
        video.controls = true
      })
    }
  }, [])

  return (
    <section className="bg-white py-20 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 text-center md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {heroTitle}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {heroDesc}
            </p>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 z-0" />
            <video
              ref={videoRef}
              src="https://static.jxxqtech.com/static/lysmata/lysmata-install.mp4"
              className="relative z-10 w-full h-auto rounded-2xl"
              playsInline
              loop
              muted
            >
              Your browser does not support the video tag.
            </video>
            <div className="absolute bottom-4 right-4 z-20">
              <button
                onClick={() => {
                  const video = videoRef.current
                  if (video) {
                    if (video.paused) {
                      video.play()
                    } else {
                      video.pause()
                    }
                  }
                }}
                className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white transition-colors"
              >
                <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}