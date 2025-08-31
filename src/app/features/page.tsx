'use client'

import { motion } from 'framer-motion'
import { Lightbulb, MessageCircle, Mail, ExternalLink } from 'lucide-react'

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-earth-gradient py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold font-orbitron text-gradient mb-6">
            Feature Requests
          </h1>
          <p className="text-xl text-gray-300 font-dm-sans max-w-3xl mx-auto">
            Help shape the future of Earth.Net by suggesting new features and improvements
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Feature Request Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
              <h2 className="text-3xl font-bold font-space-grotesk text-neon-blue mb-6 flex items-center">
                <Lightbulb className="w-8 h-8 mr-3" />
                Submit Feature Request
              </h2>
              
              <div className="space-y-6">
                <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6">
                  <h3 className="text-blue-300 font-bold mb-3">Google Form</h3>
                  <p className="text-gray-300 mb-4">
                    Use our official feature request form to submit your ideas and suggestions.
                  </p>
                  <iframe
                    src="https://docs.google.com/forms/d/1D7bGPWigKAxQ3WkPtO113UZNzYkbrLicEKDcHQ0RMGc/viewform?embedded=true"
                    width="100%"
                    height="400"
                    frameBorder="0"
                    marginHeight={0}
                    marginWidth={0}
                    className="rounded-lg"
                  >
                    Loading…
                  </iframe>
                  <div className="mt-4">
                    <a
                      href="https://docs.google.com/forms/d/1D7bGPWigKAxQ3WkPtO113UZNzYkbrLicEKDcHQ0RMGc/viewform"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-neon-blue text-black font-bold px-6 py-3 rounded-lg hover:bg-blue-400 transition-all duration-300"
                    >
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Open Full Form
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Guidelines */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
              <h2 className="text-3xl font-bold font-space-grotesk text-neon-purple mb-6 flex items-center">
                <Lightbulb className="w-8 h-8 mr-3" />
                Submission Guidelines
              </h2>
              
              <div className="space-y-6">
                <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6">
                  <h3 className="text-green-300 font-bold mb-3">What to Include</h3>
                  <div className="space-y-2 text-gray-300">
                    <p>• Clear description of the feature</p>
                    <p>• Why it would benefit the community</p>
                    <p>• How it would work in practice</p>
                    <p>• Any examples or mockups</p>
                  </div>
                </div>

                <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-6">
                  <h3 className="text-purple-300 font-bold mb-3">What We Consider</h3>
                  <div className="space-y-2 text-gray-300">
                    <p>• Community impact and demand</p>
                    <p>• Technical feasibility</p>
                    <p>• Alignment with server vision</p>
                    <p>• Resource requirements</p>
                  </div>
                </div>

                <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6">
                  <h3 className="text-blue-300 font-bold mb-3">Response Timeline</h3>
                  <div className="space-y-2 text-gray-300">
                    <p>• Initial review: 1-2 weeks</p>
                    <p>• Community feedback: 2-4 weeks</p>
                    <p>• Development decision: 1-2 months</p>
                    <p>• Implementation: Varies by complexity</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional Contact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl p-8 border border-gray-600">
            <h3 className="text-2xl font-bold font-space-grotesk text-neon-green mb-4">
              Other Ways to Contribute
            </h3>
            <p className="text-gray-300 font-dm-sans mb-6 max-w-2xl mx-auto">
              Join our Discord community to discuss features with other players and get real-time updates on development progress.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://discord.gg/pKb9VUcyGH"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-discord-blue text-white font-bold px-6 py-3 rounded-lg hover:bg-discord-blue-dark transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Join Discord Discussion
              </a>
              <a
                href="/contact"
                className="inline-flex items-center bg-neon-blue text-black font-bold px-6 py-3 rounded-lg hover:bg-blue-400 transition-all duration-300"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Development Team
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
