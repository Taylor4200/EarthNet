'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Play, MessageSquare, ShoppingCart, HelpCircle, Mail, Users, Lightbulb, Bug, Shield, FileText, ExternalLink, Crown } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = (dropdownName: string) => {
    // Clear any existing timeout
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
      hoverTimeoutRef.current = null
    }
    // Immediately show dropdown
    setActiveDropdown(dropdownName)
  }

  const handleMouseLeave = () => {
    // Set timeout to hide dropdown after 150ms delay
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 150)
  }

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current)
      }
    }
  }, [])

  const navigation = [
    {
      name: 'Join',
      href: '/join',
      icon: Play,
      description: 'Start your Earth.Net journey'
    },
    {
      name: 'Community',
      icon: Users,
      items: [
        { name: 'Discord', href: 'https://discord.gg/pKb9VUcyGH', icon: MessageSquare, external: true },
        { name: 'Forums', href: '/forums', icon: MessageSquare },
        { name: 'Help Center', href: '/help', icon: HelpCircle },
        { name: 'Our Team', href: '/owners', icon: Crown },
      ]
    },
    {
      name: 'Support',
      icon: Shield,
      items: [
        { name: 'Bug Reports', href: '/bugs', icon: Bug },
        { name: 'Feature Requests', href: '/features', icon: Lightbulb },
        { name: 'Contact Us', href: '/contact', icon: Mail },
      ]
    },
    {
      name: 'Legal',
      icon: FileText,
      items: [
        { name: 'Terms of Service', href: '/terms', icon: FileText },
        { name: 'Privacy Policy', href: '/privacy', icon: FileText },
        { name: 'Safety Guidelines', href: '/safety', icon: Shield },
      ]
    },
    {
      name: 'Shop',
      href: '/shop',
      icon: ShoppingCart,
      description: 'Premium features & cosmetics'
    },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-gray-900/95 to-gray-800/95 backdrop-blur-md border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <div className="relative w-10 h-10">
                <Image
                  src="/EArthnetlogo1 (2).png"
                  alt="Earth.Net Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-xl font-bold font-orbitron text-gradient">
                Earth.Net
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:flex items-center space-x-8"
          >
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.href ? (
                  // Direct link
                  <Link
                    href={item.href}
                    className="flex items-center space-x-2 text-gray-300 hover:text-neon-blue transition-colors duration-300 font-dm-sans group"
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                    {item.description && (
                      <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-gray-800 px-2 py-1 rounded border border-gray-600">
                        {item.description}
                      </span>
                    )}
                  </Link>
                ) : (
                  // Dropdown
                  <div
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(item.name)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button className="flex items-center space-x-2 text-gray-300 hover:text-neon-blue transition-colors duration-300 font-dm-sans">
                      <item.icon className="w-4 h-4" />
                      <span>{item.name}</span>
                      <svg className="w-3 h-3 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {/* Dropdown Menu */}
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-1 w-56 bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-lg shadow-xl backdrop-blur-md"
                        onMouseEnter={() => handleMouseEnter(item.name)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div className="py-2">
                          {item.items?.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              target={subItem.external ? "_blank" : undefined}
                              rel={subItem.external ? "noopener noreferrer" : undefined}
                              className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-neon-blue hover:bg-gray-800/50 transition-colors duration-200"
                            >
                              <subItem.icon className="w-4 h-4" />
                              <span>{subItem.name}</span>
                              {subItem.external && <ExternalLink className="w-3 h-3 ml-auto" />}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </motion.nav>

          {/* Mobile menu button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:hidden"
          >
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-neon-blue transition-colors duration-300"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </motion.div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-gray-700 bg-gray-900/95 backdrop-blur-md"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.href ? (
                    <Link
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center space-x-3 px-3 py-2 text-gray-300 hover:text-neon-blue hover:bg-gray-800/50 rounded-lg transition-colors duration-300 font-dm-sans"
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.name}</span>
                    </Link>
                  ) : (
                    <div>
                      <div className="flex items-center space-x-3 px-3 py-2 text-gray-300 font-dm-sans">
                        <item.icon className="w-5 h-5" />
                        <span>{item.name}</span>
                      </div>
                      <div className="ml-6 space-y-1">
                        {item.items?.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            target={subItem.external ? "_blank" : undefined}
                            rel={subItem.external ? "noopener noreferrer" : undefined}
                            onClick={() => setIsMenuOpen(false)}
                            className="flex items-center space-x-3 px-3 py-2 text-gray-400 hover:text-neon-blue hover:bg-gray-800/50 rounded-lg transition-colors duration-300 font-dm-sans text-sm"
                          >
                            <subItem.icon className="w-4 h-4" />
                            <span>{subItem.name}</span>
                            {subItem.external && <ExternalLink className="w-3 h-3 ml-auto" />}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </header>
  )
}
