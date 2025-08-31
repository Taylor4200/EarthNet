'use client'

import { motion } from 'framer-motion'
import { MessageSquare, Users, MessageCircle, ExternalLink, Globe } from 'lucide-react'

export default function ForumsPage() {
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
            Player Forums
          </h1>
          <p className="text-xl text-gray-300 font-dm-sans max-w-3xl mx-auto">
            Join the Earth.Net community discussion and connect with fellow players
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Discord Community */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
              <h2 className="text-3xl font-bold font-space-grotesk text-neon-blue mb-6 flex items-center">
                <MessageCircle className="w-8 h-8 mr-3" />
                Discord Community
              </h2>
              
              <div className="space-y-6">
                <div className="bg-discord-blue/20 border border-discord-blue/30 rounded-lg p-6">
                  <h3 className="text-discord-blue font-bold mb-3">Main Discussion</h3>
                  <p className="text-gray-300 mb-4">
                    Our Discord server serves as the primary community hub for Earth.Net players. Join thousands of players for real-time discussions, announcements, and community events.
                  </p>
                  <a
                    href="https://discord.gg/pKb9VUcyGH"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-discord-blue text-white font-bold px-6 py-3 rounded-lg hover:bg-discord-blue-dark transition-all duration-300"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Join Discord Server
                  </a>
                </div>

                <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6">
                  <h3 className="text-green-300 font-bold mb-3">Community Channels</h3>
                  <div className="space-y-2 text-gray-300">
                    <p>• <strong>#general</strong> - General discussion and chat</p>
                    <p>• <strong>#announcements</strong> - Server updates and news</p>
                    <p>• <strong>#strategy</strong> - Game strategy and tactics</p>
                    <p>• <strong>#trading</strong> - Player trading and economy</p>
                    <p>• <strong>#help</strong> - Player support and questions</p>
                    <p>• <strong>#events</strong> - Community events and competitions</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Community Guidelines */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
              <h2 className="text-3xl font-bold font-space-grotesk text-neon-purple mb-6 flex items-center">
                <Users className="w-8 h-8 mr-3" />
                Community Guidelines
              </h2>
              
              <div className="space-y-6">
                <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-6">
                  <h3 className="text-purple-300 font-bold mb-3">Be Respectful</h3>
                  <div className="space-y-2 text-gray-300">
                    <p>• Treat all players with kindness and respect</p>
                    <p>• Avoid harassment, bullying, or hate speech</p>
                    <p>• Keep discussions civil and constructive</p>
                    <p>• Respect different opinions and viewpoints</p>
                  </div>
                </div>

                <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6">
                  <h3 className="text-blue-300 font-bold mb-3">Stay On Topic</h3>
                  <div className="space-y-2 text-gray-300">
                    <p>• Keep discussions relevant to Earth.Net</p>
                    <p>• Use appropriate channels for different topics</p>
                    <p>• Avoid spam or excessive off-topic posts</p>
                    <p>• Follow channel-specific rules</p>
                  </div>
                </div>

                <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6">
                  <h3 className="text-green-300 font-bold mb-3">Help Others</h3>
                  <div className="space-y-2 text-gray-300">
                    <p>• Answer questions when you can</p>
                    <p>• Share knowledge and experiences</p>
                    <p>• Welcome new players</p>
                    <p>• Report rule violations to moderators</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Community Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
            <h2 className="text-3xl font-bold font-space-grotesk text-neon-green mb-6 flex items-center">
              <Globe className="w-8 h-8 mr-3" />
              Community Features
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6">
                <h3 className="text-blue-300 font-bold mb-3">Real-time Chat</h3>
                <p className="text-gray-300 text-sm">Instant messaging with thousands of active players from around the world.</p>
              </div>
              
              <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6">
                <h3 className="text-green-300 font-bold mb-3">Voice Channels</h3>
                <p className="text-gray-300 text-sm">Join voice channels for real-time communication during gameplay.</p>
              </div>
              
              <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-6">
                <h3 className="text-purple-300 font-bold mb-3">Role System</h3>
                <p className="text-gray-300 text-sm">Special roles and permissions based on your server activity and contributions.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl p-8 border border-gray-600">
            <h3 className="text-2xl font-bold font-space-grotesk text-neon-purple mb-4">
              Ready to Join?
            </h3>
            <p className="text-gray-300 font-dm-sans mb-6 max-w-2xl mx-auto">
              The Earth.Net Discord community is the best place to connect with fellow players, get help, and stay updated on all server developments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://discord.gg/pKb9VUcyGH"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-discord-blue text-white font-bold px-6 py-3 rounded-lg hover:bg-discord-blue-dark transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Join Discord Community
              </a>
              <a
                href="/help"
                className="inline-flex items-center bg-neon-blue text-black font-bold px-6 py-3 rounded-lg hover:bg-blue-400 transition-all duration-300"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Community Guidelines
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
