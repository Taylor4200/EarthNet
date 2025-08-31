/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'orbitron': ['var(--font-orbitron)', 'monospace'],
        'space-grotesk': ['var(--font-space-grotesk)', 'monospace'],
        'inter': ['var(--font-inter)', 'sans-serif'],
        'dm-sans': ['var(--font-dm-sans)', 'sans-serif'],
      },
      colors: {
        'earth-dark': '#0a0a0a',
        'earth-blue': '#1e3a8a',
        'earth-emerald': '#064e3b',
        'earth-purple': '#581c87',
        'neon-blue': '#00ffff',
        'neon-green': '#00ff00',
        'neon-purple': '#ff00ff',
        'discord-blue': '#5865f2',
        'discord-blue-dark': '#4752c4',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'earth-gradient': 'linear-gradient(135deg, #0a0a0a 0%, #064e3b 50%, #581c87 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'rotate-slow': 'rotate 20s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(0, 255, 255, 0.5)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          from: { boxShadow: '0 0 20px rgba(0, 255, 255, 0.5)' },
          to: { boxShadow: '0 0 40px rgba(0, 255, 255, 1)' },
        },
      },
    },
  },
  plugins: [],
}
