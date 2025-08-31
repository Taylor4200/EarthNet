'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageSquare, Users, MessageCircle, ExternalLink, Globe, Search, Plus, Eye, Clock, ThumbsUp, MessageCircle as ReplyIcon, User, Filter, Star, TrendingUp, Lock, Unlock, Pin, Flag, Shield } from 'lucide-react'

export default function ForumsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('latest')

  // Mock forum data
  const categories = [
    {
      id: 'general',
      name: 'General Discussion',
      description: 'General chat about Earth.Net and community topics',
      icon: MessageCircle,
      color: 'from-blue-500 to-blue-600',
      threads: 1247,
      posts: 8934,
      lastPost: '2 minutes ago'
    },
    {
      id: 'strategy',
      name: 'Strategy & Tactics',
      description: 'Share your battle strategies and conquest tips',
      icon: TrendingUp,
      color: 'from-green-500 to-green-600',
      threads: 892,
      posts: 6543,
      lastPost: '5 minutes ago'
    },
    {
      id: 'trading',
      name: 'Trading & Economy',
      description: 'Buy, sell, and trade resources and territories',
      icon: Globe,
      color: 'from-yellow-500 to-yellow-600',
      threads: 567,
      posts: 3456,
      lastPost: '12 minutes ago'
    },
    {
      id: 'help',
      name: 'Help & Support',
      description: 'Get help with gameplay and technical issues',
      icon: Users,
      color: 'from-purple-500 to-purple-600',
      threads: 445,
      posts: 2234,
      lastPost: '8 minutes ago'
    },
    {
      id: 'events',
      name: 'Events & Competitions',
      description: 'Community events and competitive gameplay',
      icon: Star,
      color: 'from-red-500 to-red-600',
      threads: 234,
      posts: 1876,
      lastPost: '1 hour ago'
    }
  ]

  const recentThreads = [
    {
      id: 1,
      title: 'Best starting strategies for new players',
      author: 'StrategyMaster',
      avatar: '🚀',
      category: 'strategy',
      replies: 23,
      views: 456,
      lastReply: '5 minutes ago',
      isPinned: true,
      isLocked: false,
      tags: ['beginner', 'strategy', 'tips']
    },
    {
      id: 2,
      title: 'Weekly Tournament Results - March 2024',
      author: 'TournamentAdmin',
      avatar: '🏆',
      category: 'events',
      replies: 67,
      views: 1234,
      lastReply: '12 minutes ago',
      isPinned: true,
      isLocked: false,
      tags: ['tournament', 'results', 'weekly']
    },
    {
      id: 3,
      title: 'Selling 5 territories in North America',
      author: 'TraderJoe',
      avatar: '💰',
      category: 'trading',
      replies: 12,
      views: 89,
      lastReply: '23 minutes ago',
      isPinned: false,
      isLocked: false,
      tags: ['trading', 'territories', 'na']
    },
    {
      id: 4,
      title: 'Server lag issues - anyone else experiencing this?',
      author: 'TechSupport',
      avatar: '🔧',
      category: 'help',
      replies: 45,
      views: 678,
      lastReply: '1 hour ago',
      isPinned: false,
      isLocked: false,
      tags: ['bug', 'lag', 'technical']
    },
    {
      id: 5,
      title: 'Community meetup this weekend!',
      author: 'CommunityMgr',
      avatar: '👥',
      category: 'general',
      replies: 89,
      views: 2341,
      lastReply: '2 hours ago',
      isPinned: false,
      isLocked: false,
      tags: ['meetup', 'community', 'event']
    }
  ]

  const activeUsers = [
    { name: 'StrategyMaster', avatar: '🚀', posts: 1247, status: 'online', lastActive: 'now' },
    { name: 'TraderJoe', avatar: '💰', posts: 892, status: 'online', lastActive: '2 min ago' },
    { name: 'TechSupport', avatar: '🔧', posts: 567, status: 'online', lastActive: '5 min ago' },
    { name: 'TournamentAdmin', avatar: '🏆', posts: 445, status: 'away', lastActive: '12 min ago' },
    { name: 'CommunityMgr', avatar: '👥', posts: 334, status: 'online', lastActive: '18 min ago' }
  ]

  const filteredThreads = recentThreads.filter(thread =>
    (selectedCategory === 'all' || thread.category === selectedCategory) &&
    (searchTerm === '' || thread.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
     thread.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())))
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20 py-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-6">
            <MessageSquare className="w-12 h-12 text-neon-blue mr-4" />
            <h1 className="text-5xl md:text-6xl font-bold font-orbitron text-gradient">
              Earth.Net Forums
            </h1>
          </div>
          <p className="text-xl text-gray-300 font-dm-sans max-w-3xl mx-auto mb-8">
            Join the ultimate community discussion hub for Earth.Net players worldwide
          </p>

          {/* Search and Filters */}
          <div className="max-w-4xl mx-auto bg-gray-800/50 rounded-2xl p-6 border border-gray-600">
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search threads, users, or topics..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-neon-blue transition-colors"
                />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-neon-blue"
              >
                <option value="all">All Categories</option>
                {categories.map(cat => (
                  <option key={cat.id} value={cat.id}>{cat.name}</option>
                ))}
              </select>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-neon-blue"
              >
                <option value="latest">Latest</option>
                <option value="popular">Most Popular</option>
                <option value="replies">Most Replies</option>
              </select>
            </div>

            {/* Quick Stats */}
            <div className="flex justify-center items-center space-x-6 text-sm text-gray-400">
              <span>📊 2,847 Members Online</span>
              <span>💬 15,432 Total Threads</span>
              <span>📝 89,654 Total Posts</span>
            </div>
          </div>
        </motion.div>

        {/* Create New Thread Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex justify-center">
            <button className="inline-flex items-center bg-gradient-to-r from-neon-blue to-blue-500 text-black font-bold px-8 py-4 rounded-xl hover:from-blue-400 hover:to-neon-blue transition-all duration-300 text-lg shadow-lg shadow-neon-blue/30">
              <Plus className="w-6 h-6 mr-2" />
              Create New Thread
            </button>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Forum Categories */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-1"
          >
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700">
              <h2 className="text-2xl font-bold font-orbitron text-neon-blue mb-6 flex items-center">
                <Filter className="w-6 h-6 mr-2" />
                Categories
              </h2>

              <div className="space-y-4">
                {categories.map((category, index) => (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className={`bg-gradient-to-r ${category.color} p-4 rounded-xl cursor-pointer hover:scale-105 transition-all duration-300 ${
                      selectedCategory === category.id ? 'ring-2 ring-white/50' : ''
                    }`}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <category.icon className="w-6 h-6 text-white" />
                      <h3 className="text-white font-bold">{category.name}</h3>
                    </div>
                    <p className="text-white/80 text-sm mb-3">{category.description}</p>
                    <div className="flex justify-between text-xs text-white/70">
                      <span>{category.threads} threads</span>
                      <span>{category.posts} posts</span>
                    </div>
                    <div className="text-xs text-white/60 mt-1">
                      Last post: {category.lastPost}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Recent Threads */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700">
              <h2 className="text-2xl font-bold font-orbitron text-neon-green mb-6 flex items-center">
                <MessageSquare className="w-6 h-6 mr-2" />
                Recent Threads
              </h2>

              <div className="space-y-4">
                {filteredThreads.map((thread, index) => (
                  <motion.div
                    key={thread.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="bg-gray-800/50 border border-gray-600 rounded-xl p-4 hover:border-gray-500 transition-all duration-300 cursor-pointer group"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-start space-x-3 flex-1">
                        <div className="text-2xl">{thread.avatar}</div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            {thread.isPinned && <Pin className="w-4 h-4 text-yellow-400" />}
                            {thread.isLocked && <Lock className="w-4 h-4 text-red-400" />}
                            <h3 className="text-white font-bold group-hover:text-neon-blue transition-colors">
                              {thread.title}
                            </h3>
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-gray-400 mb-2">
                            <span>by {thread.author}</span>
                            <span>in {categories.find(cat => cat.id === thread.category)?.name}</span>
                            <span>{thread.lastReply}</span>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {thread.tags.map(tag => (
                              <span key={tag} className="px-2 py-1 bg-gray-700 text-xs text-gray-300 rounded">
                                #{tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-6 text-sm text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Eye className="w-4 h-4" />
                          <span>{thread.views}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <ReplyIcon className="w-4 h-4" />
                          <span>{thread.replies}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {filteredThreads.length === 0 && (
                <div className="text-center py-12">
                  <MessageSquare className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-400 mb-2">No threads found</h3>
                  <p className="text-gray-500">Try adjusting your search or filters</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Active Users & Discord Integration */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Active Users Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700">
              <h2 className="text-2xl font-bold font-orbitron text-neon-purple mb-6 flex items-center">
                <User className="w-6 h-6 mr-2" />
                Active Users
              </h2>

              <div className="space-y-4">
                {activeUsers.map((user, index) => (
                  <motion.div
                    key={user.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg border border-gray-600 hover:border-gray-500 transition-all duration-300"
                  >
                    <div className="relative">
                      <div className="text-2xl">{user.avatar}</div>
                      <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full ${
                        user.status === 'online' ? 'bg-green-500' : 'bg-yellow-500'
                      }`}></div>
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-medium">{user.name}</div>
                      <div className="text-xs text-gray-400">{user.posts} posts • {user.lastActive}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-600">
                <div className="text-center">
                  <h3 className="text-lg font-bold text-gray-300 mb-2">Forum Statistics</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-3">
                      <div className="text-blue-400 font-bold text-lg">15,432</div>
                      <div className="text-gray-400">Total Threads</div>
                    </div>
                    <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-3">
                      <div className="text-green-400 font-bold text-lg">89,654</div>
                      <div className="text-gray-400">Total Posts</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Discord Integration */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="lg:col-span-2"
          >
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
              <h2 className="text-3xl font-bold font-orbitron text-neon-blue mb-6 flex items-center">
                <MessageCircle className="w-8 h-8 mr-3" />
                Discord Community
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-discord-blue/20 border border-discord-blue/30 rounded-xl p-6">
                  <h3 className="text-discord-blue font-bold mb-3 flex items-center">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Real-time Chat
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Join our Discord server for instant messaging with thousands of active players worldwide.
                  </p>
                  <a
                    href="https://discord.gg/pKb9VUcyGH"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-discord-blue text-white font-bold px-6 py-3 rounded-lg hover:bg-discord-blue-dark transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Join Discord Server
                  </a>
                </div>

                <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-6">
                  <h3 className="text-green-300 font-bold mb-3 flex items-center">
                    <Users className="w-5 h-5 mr-2" />
                    Voice Channels
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Connect with voice channels for real-time communication during gameplay and events.
                  </p>
                  <div className="text-sm text-gray-400">
                    <div>🎤 General Voice</div>
                    <div>🎮 Gaming Channels</div>
                    <div>🏆 Tournament Voice</div>
                  </div>
                </div>
              </div>

              {/* Discord Channels */}
              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-600">
                <h3 className="text-lg font-bold text-white mb-4">Popular Channels</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <h4 className="text-neon-blue font-semibold">💬 Text Channels</h4>
                    <div className="text-sm text-gray-400 space-y-1">
                      <div>#general - Main chat</div>
                      <div>#announcements - Updates</div>
                      <div>#strategy - Game tactics</div>
                      <div>#trading - Economy</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-green-400 font-semibold">🔊 Voice Channels</h4>
                    <div className="text-sm text-gray-400 space-y-1">
                      <div>General Voice</div>
                      <div>Gaming Lounge</div>
                      <div>Tournament Hall</div>
                      <div>Music Room</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-purple-400 font-semibold">📋 Special Channels</h4>
                    <div className="text-sm text-gray-400 space-y-1">
                      <div>#help - Support</div>
                      <div>#events - Competitions</div>
                      <div>#screenshots - Media</div>
                      <div>#off-topic - Casual</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Forum Guidelines */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
            <h2 className="text-3xl font-bold font-orbitron text-neon-red mb-6 flex items-center">
              <Shield className="w-8 h-8 mr-3" />
              Forum Guidelines
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                className="bg-red-900/20 border border-red-500/30 rounded-xl p-6"
              >
                <h3 className="text-red-300 font-bold mb-3 flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  Be Respectful
                </h3>
                <div className="text-gray-300 text-sm space-y-2">
                  <p>• Treat all players with kindness</p>
                  <p>• No harassment or hate speech</p>
                  <p>• Keep discussions civil</p>
                  <p>• Respect different viewpoints</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6"
              >
                <h3 className="text-blue-300 font-bold mb-3 flex items-center">
                  <Filter className="w-5 h-5 mr-2" />
                  Stay On Topic
                </h3>
                <div className="text-gray-300 text-sm space-y-2">
                  <p>• Use appropriate categories</p>
                  <p>• Keep posts relevant</p>
                  <p>• No excessive spam</p>
                  <p>• Follow category rules</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 }}
                className="bg-green-900/20 border border-green-500/30 rounded-xl p-6"
              >
                <h3 className="text-green-300 font-bold mb-3 flex items-center">
                  <ThumbsUp className="w-5 h-5 mr-2" />
                  Help Others
                </h3>
                <div className="text-gray-300 text-sm space-y-2">
                  <p>• Answer questions when possible</p>
                  <p>• Share knowledge and tips</p>
                  <p>• Welcome new players</p>
                  <p>• Report rule violations</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Final Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20 rounded-3xl p-8 border-2 border-neon-blue/50 shadow-2xl shadow-neon-blue/20 text-center">
            <h2 className="text-3xl font-bold font-orbitron text-neon-blue mb-6">
              Ready to Join the Discussion?
            </h2>
            <p className="text-gray-300 mb-8 max-w-3xl mx-auto">
              Connect with thousands of players, share strategies, and become part of the Earth.Net community.
              Your next alliance or epic battle starts here!
            </p>
            <div className="flex flex-col lg:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center bg-gradient-to-r from-neon-blue to-blue-500 text-black font-bold px-8 py-4 rounded-xl hover:from-blue-400 hover:to-neon-blue transition-all duration-300 text-lg shadow-lg shadow-neon-blue/30"
              >
                <Plus className="w-6 h-6 mr-2" />
                Start New Thread
              </motion.button>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://discord.gg/pKb9VUcyGH"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-discord-blue to-discord-blue-dark text-white font-bold px-8 py-4 rounded-xl hover:from-discord-blue-dark hover:to-discord-blue transition-all duration-300 text-lg shadow-lg shadow-discord-blue/30"
              >
                <MessageCircle className="w-6 h-6 mr-2" />
                Join Discord Community
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}