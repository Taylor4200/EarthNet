'use client'

import { motion } from 'framer-motion'
import { Shield, Eye, Users, Coins, Lock, Mail, Globe } from 'lucide-react'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-earth-dark text-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Shield className="w-12 h-12 text-neon-green" />
            <h1 className="text-4xl md:text-5xl font-bold font-orbitron text-gradient">
              Privacy Policy
            </h1>
          </div>
          <p className="text-xl text-gray-300 font-dm-sans">
            Effective Date: August 27th 2025
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="prose prose-invert max-w-none"
        >
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 mb-8">
            <h2 className="text-2xl font-bold font-space-grotesk text-neon-blue mb-4 flex items-center">
              <Eye className="w-6 h-6 mr-3" />
              1. Information We Collect
            </h2>
            <div className="text-gray-300 font-dm-sans space-y-4">
              <p>We may collect the following types of information:</p>
              
              <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                <h3 className="text-blue-300 font-bold mb-2">A. Account & Gameplay Data</h3>
                <ul className="space-y-1">
                  <li>• Minecraft username & UUID</li>
                  <li>• IP address (for security & moderation)</li>
                  <li>• In-game activity logs (e.g., chat, commands, time played)</li>
                  <li>• Purchases made through our store</li>
                </ul>
              </div>

              <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4">
                <h3 className="text-purple-300 font-bold mb-2">B. Optional Data</h3>
                <ul className="space-y-1">
                  <li>• Email address (for support or purchases)</li>
                  <li>• Discord ID (if linked)</li>
                  <li>• Age or date of birth (for age-restricted features)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 mb-8">
            <h2 className="text-2xl font-bold font-space-grotesk text-neon-green mb-4 flex items-center">
              <Shield className="w-6 h-6 mr-3" />
              2. How We Use Your Data
            </h2>
            <div className="text-gray-300 font-dm-sans space-y-4">
              <p>We use collected data for purposes including:</p>
              <ul className="space-y-2 ml-4">
                <li>• Moderation and rule enforcement</li>
                <li>• Enabling gameplay features</li>
                <li>• Processing in-game purchases</li>
                <li>• Personalizing gameplay experience</li>
                <li>• Restricting access to 18+ gambling content</li>
                <li>• Preventing fraud, cheating, or abuse</li>
              </ul>
              <p className="text-green-300 font-bold">We do not sell or rent your personal information to third parties.</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 mb-8">
            <h2 className="text-2xl font-bold font-space-grotesk text-neon-green mb-4 flex items-center">
              <Users className="w-6 h-6 mr-3" />
              3. Children's Privacy & Safety
            </h2>
            <div className="text-gray-300 font-dm-sans space-y-4">
              <p>Earth.Net is committed to protecting minors on our platform.</p>
              
              <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                <h3 className="text-green-300 font-bold mb-2">If you are under 13:</h3>
                <ul className="space-y-1">
                  <li>• You may not provide personal information (e.g., email, Discord)</li>
                  <li>• Your chat is filtered and monitored</li>
                  <li>• Gambling features are disabled</li>
                  <li>• Your account is treated as a child account under COPPA/GDPR-K</li>
                </ul>
              </div>

              <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                <h3 className="text-blue-300 font-bold mb-2">Parental Rights:</h3>
                <p>Parents/legal guardians can:</p>
                <ul className="space-y-1">
                  <li>• Request to review their child's data</li>
                  <li>• Request deletion of their child's data</li>
                  <li>• Revoke consent at any time</li>
                </ul>
                <p className="text-sm mt-2">To do so, contact: <a href="mailto:helpearthnetmc@gmail.com" className="text-neon-blue hover:text-neon-green">helpearthnetmc@gmail.com</a></p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 mb-8">
            <h2 className="text-2xl font-bold font-space-grotesk text-neon-purple mb-4 flex items-center">
              <Coins className="w-6 h-6 mr-3" />
              4. Gambling Features (18+)
            </h2>
            <div className="text-gray-300 font-dm-sans space-y-4">
              <p>Some features on Earth.Net include simulated gambling games, such as:</p>
              <ul className="space-y-2 ml-4">
                <li>• In-game casinos</li>
                <li>• Lottery-style draws</li>
                <li>• Item risk mechanics</li>
              </ul>
              <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
                <p className="text-red-300 font-bold">Access to gambling content is strictly limited to users aged 18 or older. We may request age confirmation before granting access. These features are fully virtual, and no real-money gambling is allowed or supported.</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 mb-8">
            <h2 className="text-2xl font-bold font-space-grotesk text-neon-blue mb-4">5. Cookies & Analytics</h2>
            <div className="text-gray-300 font-dm-sans space-y-4">
              <p>Earth.Net may use basic cookies and server analytics to:</p>
              <ul className="space-y-2 ml-4">
                <li>• Measure server performance</li>
                <li>• Detect abuse or exploits</li>
                <li>• Improve gameplay features</li>
              </ul>
              <p className="text-green-300 font-bold">No third-party trackers or advertising cookies are used.</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 mb-8">
            <h2 className="text-2xl font-bold font-space-grotesk text-neon-green mb-4">6. Sharing of Information</h2>
            <div className="text-gray-300 font-dm-sans space-y-4">
              <p>We may share information in limited cases:</p>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-600">
                  <thead>
                    <tr className="bg-gray-800">
                      <th className="border border-gray-600 p-3 text-left">Purpose</th>
                      <th className="border border-gray-600 p-3 text-left">Shared With</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-600 p-3">Legal compliance</td>
                      <td className="border border-gray-600 p-3">Law enforcement (if required)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-600 p-3">Server hosting and infrastructure</td>
                      <td className="border border-gray-600 p-3">Hosting providers</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-600 p-3">Payment processing</td>
                      <td className="border border-gray-600 p-3">Secure payment gateways</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-600 p-3">Moderation or community safety</td>
                      <td className="border border-gray-600 p-3">Trusted Earth.Net staff only</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <p className="text-sm text-gray-400">All third-party services we use are compliant with modern data protection laws.</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 mb-8">
            <h2 className="text-2xl font-bold font-space-grotesk text-neon-purple mb-4">7. Data Retention</h2>
            <div className="text-gray-300 font-dm-sans space-y-4">
              <ul className="space-y-2">
                <li>• We retain gameplay data as long as your account is active</li>
                <li>• Chat logs, punishments, and moderation records may be stored for safety</li>
                <li>• Inactive accounts may be deleted after 12 months of no login activity</li>
              </ul>
              <p className="text-green-300">You may request deletion of your data at any time.</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 mb-8">
            <h2 className="text-2xl font-bold font-space-grotesk text-neon-blue mb-4">8. Your Rights</h2>
            <div className="text-gray-300 font-dm-sans space-y-4">
              <p>You have the right to:</p>
              <ul className="space-y-2 ml-4">
                <li>• Access the data we store about you</li>
                <li>• Correct inaccurate data</li>
                <li>• Request deletion of your data</li>
                <li>• Withdraw consent (if applicable)</li>
                <li>• File a complaint with a data protection authority</li>
              </ul>
              <p>To exercise these rights, email: <a href="mailto:bluebremlol@gmail.com" className="text-neon-blue hover:text-neon-green">bluebremlol@gmail.com</a> or <a href="mailto:crzymiata@gmail.com" className="text-neon-blue hover:text-neon-green">crzymiata@gmail.com</a></p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 mb-8">
            <h2 className="text-2xl font-bold font-space-grotesk text-neon-green mb-4 flex items-center">
              <Lock className="w-6 h-6 mr-3" />
              9. Data Security
            </h2>
            <div className="text-gray-300 font-dm-sans space-y-4">
              <p>We implement technical and organizational measures to protect your data, including:</p>
              <ul className="space-y-2 ml-4">
                <li>• Encrypted connections (SSL)</li>
                <li>• Access-controlled staff tools</li>
                <li>• Regular backups and audits</li>
              </ul>
              <p className="text-yellow-300">However, no system is 100% secure. Use the Service at your own risk.</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 mb-8">
            <h2 className="text-2xl font-bold font-space-grotesk text-neon-purple mb-4 flex items-center">
              <Globe className="w-6 h-6 mr-3" />
              10. International Users
            </h2>
            <div className="text-gray-300 font-dm-sans">
              <p>If you are outside of Canada, your data may be processed in CA or other countries where our service providers are located. By using Earth.Net, you consent to this transfer.</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 mb-8">
            <h2 className="text-2xl font-bold font-space-grotesk text-neon-blue mb-4">11. Changes to This Policy</h2>
            <div className="text-gray-300 font-dm-sans">
              <p>We may update this Privacy Policy at any time. You will be notified via our website or in-game notices. Continued use after changes means you accept the updated terms.</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 mb-8">
            <h2 className="text-2xl font-bold font-space-grotesk text-neon-green mb-4 flex items-center">
              <Mail className="w-6 h-6 mr-3" />
              Contact Us
            </h2>
            <div className="text-gray-300 font-dm-sans space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                  <h3 className="text-blue-300 font-bold mb-2">Support & General Inquiries</h3>
                  <p className="text-neon-blue">📧 <a href="mailto:helpearthnetmc@gmail.com" className="hover:text-neon-green">helpearthnetmc@gmail.com</a></p>
                </div>
                <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4">
                  <h3 className="text-purple-300 font-bold mb-2">Company & Business</h3>
                  <p className="text-neon-blue">📧 <a href="mailto:earthnetmc@gmail.com" className="hover:text-neon-green">earthnetmc@gmail.com</a></p>
                </div>
                <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                  <h3 className="text-green-300 font-bold mb-2">Owner Contact</h3>
                  <p className="text-neon-blue">📧 <a href="mailto:crzymiata@gmail.com" className="hover:text-neon-green">crzymiata@gmail.com</a> (1st Owner)</p>
                  <p className="text-neon-blue">📧 <a href="mailto:bluebremlol@gmail.com" className="hover:text-neon-green">bluebremlol@gmail.com</a> (2nd Owner)</p>
                </div>
              </div>
              <div className="bg-gray-800/50 border border-gray-600 rounded-lg p-4">
                <p>🌐 Website: Earth.Net Site</p>
                                  <p>💬 Discord: <a href="https://discord.gg/pKb9VUcyGH" className="text-neon-blue hover:text-neon-green">https://discord.gg/pKb9VUcyGH</a></p>
              </div>
            </div>
          </div>

          <div className="text-center bg-gradient-to-r from-earth-blue to-earth-purple rounded-2xl p-8 border border-gray-700">
            <p className="text-xl font-bold font-orbitron text-white mb-4">Thank you for playing on Earth.Net.</p>
            <p className="text-lg text-gray-300 font-dm-sans">Your privacy and safety are important to us.</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
