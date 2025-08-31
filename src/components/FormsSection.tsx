'use client'

import { motion } from 'framer-motion'
import { MessageSquare, AlertTriangle, Users, FileText, ArrowRight } from 'lucide-react'

export default function FormsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-3 mb-6">
            <FileText className="w-12 h-12 text-neon-blue" />
            <h2 className="text-4xl md:text-5xl font-bold font-orbitron text-gradient">
              Community Forms
            </h2>
          </div>
          <p className="text-xl text-gray-300 font-dm-sans max-w-3xl mx-auto">
            Submit suggestions, report issues, or apply to join our team
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Suggestion Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-900/20 to-blue-800/20 rounded-2xl p-8 border border-blue-500/30 hover:border-neon-blue transition-all duration-300"
          >
            <div className="flex items-center mb-6">
              <MessageSquare className="w-8 h-8 text-neon-blue mr-3" />
              <h3 className="text-2xl font-bold font-space-grotesk text-neon-blue">
                Suggestions
              </h3>
            </div>
            <div className="text-gray-300 font-dm-sans mb-6">
              <p>We love your feedback! Share your ideas to help improve Earth.Net and make it even better for our community.</p>
            </div>
            <div className="relative w-full h-64 bg-gray-900 rounded-lg overflow-hidden mb-4">
              <iframe
                src="https://docs.google.com/forms/d/1D7bGPWigKAxQ3WkPtO113UZNzYkbrLicEKDcHQ0RMGc/viewform?embedded=true"
                className="w-full h-full"
                frameBorder="0"
                allowFullScreen
                title="Earth.Net Suggestion Form"
              />
            </div>
            <div className="text-center">
              <a
                href="https://docs.google.com/forms/d/1D7bGPWigKAxQ3WkPtO113UZNzYkbrLicEKDcHQ0RMGc/viewform?edit_requested=true"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-neon-blue text-black font-bold px-6 py-3 rounded-lg hover:bg-blue-400 transition-all duration-300"
              >
                <span>Submit Suggestion</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          </motion.div>

          {/* Report System */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-red-900/20 to-red-800/20 rounded-2xl p-8 border border-red-500/30 hover:border-neon-purple transition-all duration-300"
          >
            <div className="flex items-center mb-6">
              <AlertTriangle className="w-8 h-8 text-red-400 mr-3" />
              <h3 className="text-2xl font-bold font-space-grotesk text-red-400">
                Report Issues
              </h3>
            </div>
            <div className="text-gray-300 font-dm-sans mb-6">
              <p>Help us maintain a safe and fair environment by reporting rule violations, bugs, or other issues you encounter.</p>
            </div>
            <div className="relative w-full h-64 bg-gray-900 rounded-lg overflow-hidden mb-4">
              <iframe
                src="https://docs.google.com/forms/d/1T86aqMz42HjxadZTBw1A6pleDb5yw4qwKdO6a9pvVzg/viewform?embedded=true"
                className="w-full h-full"
                frameBorder="0"
                allowFullScreen
                title="Earth.Net Report System"
              />
            </div>
            <div className="text-center">
              <a
                href="https://docs.google.com/forms/d/1T86aqMz42HjxadZTBw1A6pleDb5yw4qwKdO6a9pvVzg/viewform?edit_requested=true"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-red-500 text-white font-bold px-6 py-3 rounded-lg hover:bg-red-600 transition-all duration-300"
              >
                <span>Report Issue</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          </motion.div>

          {/* Team Application */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-green-900/20 to-green-800/20 rounded-2xl p-8 border border-green-500/30 hover:border-neon-green transition-all duration-300"
          >
            <div className="flex items-center mb-6">
              <Users className="w-8 h-8 text-neon-green mr-3" />
              <h3 className="text-2xl font-bold font-space-grotesk text-neon-green">
                Join Our Team
              </h3>
            </div>
            <div className="text-gray-300 font-dm-sans mb-6">
              <p>Interested in becoming part of the Earth.Net team? Apply to join our staff and help shape the future of our server.</p>
            </div>
            <div className="relative w-full h-64 bg-gray-900 rounded-lg overflow-hidden mb-4">
              <iframe
                src="https://docs.google.com/forms/d/1aR7YbOEcuV_7nMrRdrkJrrh8qeMCuhW1o7JZ3GEdvwc/viewform?embedded=true"
                className="w-full h-full"
                frameBorder="0"
                allowFullScreen
                title="Earth.Net Team Application"
              />
            </div>
            <div className="text-center">
              <a
                href="https://docs.google.com/forms/d/1aR7YbOEcuV_7nMrRdrkJrrh8qeMCuhW1o7JZ3GEdvwc/viewform?edit_requested=true"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-neon-green text-black font-bold px-6 py-3 rounded-lg hover:bg-green-400 transition-all duration-300"
              >
                <span>Apply Now</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl p-8 border border-gray-600">
            <h3 className="text-2xl font-bold font-space-grotesk text-neon-purple mb-4">
              Get Involved with Earth.Net
            </h3>
            <p className="text-gray-300 font-dm-sans mb-6 max-w-2xl mx-auto">
              Your voice matters! Whether you want to suggest improvements, report issues, or join our team, 
              these forms help us build a better Earth.Net community together.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                <h4 className="text-blue-300 font-bold mb-2">Suggestions</h4>
                <p className="text-sm text-gray-400">Share ideas to improve the server</p>
              </div>
              <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
                <h4 className="text-red-300 font-bold mb-2">Reports</h4>
                <p className="text-sm text-gray-400">Report bugs, violations, or issues</p>
              </div>
              <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                <h4 className="text-green-300 font-bold mb-2">Applications</h4>
                <p className="text-sm text-gray-400">Join our staff team</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
