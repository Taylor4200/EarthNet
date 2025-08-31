'use client'

import { motion } from 'framer-motion'
import { Play, MessageCircle, ShoppingCart, Users } from 'lucide-react'

export default function CTABanner() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 earth-grid opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-r from-earth-dark via-earth-emerald/20 to-earth-purple/20" />

      {/* Floating geometric shapes */}
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1]
        }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity }
        }}
        className="absolute top-10 left-10 w-20 h-20 border-2 border-neon-blue/30 rounded-full"
      />
      <motion.div
        animate={{
          rotate: -360,
          scale: [1, 1.2, 1]
        }}
        transition={{
          rotate: { duration: 25, repeat: Infinity, ease: "linear" },
          scale: { duration: 5, repeat: Infinity }
        }}
        className="absolute bottom-20 right-20 w-16 h-16 border-2 border-neon-green/30 rounded-lg rotate-45"
      />
      <motion.div
        animate={{
          y: [-20, 20, -20],
          x: [-10, 10, -10]
        }}
        transition={{
          duration: 8,
          repeat: Infinity
        }}
        className="absolute top-1/2 left-1/4 w-12 h-12 bg-neon-purple/20 rounded-full blur-xl"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Main CTA */}
          <div className="mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-bold font-orbitron text-gradient mb-6 leading-tight"
            >
              Are you ready to<br />
              conquer Earth?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-dm-sans leading-relaxed"
            >
              Join the revolution. Build empires. Forge alliances.
              Shape the future of Minecraft multiplayer gaming.
            </motion.p>
          </div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-lg px-10 py-5 flex items-center space-x-3"
            >
              <Play className="w-6 h-6" />
              <span>Play Now</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary text-lg px-10 py-5 flex items-center space-x-3"
            >
              <MessageCircle className="w-6 h-6" />
              <span>Discord</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-bold rounded-full text-lg px-10 py-5 flex items-center space-x-3 border-0"
            >
              <ShoppingCart className="w-6 h-6" />
              <span>Store</span>
            </motion.button>
          </motion.div>

          {/* Stats/Community Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl border border-gray-700 hover:border-neon-blue/50 transition-colors duration-300"
            >
              <Users className="w-12 h-12 text-neon-blue mx-auto mb-4" />
              <div className="text-3xl font-bold font-orbitron text-white mb-2">50K+</div>
              <div className="text-gray-400 font-dm-sans">Active Players</div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl border border-gray-700 hover:border-neon-green/50 transition-colors duration-300"
            >
              <div className="text-3xl font-bold font-orbitron text-white mb-2">24/7</div>
              <div className="text-gray-400 font-dm-sans">Server Uptime</div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl border border-gray-700 hover:border-neon-purple/50 transition-colors duration-300"
            >
              <div className="text-3xl font-bold font-orbitron text-white mb-2">100+</div>
              <div className="text-gray-400 font-dm-sans">Countries</div>
            </motion.div>
          </motion.div>

          {/* Newsletter signup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 max-w-md mx-auto"
          >
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-700">
              <h3 className="text-lg font-bold text-white mb-3 font-space-grotesk">
                Stay Updated
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                Get notified about new features and server events
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-neon-blue transition-colors"
                />
                <button className="btn-primary px-6 py-2 text-sm">
                  Join
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
