'use client'

import { motion } from 'framer-motion'
import { ShoppingCart, Crown, Star, Gift, Shield, Zap, Users, CheckCircle } from 'lucide-react'

export default function ShopPage() {
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
            Shop
          </h1>
          <p className="text-xl text-gray-300 font-dm-sans max-w-3xl mx-auto">
            Unlock premium features and exclusive content to enhance your Earth.Net experience
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Premium Plans */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
              <h2 className="text-3xl font-bold font-space-grotesk text-neon-blue mb-6 flex items-center">
                <Crown className="w-8 h-8 mr-3" />
                Premium Plans
              </h2>
              
              <div className="space-y-6">
                <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6">
                  <h3 className="text-blue-300 font-bold mb-3 flex items-center">
                    <Star className="w-5 h-5 mr-2" />
                    Premium Player
                  </h3>
                  <p className="text-gray-300 mb-4">Enhanced features for dedicated players.</p>
                  <div className="text-2xl font-bold text-blue-300 mb-4">$9.99/month</div>
                  <ul className="text-gray-300 space-y-2 text-sm mb-6">
                    <li>• Extended country creation (4 players)</li>
                    <li>• Priority support</li>
                    <li>• Exclusive cosmetics</li>
                    <li>• Advanced tools</li>
                    <li>• Custom chat colors</li>
                  </ul>
                  <button className="w-full bg-neon-blue text-black font-bold px-6 py-3 rounded-lg hover:bg-blue-400 transition-all duration-300">
                    <ShoppingCart className="w-5 h-5 mr-2 inline" />
                    Purchase
                  </button>
                </div>

                <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-6">
                  <h3 className="text-purple-300 font-bold mb-3 flex items-center">
                    <Crown className="w-5 h-5 mr-2" />
                    VIP Player
                  </h3>
                  <p className="text-gray-300 mb-4">Ultimate experience for serious players.</p>
                  <div className="text-2xl font-bold text-purple-300 mb-4">$19.99/month</div>
                  <ul className="text-gray-300 space-y-2 text-sm mb-6">
                    <li>• All Premium features</li>
                    <li>• VIP server access</li>
                    <li>• Custom commands</li>
                    <li>• Special events access</li>
                    <li>• Direct staff support</li>
                    <li>• Unique particle effects</li>
                  </ul>
                  <button className="w-full bg-neon-purple text-black font-bold px-6 py-3 rounded-lg hover:bg-purple-400 transition-all duration-300">
                    <ShoppingCart className="w-5 h-5 mr-2 inline" />
                    Purchase
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* One-Time Purchases */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
              <h2 className="text-3xl font-bold font-space-grotesk text-neon-purple mb-6 flex items-center">
                <Gift className="w-8 h-8 mr-3" />
                One-Time Purchases
              </h2>
              
              <div className="space-y-6">
                <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6">
                  <h3 className="text-green-300 font-bold mb-3 flex items-center">
                    <Shield className="w-5 h-5 mr-2" />
                    Custom Cape
                  </h3>
                  <p className="text-gray-300 mb-4">Design your own unique cape to stand out in the community.</p>
                  <div className="text-2xl font-bold text-green-300 mb-4">$14.99</div>
                  <button className="w-full bg-neon-green text-black font-bold px-6 py-3 rounded-lg hover:bg-green-400 transition-all duration-300">
                    <ShoppingCart className="w-5 h-5 mr-2 inline" />
                    Purchase
                  </button>
                </div>

                <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6">
                  <h3 className="text-red-300 font-bold mb-3 flex items-center">
                    <Zap className="w-5 h-5 mr-2" />
                    Particle Pack
                  </h3>
                  <p className="text-gray-300 mb-4">Exclusive particle effects to enhance your gameplay experience.</p>
                  <div className="text-2xl font-bold text-red-300 mb-4">$7.99</div>
                  <button className="w-full bg-red-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-red-700 transition-all duration-300">
                    <ShoppingCart className="w-5 h-5 mr-2 inline" />
                    Purchase
                  </button>
                </div>

                <div className="bg-discord-blue/20 border border-discord-blue/30 rounded-lg p-6">
                  <h3 className="text-discord-blue font-bold mb-3 flex items-center">
                    <Users className="w-5 h-5 mr-2" />
                    Discord Role
                  </h3>
                  <p className="text-gray-300 mb-4">Get a special role in our Discord community with exclusive perks.</p>
                  <div className="text-2xl font-bold text-discord-blue mb-4">$4.99</div>
                  <button className="w-full bg-discord-blue text-white font-bold px-6 py-3 rounded-lg hover:bg-discord-blue-dark transition-all duration-300">
                    <ShoppingCart className="w-5 h-5 mr-2 inline" />
                    Purchase
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Payment Methods */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
            <h2 className="text-3xl font-bold font-space-grotesk text-neon-green mb-6 flex items-center">
              <Shield className="w-8 h-8 mr-3" />
              Payment & Security
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6">
                <h3 className="text-blue-300 font-bold mb-3">Secure Payments</h3>
                <p className="text-gray-300 text-sm">All transactions are secured with SSL encryption and processed through trusted payment gateways.</p>
              </div>
              
              <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6">
                <h3 className="text-green-300 font-bold mb-3">Instant Delivery</h3>
                <p className="text-gray-300 text-sm">Digital items are delivered instantly to your account upon successful payment.</p>
              </div>
              
              <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-6">
                <h3 className="text-purple-300 font-bold mb-3">30-Day Refund</h3>
                <p className="text-gray-300 text-sm">Not satisfied? We offer a 30-day money-back guarantee on all purchases.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
            <h2 className="text-3xl font-bold font-space-grotesk text-neon-blue mb-6 flex items-center">
              <CheckCircle className="w-8 h-8 mr-3" />
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6">
                <h3 className="text-blue-300 font-bold mb-3">How do I activate my purchase?</h3>
                <p className="text-gray-300">After payment, you'll receive an email with activation instructions. Follow the link to activate your account.</p>
              </div>
              
              <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6">
                <h3 className="text-green-300 font-bold mb-3">Can I cancel my subscription?</h3>
                <p className="text-gray-300">Yes, you can cancel your subscription at any time through your account settings. You'll keep access until the end of your billing period.</p>
              </div>
              
              <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-6">
                <h3 className="text-purple-300 font-bold mb-3">Are purchases transferable?</h3>
                <p className="text-gray-300">Most purchases are tied to your account and cannot be transferred. Custom items may be transferable under certain conditions.</p>
              </div>
              
              <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6">
                <h3 className="text-red-300 font-bold mb-3">What payment methods do you accept?</h3>
                <p className="text-gray-300">We accept major credit cards, PayPal, and various digital payment methods. All payments are processed securely.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Support */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 text-center">
            <h2 className="text-3xl font-bold font-space-grotesk text-neon-green mb-6">
              Need Help?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              If you have any questions about our products or need assistance with your purchase, our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/help"
                className="inline-flex items-center bg-neon-blue text-black font-bold px-8 py-3 rounded-lg hover:bg-blue-400 transition-all duration-300"
              >
                <CheckCircle className="w-5 h-5 mr-2" />
                Get Help
              </a>
              <a
                href="mailto:helpearthnetmc@gmail.com?subject=Shop Support"
                className="inline-flex items-center bg-neon-green text-black font-bold px-8 py-3 rounded-lg hover:bg-green-400 transition-all duration-300"
              >
                <CheckCircle className="w-5 h-5 mr-2" />
                Contact Support
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
