'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'
import ClientOnly from './ClientOnly'

function AnimatedGlobe() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005
      meshRef.current.rotation.x += 0.002
    }
  })

  return (
    <Sphere ref={meshRef} args={[1, 64, 64]} scale={2}>
      <MeshDistortMaterial
        color="#064e3b"
        attach="material"
        distort={0.3}
        speed={2}
        roughness={0.4}
        metalness={0.8}
      />
    </Sphere>
  )
}

function ParticleField() {
  const points = useRef<THREE.Points>(null)

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y += 0.001
      points.current.rotation.x += 0.0005
    }
  })

  const particleCount = 200 // Reduced for better performance
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
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#00ffff"
        transparent
        opacity={0.6}
      />
    </points>
  )
}

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-earth-dark via-earth-emerald to-earth-purple opacity-90" />

      {/* Animated grid background */}
      <div className="absolute inset-0 earth-grid opacity-20" />

      {/* Three.js Canvas - Client only to prevent hydration issues */}
      <ClientOnly>
        <div className="absolute inset-0">
          <Canvas
            camera={{ position: [0, 0, 5], fov: 75 }}
            dpr={[1, 2]}
            performance={{ min: 0.5 }}
          >
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <AnimatedGlobe />
            <ParticleField />
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              autoRotate
              autoRotateSpeed={0.5}
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
          <h1 className="text-6xl md:text-8xl font-bold mb-6 font-orbitron text-gradient tracking-wider">
            🌍 Earth.Net
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-space-grotesk text-gray-300 max-w-2xl mx-auto leading-relaxed">
            The World's First Minecraft Earth Strategy Server
          </p>
          <p className="text-lg md:text-xl font-bold text-neon-green font-dm-sans">
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
          <button className="btn-secondary">
            Discord Server
          </button>
        </motion.div>
      </div>

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
