'use client'

import { motion } from 'framer-motion'
import { Play, Users, Shield, Star, CheckCircle, ArrowRight, Globe, Crown } from 'lucide-react'

export default function JoinPage() {
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
            Join Earth.Net
          </h1>
          <p className="text-xl text-gray-300 font-dm-sans max-w-3xl mx-auto">
            Ready to conquer the world? Join thousands of players in the ultimate Minecraft Earth strategy experience
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* How to Join */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
              <h2 className="text-3xl font-bold font-space-grotesk text-neon-blue mb-6 flex items-center">
                <Play className="w-8 h-8 mr-3" />
                How to Join
              </h2>
              
              <div className="space-y-6">
                <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6">
                  <h3 className="text-blue-300 font-bold mb-3 flex items-center">
                    <Globe className="w-5 h-5 mr-2" />
                    Step 1: Register Your Account
                  </h3>
                  <p className="text-gray-300 mb-4">Complete the registration form on our main page to create your Earth.Net account.</p>
                  <a
                    href="/"
                    className="inline-flex items-center bg-neon-blue text-black font-bold px-6 py-3 rounded-lg hover:bg-blue-400 transition-all duration-300"
                  >
                    <ArrowRight className="w-5 h-5 mr-2" />
                    Go to Registration
                  </a>
                </div>

                <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6">
                  <h3 className="text-green-300 font-bold mb-3 flex items-center">
                    <Shield className="w-5 h-5 mr-2" />
                    Step 2: Join Our Discord
                  </h3>
                  <p className="text-gray-300 mb-4">Connect with the community, get support, and stay updated with server announcements.</p>
                  <a
                    href="https://discord.gg/pKb9VUcyGH"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-discord-blue text-white font-bold px-6 py-3 rounded-lg hover:bg-discord-blue-dark transition-all duration-300"
                  >
                    <Users className="w-5 h-5 mr-2" />
                    Join Discord
                  </a>
                </div>

                <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-6">
                  <h3 className="text-purple-300 font-bold mb-3 flex items-center">
                    <Star className="w-5 h-5 mr-2" />
                    Step 3: Start Playing
                  </h3>
                  <p className="text-gray-300 mb-4">Once registered, you can join the server and begin your journey to world domination.</p>
                  <a
                    href="/features"
                    className="inline-flex items-center bg-neon-purple text-black font-bold px-6 py-3 rounded-lg hover:bg-purple-400 transition-all duration-300"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Server Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
              <h2 className="text-3xl font-bold font-space-grotesk text-neon-purple mb-6 flex items-center">
                <Crown className="w-8 h-8 mr-3" />
                Server Information
              </h2>
              
              <div className="space-y-6">
                <div className="bg-discord-blue/20 border border-discord-blue/30 rounded-lg p-6">
                  <h3 className="text-discord-blue font-bold mb-3">Server Status</h3>
                  <p className="text-gray-300 mb-4">Our server is online 24/7 with dedicated hosting and regular maintenance.</p>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-green-400 font-bold">Online</span>
                  </div>
                </div>

                <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6">
                  <h3 className="text-blue-300 font-bold mb-3">System Requirements</h3>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    <li>• Minecraft Java Edition 1.19+</li>
                    <li>• Stable internet connection</li>
                    <li>• 4GB RAM minimum (8GB recommended)</li>
                    <li>• Any modern computer or laptop</li>
                  </ul>
                </div>

                <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6">
                  <h3 className="text-green-300 font-bold mb-3">What You Get</h3>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    <li>• Access to the Earth map</li>
                    <li>• Country creation system</li>
                    <li>• Community Discord access</li>
                    <li>• 24/7 support</li>
                    <li>• Regular events and updates</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Community Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
            <h2 className="text-3xl font-bold font-space-grotesk text-neon-green mb-6 flex items-center">
              <Users className="w-8 h-8 mr-3" />
              Join Our Growing Community
            </h2>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6 text-center">
                <h3 className="text-blue-300 font-bold text-2xl mb-2">2,847+</h3>
                <p className="text-gray-300 text-sm">Active Players</p>
              </div>
              
              <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6 text-center">
                <h3 className="text-green-300 font-bold text-2xl mb-2">156</h3>
                <p className="text-gray-300 text-sm">Countries Created</p>
              </div>
              
              <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-6 text-center">
                <h3 className="text-purple-300 font-bold text-2xl mb-2">24/7</h3>
                <p className="text-gray-300 text-sm">Server Uptime</p>
              </div>
              
              <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6 text-center">
                <h3 className="text-red-300 font-bold text-2xl mb-2">100+</h3>
                <p className="text-gray-300 text-sm">Daily Events</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 text-center">
            <h2 className="text-3xl font-bold font-space-grotesk text-neon-blue mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of players in the ultimate Minecraft Earth strategy experience. Build empires, forge alliances, and conquer the world!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/"
                className="inline-flex items-center bg-neon-blue text-black font-bold px-8 py-4 rounded-lg hover:bg-blue-400 transition-all duration-300 text-lg"
              >
                <Play className="w-6 h-6 mr-2" />
                Register Now
              </a>
              <a
                href="https://discord.gg/pKb9VUcyGH"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-discord-blue text-white font-bold px-8 py-4 rounded-lg hover:bg-discord-blue-dark transition-all duration-300 text-lg"
              >
                <Users className="w-6 h-6 mr-2" />
                Join Discord
              </a>
            </div>
          </div>
        </motion.div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
            <h2 className="text-3xl font-bold font-space-grotesk text-neon-green mb-6 flex items-center">
              <CheckCircle className="w-8 h-8 mr-3" />
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6">
                <h3 className="text-blue-300 font-bold mb-3">Is Earth.Net free to play?</h3>
                <p className="text-gray-300">Yes! Earth.Net is completely free to play. Premium features are optional and provide additional benefits.</p>
              </div>
              
              <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6">
                <h3 className="text-green-300 font-bold mb-3">What Minecraft version do I need?</h3>
                <p className="text-gray-300">We support Minecraft Java Edition version 1.19 and above. Bedrock Edition is not currently supported.</p>
              </div>
              
              <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-6">
                <h3 className="text-purple-300 font-bold mb-3">How do I create a country?</h3>
                <p className="text-gray-300">After registering, you can claim unoccupied territories on the Earth map and establish your own country.</p>
              </div>
              
              <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6">
                <h3 className="text-red-300 font-bold mb-3">Can I play with friends?</h3>
                <p className="text-gray-300">Absolutely! You can form alliances, create countries together, and participate in team-based events.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
