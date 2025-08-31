'use client'

import { motion } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sphere, useTexture } from '@react-three/drei'
import * as THREE from 'three'
import ClientOnly from './ClientOnly'

// Enhanced time-based state management with smooth transitions
function useTimeBasedTheme() {
  const [timeOfDay, setTimeOfDay] = useState('night')
  const [backgroundGradient, setBackgroundGradient] = useState('from-slate-900 via-indigo-900 to-purple-900')
  const [transitionProgress, setTransitionProgress] = useState(0)

  useEffect(() => {
    const updateTheme = () => {
      const now = new Date()
      const hour = now.getHours()
      const minute = now.getMinutes()
      const totalMinutes = hour * 60 + minute

      // Calculate progress within current hour (0-1)
      const hourProgress = minute / 60
      setTransitionProgress(hourProgress)

      // Define time periods with their gradients
      const timePeriods = {
        midnight: { // 00:00 - 02:00
          name: 'midnight',
          gradient: 'from-slate-950 via-purple-950 to-indigo-950',
          colors: ['#020617', '#2e1065', '#1e1b4b']
        },
        lateNight: { // 02:00 - 04:00
          name: 'lateNight',
          gradient: 'from-slate-900 via-indigo-950 to-purple-950',
          colors: ['#0f172a', '#1e1b4b', '#2e1065']
        },
        preDawn: { // 04:00 - 06:00
          name: 'preDawn',
          gradient: 'from-slate-800 via-indigo-900 to-purple-900',
          colors: ['#1e293b', '#312e81', '#581c87']
        },
        dawn: { // 06:00 - 08:00
          name: 'dawn',
          gradient: 'from-orange-400 via-pink-400 to-purple-500',
          colors: ['#fb923c', '#f472b6', '#a855f7']
        },
        earlyMorning: { // 08:00 - 10:00
          name: 'earlyMorning',
          gradient: 'from-blue-300 via-sky-400 to-cyan-300',
          colors: ['#93c5fd', '#38bdf8', '#67e8f9']
        },
        morning: { // 10:00 - 12:00
          name: 'morning',
          gradient: 'from-sky-300 via-blue-400 to-cyan-400',
          colors: ['#7dd3fc', '#60a5fa', '#22d3ee']
        },
        noon: { // 12:00 - 14:00
          name: 'noon',
          gradient: 'from-blue-400 via-cyan-400 to-blue-500',
          colors: ['#60a5fa', '#22d3ee', '#3b82f6']
        },
        afternoon: { // 14:00 - 16:00
          name: 'afternoon',
          gradient: 'from-blue-500 via-indigo-500 to-purple-600',
          colors: ['#3b82f6', '#6366f1', '#9333ea']
        },
        lateAfternoon: { // 16:00 - 18:00
          name: 'lateAfternoon',
          gradient: 'from-indigo-600 via-purple-600 to-pink-600',
          colors: ['#4f46e5', '#9333ea', '#db2777']
        },
        evening: { // 18:00 - 20:00
          name: 'evening',
          gradient: 'from-purple-700 via-pink-700 to-orange-600',
          colors: ['#7c3aed', '#be185d', '#ea580c']
        },
        dusk: { // 20:00 - 22:00
          name: 'dusk',
          gradient: 'from-slate-800 via-purple-900 to-indigo-900',
          colors: ['#1e293b', '#581c87', '#312e81']
        },
        night: { // 22:00 - 24:00
          name: 'night',
          gradient: 'from-slate-900 via-indigo-900 to-purple-900',
          colors: ['#0f172a', '#312e81', '#581c87']
        }
      }

      // Determine current time period
      let currentPeriod
      if (totalMinutes >= 0 && totalMinutes < 120) currentPeriod = timePeriods.midnight
      else if (totalMinutes >= 120 && totalMinutes < 240) currentPeriod = timePeriods.lateNight
      else if (totalMinutes >= 240 && totalMinutes < 360) currentPeriod = timePeriods.preDawn
      else if (totalMinutes >= 360 && totalMinutes < 480) currentPeriod = timePeriods.dawn
      else if (totalMinutes >= 480 && totalMinutes < 600) currentPeriod = timePeriods.earlyMorning
      else if (totalMinutes >= 600 && totalMinutes < 720) currentPeriod = timePeriods.morning
      else if (totalMinutes >= 720 && totalMinutes < 840) currentPeriod = timePeriods.noon
      else if (totalMinutes >= 840 && totalMinutes < 960) currentPeriod = timePeriods.afternoon
      else if (totalMinutes >= 960 && totalMinutes < 1080) currentPeriod = timePeriods.lateAfternoon
      else if (totalMinutes >= 1080 && totalMinutes < 1200) currentPeriod = timePeriods.evening
      else if (totalMinutes >= 1200 && totalMinutes < 1320) currentPeriod = timePeriods.dusk
      else currentPeriod = timePeriods.night

      setTimeOfDay(currentPeriod.name)
      setBackgroundGradient(currentPeriod.gradient)
    }

    updateTheme()
    // Update every 30 seconds for smooth transitions
    const interval = setInterval(updateTheme, 30000)

    return () => clearInterval(interval)
  }, [])

  return { timeOfDay, backgroundGradient, transitionProgress }
}

function AnimatedGlobe() {
  const meshRef = useRef<THREE.Mesh>(null)
  const { timeOfDay } = useTimeBasedTheme()

  // Load textures based on time of day
  const earthDayTexture = useTexture('/8k_earth_daymap.jpg')
  const earthNightTexture = useTexture('/8k_earth_nightmap.jpg')

  // Determine if it's day based on time period
  const isDay = ['dawn', 'earlyMorning', 'morning', 'noon', 'afternoon', 'lateAfternoon'].includes(timeOfDay)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005
      meshRef.current.rotation.x += 0.002
    }
  })

  return (
    <Sphere ref={meshRef} args={[1, 64, 64]} scale={2}>
      <meshStandardMaterial
        map={isDay ? earthDayTexture : earthNightTexture}
        roughness={0.8}
        metalness={0.1}
      />
    </Sphere>
  )
}

function ParticleField({ timeOfDay, transitionProgress }: { timeOfDay: string, transitionProgress: number }) {
  const points = useRef<THREE.Points>(null)

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y += 0.001
      points.current.rotation.x += 0.0005
    }
  })

  // Determine particle properties based on time of day
  const isDay = ['dawn', 'earlyMorning', 'morning', 'noon', 'afternoon', 'lateAfternoon'].includes(timeOfDay)
  const isEvening = ['evening', 'dusk'].includes(timeOfDay)
  const isNight = ['night', 'lateNight', 'midnight'].includes(timeOfDay)

  // Dynamic particle properties based on time
  let particleColor = "#00ffff"
  let particleOpacity = 0.8
  let particleCount = 200

  if (isEvening) {
    particleColor = "#ff6b35" // Warm orange for evening
    particleOpacity = 0.6
    particleCount = 150
  } else if (isNight) {
    particleColor = "#e0e7ff" // Cool blue-white for night
    particleOpacity = 0.3
    particleCount = 100
  } else if (timeOfDay === 'midnight') {
    particleColor = "#a78bfa" // Purple for midnight
    particleOpacity = 0.2
    particleCount = 80
  } else if (timeOfDay === 'dawn') {
    particleColor = "#fb923c" // Orange for dawn
    particleOpacity = 0.5
    particleCount = 120
  }

  const positions = new Float32Array(particleCount * 3)

  // Use deterministic seed for consistent particle positions
  const seed = 12345
  let currentSeed = seed

  // Simple seeded random function
  const seededRandom = () => {
    currentSeed = (currentSeed * 9301 + 49297) % 233280
    return currentSeed / 233280
  }

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (seededRandom() - 0.5) * 20
    positions[i * 3 + 1] = (seededRandom() - 0.5) * 20
    positions[i * 3 + 2] = (seededRandom() - 0.5) * 20
  }

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={particleCount}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color={particleColor}
        transparent
        opacity={particleOpacity}
        sizeAttenuation={true}
      />
    </points>
  )
}

export default function HeroSection() {
  const { timeOfDay, backgroundGradient, transitionProgress } = useTimeBasedTheme()

  // Determine lighting and visual properties based on time
  const isDay = ['dawn', 'earlyMorning', 'morning', 'noon', 'afternoon', 'lateAfternoon'].includes(timeOfDay)
  const isEvening = ['evening', 'dusk'].includes(timeOfDay)
  const isNight = ['night', 'lateNight', 'midnight'].includes(timeOfDay)

  // Dynamic opacity and lighting based on time
  let backgroundOpacity = 0.95
  let ambientLightIntensity = 0.4
  let directionalLightIntensity = 0.5
  let gridOpacity = 'opacity-15'
  let gridColor = 'text-slate-400'

  if (isDay) {
    backgroundOpacity = 0.85
    ambientLightIntensity = 0.8
    directionalLightIntensity = 1.0
    gridOpacity = 'opacity-50'
    gridColor = 'text-cyan-300'
  } else if (isEvening) {
    backgroundOpacity = 0.9
    ambientLightIntensity = 0.6
    directionalLightIntensity = 0.7
    gridOpacity = 'opacity-30'
    gridColor = 'text-orange-400'
  } else if (timeOfDay === 'midnight') {
    backgroundOpacity = 0.98
    ambientLightIntensity = 0.2
    directionalLightIntensity = 0.3
    gridOpacity = 'opacity-10'
    gridColor = 'text-purple-600'
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic background gradient based on time with smooth transitions */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${backgroundGradient} time-gradient-shift transition-all duration-3000`}
        style={{ opacity: backgroundOpacity }}
      />

      {/* Atmospheric overlay for extra depth */}
      <div
        className={`absolute inset-0 bg-gradient-to-t ${isNight ? 'from-purple-900/20 via-transparent to-blue-900/10' : isEvening ? 'from-orange-900/15 via-transparent to-pink-900/10' : 'from-blue-900/10 via-transparent to-cyan-900/5'} atmospheric-pulse`}
      />

      {/* Animated grid background that changes with time */}
      <div className={`absolute inset-0 earth-grid ${gridOpacity} ${gridColor} grid-shift transition-all duration-3000`} />

      {/* Three.js Canvas - Client only to prevent hydration issues */}
      <ClientOnly>
        <div className="absolute inset-0">
          <Canvas
            camera={{ position: [0, 0, 5], fov: 75 }}
            dpr={[1, 2]}
            performance={{ min: 0.5 }}
          >
            {/* Dynamic lighting based on time of day */}
            <ambientLight
              intensity={ambientLightIntensity}
              color={isNight ? "#4c1d95" : isEvening ? "#ea580c" : "#ffffff"}
            />
            <directionalLight
              position={[10, 10, 5]}
              intensity={directionalLightIntensity}
              color={isNight ? "#7c3aed" : isEvening ? "#f97316" : "#ffffff"}
              castShadow={isDay}
            />

            {/* Additional atmospheric lighting */}
            {isEvening && (
              <pointLight
                position={[-10, -10, -5]}
                intensity={0.3}
                color="#ea580c"
                distance={20}
              />
            )}

            {timeOfDay === 'dawn' && (
              <pointLight
                position={[5, 5, 10]}
                intensity={0.5}
                color="#fb923c"
                distance={15}
              />
            )}

            {timeOfDay === 'midnight' && (
              <>
                <pointLight
                  position={[0, 0, 8]}
                  intensity={0.2}
                  color="#8b5cf6"
                  distance={25}
                />
                <pointLight
                  position={[8, -8, 3]}
                  intensity={0.1}
                  color="#a855f7"
                  distance={30}
                />
              </>
            )}

            <AnimatedGlobe />
            <ParticleField timeOfDay={timeOfDay} transitionProgress={transitionProgress} />
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              autoRotate
              autoRotateSpeed={isNight ? 0.3 : isEvening ? 0.4 : 0.5}
              enableDamping={false}
            />
          </Canvas>
        </div>
      </ClientOnly>

      {/* Content overlay */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <h1 className={`text-6xl md:text-8xl font-bold mb-6 font-orbitron tracking-wider transition-all duration-3000 ${
            isNight ? 'text-gradient' :
            isEvening ? 'bg-gradient-to-r from-orange-400 via-pink-400 to-purple-500 bg-clip-text text-transparent' :
            'bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent'
          }`}>
            Earth.Net
          </h1>
          <p className={`text-xl md:text-2xl mb-8 font-space-grotesk max-w-2xl mx-auto leading-relaxed transition-all duration-3000 ${
            isNight ? 'text-gray-300' :
            isEvening ? 'text-orange-100' :
            'text-blue-100'
          }`}>
            The World's First Minecraft Earth Strategy Server
          </p>
          <p className={`text-lg md:text-xl font-bold font-dm-sans transition-all duration-3000 ${
            isNight ? 'text-purple-300' :
            isEvening ? 'text-orange-300' :
            'text-cyan-300'
          }`}>
            Strategy. Survival. Stakes.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button className="btn-primary glow">
            Join Now
          </button>
          <a href="https://discord.gg/pKb9VUcyGH" target="_blank" rel="noopener noreferrer" className="btn-secondary">
            Discord Server
          </a>
        </motion.div>
      </div>

      {/* Time period indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute top-4 right-4 z-20"
      >
        <div className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm border transition-all duration-3000 ${
          isNight ? 'bg-purple-900/30 border-purple-500/50 text-purple-300' :
          isEvening ? 'bg-orange-900/30 border-orange-500/50 text-orange-300' :
          'bg-blue-900/30 border-cyan-500/50 text-cyan-300'
        }`}>
          {timeOfDay.replace(/([A-Z])/g, ' $1').toLowerCase()}
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-neon-blue rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-neon-blue rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  )
}
