'use client'

import { motion } from 'framer-motion'
import {
  Globe,
  FileText,
  Shield,
  HelpCircle,
  MessageCircle,
  Mail,
  ExternalLink,
  Heart
} from 'lucide-react'

interface FooterLink {
  name: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  external?: boolean
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks: {
    legal: FooterLink[]
    support: FooterLink[]
    community: FooterLink[]
  } = {
    legal: [
      { name: 'Terms of Service', href: '/terms', icon: FileText },
      { name: 'Privacy Policy', href: '/privacy', icon: Shield },
      { name: 'Safety Guidelines', href: '/safety', icon: HelpCircle }
    ],
    support: [
      { name: 'Help Center', href: '/help', icon: HelpCircle },
      { name: 'Discord Server', href: '/discord', icon: MessageCircle, external: true },
      { name: 'Contact Us', href: '/contact', icon: Mail }
    ],
    community: [
      { name: 'Player Forums', href: '/forums', icon: MessageCircle },
      { name: 'Bug Reports', href: '/bugs', icon: HelpCircle },
      { name: 'Feature Requests', href: '/features', icon: ExternalLink }
    ]
  }

  return (
    <footer className="relative bg-earth-dark border-t border-gray-800">
      {/* Top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-blue to-transparent" />

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-3 mb-4">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="relative"
              >
                <Globe className="w-10 h-10 text-neon-blue" />
                <div className="absolute inset-0 bg-neon-blue/20 rounded-full blur-md" />
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold font-orbitron text-gradient">
                  Earth.Net
                </h3>
                <p className="text-sm text-gray-400 font-dm-sans">
                  Minecraft Strategy Server
                </p>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-6 font-dm-sans">
              The world's first Earth-scale Minecraft server. Strategy, survival, and high-stakes gaming
              in a revolutionary multiplayer experience.
            </p>

            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="/discord"
                className="w-10 h-10 bg-gray-800 hover:bg-neon-blue/20 rounded-lg flex items-center justify-center transition-colors duration-300 border border-gray-700 hover:border-neon-blue"
              >
                <MessageCircle className="w-5 h-5 text-gray-400 hover:text-neon-blue transition-colors" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="/contact"
                className="w-10 h-10 bg-gray-800 hover:bg-neon-green/20 rounded-lg flex items-center justify-center transition-colors duration-300 border border-gray-700 hover:border-neon-green"
              >
                <Mail className="w-5 h-5 text-gray-400 hover:text-neon-green transition-colors" />
              </motion.a>
            </div>
          </motion.div>

          {/* Legal Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold font-space-grotesk text-white mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => {
                const IconComponent = link.icon
                return (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="flex items-center space-x-2 text-gray-400 hover:text-neon-blue transition-colors duration-300 group"
                    >
                      <IconComponent className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      <span className="text-sm">{link.name}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </motion.div>

          {/* Support Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold font-space-grotesk text-white mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => {
                const IconComponent = link.icon
                return (
                  <li key={index}>
                    <a
                      href={link.href}
                      className={link.external ? 'flex items-center space-x-2 text-gray-400 hover:text-neon-green transition-colors duration-300 group' : 'flex items-center space-x-2 text-gray-400 hover:text-neon-blue transition-colors duration-300 group'}
                    >
                      <IconComponent className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      <span className="text-sm">{link.name}</span>
                      {link.external && <ExternalLink className="w-3 h-3" />}
                    </a>
                  </li>
                )
              })}
            </ul>
          </motion.div>

          {/* Community Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold font-space-grotesk text-white mb-4">Community</h4>
            <ul className="space-y-3">
              {footerLinks.community.map((link, index) => {
                const IconComponent = link.icon
                return (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="flex items-center space-x-2 text-gray-400 hover:text-neon-purple transition-colors duration-300 group"
                    >
                      <IconComponent className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      <span className="text-sm">{link.name}</span>
                      {link.external && <ExternalLink className="w-3 h-3" />}
                    </a>
                  </li>
                )
              })}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>© {currentYear} Earth.Net. All rights reserved.</span>
              <span className="text-gray-600">•</span>
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>for the Minecraft community</span>
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Server Status: <span className="text-neon-green">Online</span></span>
              <span>•</span>
              <span>Version: <span className="text-neon-blue">1.21+</span></span>
              <span>•</span>
              <span>Players: <span className="text-neon-purple">12,847</span></span>
            </div>
          </div>

          {/* Server status indicator */}
          <div className="mt-6 flex justify-center">
            <div className="flex items-center space-x-2 bg-gray-900/50 px-4 py-2 rounded-full border border-gray-700">
              <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse" />
              <span className="text-sm text-gray-300 font-dm-sans">
                All systems operational • Last updated: Just now
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-purple to-transparent" />
    </footer>
  )
}
