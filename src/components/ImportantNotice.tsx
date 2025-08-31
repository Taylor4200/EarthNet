'use client'

import { motion } from 'framer-motion'
import { AlertTriangle, Users, Mail, MessageCircle, Crown, Shield, FileText } from 'lucide-react'

export default function ImportantNotice() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-3 mb-6">
            <AlertTriangle className="w-12 h-12 text-yellow-400" />
            <h2 className="text-4xl md:text-5xl font-bold font-orbitron text-gradient">
              Important Information
            </h2>
          </div>
          <p className="text-xl text-gray-300 font-dm-sans max-w-3xl mx-auto">
            Essential details for joining and playing on Earth.Net
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Account Registration & Support */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-900/20 to-blue-800/20 rounded-2xl p-8 border border-blue-500/30"
          >
            <div className="flex items-center mb-6">
              <Shield className="w-8 h-8 text-neon-blue mr-3" />
              <h3 className="text-2xl font-bold font-space-grotesk text-neon-blue">
                Account Registration & Support
              </h3>
            </div>
            <div className="text-gray-300 font-dm-sans space-y-4">
              <p className="text-lg">
                <strong>Make sure to register as an account</strong> if you're joining to play our server.
              </p>
              <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                <h4 className="text-blue-300 font-bold mb-2 flex items-center">
                  <Mail className="w-5 h-5 mr-2" />
                  Support Options
                </h4>
                <ul className="space-y-2">
                  <li>• Email our lovely support at: <a href="mailto:helpearthnetmc@gmail.com" className="text-neon-blue hover:text-neon-green">helpearthnetmc@gmail.com</a></li>
                  <li>• Create a ticket in the Earth.Net Discord server</li>
                  <li>• Talk to one of our lovely support operators</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Country Creation Limits */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-purple-900/20 to-purple-800/20 rounded-2xl p-8 border border-purple-500/30"
          >
            <div className="flex items-center mb-6">
              <Crown className="w-8 h-8 text-neon-purple mr-3" />
              <h3 className="text-2xl font-bold font-space-grotesk text-neon-purple">
                Country Creation Limits
              </h3>
            </div>
            <div className="text-gray-300 font-dm-sans space-y-4">
              <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4">
                <h4 className="text-purple-300 font-bold mb-2 flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  Standard Limits
                </h4>
                <p>People creating a country are limited to <strong>two people</strong>:</p>
                <ul className="space-y-1 mt-2">
                  <li>• One for the person creating</li>
                  <li>• One for a friend</li>
                </ul>
              </div>
              <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                <h4 className="text-green-300 font-bold mb-2 flex items-center">
                  <Crown className="w-5 h-5 mr-2" />
                  Rank/Subscription Benefits
                </h4>
                <p>If you have a rank or subscription, you can increase that slot to <strong>4 people</strong>.</p>
              </div>
              <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
                <h4 className="text-red-300 font-bold mb-2 flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2" />
                  Alternative Option
                </h4>
                <p>If all countries are taken, register as a <strong>rebel</strong>.</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Verification/Registration Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl p-8 border border-gray-600">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <FileText className="w-8 h-8 text-neon-green" />
                <h3 className="text-2xl font-bold font-space-grotesk text-neon-green">
                  Account Verification & Registration
                </h3>
              </div>
              <p className="text-gray-300 font-dm-sans max-w-2xl mx-auto">
                Complete your registration and verification process to join Earth.Net. This form helps us ensure 
                all players meet our age requirements and understand our server rules.
              </p>
            </div>
            <div className="relative w-full h-96 bg-gray-900 rounded-lg overflow-hidden">
              <iframe
                src="https://docs.google.com/forms/d/1rqb2sUFZYK6ZkMhbfQhMTYDd3NwpuJXkk5vZlucnsEY/viewform?embedded=true"
                className="w-full h-full"
                frameBorder="0"
                allowFullScreen
                title="Earth.Net Verification/Registration Form"
              />
            </div>
            <div className="text-center mt-4">
              <a
                href="https://docs.google.com/forms/d/1rqb2sUFZYK6ZkMhbfQhMTYDd3NwpuJXkk5vZlucnsEY/viewform?edit_requested=true"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-neon-green text-black font-bold px-6 py-3 rounded-lg hover:bg-green-400 transition-all duration-300"
              >
                <span>Open Form in New Tab</span>
                <MessageCircle className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl p-8 border border-gray-600">
            <h3 className="text-2xl font-bold font-space-grotesk text-neon-green mb-6 text-center">
              Contact Information
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="text-center">
                <Mail className="w-8 h-8 text-neon-blue mx-auto mb-2" />
                <h4 className="text-neon-blue font-bold mb-1">Support</h4>
                <a href="mailto:helpearthnetmc@gmail.com" className="text-gray-300 hover:text-neon-green text-sm">
                  helpearthnetmc@gmail.com
                </a>
              </div>
              <div className="text-center">
                <Mail className="w-8 h-8 text-neon-purple mx-auto mb-2" />
                <h4 className="text-neon-purple font-bold mb-1">Company</h4>
                <a href="mailto:earthnetmc@gmail.com" className="text-gray-300 hover:text-neon-green text-sm">
                  earthnetmc@gmail.com
                </a>
              </div>
              <div className="text-center">
                <Mail className="w-8 h-8 text-neon-green mx-auto mb-2" />
                <h4 className="text-neon-green font-bold mb-1">1st Owner</h4>
                <a href="mailto:crzymiata@gmail.com" className="text-gray-300 hover:text-neon-green text-sm">
                  crzymiata@gmail.com
                </a>
              </div>
              <div className="text-center">
                <Mail className="w-8 h-8 text-neon-green mx-auto mb-2" />
                <h4 className="text-neon-green font-bold mb-1">2nd Owner</h4>
                <a href="mailto:bluebremlol@gmail.com" className="text-gray-300 hover:text-neon-green text-sm">
                  bluebremlol@gmail.com
                </a>
              </div>
            </div>
                          <div className="text-center mt-6">
                <a href="https://discord.gg/pKb9VUcyGH" className="inline-flex items-center bg-discord-blue text-white font-bold px-6 py-3 rounded-lg hover:bg-discord-blue-dark transition-all duration-300">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Join Our Discord
                </a>
              </div>
          </div>
        </motion.div>

        {/* Thank You Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-earth-blue to-earth-purple rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold font-orbitron text-white mb-4">
              Thank You - Earth.Net Team
            </h3>
            <p className="text-lg text-gray-300 font-dm-sans">
              Make sure to look at our other sites
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
