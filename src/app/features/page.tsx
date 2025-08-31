'use client'

import { motion } from 'framer-motion'
import { Lightbulb, MessageCircle, Mail, FileText, CheckCircle, Star, TrendingUp, Clock } from 'lucide-react'

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
            Suggest new features and vote on ideas to help shape the future of Earth.Net
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Submit Feature Request */}
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
                  <h3 className="text-blue-300 font-bold mb-3">Before Submitting</h3>
                  <p className="text-gray-300 mb-4">Check if your feature idea has already been suggested and ensure it's not already implemented.</p>
                  <a
                    href="https://discord.gg/pKb9VUcyGH"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-blue-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Check Discord
                  </a>
                </div>

                <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6">
                  <h3 className="text-green-300 font-bold mb-3">Discord Submission</h3>
                  <p className="text-gray-300 mb-4">Submit feature requests directly in our Discord server for community discussion.</p>
                  <a
                    href="https://discord.gg/pKb9VUcyGH"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-discord-blue text-white font-bold px-6 py-3 rounded-lg hover:bg-discord-blue-dark transition-all duration-300"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Submit on Discord
                  </a>
                </div>

                <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-6">
                  <h3 className="text-purple-300 font-bold mb-3">Email Submission</h3>
                  <p className="text-gray-300 mb-4">Send detailed feature requests via email for complex proposals.</p>
                  <a
                    href="mailto:helpearthnetmc@gmail.com?subject=Feature Request"
                    className="inline-flex items-center bg-neon-purple text-black font-bold px-6 py-3 rounded-lg hover:bg-purple-400 transition-all duration-300"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Send Email
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Submission Guidelines */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
              <h2 className="text-3xl font-bold font-space-grotesk text-neon-purple mb-6 flex items-center">
                <FileText className="w-8 h-8 mr-3" />
                Submission Guidelines
              </h2>
              
              <div className="space-y-6">
                <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-6">
                  <h3 className="text-purple-300 font-bold mb-3">What to Include</h3>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    <li>• Clear description of the feature</li>
                    <li>• How it would benefit players</li>
                    <li>• Implementation suggestions</li>
                    <li>• Use cases and examples</li>
                    <li>• Priority level (optional)</li>
                  </ul>
                </div>

                <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6">
                  <h3 className="text-blue-300 font-bold mb-3">Evaluation Process</h3>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    <li>• Community voting and feedback</li>
                    <li>• Technical feasibility review</li>
                    <li>• Development time estimation</li>
                    <li>• Impact on existing features</li>
                    <li>• Resource requirements</li>
                  </ul>
                </div>

                <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6">
                  <h3 className="text-green-300 font-bold mb-3">Response Timeline</h3>
                  <p className="text-gray-300">We review feature requests weekly and provide updates on accepted proposals within 2-4 weeks.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Popular Feature Requests */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
            <h2 className="text-3xl font-bold font-space-grotesk text-neon-green mb-6 flex items-center">
              <TrendingUp className="w-8 h-8 mr-3" />
              Popular Feature Requests
            </h2>
            
            <div className="space-y-4">
              <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-blue-300 font-bold mb-2">Advanced Trading System</h3>
                    <p className="text-gray-300 text-sm mb-3">Implement a more sophisticated trading system with market prices, auctions, and trade routes.</p>
                    <div className="flex items-center space-x-4 text-xs text-gray-400">
                      <span>By Player123</span>
                      <span>2 weeks ago</span>
                      <span>156 votes</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span className="text-yellow-400 text-sm">156</span>
                  </div>
                </div>
                <div className="mt-3">
                  <span className="inline-flex items-center bg-green-600 text-black text-xs px-2 py-1 rounded">In Development</span>
                </div>
              </div>
              
              <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-green-300 font-bold mb-2">Custom Flag Designer</h3>
                    <p className="text-gray-300 text-sm mb-3">Allow players to create and upload custom flags for their countries.</p>
                    <div className="flex items-center space-x-4 text-xs text-gray-400">
                      <span>By Designer456</span>
                      <span>1 month ago</span>
                      <span>89 votes</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span className="text-yellow-400 text-sm">89</span>
                  </div>
                </div>
                <div className="mt-3">
                  <span className="inline-flex items-center bg-blue-600 text-black text-xs px-2 py-1 rounded">Planned</span>
                </div>
              </div>
              
              <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-purple-300 font-bold mb-2">Diplomatic Treaties</h3>
                    <p className="text-gray-300 text-sm mb-3">Add formal treaty system with trade agreements, alliances, and peace treaties.</p>
                    <div className="flex items-center space-x-4 text-xs text-gray-400">
                      <span>By Diplomat789</span>
                      <span>3 weeks ago</span>
                      <span>234 votes</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span className="text-yellow-400 text-sm">234</span>
                  </div>
                </div>
                <div className="mt-3">
                  <span className="inline-flex items-center bg-yellow-600 text-black text-xs px-2 py-1 rounded">Under Review</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Recently Implemented */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
            <h2 className="text-3xl font-bold font-space-grotesk text-neon-blue mb-6 flex items-center">
              <CheckCircle className="w-8 h-8 mr-3" />
              Recently Implemented
            </h2>
            
            <div className="space-y-4">
              <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-green-300 font-bold">Enhanced Chat System</h3>
                    <p className="text-gray-300 text-sm">Added emoji support, message formatting, and channel management.</p>
                  </div>
                  <span className="text-green-400 text-sm">1 week ago</span>
                </div>
              </div>
              
              <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-green-300 font-bold">Resource Tracking</h3>
                    <p className="text-gray-300 text-sm">Implemented detailed resource tracking and statistics for countries.</p>
                  </div>
                  <span className="text-green-400 text-sm">2 weeks ago</span>
                </div>
              </div>
              
              <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-green-300 font-bold">Mobile-Friendly UI</h3>
                    <p className="text-gray-300 text-sm">Improved website responsiveness and mobile user experience.</p>
                  </div>
                  <span className="text-green-400 text-sm">3 weeks ago</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Feature Request Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
            <h2 className="text-3xl font-bold font-space-grotesk text-neon-purple mb-6 flex items-center">
              <Clock className="w-8 h-8 mr-3" />
              Feature Request Statistics
            </h2>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6 text-center">
                <h3 className="text-blue-300 font-bold text-2xl mb-2">1,247</h3>
                <p className="text-gray-300 text-sm">Total Requests</p>
              </div>
              
              <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6 text-center">
                <h3 className="text-green-300 font-bold text-2xl mb-2">89</h3>
                <p className="text-gray-300 text-sm">Implemented</p>
              </div>
              
              <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-6 text-center">
                <h3 className="text-purple-300 font-bold text-2xl mb-2">156</h3>
                <p className="text-gray-300 text-sm">In Development</p>
              </div>
              
              <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6 text-center">
                <h3 className="text-red-300 font-bold text-2xl mb-2">7.1%</h3>
                <p className="text-gray-300 text-sm">Implementation Rate</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
