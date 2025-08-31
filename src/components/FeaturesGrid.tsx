'use client'

import { motion } from 'framer-motion'
import {
  Globe,
  Dice6,
  Shield,
  Swords,
  Coins,
  Palette,
  Users,
  Target,
  Zap,
  Lock
} from 'lucide-react'

const features = [
  {
    icon: Globe,
    title: "Live Earth Map",
    description: "Navigate and conquer real-world geography in our immersive Earth-scale Minecraft world",
    color: "from-blue-500 to-cyan-500",
    glowColor: "shadow-blue-500/50"
  },
  {
    icon: Dice6,
    title: "Casino-Style Games",
    description: "High-stakes gambling zones with token-based economy and strategic risk management",
    color: "from-purple-500 to-pink-500",
    glowColor: "shadow-purple-500/50",
    adultOnly: true
  },
  {
    icon: Shield,
    title: "Child-Safe Play Zones",
    description: "Protected areas with parental controls, moderated chat, and family-friendly content",
    color: "from-green-500 to-emerald-500",
    glowColor: "shadow-green-500/50"
  },
  {
    icon: Swords,
    title: "Faction Wars & Strategy",
    description: "Form alliances, declare wars, and engage in large-scale strategic battles",
    color: "from-red-500 to-orange-500",
    glowColor: "shadow-red-500/50"
  },
  {
    icon: Coins,
    title: "Token Trading & Economy",
    description: "Dynamic marketplace with player-driven economy and investment opportunities",
    color: "from-yellow-500 to-amber-500",
    glowColor: "shadow-yellow-500/50"
  },
  {
    icon: Palette,
    title: "Cosmetic Upgrades & Skins",
    description: "Customize your character with exclusive skins, effects, and visual enhancements",
    color: "from-indigo-500 to-purple-500",
    glowColor: "shadow-indigo-500/50"
  },
  {
    icon: Users,
    title: "Community Events",
    description: "Regular tournaments, challenges, and community-driven content creation",
    color: "from-teal-500 to-cyan-500",
    glowColor: "shadow-teal-500/50"
  },
  {
    icon: Target,
    title: "Achievement System",
    description: "Unlock rewards and climb leaderboards with our comprehensive achievement framework",
    color: "from-orange-500 to-red-500",
    glowColor: "shadow-orange-500/50"
  },
  {
    icon: Zap,
    title: "Real-Time Updates",
    description: "Live server events, instant notifications, and dynamic world changes",
    color: "from-cyan-500 to-blue-500",
    glowColor: "shadow-cyan-500/50"
  },
  {
    icon: Lock,
    title: "Advanced Security",
    description: "Military-grade encryption, anti-cheat systems, and comprehensive moderation",
    color: "from-gray-500 to-slate-500",
    glowColor: "shadow-gray-500/50"
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}

export default function FeaturesGrid() {
  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-earth-emerald/10 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron text-gradient mb-6">
            Revolutionary Features
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-dm-sans">
            Experience Minecraft like never before with our cutting-edge features
            designed for strategic gameplay and immersive experiences.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                className={`card group relative overflow-hidden ${feature.glowColor} hover:shadow-2xl`}
              >
                {feature.adultOnly && (
                  <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                    18+
                  </div>
                )}

                <div className="relative z-10">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold font-space-grotesk mb-3 text-white group-hover:text-gradient transition-colors duration-300">
                    {feature.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>

                {/* Animated background effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                {/* Floating particles effect */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.1
                  }}
                  className={`absolute top-4 right-4 w-2 h-2 bg-gradient-to-r ${feature.color} rounded-full blur-sm`}
                />
              </motion.div>
            )
          })}
        </motion.div>

        {/* Call to action below grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-block p-8 bg-gradient-to-r from-earth-blue to-earth-purple rounded-2xl border border-gray-700">
            <h3 className="text-2xl font-bold font-orbitron text-white mb-4">
              Ready to Conquer Earth?
            </h3>
            <p className="text-gray-300 mb-6 max-w-md mx-auto">
              Join thousands of players in the ultimate Minecraft strategy experience.
            </p>
            <button className="btn-primary">
              Start Your Journey
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
