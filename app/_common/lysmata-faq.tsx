'use client'

import { useState } from 'react'

interface FAQItem {
  q: string
  a: string
}

interface FAQProps {
  title: string
  faq: readonly FAQItem[]
}

export function LysmataFAQ({ title, faq }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <div className="mb-14 text-center md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {title}
            </h2>
            <p className="text-lg text-gray-600">
              Common questions about Lysmata and OpenClaw
            </p>
          </div>

          <div className="space-y-5">
            {faq.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all hover:shadow-md"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="flex w-full items-center justify-between px-7 py-6 text-left focus:outline-none"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {item.q}
                  </h3>
                  <div className="flex-shrink-0">
                    <svg
                      className={`w-5 h-5 text-gray-500 transition-transform ${
                        openIndex === index ? 'transform rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>
                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ${
                    openIndex === index
                      ? 'pb-5 opacity-100'
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="pt-2 border-t border-gray-100">
                    <p className="text-gray-600 leading-relaxed">{item.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Help */}
          <div className="mt-14 text-center">
            <div className="rounded-2xl bg-gradient-to-r from-blue-50 to-purple-50 p-9">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Still have questions?
              </h3>
              <p className="text-gray-600 mb-6">
                Check out our documentation or join the community
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://github.com/yaowu-ai/lysmata"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-gray-900 text-white px-6 py-3 font-medium hover:bg-gray-800 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  GitHub Repository
                </a>
                <a
                  href="https://github.com/yaowu-ai/lysmata/issues"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-6 py-3 font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Get Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}