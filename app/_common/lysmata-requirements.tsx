'use client'

import { CheckIcon } from './icons'

interface RequirementsProps {
  title: string
  systemReq: readonly string[]
}

export function LysmataRequirements({ title, systemReq }: RequirementsProps) {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-14 text-center md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {title}
            </h2>
            <p className="text-lg text-gray-600">
              Get started in minutes with minimal requirements
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10">
            <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-white p-8 lg:p-9">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Minimum Requirements
              </h3>
              <ul className="space-y-4">
                {systemReq.slice(0, 2).map((req, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                        <CheckIcon />
                      </div>
                    </div>
                    <span className="ml-3 text-gray-700">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-purple-50 to-white p-8 lg:p-9">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Recommended
              </h3>
              <ul className="space-y-4">
                {systemReq.slice(2).map((req, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                        <CheckIcon />
                      </div>
                    </div>
                    <span className="ml-3 text-gray-700">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Platform Icons */}
          <div className="mt-12 flex justify-center gap-6">
            <div className="text-center">
              <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-100">
                <svg className="h-6 w-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.31-2.33 1.05-3.11z" />
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-600">macOS</span>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-100">
                <svg className="h-6 w-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 5.75C3 4.784 3.784 4 4.75 4h14.5c.966 0 1.75.784 1.75 1.75v12.5A1.75 1.75 0 0119.25 20H4.75A1.75 1.75 0 013 18.25V5.75z" />
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-600">Windows</span>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-100">
                <svg className="h-6 w-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9C4.63 15.55 4 13.85 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1C19.37 8.45 20 10.15 20 12c0 4.42-3.58 8-8 8z" />
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-600">Linux</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}