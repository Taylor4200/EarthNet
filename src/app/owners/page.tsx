'use client'

import { motion } from 'framer-motion'
import { Crown, Shield, Wrench, Users, MessageSquare, Gamepad2, Zap, Star, ArrowLeft, Mail, ExternalLink } from 'lucide-react'
import Link from 'next/link'

export default function OwnersPage() {
  const owners = [
    {
      name: "Crzymiata",
      email: "crzymiata@gmail.com",
      title: "Server Founder & Head Designer",
      description: "The visionary founder who created Earth.Net's core concept and leads all creative direction. Responsible for overall server strategy, update planning, anti-cheat monitoring, and community growth initiatives.",
      responsibilities: [
        "Overall server vision and strategy",
        "Creative direction for updates and features",
        "Anti-cheat system monitoring and implementation",
        "Community advertising and growth",
        "Discord alert administration",
        "Major update planning and execution"
      ],
      avatar: "👑",
      color: "from-yellow-500 to-orange-500",
      icon: Crown
    },
    {
      name: "Bluebremlol",
      email: "bluebremlol@gmail.com",
      title: "Co-Founder & Head Moderator",
      description: "The technical co-founder who ensures smooth server operations and system architecture. Oversees all moderation activities and maintains server stability across all platforms.",
      responsibilities: [
        "Server monitoring and maintenance",
        "Discord server management and moderation",
        "Minecraft server administration",
        "Game refereeing and event hosting",
        "Mini-game and sports coordination",
        "Discord bot development and maintenance",
        "System architecture and technical planning"
      ],
      avatar: "⚡",
      color: "from-blue-500 to-purple-500",
      icon: Shield
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20 py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <Crown className="w-12 h-12 text-neon-yellow mr-4" />
            <h1 className="text-5xl md:text-6xl font-bold font-orbitron text-gradient">
              Meet Our Founders
            </h1>
          </div>
          <p className="text-xl text-gray-300 font-dm-sans max-w-3xl mx-auto">
            The visionary leaders behind Earth.Net who work tirelessly to create the ultimate Minecraft strategy experience
          </p>

          {/* Back to Join Page */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-8"
          >
            <Link
              href="/join"
              className="inline-flex items-center bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white px-6 py-3 rounded-lg transition-all duration-300 border border-gray-600"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Server Join
            </Link>
          </motion.div>
        </motion.div>

        {/* Founders Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {owners.map((owner, index) => (
            <motion.div
              key={owner.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 * index }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 border-2 border-gray-700 hover:border-gray-600 transition-all duration-300"
            >
              {/* Owner Header */}
              <div className="text-center mb-8">
                <div className={`w-24 h-24 rounded-full bg-gradient-to-r ${owner.color} flex items-center justify-center text-4xl mx-auto mb-4 ring-4 ring-gray-600`}>
                  {owner.avatar}
                </div>
                <h2 className="text-3xl font-bold font-orbitron text-white mb-2">{owner.name}</h2>
                <p className="text-neon-yellow font-semibold text-lg mb-4">{owner.title}</p>

                {/* Contact */}
                <div className="flex items-center justify-center space-x-4 mb-6">
                  <a
                    href={`mailto:${owner.email}`}
                    className="inline-flex items-center bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white px-4 py-2 rounded-lg transition-all duration-300 text-sm border border-gray-600"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Contact
                  </a>
                  <a
                    href="https://discord.gg/pKb9VUcyGH"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-discord-blue hover:bg-discord-blue-dark text-white px-4 py-2 rounded-lg transition-all duration-300 text-sm"
                  >
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Discord
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h3 className="text-xl font-bold font-orbitron text-neon-blue mb-4 flex items-center">
                  <Star className="w-5 h-5 mr-2" />
                  About
                </h3>
                <p className="text-gray-300 leading-relaxed">{owner.description}</p>
              </div>

              {/* Responsibilities */}
              <div>
                <h3 className="text-xl font-bold font-orbitron text-neon-green mb-4 flex items-center">
                  <owner.icon className="w-5 h-5 mr-2" />
                  Responsibilities
                </h3>
                <div className="grid gap-3">
                  {owner.responsibilities.map((responsibility, respIndex) => (
                    <motion.div
                      key={respIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + (respIndex * 0.1) }}
                      className="bg-gray-800/50 border border-gray-600 rounded-lg p-4 flex items-start space-x-3"
                    >
                      <div className={`w-2 h-2 rounded-full mt-2 ${owner.color.replace('from-', 'bg-').split(' ')[0]}`}></div>
                      <span className="text-gray-300 text-sm">{responsibility}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 border-2 border-neon-blue/50 shadow-2xl shadow-neon-blue/20">
            <h2 className="text-3xl font-bold font-orbitron text-neon-blue mb-6">
              Ready to Join Our Community?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Experience the server that Crzymiata and Bluebremlol have built with passion and dedication.
              Join thousands of players in the ultimate Minecraft Earth strategy experience!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/join"
                className="inline-flex items-center bg-gradient-to-r from-neon-blue to-blue-500 text-black font-bold px-8 py-4 rounded-xl hover:from-blue-400 hover:to-neon-blue transition-all duration-300 text-lg shadow-lg shadow-neon-blue/30"
              >
                <Gamepad2 className="w-6 h-6 mr-2" />
                Join Earth.Net
              </Link>
              <a
                href="https://discord.gg/pKb9VUcyGH"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-discord-blue to-discord-blue-dark text-white font-bold px-8 py-4 rounded-xl hover:from-discord-blue-dark hover:to-discord-blue transition-all duration-300 text-lg shadow-lg shadow-discord-blue/30"
              >
                <MessageSquare className="w-6 h-6 mr-2" />
                Join Discord Community
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
