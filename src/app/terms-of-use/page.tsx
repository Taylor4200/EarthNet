'use client'

import { motion } from 'framer-motion'
import { FileText, Shield, AlertTriangle, Users, Coins, Lock, Mail, Globe } from 'lucide-react'

export default function TermsOfUsePage() {
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
            <FileText className="w-12 h-12 text-neon-purple" />
            <h1 className="text-4xl md:text-5xl font-bold font-orbitron text-gradient">
              Terms of Use
            </h1>
          </div>
          <p className="text-xl text-gray-300 font-dm-sans">
            Effective Date: August 27, 2025
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
              1. Eligibility and Age Restrictions
            </h2>
            <div className="text-gray-300 font-dm-sans space-y-4">
              <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                <h3 className="text-blue-300 font-bold mb-2">1.1 Minimum Age</h3>
                <p>Earth.Net is intended for users who are 9+ years of age or 18+ due to in-game gambling features involving virtual items, tokens, or real-money equivalents.</p>
                <p className="mt-2">By using this service, you affirm that:</p>
                <ul className="space-y-1 mt-2">
                  <li>• You are at least 18 years old, or</li>
                  <li>• Or that you are 9+ years of age (can't use gambling areas)</li>
                </ul>
              </div>

              <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                <h3 className="text-green-300 font-bold mb-2">1.2 Children and Underage Users</h3>
                <p>Earth.Net does not knowingly collect or solicit personal information from children under the age of 13. If you are under 13, do not create an account or send any personal information to us.</p>
                <p className="mt-2">Users aged 13–17 may only access Earth.Net under the following conditions:</p>
                <ul className="space-y-1 mt-2">
                  <li>• They are restricted to non-gambling gameplay areas.</li>
                  <li>• They have verified parental or guardian consent, where permitted by law.</li>
                </ul>
                <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-3 mt-3">
                  <p className="text-yellow-300 font-bold">⚠️ We use age-gating and verification tools to enforce these policies.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 mb-8">
            <h2 className="text-2xl font-bold font-space-grotesk text-neon-green mb-4 flex items-center">
              <Lock className="w-6 h-6 mr-3" />
              2. Account Registration
            </h2>
            <div className="text-gray-300 font-dm-sans space-y-4">
              <p>You must register an account to access the game features. You agree to:</p>
              <ul className="space-y-2 ml-4">
                <li>• Provide accurate and complete registration information.</li>
                <li>• Maintain the security of your account credentials.</li>
                <li>• Be responsible for all activity on your account.</li>
              </ul>
              <p className="text-red-300">Earth.Net reserves the right to suspend or terminate accounts that violate these Terms.</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 mb-8">
            <h2 className="text-2xl font-bold font-space-grotesk text-neon-purple mb-4 flex items-center">
              <Coins className="w-6 h-6 mr-3" />
              3. Gambling and In-Game Wagering
            </h2>
            <div className="text-gray-300 font-dm-sans space-y-4">
              <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4">
                <h3 className="text-purple-300 font-bold mb-2">3.1 Gambling Features</h3>
                <p>Certain areas of Earth.Net include virtual gambling games such as:</p>
                <ul className="space-y-2 ml-4 mt-2">
                  <li>• In-game casinos</li>
                  <li>• Loot-based battles with wagered outcomes</li>
                  <li>• Trade or token-based betting systems</li>
                </ul>
                <p className="mt-2">These features are:</p>
                <ul className="space-y-2 ml-4 mt-2">
                  <li>• Strictly restricted to users 18+</li>
                  <li>• Not available in jurisdictions where such features are illegal</li>
                </ul>
                <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-3 mt-3">
                  <p className="text-red-300 font-bold">⚠️ Real money is not required, but Earth.Net may offer purchasable virtual currency or tokens that simulate real-world gambling. Use of these features may be subject to further regional regulations.</p>
                </div>
              </div>

              <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                <h3 className="text-green-300 font-bold mb-2">3.2 Responsible Play</h3>
                <p>We encourage all users to gamble responsibly. Features such as daily limits, self-exclusion, and cooldown timers are available.</p>
                <p className="mt-2">If you believe you have a gambling problem, we encourage you to seek support from organizations such as:</p>
                <ul className="space-y-1 mt-2">
                  <li>• <a href="https://www.begambleaware.org" className="text-neon-blue hover:text-neon-green">https://www.begambleaware.org</a></li>
                  <li>• <a href="https://www.ncpgambling.org" className="text-neon-blue hover:text-neon-green">https://www.ncpgambling.org</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 mb-8">
            <h2 className="text-2xl font-bold font-space-grotesk text-neon-blue mb-4 flex items-center">
              <AlertTriangle className="w-6 h-6 mr-3" />
              4. User Conduct
            </h2>
            <div className="text-gray-300 font-dm-sans space-y-4">
              <p>You agree not to:</p>
              <ul className="space-y-2 ml-4">
                <li>• Use cheats, bots, exploits, or unauthorized third-party tools</li>
                <li>• Harass, threaten, or abuse other players</li>
                <li>• Share offensive or inappropriate content</li>
                <li>• Attempt to circumvent age-gating or gambling restrictions</li>
                <li>• Engage in money laundering or unauthorized real-money trading</li>
              </ul>
              <p className="text-red-300">Violations may lead to suspension, bans, or legal action.</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 mb-8">
            <h2 className="text-2xl font-bold font-space-grotesk text-neon-green mb-4 flex items-center">
              <Shield className="w-6 h-6 mr-3" />
              5. Children's Safety and Safeguards
            </h2>
            <div className="text-gray-300 font-dm-sans space-y-4">
              <p>Earth.Net is committed to ensuring the safety of all players, particularly minors.</p>
              <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                <p>We implement:</p>
                <ul className="space-y-2 ml-4 mt-2">
                  <li>• Age-gating and verification systems</li>
                  <li>• Chat filters and moderation tools</li>
                  <li>• Reporting features for inappropriate behavior</li>
                  <li>• Separate environments for minors (non-gambling zones)</li>
                </ul>
                <p className="mt-3">Parents or guardians may request data access or deletion in compliance with child privacy laws.</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 mb-8">
            <h2 className="text-2xl font-bold font-space-grotesk text-neon-purple mb-4">6. Virtual Items and Purchases</h2>
            <div className="text-gray-300 font-dm-sans space-y-4">
              <p>In-game purchases may include:</p>
              <ul className="space-y-2 ml-4">
                <li>• Cosmetic upgrades</li>
                <li>• Gameplay enhancements</li>
                <li>• Virtual currency for gambling or trading</li>
              </ul>
              <p>Some purchases are refundable. Earth.Net does not guarantee the continued availability of any virtual item or service. Or that you'll be guaranteed Full Refund depending on the item.</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 mb-8">
            <h2 className="text-2xl font-bold font-space-grotesk text-neon-blue mb-4">7. Termination</h2>
            <div className="text-gray-300 font-dm-sans space-y-4">
              <p>We reserve the right to suspend or terminate any account without notice if:</p>
              <ul className="space-y-2 ml-4">
                <li>• You violate these Terms</li>
                <li>• You engage in behavior harmful to other users or the platform</li>
                <li>• You attempt to bypass our age or gambling restrictions</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 mb-8">
            <h2 className="text-2xl font-bold font-space-grotesk text-neon-green mb-4">8. Limitation of Liability</h2>
            <div className="text-gray-300 font-dm-sans space-y-4">
              <p>Earth.Net is provided "as is" and "as available." We are not liable for:</p>
              <ul className="space-y-2 ml-4">
                <li>• Loss of virtual items or currency</li>
                <li>• Downtime or technical issues</li>
                <li>• Damages arising from use of gambling or in-game features</li>
              </ul>
              <p className="text-yellow-300">Some jurisdictions do not allow certain exclusions, so parts of this section may not apply to you.</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 mb-8">
            <h2 className="text-2xl font-bold font-space-grotesk text-neon-blue mb-4">9. Privacy</h2>
            <div className="text-gray-300 font-dm-sans space-y-4">
              <p>Our <a href="/privacy" className="text-neon-blue hover:text-neon-green">Privacy Policy</a> explains how we collect, use, and protect your data. By using Earth.Net, you agree to our data practices, including those related to age-verification and gambling compliance.</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 mb-8">
            <h2 className="text-2xl font-bold font-space-grotesk text-neon-purple mb-4">10. Changes to Terms</h2>
            <div className="text-gray-300 font-dm-sans">
              <p>We may update these Terms at any time. Continued use of Earth.Net after changes are posted indicates your acceptance of the new Terms. Significant changes will be communicated via in-game notices or email (if provided).</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 mb-8">
            <h2 className="text-2xl font-bold font-space-grotesk text-neon-green mb-4 flex items-center">
              <Mail className="w-6 h-6 mr-3" />
              11. Contact Us
            </h2>
            <div className="text-gray-300 font-dm-sans space-y-4">
              <p>If you have questions about these Terms or need help with an account, please contact:</p>
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
            <p className="text-xl font-bold font-orbitron text-white mb-4">By accessing or using Earth.Net, you acknowledge that you have read, understood, and agreed to these Terms.</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
