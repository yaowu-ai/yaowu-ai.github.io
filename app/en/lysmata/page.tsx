'use client'

import { lysmataContent } from '@/app/_common/lysmata-content'
import { LysmataHero } from '@/app/_common/lysmata-hero'
import { LysmataVideo } from '@/app/_common/lysmata-video'
import { LysmataFeatures } from '@/app/_common/lysmata-features'
import { LysmataArchitecture } from '@/app/_common/lysmata-architecture'
import { LysmataRequirements } from '@/app/_common/lysmata-requirements'
import { LysmataInstall } from '@/app/_common/lysmata-install'
import { LysmataFAQ } from '@/app/_common/lysmata-faq'
import { LysmataFooter } from '@/app/_common/lysmata-footer'

export default function LysmataPage() {
  const t = lysmataContent.en

  return (
    <main className="lysmata-page min-h-screen">
      <LysmataHero
        title={t.title}
        subtitle={t.subtitle}
        downloadBtn={t.downloadBtn}
      />
      
      <LysmataVideo
        heroTitle={t.heroTitle}
        heroDesc={t.heroDesc}
      />
      
      <LysmataFeatures
        title={t.featuresTitle}
        features={t.features}
      />
      
      <LysmataArchitecture
        title={t.architectureTitle}
        architecture={t.architecture}
      />
      
      <LysmataRequirements
        title={t.systemReqTitle}
        systemReq={t.systemReq}
      />
      
      <LysmataInstall
        title={t.installTitle}
        installSteps={t.installSteps}
      />
      
      <LysmataFAQ
        title={t.faqTitle}
        faq={t.faq}
      />
      
      <LysmataFooter />
    </main>
  )
}