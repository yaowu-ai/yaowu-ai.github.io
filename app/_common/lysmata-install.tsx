'use client'

import { useState } from 'react'
import { DownloadIcon } from './icons'

interface InstallStep {
  title: string
  desc: string
}

interface InstallProps {
  title: string
  installSteps: readonly InstallStep[]
}

export function LysmataInstall({ title, installSteps }: InstallProps) {
  const [activeStep, setActiveStep] = useState<number>(0)

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-20 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-14 text-center md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get up and running in just a few minutes
          </p>
        </div>

        <div className="mx-auto max-w-6xl">
          {/* Step Indicators */}
          <div className="mb-14 flex justify-center">
            <div className="relative">
              <div className="flex items-center">
                {installSteps.map((_, index) => (
                  <div key={index} className="flex items-center">
                    <button
                      onClick={() => setActiveStep(index)}
                      className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-semibold transition-all ${
                        activeStep === index
                          ? 'bg-blue-600 text-white scale-110'
                          : index < activeStep
                          ? 'bg-green-100 text-green-600'
                          : 'bg-gray-100 text-gray-400'
                      }`}
                    >
                      {index < activeStep ? '✓' : index + 1}
                    </button>
                    {index < installSteps.length - 1 && (
                      <div
                        className={`w-16 h-1 transition-colors ${
                          index < activeStep ? 'bg-green-400' : 'bg-gray-200'
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Active Step Content */}
          <div className="overflow-hidden rounded-2xl bg-white shadow-xl">
            <div className="md:flex">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 md:w-1/2 lg:p-10">
                <div className="mb-6">
                  <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-medium">
                    Step {activeStep + 1}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {installSteps[activeStep].title}
                </h3>
                <p className="text-lg text-gray-600 mb-8">
                  {installSteps[activeStep].desc}
                </p>
                {activeStep === 0 && (
                  <a
                    href="https://github.com/yaowu-ai/lysmata/releases/latest"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700 transition-colors"
                  >
                    <DownloadIcon />
                    Download Now
                  </a>
                )}
              </div>
              <div className="p-8 md:w-1/2 lg:p-10">
                <div className="space-y-4">
                  {installSteps.map((step, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-lg cursor-pointer transition-all ${
                        activeStep === index
                          ? 'bg-blue-50 border-l-4 border-blue-500'
                          : 'hover:bg-gray-50'
                      }`}
                      onClick={() => setActiveStep(index)}
                    >
                      <div className="flex items-center">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                            activeStep === index
                              ? 'bg-blue-100 text-blue-600'
                              : index < activeStep
                              ? 'bg-green-100 text-green-600'
                              : 'bg-gray-100 text-gray-400'
                          }`}
                        >
                          {index < activeStep ? '✓' : index + 1}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">
                            {step.title}
                          </h4>
                          <p className="mt-1 text-sm leading-relaxed text-gray-600">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-10 flex justify-between">
            <button
              onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
              disabled={activeStep === 0}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeStep === 0
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Previous
            </button>
            <button
              onClick={() =>
                setActiveStep(Math.min(installSteps.length - 1, activeStep + 1))
              }
              disabled={activeStep === installSteps.length - 1}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeStep === installSteps.length - 1
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              Next Step
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}