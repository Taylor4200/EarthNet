'use client'

import { motion } from 'framer-motion'
import { Bug, MessageCircle, Mail, ExternalLink, AlertTriangle } from 'lucide-react'

export default function BugsPage() {
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
            Bug Reports
          </h1>
          <p className="text-xl text-gray-300 font-dm-sans max-w-3xl mx-auto">
            Help us improve Earth.Net by reporting bugs and technical issues
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Bug Report Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
              <h2 className="text-3xl font-bold font-space-grotesk text-neon-blue mb-6 flex items-center">
                <Bug className="w-8 h-8 mr-3" />
                Report a Bug
              </h2>
              
              <div className="space-y-6">
                <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6">
                  <h3 className="text-blue-300 font-bold mb-3">Google Form</h3>
                  <p className="text-gray-300 mb-4">
                    Use our official bug report form to submit detailed information about issues you encounter.
                  </p>
                  <iframe
                    src="https://docs.google.com/forms/d/1T86aqMz42HjxadZTBw1A6pleDb5yw4qwKdO6a9pvVzg/viewform?embedded=true"
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
                      href="https://docs.google.com/forms/d/1T86aqMz42HjxadZTBw1A6pleDb5yw4qwKdO6a9pvVzg/viewform"
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
                <AlertTriangle className="w-8 h-8 mr-3" />
                Report Guidelines
              </h2>
              
              <div className="space-y-6">
                <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6">
                  <h3 className="text-green-300 font-bold mb-3">What to Include</h3>
                  <div className="space-y-2 text-gray-300">
                    <p>• Clear description of the bug</p>
                    <p>• Steps to reproduce the issue</p>
                    <p>• Expected vs actual behavior</p>
                    <p>• Screenshots or videos if possible</p>
                    <p>• Your Minecraft version and mods</p>
                  </div>
                </div>

                <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-6">
                  <h3 className="text-purple-300 font-bold mb-3">Before Reporting</h3>
                  <div className="space-y-2 text-gray-300">
                    <p>• Check if the issue is already known</p>
                    <p>• Try reproducing the bug</p>
                    <p>• Check Discord for known issues</p>
                    <p>• Ensure it's not user error</p>
                  </div>
                </div>

                <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6">
                  <h3 className="text-blue-300 font-bold mb-3">Response Timeline</h3>
                  <div className="space-y-2 text-gray-300">
                    <p>• Critical bugs: 24-48 hours</p>
                    <p>• Major bugs: 3-7 days</p>
                    <p>• Minor bugs: 1-2 weeks</p>
                    <p>• Feature requests: 2-4 weeks</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Urgent Issues */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
            <h2 className="text-3xl font-bold font-space-grotesk text-neon-green mb-6 flex items-center">
              <AlertTriangle className="w-8 h-8 mr-3" />
              Urgent Issues
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6">
                <h3 className="text-red-300 font-bold mb-3">Critical Bugs</h3>
                <p className="text-gray-300 mb-4">
                  For game-breaking bugs, security issues, or server crashes, contact us immediately.
                </p>
                <div className="space-y-3">
                  <a
                    href="https://discord.gg/pKb9VUcyGH"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-discord-blue text-white font-bold px-4 py-2 rounded-lg hover:bg-discord-blue-dark transition-all duration-300 text-sm"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Discord Support
                  </a>
                  <a
                    href="mailto:helpearthnetmc@gmail.com?subject=URGENT: Critical Bug"
                    className="inline-flex items-center bg-red-600 text-white font-bold px-4 py-2 rounded-lg hover:bg-red-700 transition-all duration-300 text-sm ml-2"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Email Urgent
                  </a>
                </div>
              </div>
              
              <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-6">
                <h3 className="text-yellow-300 font-bold mb-3">Known Issues</h3>
                <p className="text-gray-300 mb-4">
                  Check our Discord server for known bugs and workarounds before reporting.
                </p>
                <a
                  href="https://discord.gg/pKb9VUcyGH"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-yellow-600 text-black font-bold px-4 py-2 rounded-lg hover:bg-yellow-700 transition-all duration-300 text-sm"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Check Known Issues
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Additional Contact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl p-8 border border-gray-600">
            <h3 className="text-2xl font-bold font-space-grotesk text-neon-purple mb-4">
              Need Immediate Help?
            </h3>
            <p className="text-gray-300 font-dm-sans mb-6 max-w-2xl mx-auto">
              For urgent issues or if you need help with a bug, join our Discord server for real-time support from our team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://discord.gg/pKb9VUcyGH"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-discord-blue text-white font-bold px-6 py-3 rounded-lg hover:bg-discord-blue-dark transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Join Discord Support
              </a>
              <a
                href="/contact"
                className="inline-flex items-center bg-neon-blue text-black font-bold px-6 py-3 rounded-lg hover:bg-blue-400 transition-all duration-300"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Support Team
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
