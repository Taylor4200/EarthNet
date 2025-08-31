'use client'

import { motion } from 'framer-motion'
import { Mail, MessageCircle, Users, Building, Shield, Headphones, Clock, Zap, ExternalLink, Phone, Globe, Crown } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20 py-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, type: "spring", bounce: 0.3 }}
          className="text-center mb-16"
        >
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 border-2 border-neon-blue/50 shadow-2xl shadow-neon-blue/20 mb-8">
            <div className="flex items-center justify-center mb-6">
              <Headphones className="w-12 h-12 text-neon-blue mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold font-orbitron text-gradient">
                Command Center
              </h1>
            </div>

            <div className="flex items-center justify-center space-x-8 text-sm text-gray-400 mb-6">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Support: Online</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>Avg Response: 2 hours</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="w-4 h-4" />
                <span>24/7 Available</span>
              </div>
            </div>

            <p className="text-xl text-gray-300 font-dm-sans max-w-3xl mx-auto">
              🌍 <span className="text-neon-green">Ready for Battle?</span> 🌍
              <br />
              Our elite support team stands ready to assist you in your conquest!
            </p>
          </div>
        </motion.div>

        {/* Quick Contact Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 border-2 border-neon-green/50 shadow-2xl shadow-neon-green/20">
            <h2 className="text-3xl font-bold font-orbitron text-neon-green mb-8 flex items-center justify-center">
              <Zap className="w-8 h-8 mr-3" />
              Quick Contact Channels
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Discord Support */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-discord-blue/20 to-discord-blue/10 border-2 border-discord-blue/50 rounded-xl p-6 text-center hover:border-discord-blue/70 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-discord-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-discord-blue font-bold mb-2">Discord Support</h3>
                <p className="text-gray-300 text-sm mb-4">Instant help from our community</p>
                <div className="text-xs text-green-400 mb-4">⚡ Online Now</div>
                <a
                  href="https://discord.gg/pKb9VUcyGH"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-discord-blue text-white font-bold px-6 py-3 rounded-lg hover:bg-discord-blue-dark transition-all duration-300"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Join Discord
                </a>
              </motion.div>

              {/* Email Support */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-neon-blue/20 to-blue-900/20 border-2 border-neon-blue/50 rounded-xl p-6 text-center hover:border-neon-blue/70 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-neon-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-neon-blue font-bold mb-2">Email Support</h3>
                <p className="text-gray-300 text-sm mb-4">Detailed support for complex issues</p>
                <div className="text-xs text-yellow-400 mb-4">⏰ ~2 hours</div>
                <a
                  href="mailto:helpearthnetmc@gmail.com"
                  className="inline-flex items-center bg-neon-blue text-black font-bold px-6 py-3 rounded-lg hover:bg-blue-400 transition-all duration-300"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Send Email
                </a>
              </motion.div>

              {/* Emergency Line */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-red-900/20 to-red-800/20 border-2 border-red-500/50 rounded-xl p-6 text-center hover:border-red-500/70 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-red-400 font-bold mb-2">Emergency Support</h3>
                <p className="text-gray-300 text-sm mb-4">Critical server issues & security</p>
                <div className="text-xs text-red-400 mb-4">🚨 For urgent issues only</div>
                <a
                  href="mailto:crzymiata@gmail.com"
                  className="inline-flex items-center bg-red-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-red-700 transition-all duration-300"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Contact Owner
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Detailed Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
              <h2 className="text-3xl font-bold font-orbitron text-neon-blue mb-6 flex items-center">
                <Shield className="w-8 h-8 mr-3" />
                Command Channels
              </h2>

              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="bg-gradient-to-r from-blue-900/30 to-blue-800/30 border border-blue-500/30 rounded-xl p-6"
                >
                  <h3 className="text-blue-300 font-bold mb-3 flex items-center">
                    <Headphones className="w-6 h-6 mr-3" />
                    Technical Support
                  </h3>
                  <p className="text-gray-300 mb-4">Bug reports, account issues, server problems, and technical assistance</p>
                  <div className="space-y-2">
                    <a href="mailto:helpearthnetmc@gmail.com" className="text-neon-blue hover:text-neon-green text-lg font-semibold block transition-colors">
                      helpearthnetmc@gmail.com
                    </a>
                    <div className="text-sm text-gray-400">Response time: 2-4 hours</div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  className="bg-gradient-to-r from-purple-900/30 to-purple-800/30 border border-purple-500/30 rounded-xl p-6"
                >
                  <h3 className="text-purple-300 font-bold mb-3 flex items-center">
                    <Building className="w-6 h-6 mr-3" />
                    Business & Partnerships
                  </h3>
                  <p className="text-gray-300 mb-4">Advertising, sponsorships, partnerships, and business opportunities</p>
                  <div className="space-y-2">
                    <a href="mailto:earthnetmc@gmail.com" className="text-neon-purple hover:text-purple-300 text-lg font-semibold block transition-colors">
                      earthnetmc@gmail.com
                    </a>
                    <div className="text-sm text-gray-400">Response time: 24 hours</div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0 }}
                  className="bg-gradient-to-r from-yellow-900/30 to-yellow-800/30 border border-yellow-500/30 rounded-xl p-6"
                >
                  <h3 className="text-yellow-300 font-bold mb-3 flex items-center">
                    <Crown className="w-6 h-6 mr-3" />
                    Server Leadership
                  </h3>
                  <p className="text-gray-300 mb-4">Direct communication with server founders and leadership team</p>
                  <div className="space-y-3">
                    <div>
                      <a href="mailto:crzymiata@gmail.com" className="text-neon-yellow hover:text-yellow-300 text-lg font-semibold block transition-colors">
                        crzymiata@gmail.com
                      </a>
                      <div className="text-sm text-gray-400">Founder & Head Designer</div>
                    </div>
                    <div>
                      <a href="mailto:bluebremlol@gmail.com" className="text-neon-yellow hover:text-yellow-300 text-lg font-semibold block transition-colors">
                        bluebremlol@gmail.com
                      </a>
                      <div className="text-sm text-gray-400">Co-Founder & Head Moderator</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Support Resources */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
              <h2 className="text-3xl font-bold font-orbitron text-neon-purple mb-6 flex items-center">
                <Globe className="w-8 h-8 mr-3" />
                Support Resources
              </h2>

              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3 }}
                  className="bg-gradient-to-r from-discord-blue/30 to-discord-blue/20 border border-discord-blue/30 rounded-xl p-6"
                >
                  <h3 className="text-discord-blue font-bold mb-3 flex items-center">
                    <MessageCircle className="w-6 h-6 mr-3" />
                    Community Hub
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Join our Discord server for instant support, real-time discussions, and community events.
                    Connect with thousands of players worldwide!
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-green-400">🟢 2,847 Members Online</div>
                    <a
                      href="https://discord.gg/pKb9VUcyGH"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-discord-blue text-white font-bold px-6 py-3 rounded-lg hover:bg-discord-blue-dark transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Join Community
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 }}
                  className="bg-gradient-to-r from-green-900/30 to-green-800/30 border border-green-500/30 rounded-xl p-6"
                >
                  <h3 className="text-green-300 font-bold mb-3 flex items-center">
                    <Clock className="w-6 h-6 mr-3" />
                    Response Times & SLA
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl mb-1">⚡</div>
                      <div className="text-sm font-bold text-green-400">Discord</div>
                      <div className="text-xs text-gray-400">Within minutes</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl mb-1">📧</div>
                      <div className="text-sm font-bold text-blue-400">Email</div>
                      <div className="text-xs text-gray-400">2-4 hours</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl mb-1">🚨</div>
                      <div className="text-sm font-bold text-red-400">Emergency</div>
                      <div className="text-xs text-gray-400">Immediate</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5 }}
                  className="bg-gradient-to-r from-blue-900/30 to-blue-800/30 border border-blue-500/30 rounded-xl p-6"
                >
                  <h3 className="text-blue-300 font-bold mb-3 flex items-center">
                    <Shield className="w-6 h-6 mr-3" />
                    Before You Contact Us
                  </h3>
                  <div className="space-y-3 text-sm text-gray-300">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-neon-blue rounded-full mt-2 flex-shrink-0"></div>
                      <p>Check our <a href="/help" className="text-neon-blue hover:text-neon-green font-semibold transition-colors">Help Center</a> for quick solutions</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-neon-blue rounded-full mt-2 flex-shrink-0"></div>
                      <p>Review our <a href="/terms" className="text-neon-blue hover:text-neon-green font-semibold transition-colors">Terms of Service</a> and rules</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-neon-blue rounded-full mt-2 flex-shrink-0"></div>
                      <p>Use <a href="/bugs" className="text-neon-blue hover:text-neon-green font-semibold transition-colors">Bug Reports</a> for technical issues</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-neon-blue rounded-full mt-2 flex-shrink-0"></div>
                      <p>Submit <a href="/features" className="text-neon-blue hover:text-neon-green font-semibold transition-colors">Feature Requests</a> for suggestions</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Final Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.7 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20 rounded-3xl p-8 border-2 border-neon-blue/50 shadow-2xl shadow-neon-blue/20 text-center relative overflow-hidden">
            {/* Animated background effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neon-blue/5 to-transparent animate-pulse"></div>

            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.8, duration: 0.5, type: "spring" }}
                className="mb-6"
              >
                <div className="text-6xl mb-4">🛡️ ⚔️ 🛡️</div>
                <h2 className="text-3xl font-bold font-orbitron text-neon-blue mb-4">
                  Elite Support Squad Ready
                </h2>
                <div className="text-neon-green font-semibold text-lg mb-4">
                  Your Conquest Continues Uninterrupted!
                </div>
              </motion.div>

              <p className="text-gray-300 mb-8 max-w-3xl mx-auto text-lg">
                🌍 Our battle-hardened support team stands at the ready, equipped with the latest tools and strategies to ensure your Earth.Net experience is legendary.
                From technical fortifications to strategic guidance, we've got your back in the heat of battle!
              </p>

              <div className="flex flex-col lg:flex-row gap-6 justify-center items-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex flex-col items-center"
                >
                  <div className="bg-neon-blue rounded-full p-4 mb-4">
                    <Headphones className="w-8 h-8 text-black" />
                  </div>
                  <div className="text-center">
                    <div className="text-neon-blue font-bold text-lg mb-1">24/7 Support</div>
                    <div className="text-gray-400 text-sm">Always online, always ready</div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex flex-col items-center"
                >
                  <div className="bg-green-500 rounded-full p-4 mb-4">
                    <Zap className="w-8 h-8 text-black" />
                  </div>
                  <div className="text-center">
                    <div className="text-green-400 font-bold text-lg mb-1">Lightning Fast</div>
                    <div className="text-gray-400 text-sm">Quick response guaranteed</div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex flex-col items-center"
                >
                  <div className="bg-purple-500 rounded-full p-4 mb-4">
                    <Shield className="w-8 h-8 text-black" />
                  </div>
                  <div className="text-center">
                    <div className="text-purple-400 font-bold text-lg mb-1">Battle Tested</div>
                    <div className="text-gray-400 text-sm">Experienced warriors</div>
                  </div>
                </motion.div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-600">
                <div className="bg-gray-800/50 rounded-xl p-6">
                  <h3 className="text-neon-yellow font-bold mb-4">🚀 Quick Start Your Support Quest:</h3>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div className="text-center">
                      <div className="text-2xl mb-2">1️⃣</div>
                      <div className="text-gray-300">Choose your contact method</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl mb-2">2️⃣</div>
                      <div className="text-gray-300">Describe your issue clearly</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl mb-2">3️⃣</div>
                      <div className="text-gray-300">Receive elite assistance</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}


