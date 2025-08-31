'use client'

import { motion } from 'framer-motion'
import { Mail, MessageCircle, Users, Building, Shield } from 'lucide-react'

export default function ContactPage() {
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
            Contact Earth.Net
          </h1>
          <p className="text-xl text-gray-300 font-dm-sans max-w-3xl mx-auto">
            Get in touch with our team for support, business inquiries, or general questions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
              <h2 className="text-3xl font-bold font-space-grotesk text-neon-blue mb-6 flex items-center">
                <Mail className="w-8 h-8 mr-3" />
                Contact Information
              </h2>
              
              <div className="space-y-6">
                <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6">
                  <h3 className="text-blue-300 font-bold mb-3 flex items-center">
                    <Shield className="w-5 h-5 mr-2" />
                    Support & General Inquiries
                  </h3>
                  <p className="text-gray-300 mb-2">For technical support, account issues, and general questions:</p>
                  <a href="mailto:helpearthnetmc@gmail.com" className="text-neon-blue hover:text-neon-green text-lg font-semibold">
                    helpearthnetmc@gmail.com
                  </a>
                </div>

                <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-6">
                  <h3 className="text-purple-300 font-bold mb-3 flex items-center">
                    <Building className="w-5 h-5 mr-2" />
                    Company & Business
                  </h3>
                  <p className="text-gray-300 mb-2">For business partnerships, advertising, and corporate inquiries:</p>
                  <a href="mailto:earthnetmc@gmail.com" className="text-neon-blue hover:text-neon-green text-lg font-semibold">
                    earthnetmc@gmail.com
                  </a>
                </div>

                <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6">
                  <h3 className="text-green-300 font-bold mb-3 flex items-center">
                    <Users className="w-5 h-5 mr-2" />
                    Owner Contact
                  </h3>
                  <p className="text-gray-300 mb-2">Direct contact with server owners:</p>
                  <div className="space-y-2">
                    <a href="mailto:crzymiata@gmail.com" className="text-neon-blue hover:text-neon-green text-lg font-semibold block">
                      crzymiata@gmail.com (1st Owner)
                    </a>
                    <a href="mailto:bluebremlol@gmail.com" className="text-neon-blue hover:text-neon-green text-lg font-semibold block">
                      bluebremlol@gmail.com (2nd Owner)
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Discord & Community */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
              <h2 className="text-3xl font-bold font-space-grotesk text-neon-purple mb-6 flex items-center">
                <MessageCircle className="w-8 h-8 mr-3" />
                Join Our Community
              </h2>
              
              <div className="space-y-6">
                <div className="bg-discord-blue/20 border border-discord-blue/30 rounded-lg p-6">
                  <h3 className="text-discord-blue font-bold mb-3">Discord Server</h3>
                  <p className="text-gray-300 mb-4">
                    Join our Discord community for real-time support, announcements, and to connect with other players.
                  </p>
                  <a
                    href="https://discord.gg/pKb9VUcyGH"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-discord-blue text-white font-bold px-6 py-3 rounded-lg hover:bg-discord-blue-dark transition-all duration-300"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Join Discord Server
                  </a>
                </div>

                <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6">
                  <h3 className="text-green-300 font-bold mb-3">Response Times</h3>
                  <div className="space-y-2 text-gray-300">
                    <p>• <strong>Discord:</strong> Usually within minutes</p>
                    <p>• <strong>Email:</strong> Within 24 hours</p>
                    <p>• <strong>Urgent Issues:</strong> Contact Discord for immediate assistance</p>
                  </div>
                </div>

                <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6">
                  <h3 className="text-blue-300 font-bold mb-3">Before Contacting</h3>
                  <div className="space-y-2 text-gray-300 text-sm">
                    <p>• Check our <a href="/help" className="text-neon-blue hover:text-neon-green">Help Center</a> for common solutions</p>
                    <p>• Review our <a href="/terms" className="text-neon-blue hover:text-neon-green">Terms of Service</a></p>
                    <p>• For bugs, use our <a href="/bugs" className="text-neon-blue hover:text-neon-green">Bug Report</a> form</p>
                    <p>• For suggestions, use our <a href="/features" className="text-neon-blue hover:text-neon-green">Feature Request</a> form</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl p-8 border border-gray-600">
            <h3 className="text-2xl font-bold font-space-grotesk text-neon-green mb-4">
              We're Here to Help
            </h3>
            <p className="text-gray-300 font-dm-sans max-w-2xl mx-auto">
              Our team is dedicated to providing excellent support and ensuring the best experience for all Earth.Net players. 
              Don't hesitate to reach out - we're always happy to help!
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
