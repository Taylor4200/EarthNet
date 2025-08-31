'use client'

import { motion } from 'framer-motion'
import { HelpCircle, MessageCircle, Mail, BookOpen, Users, Settings } from 'lucide-react'

export default function HelpPage() {
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
            Help Center
          </h1>
          <p className="text-xl text-gray-300 font-dm-sans max-w-3xl mx-auto">
            Find answers to common questions and get the support you need
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
              <h2 className="text-3xl font-bold font-space-grotesk text-neon-blue mb-6 flex items-center">
                <BookOpen className="w-8 h-8 mr-3" />
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-6">
                <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6">
                  <h3 className="text-blue-300 font-bold mb-3">How do I join Earth.Net?</h3>
                  <p className="text-gray-300">Complete the registration form on our main page and follow the verification process. Make sure to register as an account if you plan to play on our server.</p>
                </div>

                <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6">
                  <h3 className="text-green-300 font-bold mb-3">What are the country creation limits?</h3>
                  <p className="text-gray-300">Standard players can create countries with up to 2 people (themselves + 1 friend). Rank/subscription holders can increase this to 4 people.</p>
                </div>

                <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-6">
                  <h3 className="text-purple-300 font-bold mb-3">What if all countries are taken?</h3>
                  <p className="text-gray-300">If all countries are occupied, you can register as a rebel and join existing nations or wait for spots to become available.</p>
                </div>

                <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6">
                  <h3 className="text-red-300 font-bold mb-3">How do I get support?</h3>
                  <p className="text-gray-300">Contact our support team via email at helpearthnetmc@gmail.com or join our Discord server for real-time assistance.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Support Channels */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
              <h2 className="text-3xl font-bold font-space-grotesk text-neon-purple mb-6 flex items-center">
                <MessageCircle className="w-8 h-8 mr-3" />
                Support Channels
              </h2>
              
              <div className="space-y-6">
                <div className="bg-discord-blue/20 border border-discord-blue/30 rounded-lg p-6">
                  <h3 className="text-discord-blue font-bold mb-3">Discord Support</h3>
                  <p className="text-gray-300 mb-4">Get real-time help from our support team and community.</p>
                  <a
                    href="https://discord.gg/pKb9VUcyGH"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-discord-blue text-white font-bold px-6 py-3 rounded-lg hover:bg-discord-blue-dark transition-all duration-300"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Join Discord
                  </a>
                </div>

                <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6">
                  <h3 className="text-blue-300 font-bold mb-3">Email Support</h3>
                  <p className="text-gray-300 mb-4">For detailed inquiries and account issues.</p>
                  <a
                    href="mailto:helpearthnetmc@gmail.com"
                    className="inline-flex items-center bg-neon-blue text-black font-bold px-6 py-3 rounded-lg hover:bg-blue-400 transition-all duration-300"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Send Email
                  </a>
                </div>

                <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6">
                  <h3 className="text-green-300 font-bold mb-3">Report Issues</h3>
                  <p className="text-gray-300 mb-4">Report bugs, violations, or technical problems.</p>
                  <a
                    href="/bugs"
                    className="inline-flex items-center bg-neon-green text-black font-bold px-6 py-3 rounded-lg hover:bg-green-400 transition-all duration-300"
                  >
                    <HelpCircle className="w-5 h-5 mr-2" />
                    Report Bug
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional Resources */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
            <h2 className="text-3xl font-bold font-space-grotesk text-neon-green mb-6 flex items-center">
              <Settings className="w-8 h-8 mr-3" />
              Additional Resources
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <a href="/terms" className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6 hover:border-blue-400 transition-all duration-300">
                <h3 className="text-blue-300 font-bold mb-2">Terms of Service</h3>
                <p className="text-gray-300 text-sm">Read our terms and conditions</p>
              </a>
              
              <a href="/privacy" className="bg-green-900/20 border border-green-500/30 rounded-lg p-6 hover:border-green-400 transition-all duration-300">
                <h3 className="text-green-300 font-bold mb-2">Privacy Policy</h3>
                <p className="text-gray-300 text-sm">Learn about data protection</p>
              </a>
              
              <a href="/safety" className="bg-red-900/20 border border-red-500/30 rounded-lg p-6 hover:border-red-400 transition-all duration-300">
                <h3 className="text-red-300 font-bold mb-2">Safety Guidelines</h3>
                <p className="text-gray-300 text-sm">Stay safe while playing</p>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}


