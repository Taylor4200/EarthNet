'use client'

import { motion } from 'framer-motion'
import { ShoppingCart, Crown, Star, Gift, Shield, Zap, Users, CheckCircle, Gem, Sparkles, Trophy, Sword, Coins, Diamond, Headphones } from 'lucide-react'

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-blue-900/20 py-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero Marketplace */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, type: "spring", bounce: 0.3 }}
          className="text-center mb-16"
        >
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 border-2 border-neon-purple/50 shadow-2xl shadow-neon-purple/20 mb-8">
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="w-12 h-12 text-neon-purple mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold font-orbitron text-gradient">
                Premium Marketplace
              </h1>
            </div>

            <div className="flex items-center justify-center space-x-8 text-sm text-gray-400 mb-6">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Market: Open</span>
              </div>
              <div className="flex items-center space-x-2">
                <Coins className="w-4 h-4" />
                <span>Daily Deals Active</span>
              </div>
              <div className="flex items-center space-x-2">
                <Diamond className="w-4 h-4" />
                <span>VIP Perks Available</span>
              </div>
            </div>

            <p className="text-xl text-gray-300 font-dm-sans max-w-3xl mx-auto">
              💎 <span className="text-neon-purple">Unlock Your Legendary Potential</span> 💎
              <br />
              Discover exclusive items, premium features, and cosmetic upgrades to dominate the battlefield!
            </p>
          </div>
        </motion.div>

        {/* Featured Products Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-orbitron text-neon-yellow mb-4">⚔️ Legendary Collection ⚔️</h2>
            <p className="text-gray-300">Handpicked premium items for the discerning conqueror</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Premium Player Plan */}
            <motion.div
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-gradient-to-br from-blue-900/30 to-blue-800/30 border-2 border-blue-500/50 rounded-2xl p-8 hover:border-blue-400/70 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-4 right-4 bg-blue-500 text-black font-bold px-3 py-1 rounded-full text-xs">
                BEST SELLER
              </div>

              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Star className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-blue-300 font-bold text-xl mb-2">Premium Warrior</h3>
                <div className="text-3xl font-bold text-blue-400 mb-2">$9.99<span className="text-lg text-gray-400">/month</span></div>
                <div className="text-sm text-gray-400">Enhanced battle capabilities</div>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300 text-sm">Extended country creation (4 players)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300 text-sm">Priority support queue</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300 text-sm">Exclusive cosmetic items</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300 text-sm">Advanced strategic tools</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300 text-sm">Custom chat colors</span>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold px-6 py-4 rounded-xl hover:from-blue-400 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-blue-500/30">
                <ShoppingCart className="w-5 h-5 mr-2 inline" />
                Claim Your Power
              </button>
            </motion.div>

            {/* VIP Player Plan */}
            <motion.div
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-gradient-to-br from-purple-900/30 to-purple-800/30 border-2 border-purple-500/50 rounded-2xl p-8 hover:border-purple-400/70 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold px-3 py-1 rounded-full text-xs">
                MOST POPULAR
              </div>

              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Crown className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-purple-300 font-bold text-xl mb-2">VIP Conqueror</h3>
                <div className="text-3xl font-bold text-purple-400 mb-2">$19.99<span className="text-lg text-gray-400">/month</span></div>
                <div className="text-sm text-gray-400">Ultimate battlefield supremacy</div>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-300 text-sm">All Premium features included</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-300 text-sm">VIP exclusive server access</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-300 text-sm">Custom administrative commands</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-300 text-sm">Early access to special events</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-300 text-sm">Direct staff communication line</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-300 text-sm">Unique particle effect arsenal</span>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white font-bold px-6 py-4 rounded-xl hover:from-purple-400 hover:to-purple-500 transition-all duration-300 shadow-lg shadow-purple-500/30">
                <Trophy className="w-5 h-5 mr-2 inline" />
                Become Legendary
              </button>
            </motion.div>

            {/* Special Bundle */}
            <motion.div
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-gradient-to-br from-red-900/30 to-red-800/30 border-2 border-red-500/50 rounded-2xl p-8 hover:border-red-400/70 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-bold px-3 py-1 rounded-full text-xs">
                LIMITED TIME
              </div>

              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-red-300 font-bold text-xl mb-2">Warlord Bundle</h3>
                <div className="text-3xl font-bold text-red-400 mb-2">$29.99<span className="text-lg text-gray-400"> one-time</span></div>
                <div className="text-sm text-gray-400">Complete cosmetic collection</div>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span className="text-gray-300 text-sm">Custom Warlord armor set</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span className="text-gray-300 text-sm">Exclusive particle effects</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span className="text-gray-300 text-sm">Legendary weapon skins</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span className="text-gray-300 text-sm">VIP Discord role & perks</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span className="text-gray-300 text-sm">Priority feature requests</span>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white font-bold px-6 py-4 rounded-xl hover:from-red-400 hover:to-red-500 transition-all duration-300 shadow-lg shadow-red-500/30">
                <Sword className="w-5 h-5 mr-2 inline" />
                Unleash Power
              </button>
            </motion.div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* One-Time Purchases */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
              <h2 className="text-3xl font-bold font-orbitron text-neon-green mb-6 flex items-center">
                <Gift className="w-8 h-8 mr-3" />
                Cosmetic Collection
              </h2>
              
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="bg-gradient-to-r from-green-900/30 to-green-800/30 border border-green-500/30 rounded-xl p-6"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-green-300 font-bold">Custom Cape Design</h3>
                      <p className="text-gray-300 text-sm">Design your own unique battle cape</p>
                      <div className="text-2xl font-bold text-green-400">$14.99</div>
                    </div>
                  </div>
                  <button className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-bold px-6 py-3 rounded-lg hover:from-green-400 hover:to-green-500 transition-all duration-300">
                    <Gem className="w-5 h-5 mr-2 inline" />
                    Craft Your Cape
                  </button>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  className="bg-gradient-to-r from-red-900/30 to-red-800/30 border border-red-500/30 rounded-xl p-6"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-red-300 font-bold">Particle Effects Pack</h3>
                      <p className="text-gray-300 text-sm">Exclusive battlefield visual effects</p>
                      <div className="text-2xl font-bold text-red-400">$7.99</div>
                    </div>
                </div>
                  <button className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white font-bold px-6 py-3 rounded-lg hover:from-red-400 hover:to-red-500 transition-all duration-300">
                    <Sparkles className="w-5 h-5 mr-2 inline" />
                    Add Visual Impact
                  </button>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0 }}
                  className="bg-gradient-to-r from-blue-900/30 to-blue-800/30 border border-blue-500/30 rounded-xl p-6"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-blue-300 font-bold">Discord VIP Role</h3>
                      <p className="text-gray-300 text-sm">Exclusive community status & perks</p>
                      <div className="text-2xl font-bold text-blue-400">$4.99</div>
                </div>
                  </div>
                  <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold px-6 py-3 rounded-lg hover:from-blue-400 hover:to-blue-500 transition-all duration-300">
                    <Crown className="w-5 h-5 mr-2 inline" />
                    Claim VIP Status
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Trust & Security Hub */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
              <h2 className="text-3xl font-bold font-orbitron text-neon-yellow mb-6 flex items-center">
                <Shield className="w-8 h-8 mr-3" />
                Battle-Tested Security
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-green-900/30 to-green-800/30 border border-green-500/30 rounded-xl p-6 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-green-300 font-bold mb-2">Fort Knox Security</h3>
                  <p className="text-gray-300 text-sm">Military-grade SSL encryption protects all transactions and personal data.</p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-blue-900/30 to-blue-800/30 border border-blue-500/30 rounded-xl p-6 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-white" />
                </div>
                  <h3 className="text-blue-300 font-bold mb-2">Instant Delivery</h3>
                  <p className="text-gray-300 text-sm">Digital items are delivered to your account instantly upon successful payment.</p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-purple-900/30 to-purple-800/30 border border-purple-500/30 rounded-xl p-6 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Crown className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-purple-300 font-bold mb-2">30-Day Guarantee</h3>
                  <p className="text-gray-300 text-sm">Not satisfied? Enjoy our 30-day money-back guarantee on all premium purchases.</p>
                </motion.div>
                </div>

              <div className="mt-8 p-6 bg-gray-800/50 rounded-xl border border-gray-600">
                <h3 className="text-neon-blue font-bold mb-4 flex items-center">
                  <Gem className="w-5 h-5 mr-2" />
                  Payment Methods
                  </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-2">
                      <span className="text-white font-bold text-lg">💳</span>
                    </div>
                    <span className="text-gray-300 text-sm">Credit Cards</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-500 rounded-lg flex items-center justify-center mb-2">
                      <span className="text-white font-bold text-lg">💰</span>
                    </div>
                    <span className="text-gray-300 text-sm">PayPal</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-2">
                      <span className="text-white font-bold text-lg">₿</span>
                    </div>
                    <span className="text-gray-300 text-sm">Crypto</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-2">
                      <span className="text-white font-bold text-lg">🎮</span>
                    </div>
                    <span className="text-gray-300 text-sm">Game Cards</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Conqueror's FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
            <h2 className="text-3xl font-bold font-orbitron text-neon-red mb-6 flex items-center">
              <CheckCircle className="w-8 h-8 mr-3" />
              Conqueror's Compendium
            </h2>
            
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
                className="bg-gradient-to-r from-blue-900/30 to-blue-800/30 border border-blue-500/30 rounded-xl p-6"
              >
                <h3 className="text-blue-300 font-bold mb-3 flex items-center">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  How do I activate my legendary purchase?
                </h3>
                <p className="text-gray-300">After conquering the transaction, you'll receive an email with your activation scroll. Follow the enchanted link to claim your powers instantly.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 }}
                className="bg-gradient-to-r from-green-900/30 to-green-800/30 border border-green-500/30 rounded-xl p-6"
              >
                <h3 className="text-green-300 font-bold mb-3 flex items-center">
                  <Crown className="w-5 h-5 mr-2" />
                  Can I cancel my VIP dominion?
                </h3>
                <p className="text-gray-300">Absolutely, noble warrior! You can cancel your subscription at any time through your account fortress. You'll retain your powers until the end of your current billing cycle.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.7 }}
                className="bg-gradient-to-r from-purple-900/30 to-purple-800/30 border border-purple-500/30 rounded-xl p-6"
              >
                <h3 className="text-purple-300 font-bold mb-3 flex items-center">
                  <Shield className="w-5 h-5 mr-2" />
                  Are my purchases transferable to allies?
                </h3>
                <p className="text-gray-300">Most artifacts are bound to your account. Custom items may be transferred under special conditions, like forging alliances with other conquerors.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8 }}
                className="bg-gradient-to-r from-red-900/30 to-red-800/30 border border-red-500/30 rounded-xl p-6"
              >
                <h3 className="text-red-300 font-bold mb-3 flex items-center">
                  <Coins className="w-5 h-5 mr-2" />
                  What currencies do you accept in your treasury?
                </h3>
                <p className="text-gray-300">We accept major credit cards, PayPal gold, cryptocurrency treasures, and gaming cards. All transactions are secured in our impenetrable vault!</p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Legendary Support Citadel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.0 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-br from-gray-900 via-red-900/20 to-purple-900/20 rounded-3xl p-8 border-2 border-neon-red/50 shadow-2xl shadow-neon-red/20 text-center relative overflow-hidden">
            {/* Animated background effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neon-red/5 to-transparent animate-pulse"></div>

            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ delay: 2.1, duration: 0.5, type: "spring" }}
                className="mb-6"
              >
                <div className="text-6xl mb-4">🏰 ⚔️ 🏰</div>
                <h2 className="text-3xl font-bold font-orbitron text-neon-red mb-4">
                  Legendary Support Citadel
            </h2>
                <div className="text-neon-yellow font-semibold text-lg mb-4">
                  Your Fortress of Aid & Conquest!
                </div>
              </motion.div>

              <p className="text-gray-300 mb-8 max-w-3xl mx-auto text-lg">
                🏰 Our mighty support citadel stands ready to aid you in your quests! From technical fortifications to strategic guidance,
                our elite support warriors are equipped with legendary tools to ensure your victory on Earth.Net!
              </p>

              <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex flex-col items-center"
                >
                  <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-full p-4 mb-4">
                    <Headphones className="w-8 h-8 text-black" />
              </div>
                  <div className="text-center">
                    <div className="text-green-400 font-bold text-lg mb-1">Battlefield Support</div>
                    <div className="text-gray-400 text-sm">24/7 active warriors</div>
              </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex flex-col items-center"
                >
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-full p-4 mb-4">
                    <Shield className="w-8 h-8 text-black" />
              </div>
                  <div className="text-center">
                    <div className="text-blue-400 font-bold text-lg mb-1">Fortress Security</div>
                    <div className="text-gray-400 text-sm">Impenetrable defenses</div>
          </div>
        </motion.div>

        <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex flex-col items-center"
                >
                  <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-full p-4 mb-4">
                    <Zap className="w-8 h-8 text-black" />
                  </div>
                  <div className="text-center">
                    <div className="text-purple-400 font-bold text-lg mb-1">Lightning Response</div>
                    <div className="text-gray-400 text-sm">Swift as thunder</div>
                  </div>
                </motion.div>
              </div>

              <div className="flex flex-col lg:flex-row gap-4 justify-center">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                href="/help"
                  className="inline-flex items-center bg-gradient-to-r from-neon-blue to-blue-500 text-black font-bold px-8 py-4 rounded-xl hover:from-blue-400 hover:to-neon-blue transition-all duration-300 text-lg shadow-lg shadow-neon-blue/30"
                >
                  <Trophy className="w-6 h-6 mr-2" />
                  Seek Wisdom
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                href="mailto:helpearthnetmc@gmail.com?subject=Shop Support"
                  className="inline-flex items-center bg-gradient-to-r from-neon-red to-red-500 text-white font-bold px-8 py-4 rounded-xl hover:from-red-400 hover:to-neon-red transition-all duration-300 text-lg shadow-lg shadow-neon-red/30"
                >
                  <Crown className="w-6 h-6 mr-2" />
                  Summon Champions
                </motion.a>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-600">
                <div className="bg-gray-800/50 rounded-xl p-6">
                  <h3 className="text-neon-yellow font-bold mb-4">⚔️ Your Quest for Support:</h3>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div className="text-center">
                      <div className="text-2xl mb-2">🎯</div>
                      <div className="text-gray-300">Choose your weapon</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl mb-2">📜</div>
                      <div className="text-gray-300">State your mission</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl mb-2">🏆</div>
                      <div className="text-gray-300">Claim your victory</div>
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
