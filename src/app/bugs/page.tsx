'use client'

import { motion } from 'framer-motion'
import { Bug, AlertTriangle, MessageCircle, Mail, FileText, CheckCircle } from 'lucide-react'

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
            Help us improve Earth.Net by reporting bugs and issues you encounter
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Report Bug */}
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
                <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6">
                  <h3 className="text-red-300 font-bold mb-3">Before Reporting</h3>
                  <p className="text-gray-300 mb-4">Please check if your issue has already been reported and ensure you have the latest version.</p>
                  <a
                    href="https://discord.gg/pKb9VUcyGH"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-red-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-red-700 transition-all duration-300"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Check Discord
                  </a>
                </div>

                <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6">
                  <h3 className="text-blue-300 font-bold mb-3">Discord Report</h3>
                  <p className="text-gray-300 mb-4">Report bugs directly in our Discord server for faster response times.</p>
                  <a
                    href="https://discord.gg/pKb9VUcyGH"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-discord-blue text-white font-bold px-6 py-3 rounded-lg hover:bg-discord-blue-dark transition-all duration-300"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Report on Discord
                  </a>
                </div>

                <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6">
                  <h3 className="text-green-300 font-bold mb-3">Email Report</h3>
                  <p className="text-gray-300 mb-4">Send detailed bug reports via email for complex issues.</p>
                  <a
                    href="mailto:helpearthnetmc@gmail.com?subject=Bug Report"
                    className="inline-flex items-center bg-neon-green text-black font-bold px-6 py-3 rounded-lg hover:bg-green-400 transition-all duration-300"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Send Email
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bug Report Guidelines */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
              <h2 className="text-3xl font-bold font-space-grotesk text-neon-purple mb-6 flex items-center">
                <FileText className="w-8 h-8 mr-3" />
                Report Guidelines
              </h2>
              
              <div className="space-y-6">
                <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-6">
                  <h3 className="text-purple-300 font-bold mb-3">Required Information</h3>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    <li>• Detailed description of the bug</li>
                    <li>• Steps to reproduce the issue</li>
                    <li>• Your Minecraft version</li>
                    <li>• Screenshots or videos if applicable</li>
                    <li>• Your username and server location</li>
                  </ul>
                </div>

                <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6">
                  <h3 className="text-blue-300 font-bold mb-3">What to Include</h3>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    <li>• When the bug occurred</li>
                    <li>• What you were doing at the time</li>
                    <li>• Any error messages</li>
                    <li>• Whether it's reproducible</li>
                    <li>• Impact on gameplay</li>
                  </ul>
                </div>

                <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6">
                  <h3 className="text-green-300 font-bold mb-3">Response Time</h3>
                  <p className="text-gray-300">We typically respond to bug reports within 24-48 hours. Critical issues are prioritized for immediate attention.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Known Issues */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
            <h2 className="text-3xl font-bold font-space-grotesk text-neon-green mb-6 flex items-center">
              <AlertTriangle className="w-8 h-8 mr-3" />
              Known Issues
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-6">
                <h3 className="text-yellow-300 font-bold mb-3">Connection Issues</h3>
                <p className="text-gray-300 text-sm mb-3">Some players may experience temporary connection drops during peak hours.</p>
                <span className="inline-flex items-center bg-yellow-600 text-black text-xs px-2 py-1 rounded">In Progress</span>
              </div>
              
              <div className="bg-orange-900/20 border border-orange-500/30 rounded-lg p-6">
                <h3 className="text-orange-300 font-bold mb-3">Chat Lag</h3>
                <p className="text-gray-300 text-sm mb-3">Chat messages may occasionally have slight delays in busy areas.</p>
                <span className="inline-flex items-center bg-orange-600 text-black text-xs px-2 py-1 rounded">Investigating</span>
              </div>
              
              <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6">
                <h3 className="text-green-300 font-bold mb-3">Resource Pack Loading</h3>
                <p className="text-gray-300 text-sm mb-3">Resource pack may take longer to load on slower connections.</p>
                <span className="inline-flex items-center bg-green-600 text-black text-xs px-2 py-1 rounded">Fixed</span>
              </div>
              
              <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6">
                <h3 className="text-blue-300 font-bold mb-3">Country Borders</h3>
                <p className="text-gray-300 text-sm mb-3">Visual glitches with country border displays in certain areas.</p>
                <span className="inline-flex items-center bg-blue-600 text-black text-xs px-2 py-1 rounded">Planned Fix</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Status Updates */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
            <h2 className="text-3xl font-bold font-space-grotesk text-neon-blue mb-6 flex items-center">
              <CheckCircle className="w-8 h-8 mr-3" />
              Recent Fixes
            </h2>
            
            <div className="space-y-4">
              <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-green-300 font-bold">Login System Improved</h3>
                    <p className="text-gray-300 text-sm">Fixed authentication issues and improved login reliability.</p>
                  </div>
                  <span className="text-green-400 text-sm">2 days ago</span>
                </div>
              </div>
              
              <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-green-300 font-bold">Performance Optimization</h3>
                    <p className="text-gray-300 text-sm">Reduced server lag and improved overall performance.</p>
                  </div>
                  <span className="text-green-400 text-sm">1 week ago</span>
                </div>
              </div>
              
              <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-green-300 font-bold">Chat System Update</h3>
                    <p className="text-gray-300 text-sm">Fixed chat formatting and emoji display issues.</p>
                  </div>
                  <span className="text-green-400 text-sm">2 weeks ago</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
