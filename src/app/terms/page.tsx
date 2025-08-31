'use client'

import { motion } from 'framer-motion'
import { FileText, Shield, AlertTriangle, Users, Coins, Lock } from 'lucide-react'

export default function TermsPage() {
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
            <FileText className="w-12 h-12 text-neon-blue" />
            <h1 className="text-4xl md:text-5xl font-bold font-orbitron text-gradient">
              Terms of Service
            </h1>
          </div>
          <p className="text-xl text-gray-300 font-dm-sans">
            Effective Date: August 17th 2025
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
              <Users className="w-6 h-6 mr-3" />
              1. Eligibility
            </h2>
            <ul className="text-gray-300 space-y-2 font-dm-sans">
              <li>• You must be at least 9+ years old to play on Earth.Net.</li>
              <li>• Users under 18 years old are strictly prohibited from accessing any features marked as 18+, including gambling-related content.</li>
              <li>• By using the Server, you affirm that you meet the age requirements and are legally allowed to play under the laws of your jurisdiction.</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 mb-8">
            <h2 className="text-2xl font-bold font-space-grotesk text-neon-purple mb-4 flex items-center">
              <Coins className="w-6 h-6 mr-3" />
              2. Gambling Features (18+ Only)
            </h2>
            <div className="text-gray-300 font-dm-sans space-y-4">
              <p>Earth.Net offers in-game gambling features which may include, but are not limited to:</p>
              <ul className="space-y-2 ml-4">
                <li>• Casino-style mini-games</li>
                <li>• Item-based lotteries or raffles</li>
                <li>• Betting on in-game events</li>
              </ul>
              <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4 mt-4">
                <p className="text-red-300 font-bold">⚠️ NO REAL MONEY GAMBLING IS ALLOWED. Earth.Net does not allow nor endorse any real-money transactions for gambling.</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 mb-8">
            <h2 className="text-2xl font-bold font-space-grotesk text-neon-green mb-4 flex items-center">
              <Shield className="w-6 h-6 mr-3" />
              3. Child Protection & Safety
            </h2>
            <div className="text-gray-300 font-dm-sans space-y-4">
              <p>We are committed to providing a safe, respectful, and age-appropriate environment for all users.</p>
              <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                <h3 className="text-green-300 font-bold mb-2">For players under 18:</h3>
                <ul className="space-y-1">
                  <li>• All gambling features are disabled</li>
                  <li>• Chat filters are active by default</li>
                  <li>• Moderators are trained to monitor and report inappropriate behavior</li>
                  <li>• Personal data from minors is handled in compliance with COPPA and other applicable laws</li>
                </ul>
              </div>
              <p className="text-sm text-gray-400">To request child data removal, please contact: <a href="mailto:helpearthnetmc@gmail.com" className="text-neon-blue hover:text-neon-green">helpearthnetmc@gmail.com</a></p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 mb-8">
            <h2 className="text-2xl font-bold font-space-grotesk text-neon-blue mb-4 flex items-center">
              <AlertTriangle className="w-6 h-6 mr-3" />
              4. Code of Conduct
            </h2>
            <div className="text-gray-300 font-dm-sans space-y-4">
              <p>By playing on Earth.Net, you agree to:</p>
              <ul className="space-y-2 ml-4">
                <li>• Treat all players with respect</li>
                <li>• Avoid cheating, exploiting, or using unauthorized mods</li>
                <li>• Refrain from harassment, hate speech, or inappropriate behavior</li>
                <li>• Not attempt to bypass age-restricted content</li>
              </ul>
              <p className="text-red-300">Violation of these rules may result in warnings, temporary bans, or permanent account termination.</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 mb-8">
            <h2 className="text-2xl font-bold font-space-grotesk text-neon-purple mb-4">5. In-Game Purchases</h2>
            <div className="text-gray-300 font-dm-sans space-y-4">
              <p>Earth.Net may offer in-game purchases such as:</p>
              <ul className="space-y-2 ml-4">
                <li>• Cosmetic items</li>
                <li>• Currency packs</li>
                <li>• Server perks</li>
              </ul>
              <p>Purchases are final and some purchases are refundable, and we do not guarantee full refund for some items.</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 mb-8">
            <h2 className="text-2xl font-bold font-space-grotesk text-neon-green mb-4 flex items-center">
              <Lock className="w-6 h-6 mr-3" />
              6. Account Responsibility
            </h2>
            <div className="text-gray-300 font-dm-sans space-y-2">
              <p>• You are responsible for maintaining the security of your account.</p>
              <p>• Sharing accounts or using alternate accounts to bypass bans is prohibited.</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 mb-8">
            <h2 className="text-2xl font-bold font-space-grotesk text-neon-blue mb-4">7. Data Collection & Privacy</h2>
            <div className="text-gray-300 font-dm-sans space-y-4">
              <p>We collect limited data necessary for gameplay, moderation, and account management.</p>
              <ul className="space-y-2 ml-4">
                <li>• No personal identifying information is collected from children without parental consent</li>
                <li>• By using the server, you consent to the collection of anonymized analytics for server improvement</li>
              </ul>
              <p>See our <a href="/privacy" className="text-neon-blue hover:text-neon-green">Privacy Policy</a> for full details.</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 mb-8">
            <h2 className="text-2xl font-bold font-space-grotesk text-neon-purple mb-4">8. Server Moderation & Enforcement</h2>
            <div className="text-gray-300 font-dm-sans space-y-4">
              <p>Earth.Net staff may:</p>
              <ul className="space-y-2 ml-4">
                <li>• Monitor chat and gameplay for rule violations</li>
                <li>• Apply disciplinary action at their discretion</li>
                <li>• Update rules and Terms as needed</li>
              </ul>
              <p className="text-red-300">All enforcement decisions are final.</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 mb-8">
            <h2 className="text-2xl font-bold font-space-grotesk text-neon-green mb-4">9. Limitation of Liability</h2>
            <div className="text-gray-300 font-dm-sans space-y-4">
              <p>Earth.Net and its staff are not responsible for:</p>
              <ul className="space-y-2 ml-4">
                <li>• User-generated content</li>
                <li>• Loss of progress or in-game items</li>
                <li>• Downtime, crashes, or data loss</li>
              </ul>
              <p>The service is provided "as is" with no warranties.</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 mb-8">
            <h2 className="text-2xl font-bold font-space-grotesk text-neon-blue mb-4">10. Changes to Terms</h2>
            <div className="text-gray-300 font-dm-sans">
              <p>We may modify these Terms at any time. Continued use of the server constitutes acceptance of the revised Terms.</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 mb-8">
            <h2 className="text-2xl font-bold font-space-grotesk text-neon-green mb-4">Contact Us</h2>
            <div className="text-gray-300 font-dm-sans space-y-4">
              <p>For questions, concerns, or reporting violations, contact:</p>
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
            </div>
          </div>

          <div className="text-center bg-gradient-to-r from-earth-blue to-earth-purple rounded-2xl p-8 border border-gray-700">
            <p className="text-xl font-bold font-orbitron text-white mb-4">By joining Earth.Net, you agree to abide by these Terms of Service.</p>
            <p className="text-lg text-gray-300 font-dm-sans">Play fair. Stay safe. Have fun.</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
