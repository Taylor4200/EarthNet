'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Play, Users, Shield, Star, CheckCircle, ArrowRight, Globe, Crown, Copy, Server, Activity, Clock, Gamepad2, Zap, Trophy, MapPin, Wifi } from 'lucide-react'
import Link from 'next/link'

export default function JoinPage() {
  const [copied, setCopied] = useState(false)
  const [playerCount, setPlayerCount] = useState(2847)
  const [serverUptime] = useState("99.8%")

  // Simulate live player count updates
  useEffect(() => {
    const interval = setInterval(() => {
      setPlayerCount(prev => prev + Math.floor(Math.random() * 21) - 10)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20 py-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero Server Display */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, type: "spring", bounce: 0.3 }}
          className="text-center mb-12"
        >
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 border-2 border-neon-blue/50 shadow-2xl shadow-neon-blue/20 mb-8">
            <div className="flex items-center justify-center mb-6">
              <Server className="w-12 h-12 text-neon-blue mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold font-orbitron text-gradient">
                Earth.Net Server
              </h1>
            </div>

            {/* Server IP Display */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mb-6"
            >
              <div className="bg-black/50 rounded-2xl p-6 border border-gray-600">
                <p className="text-gray-400 text-sm mb-2 font-mono">Server Address</p>
                <div className="flex items-center justify-center space-x-4">
                  <code className="text-2xl md:text-3xl font-mono font-bold text-neon-green bg-gray-800 px-6 py-3 rounded-lg border border-gray-600">
                    play.earth.net
                  </code>
                  <button
                    onClick={() => copyToClipboard('play.earth.net')}
                    className="bg-neon-blue hover:bg-blue-400 text-black font-bold p-3 rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    <Copy className="w-6 h-6" />
                  </button>
                </div>
                {copied && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-green-400 mt-2 text-sm"
                  >
                    ✓ Server address copied!
                  </motion.p>
                )}
              </div>
            </motion.div>

            {/* Live Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="bg-green-900/20 border border-green-500/30 rounded-xl p-4"
              >
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-5 h-5 text-green-400 mr-2" />
                  <span className="text-green-400 font-bold text-lg">{playerCount.toLocaleString()}</span>
                </div>
                <p className="text-gray-300 text-xs">Online Players</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-4"
              >
                <div className="flex items-center justify-center mb-2">
                  <Activity className="w-5 h-5 text-blue-400 mr-2" />
                  <span className="text-blue-400 font-bold text-lg">{serverUptime}</span>
                </div>
                <p className="text-gray-300 text-xs">Uptime</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="bg-purple-900/20 border border-purple-500/30 rounded-xl p-4"
              >
                <div className="flex items-center justify-center mb-2">
                  <Clock className="w-5 h-5 text-purple-400 mr-2" />
                  <span className="text-purple-400 font-bold text-lg">1.20.1</span>
                </div>
                <p className="text-gray-300 text-xs">Version</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.5 }}
                className="bg-red-900/20 border border-red-500/30 rounded-xl p-4"
              >
                <div className="flex items-center justify-center mb-2">
                  <Wifi className="w-5 h-5 text-red-400 mr-2" />
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                <p className="text-gray-300 text-xs">Status: Online</p>
              </motion.div>
            </div>

            {/* Server MOTD */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-xl p-6 border border-gray-600"
            >
              <h3 className="text-neon-blue font-bold mb-2 font-orbitron">Message of the Day</h3>
              <p className="text-gray-200 text-lg font-medium">
                🌍 <span className="text-neon-green">Welcome to Earth.Net!</span> 🌍
                <br />
                <span className="text-sm text-gray-300">Build empires, forge alliances, conquer the world!</span>
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Quick Join Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 border-2 border-neon-green/50 shadow-2xl shadow-neon-green/20 text-center">
            <div className="flex items-center justify-center mb-6">
              <Zap className="w-10 h-10 text-neon-green mr-3" />
              <h2 className="text-3xl font-bold font-orbitron text-neon-green">
                Quick Join Server
              </h2>
            </div>

            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Ready to dive into the action? Use these quick methods to join Earth.Net instantly!
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {/* Direct Connect */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800/50 rounded-xl p-6 border border-gray-600"
              >
                <Gamepad2 className="w-8 h-8 text-neon-blue mx-auto mb-4" />
                <h3 className="text-neon-blue font-bold mb-2">Direct Connect</h3>
                <p className="text-gray-400 text-sm mb-4">Add server to Minecraft</p>
                <button
                  onClick={() => copyToClipboard('play.earth.net')}
                  className="bg-neon-blue hover:bg-blue-400 text-black font-bold px-4 py-2 rounded-lg transition-all duration-300 text-sm"
                >
                  Copy IP
                </button>
              </motion.div>

              {/* One-Click Launch */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800/50 rounded-xl p-6 border border-gray-600"
              >
                <Play className="w-8 h-8 text-green-400 mx-auto mb-4" />
                <h3 className="text-green-400 font-bold mb-2">One-Click Launch</h3>
                <p className="text-gray-400 text-sm mb-4">Launch Minecraft & connect</p>
                <button
                  onClick={() => copyToClipboard('minecraft://play.earth.net')}
                  className="bg-green-400 hover:bg-green-500 text-black font-bold px-4 py-2 rounded-lg transition-all duration-300 text-sm"
                >
                  Launch Game
                </button>
              </motion.div>

              {/* Mobile App */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800/50 rounded-xl p-6 border border-gray-600"
              >
                <Globe className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                <h3 className="text-purple-400 font-bold mb-2">Mobile Connect</h3>
                <p className="text-gray-400 text-sm mb-4">Use mobile Minecraft app</p>
                <button
                  onClick={() => copyToClipboard('play.earth.net:25565')}
                  className="bg-purple-400 hover:bg-purple-500 text-black font-bold px-4 py-2 rounded-lg transition-all duration-300 text-sm"
                >
                  Copy Details
                </button>
              </motion.div>
            </div>

            <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
              <h3 className="text-red-300 font-bold mb-2 flex items-center justify-center">
                <Shield className="w-5 h-5 mr-2" />
                First Time Playing?
              </h3>
              <p className="text-gray-300 mb-4">
                New to Earth.Net? Complete your registration first to unlock all features and get started on your world domination journey!
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="/"
                  className="bg-neon-blue text-black font-bold px-6 py-3 rounded-lg hover:bg-blue-400 transition-all duration-300"
                >
                  Register Account
                </a>
                <a
                  href="https://discord.gg/pKb9VUcyGH"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-discord-blue text-white font-bold px-6 py-3 rounded-lg hover:bg-discord-blue-dark transition-all duration-300"
                >
                  Join Discord
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Server Rules */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
              <h2 className="text-3xl font-bold font-orbitron text-neon-red mb-6 flex items-center">
                <Shield className="w-8 h-8 mr-3" />
                Server Rules
              </h2>

              <div className="space-y-4">
                {[
                  { icon: Users, text: "Be respectful to all players", color: "text-blue-400" },
                  { icon: MapPin, text: "No griefing or stealing", color: "text-red-400" },
                  { icon: Crown, text: "Follow country leadership", color: "text-yellow-400" },
                  { icon: Activity, text: "No exploits or cheating", color: "text-purple-400" },
                  { icon: Star, text: "Contribute positively to the community", color: "text-green-400" }
                ].map((rule, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.7 + index * 0.1 }}
                    className="bg-gray-800/50 border border-gray-600 rounded-lg p-4 flex items-center"
                  >
                    <rule.icon className={`w-6 h-6 mr-3 ${rule.color}`} />
                    <span className="text-gray-300">{rule.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Featured Players */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.7 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold font-orbitron text-neon-yellow flex items-center">
                  <Trophy className="w-8 h-8 mr-3" />
                  Server Leadership & Champions
                </h2>
                <Link
                  href="/owners"
                  className="inline-flex items-center bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-neon-yellow px-4 py-2 rounded-lg transition-all duration-300 text-sm border border-gray-600"
                >
                  <Crown className="w-4 h-4 mr-2" />
                  Meet the Team
                </Link>
              </div>

              <div className="space-y-4">
                {[
                  {
                    name: "Crzymiata",
                    title: "Server Founder & Head Designer",
                    country: "Earth.Net Administration",
                    achievement: "Visionary Leader & Creative Director",
                    avatar: "👑",
                    color: "from-yellow-500 to-orange-500",
                    special: true
                  },
                  {
                    name: "Bluebremlol",
                    title: "Co-Founder & Head Moderator",
                    country: "Earth.Net Operations",
                    achievement: "Lead Moderator & System Architect",
                    avatar: "⚡",
                    color: "from-blue-500 to-purple-500",
                    special: true
                  },
                  {
                    name: "Community Champion",
                    title: "Top Player Representative",
                    country: "Player Council",
                    achievement: "Community Ambassador",
                    avatar: "🌟",
                    color: "from-green-500 to-teal-500"
                  }
                ].map((player, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.9 + index * 0.1 }}
                    className={`${
                      player.special
                        ? 'bg-gradient-to-r from-gray-800 via-gray-700 to-yellow-900/20 border-2 border-neon-yellow/50 shadow-lg shadow-neon-yellow/20'
                        : 'bg-gradient-to-r from-gray-800 to-gray-700 border border-gray-600'
                    } rounded-xl p-4 hover:border-gray-500 transition-all duration-300 relative overflow-hidden`}
                  >
                    {player.special && (
                      <div className="absolute top-2 right-2 text-yellow-400 text-xs font-bold flex items-center">
                        <Crown className="w-3 h-3 mr-1" />
                        OWNER
                      </div>
                    )}
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${player.color} flex items-center justify-center text-2xl ${
                        player.special ? 'ring-2 ring-yellow-400/50' : ''
                      }`}>
                        {player.avatar}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h3 className={`font-bold ${player.special ? 'text-neon-yellow' : 'text-white'}`}>
                            {player.name}
                          </h3>
                          <span className="text-neon-yellow text-sm">{player.title}</span>
                        </div>
                        <p className="text-gray-300 text-sm">{player.country}</p>
                        <p className="text-neon-green text-xs font-medium">🏆 {player.achievement}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Server Performance Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.1 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
            <h2 className="text-3xl font-bold font-orbitron text-neon-blue mb-6 flex items-center">
              <Activity className="w-8 h-8 mr-3" />
              Server Performance Dashboard
            </h2>

            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-blue-900/30 to-blue-800/30 border border-blue-500/30 rounded-xl p-6 text-center"
              >
                <div className="flex items-center justify-center mb-3">
                  <Users className="w-6 h-6 text-blue-400 mr-2" />
                  <span className="text-blue-400 font-bold text-2xl">{playerCount.toLocaleString()}</span>
                </div>
                <p className="text-gray-300 text-sm">Active Players</p>
                <div className="mt-2 bg-gray-700 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{width: '75%'}}></div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-green-900/30 to-green-800/30 border border-green-500/30 rounded-xl p-6 text-center"
              >
                <div className="flex items-center justify-center mb-3">
                  <Server className="w-6 h-6 text-green-400 mr-2" />
                  <span className="text-green-400 font-bold text-2xl">156</span>
                </div>
                <p className="text-gray-300 text-sm">Countries Created</p>
                <div className="mt-2 bg-gray-700 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{width: '90%'}}></div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-purple-900/30 to-purple-800/30 border border-purple-500/30 rounded-xl p-6 text-center"
              >
                <div className="flex items-center justify-center mb-3">
                  <Clock className="w-6 h-6 text-purple-400 mr-2" />
                  <span className="text-purple-400 font-bold text-2xl">99.8%</span>
                </div>
                <p className="text-gray-300 text-sm">Server Uptime</p>
                <div className="mt-2 bg-gray-700 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{width: '99%'}}></div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-red-900/30 to-red-800/30 border border-red-500/30 rounded-xl p-6 text-center"
              >
                <div className="flex items-center justify-center mb-3">
                  <Zap className="w-6 h-6 text-red-400 mr-2" />
                  <span className="text-red-400 font-bold text-2xl">50ms</span>
                </div>
                <p className="text-gray-300 text-sm">Avg Ping</p>
                <div className="mt-2 bg-gray-700 rounded-full h-2">
                  <div className="bg-red-500 h-2 rounded-full" style={{width: '85%'}}></div>
                </div>
              </motion.div>
            </div>

            {/* Server Health Status */}
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-600">
              <h3 className="text-white font-bold mb-4 flex items-center">
                <Activity className="w-5 h-5 mr-2 text-green-400" />
                Server Health Status
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-400">CPU: 45%</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-blue-400">RAM: 6.2GB / 16GB</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                  <span className="text-purple-400">Network: 150 Mbps</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Epic Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.3 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20 rounded-3xl p-8 border-2 border-neon-blue/50 shadow-2xl shadow-neon-blue/20 text-center relative overflow-hidden">
            {/* Animated background effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neon-blue/5 to-transparent animate-pulse"></div>

            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ delay: 2.5, duration: 0.5, type: "spring" }}
                className="mb-6"
              >
                <div className="flex items-center justify-center mb-4">
                  <Crown className="w-12 h-12 text-neon-yellow mr-3" />
                  <h2 className="text-4xl font-bold font-orbitron text-neon-blue">
                    Begin Your Conquest
                  </h2>
                </div>
                <div className="text-6xl mb-4">⚔️ 🌍 ⚔️</div>
              </motion.div>

              <p className="text-gray-300 mb-8 max-w-3xl mx-auto text-lg">
                The world awaits your command! Join Earth.Net and become part of the greatest Minecraft strategy experience ever created.
                Build your empire, form legendary alliances, and etch your name in history!
              </p>

              <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-8">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="/"
                  className="inline-flex items-center bg-gradient-to-r from-neon-blue to-blue-500 text-black font-bold px-10 py-5 rounded-xl hover:from-blue-400 hover:to-neon-blue transition-all duration-300 text-xl shadow-lg shadow-neon-blue/30"
                >
                  <Play className="w-7 h-7 mr-3" />
                  Start Your Empire
                  <ArrowRight className="w-6 h-6 ml-3" />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://discord.gg/pKb9VUcyGH"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-gradient-to-r from-discord-blue to-discord-blue-dark text-white font-bold px-10 py-5 rounded-xl hover:from-discord-blue-dark hover:to-discord-blue transition-all duration-300 text-xl shadow-lg shadow-discord-blue/30"
                >
                  <Users className="w-7 h-7 mr-3" />
                  Join the Legion
                </motion.a>
              </div>

              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-600">
                <p className="text-neon-green font-medium mb-2">🎮 Quick Connect Ready!</p>
                <p className="text-gray-300 text-sm">
                  Server is online and waiting. Your adventure begins in seconds!
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Gaming FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.7 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
            <h2 className="text-3xl font-bold font-orbitron text-neon-purple mb-6 flex items-center">
              <Gamepad2 className="w-8 h-8 mr-3" />
              Conqueror's Handbook
            </h2>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2.9 }}
                className="bg-gradient-to-r from-blue-900/30 to-blue-800/30 border border-blue-500/30 rounded-xl p-6"
              >
                <h3 className="text-blue-300 font-bold mb-3 flex items-center">
                  <Crown className="w-5 h-5 mr-2" />
                  Is Earth.Net free to conquer?
                </h3>
                <p className="text-gray-300">Yes! Earth.Net is completely free to play. Build your empire at no cost. Premium features unlock additional strategic advantages.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 3.0 }}
                className="bg-gradient-to-r from-green-900/30 to-green-800/30 border border-green-500/30 rounded-xl p-6"
              >
                <h3 className="text-green-300 font-bold mb-3 flex items-center">
                  <Server className="w-5 h-5 mr-2" />
                  What version do I need for battle?
                </h3>
                <p className="text-gray-300">We support Minecraft Java Edition 1.20.1+. Make sure you have the latest version to access all conquest features!</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 3.1 }}
                className="bg-gradient-to-r from-purple-900/30 to-purple-800/30 border border-purple-500/30 rounded-xl p-6"
              >
                <h3 className="text-purple-300 font-bold mb-3 flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  How do I claim my territory?
                </h3>
                <p className="text-gray-300">After registering, explore the Earth map and claim unoccupied territories. Build your base, establish borders, and begin your world domination!</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 3.2 }}
                className="bg-gradient-to-r from-red-900/30 to-red-800/30 border border-red-500/30 rounded-xl p-6"
              >
                <h3 className="text-red-300 font-bold mb-3 flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  Can I conquer with my allies?
                </h3>
                <p className="text-gray-300">Absolutely! Form powerful alliances, create joint empires, and participate in epic team battles. The strongest alliances conquer the most!</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 3.3 }}
                className="bg-gradient-to-r from-yellow-900/30 to-yellow-800/30 border border-yellow-500/30 rounded-xl p-6"
              >
                <h3 className="text-yellow-300 font-bold mb-3 flex items-center">
                  <Trophy className="w-5 h-5 mr-2" />
                  What makes Earth.Net legendary?
                </h3>
                <p className="text-gray-300">Earth.Net combines Minecraft building with real-time strategy. Compete for resources, form alliances, and battle for control of the entire planet!</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
