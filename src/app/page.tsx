'use client'

import { motion } from 'framer-motion'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import FeaturesGrid from '@/components/FeaturesGrid'
import ImportantNotice from '@/components/ImportantNotice'
import PresentationsSection from '@/components/PresentationsSection'
import FormsSection from '@/components/FormsSection'
import TermsPrivacy from '@/components/TermsPrivacy'
import CTABanner from '@/components/CTABanner'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-earth-gradient">
      <HeroSection />
      <AboutSection />
      <FeaturesGrid />
      <ImportantNotice />
      <PresentationsSection />
      <FormsSection />
      <TermsPrivacy />
      <CTABanner />
      <Footer />
    </main>
  )
}
