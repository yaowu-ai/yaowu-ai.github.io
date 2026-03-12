'use client'

import { useState } from 'react'
import {
  BotIcon,
  ChatIcon,
  SettingsIcon,
  EventIcon,
  DatabaseIcon,
  LightweightIcon,
} from './icons'

interface Feature {
  title: string
  desc: string
}

interface FeaturesProps {
  title: string
  features: readonly Feature[]
}

const icons = [BotIcon, ChatIcon, SettingsIcon, EventIcon, DatabaseIcon, LightweightIcon]

export function LysmataFeatures({ title, features }: FeaturesProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="features" className="bg-gradient-to-b from-white to-gray-50 py-20 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-14 text-center md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to manage your OpenClaw ecosystem in one place
          </p>
        </div>
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = icons[index % icons.length]
            return (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl transition-all duration-300 ${
                    hoveredIndex === index
                      ? 'opacity-100 scale-105'
                      : 'opacity-0 scale-95'
                  }`}
                />
                <div className="relative rounded-2xl border border-gray-100 bg-white p-7 shadow-lg transition-all duration-300 hover:shadow-xl lg:p-8">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                    <Icon />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.desc}
                  </p>
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <div className="flex items-center text-blue-600 font-medium">
                      <span>Learn more</span>
                      <svg
                        className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
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
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}