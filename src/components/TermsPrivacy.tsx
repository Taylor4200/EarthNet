'use client'

import { motion } from 'framer-motion'
import { FileText, Shield, ArrowRight } from 'lucide-react'

export default function TermsPrivacy() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron text-gradient mb-6">
            Legal & Privacy
          </h2>
          <p className="text-xl text-gray-300 font-dm-sans max-w-3xl mx-auto">
            Your safety and privacy are our top priorities. Review our policies to understand how we protect you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Terms of Service */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl p-8 border border-gray-600 hover:border-neon-blue transition-all duration-300 group"
          >
            <div className="flex items-center mb-6">
              <FileText className="w-8 h-8 text-neon-blue mr-3" />
              <h3 className="text-2xl font-bold font-space-grotesk text-neon-blue">
                Terms of Service
              </h3>
            </div>
            <p className="text-gray-300 font-dm-sans mb-6">
              Our comprehensive terms covering eligibility, gambling features, child protection, and user conduct.
            </p>
            <div className="space-y-3 text-sm text-gray-400 mb-8">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-neon-blue rounded-full mr-3"></div>
                <span>Age restrictions & eligibility</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-neon-blue rounded-full mr-3"></div>
                <span>18+ gambling features</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-neon-blue rounded-full mr-3"></div>
                <span>Child protection measures</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-neon-blue rounded-full mr-3"></div>
                <span>Code of conduct & enforcement</span>
              </div>
            </div>
            <a
              href="/terms"
              className="inline-flex items-center w-full bg-transparent border-2 border-neon-blue text-neon-blue font-bold rounded-lg py-3 hover:bg-neon-blue hover:text-black transition-all duration-300 group-hover:shadow-glow"
            >
              <span>Read Full Terms</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </motion.div>

          {/* Privacy Policy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl p-8 border border-gray-600 hover:border-neon-green transition-all duration-300 group"
          >
            <div className="flex items-center mb-6">
              <Shield className="w-8 h-8 text-neon-green mr-3" />
              <h3 className="text-2xl font-bold font-space-grotesk text-neon-green">
                Privacy Policy
              </h3>
            </div>
            <p className="text-gray-300 font-dm-sans mb-6">
              How we collect, use, and protect your data with strict privacy controls and child safety measures.
            </p>
            <div className="space-y-3 text-sm text-gray-400 mb-8">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-neon-green rounded-full mr-3"></div>
                <span>Data collection & usage</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-neon-green rounded-full mr-3"></div>
                <span>COPPA compliance</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-neon-green rounded-full mr-3"></div>
                <span>Age verification systems</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-neon-green rounded-full mr-3"></div>
                <span>Your rights & controls</span>
              </div>
            </div>
            <a
              href="/privacy"
              className="inline-flex items-center w-full bg-transparent border-2 border-neon-green text-neon-green font-bold rounded-lg py-3 hover:bg-neon-green hover:text-black transition-all duration-300 group-hover:shadow-glow"
            >
              <span>Read Full Privacy Policy</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </motion.div>
        </div>

        {/* Additional Legal Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl p-8 border border-gray-600">
            <h3 className="text-2xl font-bold font-space-grotesk text-neon-purple mb-4">
              Additional Legal Documents
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/terms-of-use"
                className="inline-flex items-center bg-transparent border-2 border-neon-purple text-neon-purple font-bold px-6 py-3 rounded-lg hover:bg-neon-purple hover:text-black transition-all duration-300"
              >
                <FileText className="w-5 h-5 mr-2" />
                Terms of Use
              </a>
              <a
                href="mailto:helpearthnetmc@gmail.com"
                className="inline-flex items-center bg-transparent border-2 border-neon-blue text-neon-blue font-bold px-6 py-3 rounded-lg hover:bg-neon-blue hover:text-black transition-all duration-300"
              >
                <span>Contact Support</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
