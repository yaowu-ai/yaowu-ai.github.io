'use client'

import { useState } from 'react'

interface ArchitectureItem {
  title: string
  desc: string
}

interface ArchitectureProps {
  title: string
  architecture: readonly ArchitectureItem[]
}

export function LysmataArchitecture({ title, architecture }: ArchitectureProps) {
  const [activeLayer, setActiveLayer] = useState<number>(0)

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-14 text-center md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Modern, scalable architecture designed for performance and reliability
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Architecture Diagram */}
          <div className="relative mb-14">
            <div className="flex flex-col items-center justify-center gap-7 md:flex-row md:gap-6 lg:gap-8">
              {architecture.map((layer, index) => (
                <div
                  key={index}
                  className={`relative flex-1 transition-all duration-300 ${
                    activeLayer === index ? 'scale-105' : 'scale-100'
                  }`}
                  onMouseEnter={() => setActiveLayer(index)}
                >
                  <div
                    className={`rounded-2xl h-56 border-2 bg-white p-7 shadow-lg transition-all duration-300 lg:p-8 ${
                      activeLayer === index
                        ? 'border-blue-500 shadow-xl'
                        : 'border-gray-100'
                    }`}
                  >
                    <div className="flex items-center mb-4">
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 transition-colors ${
                          activeLayer === index
                            ? 'bg-blue-100 text-blue-600'
                            : 'bg-gray-100 text-gray-600'
                        }`}
                      >
                        {index + 1}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {layer.title}
                      </h3>
                    </div>
                    <p className="text-base leading-relaxed text-gray-600">
                      {layer.desc}
                    </p>
                  </div>
                  {index < architecture.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                      <div className="w-8 h-0.5 bg-gray-300" />
                      <div className="absolute right-0 top-1/2 transform translate-y-1/2">
                        <svg
                          className="w-4 h-4 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Controls */}
          <div className="mb-10 flex flex-wrap justify-center gap-3">
            {architecture.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveLayer(index)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  activeLayer === index
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Layer {index + 1}
              </button>
            ))}
          </div>

          {/* Active Layer Details */}
          <div className="rounded-2xl bg-gradient-to-r from-blue-50 to-purple-50 p-8 lg:p-9">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center text-xl font-bold mr-4">
                {activeLayer + 1}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {architecture[activeLayer].title}
                </h3>
                <p className="text-gray-600">
                  {architecture[activeLayer].desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}