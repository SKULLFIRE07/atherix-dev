import {
  Navbar,
  Hero,
  TrustStrip,
  WhatWeBuild,
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
      <main>
        <Hero />
        <TrustStrip />
        <WhatWeBuild />
        <HowItWorks />
        <TechStack />
        <UseCases />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
