import {
  Navbar,
  Hero,
  TrustStrip,
  WhatWeBuild,
  Portfolio,
  HowItWorks,
  TechStack,
  UseCases,
  CTA,
  Footer,
} from '@/components/sections'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <TrustStrip />
        <WhatWeBuild />
        <Portfolio />
        <HowItWorks />
        <TechStack />
        <UseCases />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
