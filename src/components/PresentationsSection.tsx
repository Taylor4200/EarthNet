'use client'

import { motion } from 'framer-motion'
import { Presentation, Globe, ArrowRight } from 'lucide-react'

export default function PresentationsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Presentation className="w-12 h-12 text-neon-blue" />
            <h2 className="text-4xl md:text-5xl font-bold font-orbitron text-gradient">
              Earth.Net Presentations
            </h2>
          </div>
          <p className="text-xl text-gray-300 font-dm-sans max-w-3xl mx-auto">
            Explore our detailed presentations to learn more about Earth.Net's features and gameplay
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* First Presentation */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl p-8 border border-gray-600 hover:border-neon-blue transition-all duration-300"
          >
            <div className="flex items-center mb-6">
              <Globe className="w-8 h-8 text-neon-blue mr-3" />
              <h3 className="text-2xl font-bold font-space-grotesk text-neon-blue">
                Earth.Net Overview
              </h3>
            </div>
            <div className="text-gray-300 font-dm-sans mb-6">
              <p>Discover the world of Earth.Net - the ultimate Minecraft Earth strategy server with unique features and gameplay mechanics.</p>
            </div>
            <div className="relative w-full h-96 bg-gray-900 rounded-lg overflow-hidden">
              <iframe
                src="https://docs.google.com/presentation/d/1qOgO9DBSqdUDbzaFKLeH4NBaZl8_fMNoZWhN2IHIbYU/embed?start=false&loop=false&delayms=3000"
                className="w-full h-full"
                frameBorder="0"
                allowFullScreen
                title="Earth.Net Overview Presentation"
              />
            </div>
            <div className="mt-4 text-center">
              <a
                href="https://docs.google.com/presentation/d/1qOgO9DBSqdUDbzaFKLeH4NBaZl8_fMNoZWhN2IHIbYU/present?slide=id.g3741c9e0c8b_0_0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-neon-blue text-black font-bold px-6 py-3 rounded-lg hover:bg-blue-400 transition-all duration-300"
              >
                <span>View Full Presentation</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          </motion.div>

          {/* Second Presentation */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl p-8 border border-gray-600 hover:border-neon-purple transition-all duration-300"
          >
            <div className="flex items-center mb-6">
              <Presentation className="w-8 h-8 text-neon-purple mr-3" />
              <h3 className="text-2xl font-bold font-space-grotesk text-neon-purple">
                Earth.Net Features
              </h3>
            </div>
            <div className="text-gray-300 font-dm-sans mb-6">
              <p>Explore the advanced features, gambling systems, and unique gameplay elements that make Earth.Net stand out.</p>
            </div>
            <div className="relative w-full h-96 bg-gray-900 rounded-lg overflow-hidden">
              <iframe
                src="https://docs.google.com/presentation/d/1GX2n8o-6hyInn8QpmljsLOY_Q5_HOMS2LUaNLwvIlcw/embed?start=false&loop=false&delayms=3000"
                className="w-full h-full"
                frameBorder="0"
                allowFullScreen
                title="Earth.Net Features Presentation"
              />
            </div>
            <div className="mt-4 text-center">
              <a
                href="https://docs.google.com/presentation/d/1GX2n8o-6hyInn8QpmljsLOY_Q5_HOMS2LUaNLwvIlcw/present?slide=id.gc6f8954bc_0_96"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-neon-purple text-black font-bold px-6 py-3 rounded-lg hover:bg-purple-400 transition-all duration-300"
              >
                <span>View Full Presentation</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl p-8 border border-gray-600">
            <h3 className="text-2xl font-bold font-space-grotesk text-neon-green mb-4">
              Learn More About Earth.Net
            </h3>
            <p className="text-gray-300 font-dm-sans mb-6 max-w-2xl mx-auto">
              These presentations provide comprehensive information about our server's features, gameplay mechanics, 
              and what makes Earth.Net the ultimate Minecraft Earth strategy experience.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                <h4 className="text-blue-300 font-bold mb-2">Server Overview</h4>
                <p className="text-sm text-gray-400">Complete server introduction and basic mechanics</p>
              </div>
              <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4">
                <h4 className="text-purple-300 font-bold mb-2">Advanced Features</h4>
                <p className="text-sm text-gray-400">Gambling systems and unique gameplay elements</p>
              </div>
              <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                <h4 className="text-green-300 font-bold mb-2">Interactive Content</h4>
                <p className="text-sm text-gray-400">Click through slides for detailed information</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
