'use client'

import { motion } from 'framer-motion'
import { MessageSquare, Users, TrendingUp, Calendar, ThumbsUp, MessageCircle, ExternalLink } from 'lucide-react'

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
            Community Forums
          </h1>
          <p className="text-xl text-gray-300 font-dm-sans max-w-3xl mx-auto">
            Join the discussion, share strategies, and connect with fellow Earth.Net players
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Forum Categories */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
              <h2 className="text-3xl font-bold font-space-grotesk text-neon-blue mb-6 flex items-center">
                <MessageSquare className="w-8 h-8 mr-3" />
                Forum Categories
              </h2>
              
              <div className="space-y-6">
                <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6">
                  <h3 className="text-blue-300 font-bold mb-3 flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2" />
                    General Discussion
                  </h3>
                  <p className="text-gray-300 mb-4">General topics about Earth.Net, announcements, and community news.</p>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>1.2k topics</span>
                    <span>5.6k posts</span>
                  </div>
                </div>

                <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6">
                  <h3 className="text-green-300 font-bold mb-3 flex items-center">
                    <Users className="w-5 h-5 mr-2" />
                    Strategy & Tactics
                  </h3>
                  <p className="text-gray-300 mb-4">Share your strategies, discuss tactics, and learn from other players.</p>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>856 topics</span>
                    <span>3.2k posts</span>
                  </div>
                </div>

                <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-6">
                  <h3 className="text-purple-300 font-bold mb-3 flex items-center">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Alliances & Diplomacy
                  </h3>
                  <p className="text-gray-300 mb-4">Form alliances, negotiate treaties, and discuss diplomatic relations.</p>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>432 topics</span>
                    <span>1.8k posts</span>
                  </div>
                </div>

                <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6">
                  <h3 className="text-red-300 font-bold mb-3 flex items-center">
                    <Calendar className="w-5 h-5 mr-2" />
                    Events & Tournaments
                  </h3>
                  <p className="text-gray-300 mb-4">Participate in community events, tournaments, and special competitions.</p>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>234 topics</span>
                    <span>987 posts</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Community Access */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
              <h2 className="text-3xl font-bold font-space-grotesk text-neon-purple mb-6 flex items-center">
                <Users className="w-8 h-8 mr-3" />
                Join the Community
              </h2>
              
              <div className="space-y-6">
                <div className="bg-discord-blue/20 border border-discord-blue/30 rounded-lg p-6">
                  <h3 className="text-discord-blue font-bold mb-3">Discord Community</h3>
                  <p className="text-gray-300 mb-4">Our main community hub with real-time discussions, voice channels, and instant notifications.</p>
                  <a
                    href="https://discord.gg/pKb9VUcyGH"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-discord-blue text-white font-bold px-6 py-3 rounded-lg hover:bg-discord-blue-dark transition-all duration-300"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Join Discord
                  </a>
                </div>

                <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6">
                  <h3 className="text-blue-300 font-bold mb-3">Forum Rules</h3>
                  <p className="text-gray-300 mb-4">Please read and follow our community guidelines to ensure a positive experience for everyone.</p>
                  <a
                    href="/terms"
                    className="inline-flex items-center bg-neon-blue text-black font-bold px-6 py-3 rounded-lg hover:bg-blue-400 transition-all duration-300"
                  >
                    <MessageSquare className="w-5 h-5 mr-2" />
                    Read Rules
                  </a>
                </div>

                <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6">
                  <h3 className="text-green-300 font-bold mb-3">Community Guidelines</h3>
                  <p className="text-gray-300 mb-4">Learn about our community standards and how to contribute positively.</p>
                  <a
                    href="/safety"
                    className="inline-flex items-center bg-neon-green text-black font-bold px-6 py-3 rounded-lg hover:bg-green-400 transition-all duration-300"
                  >
                    <Users className="w-5 h-5 mr-2" />
                    View Guidelines
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Recent Discussions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
            <h2 className="text-3xl font-bold font-space-grotesk text-neon-green mb-6 flex items-center">
              <TrendingUp className="w-8 h-8 mr-3" />
              Recent Discussions
            </h2>
            
            <div className="space-y-4">
              <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-blue-300 font-bold mb-2">Best strategies for new players</h3>
                    <p className="text-gray-300 text-sm mb-3">Share your tips and tricks for players just starting their Earth.Net journey.</p>
                    <div className="flex items-center space-x-4 text-xs text-gray-400">
                      <span>By Player123</span>
                      <span>2 hours ago</span>
                      <span>24 replies</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ThumbsUp className="w-4 h-4 text-green-400" />
                    <span className="text-green-400 text-sm">15</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-green-300 font-bold mb-2">Alliance formation guide</h3>
                    <p className="text-gray-300 text-sm mb-3">Comprehensive guide on how to form and maintain successful alliances.</p>
                    <div className="flex items-center space-x-4 text-xs text-gray-400">
                      <span>By Diplomat456</span>
                      <span>1 day ago</span>
                      <span>18 replies</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ThumbsUp className="w-4 h-4 text-green-400" />
                    <span className="text-green-400 text-sm">32</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-purple-300 font-bold mb-2">Upcoming tournament announcement</h3>
                    <p className="text-gray-300 text-sm mb-3">Details about the next major tournament and how to participate.</p>
                    <div className="flex items-center space-x-4 text-xs text-gray-400">
                      <span>By Admin789</span>
                      <span>3 days ago</span>
                      <span>45 replies</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ThumbsUp className="w-4 h-4 text-green-400" />
                    <span className="text-green-400 text-sm">67</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Community Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
            <h2 className="text-3xl font-bold font-space-grotesk text-neon-blue mb-6 flex items-center">
              <Users className="w-8 h-8 mr-3" />
              Community Statistics
            </h2>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6 text-center">
                <h3 className="text-blue-300 font-bold text-2xl mb-2">2,847</h3>
                <p className="text-gray-300 text-sm">Active Members</p>
              </div>
              
              <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6 text-center">
                <h3 className="text-green-300 font-bold text-2xl mb-2">12,456</h3>
                <p className="text-gray-300 text-sm">Total Posts</p>
              </div>
              
              <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-6 text-center">
                <h3 className="text-purple-300 font-bold text-2xl mb-2">3,234</h3>
                <p className="text-gray-300 text-sm">Topics Created</p>
              </div>
              
              <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6 text-center">
                <h3 className="text-red-300 font-bold text-2xl mb-2">156</h3>
                <p className="text-gray-300 text-sm">Online Now</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
