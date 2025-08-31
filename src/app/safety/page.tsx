'use client'

import { motion } from 'framer-motion'
import { Shield, AlertTriangle, Users, Heart, Eye, Lock } from 'lucide-react'

export default function SafetyPage() {
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
            Safety Guidelines
          </h1>
          <p className="text-xl text-gray-300 font-dm-sans max-w-3xl mx-auto">
            Your safety and well-being are our top priority. Please read and follow these guidelines to ensure a positive experience for everyone.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Personal Safety */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
              <h2 className="text-3xl font-bold font-space-grotesk text-neon-blue mb-6 flex items-center">
                <Shield className="w-8 h-8 mr-3" />
                Personal Safety
              </h2>
              
              <div className="space-y-6">
                <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6">
                  <h3 className="text-blue-300 font-bold mb-3 flex items-center">
                    <Eye className="w-5 h-5 mr-2" />
                    Protect Your Privacy
                  </h3>
                  <div className="space-y-2 text-gray-300">
                    <p>• Never share personal information (real name, address, phone number)</p>
                    <p>• Use a unique username that doesn't reveal personal details</p>
                    <p>• Be cautious about sharing photos or videos</p>
                    <p>• Report any requests for personal information</p>
                  </div>
                </div>

                <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6">
                  <h3 className="text-green-300 font-bold mb-3 flex items-center">
                    <Users className="w-5 h-5 mr-2" />
                    Safe Social Interaction
                  </h3>
                  <div className="space-y-2 text-gray-300">
                    <p>• Be respectful and kind to other players</p>
                    <p>• Don't meet players in person without proper precautions</p>
                    <p>• Trust your instincts - if something feels wrong, report it</p>
                    <p>• Use our Discord server for community interaction</p>
                  </div>
                </div>

                <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6">
                  <h3 className="text-red-300 font-bold mb-3 flex items-center">
                    <AlertTriangle className="w-5 h-5 mr-2" />
                    Report Suspicious Activity
                  </h3>
                  <div className="space-y-2 text-gray-300">
                    <p>• Report harassment, bullying, or inappropriate behavior</p>
                    <p>• Report players asking for personal information</p>
                    <p>• Report any threats or dangerous behavior</p>
                    <p>• Contact moderators immediately for urgent issues</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Account Security */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
              <h2 className="text-3xl font-bold font-space-grotesk text-neon-purple mb-6 flex items-center">
                <Lock className="w-8 h-8 mr-3" />
                Account Security
              </h2>
              
              <div className="space-y-6">
                <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-6">
                  <h3 className="text-purple-300 font-bold mb-3">Strong Passwords</h3>
                  <div className="space-y-2 text-gray-300">
                    <p>• Use a unique, strong password for your account</p>
                    <p>• Enable two-factor authentication if available</p>
                    <p>• Never share your login credentials</p>
                    <p>• Change your password regularly</p>
                  </div>
                </div>

                <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-6">
                  <h3 className="text-yellow-300 font-bold mb-3">Account Protection</h3>
                  <div className="space-y-2 text-gray-300">
                    <p>• Keep your email address secure and up-to-date</p>
                    <p>• Monitor your account for suspicious activity</p>
                    <p>• Log out from shared computers</p>
                    <p>• Report any unauthorized access immediately</p>
                  </div>
                </div>

                <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6">
                  <h3 className="text-blue-300 font-bold mb-3">Recovery Options</h3>
                  <div className="space-y-2 text-gray-300">
                    <p>• Set up account recovery options</p>
                    <p>• Keep backup contact information current</p>
                    <p>• Save important account information securely</p>
                    <p>• Contact support if you lose access</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Age Guidelines */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
            <h2 className="text-3xl font-bold font-space-grotesk text-neon-green mb-6 flex items-center">
              <Heart className="w-8 h-8 mr-3" />
              Age Guidelines & Parental Guidance
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-neon-green">For Players Under 18</h3>
                <div className="space-y-3 text-gray-300">
                  <p>• Always get parental permission before playing</p>
                  <p>• Never share personal information with other players</p>
                  <p>• Tell a parent or guardian if someone makes you uncomfortable</p>
                  <p>• Use privacy settings to control who can contact you</p>
                  <p>• Take regular breaks from gaming</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-neon-blue">For Parents & Guardians</h3>
                <div className="space-y-3 text-gray-300">
                  <p>• Monitor your child's online activity</p>
                  <p>• Set appropriate time limits for gaming</p>
                  <p>• Talk to your child about online safety</p>
                  <p>• Report any concerning behavior to our team</p>
                  <p>• Consider using parental controls</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl p-8 border border-gray-600">
            <h3 className="text-2xl font-bold font-space-grotesk text-neon-purple mb-4">
              Need Help?
            </h3>
            <p className="text-gray-300 font-dm-sans mb-6 max-w-2xl mx-auto">
              If you encounter any safety concerns or need assistance, our team is here to help. 
              Don't hesitate to reach out through our support channels.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://discord.gg/pKb9VUcyGH"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-discord-blue text-white font-bold px-6 py-3 rounded-lg hover:bg-discord-blue-dark transition-all duration-300"
              >
                <Shield className="w-5 h-5 mr-2" />
                Report Safety Issue
              </a>
              <a
                href="/contact"
                className="inline-flex items-center bg-neon-blue text-black font-bold px-6 py-3 rounded-lg hover:bg-blue-400 transition-all duration-300"
              >
                <Shield className="w-5 h-5 mr-2" />
                Contact Support
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

