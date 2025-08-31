'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Box, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'
import ClientOnly from './ClientOnly'

function AnimatedTerrain() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01
    }
  })

  return (
    <group ref={groupRef}>
      {/* Main terrain block */}
      <Box args={[2, 1.5, 2]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color="#1e3a8a"
          attach="material"
          distort={0.2}
          speed={1}
          roughness={0.8}
          metalness={0.2}
        />
      </Box>

      {/* Smaller blocks representing structures */}
      <Box args={[0.5, 0.8, 0.5]} position={[1.2, 0.4, 0.8]}>
        <MeshDistortMaterial
          color="#064e3b"
          attach="material"
          distort={0.1}
          speed={0.5}
          roughness={0.9}
        />
      </Box>

      <Box args={[0.4, 1.2, 0.4]} position={[-1, 0.6, -0.5]}>
        <MeshDistortMaterial
          color="#581c87"
          attach="material"
          distort={0.15}
          speed={0.8}
          roughness={0.7}
        />
      </Box>

      {/* Floating particles */}
      <Box args={[0.1, 0.1, 0.1]} position={[1.5, 1, 1]}>
        <meshBasicMaterial color="#00ffff" />
      </Box>
      <Box args={[0.08, 0.08, 0.08]} position={[-1.3, 1.2, -0.8]}>
        <meshBasicMaterial color="#00ff00" />
      </Box>
      <Box args={[0.06, 0.06, 0.06]} position={[0.8, -0.8, 1.2]}>
        <meshBasicMaterial color="#ff00ff" />
      </Box>
    </group>
  )
}

export default function AboutSection() {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* 3D Terrain Visualization */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="h-96 lg:h-[500px] relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-earth-blue to-earth-purple rounded-2xl overflow-hidden">
              <ClientOnly>
                <Canvas
                  camera={{ position: [3, 2, 3], fov: 60 }}
                  dpr={[1, 2]}
                  performance={{ min: 0.5 }}
                >
                  <ambientLight intensity={0.6} />
                  <directionalLight position={[5, 5, 5]} intensity={0.8} />
                  <pointLight position={[-5, 5, -5]} intensity={0.5} color="#00ffff" />
                  <AnimatedTerrain />
                  <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    autoRotate
                    autoRotateSpeed={1}
                    enableDamping={false}
                  />
                </Canvas>
              </ClientOnly>
            </div>

            {/* Floating tech elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-4 right-4 text-neon-blue text-sm font-mono"
            >
              EARTH_SCALE_MAP
            </motion.div>

            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute bottom-4 left-4 text-neon-green text-sm font-mono"
            >
              STRATEGY_ENGINE
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold font-orbitron text-gradient mb-4">
                Revolutionize Minecraft Strategy
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-neon-blue to-neon-green rounded-full mb-6" />
            </div>

            <p className="text-lg text-gray-300 leading-relaxed font-dm-sans">
              Earth.Net represents the future of Minecraft multiplayer gaming. We've created a
              revolutionary Earth-scale server where every decision matters and every action has
              real consequences.
            </p>

            <div className="space-y-4">
              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center space-x-3"
              >
                <div className="w-3 h-3 bg-neon-blue rounded-full" />
                <span className="text-gray-300">
                  <strong className="text-white">Earth-Scale Map:</strong> Explore and conquer territories
                  spanning the entire globe
                </span>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center space-x-3"
              >
                <div className="w-3 h-3 bg-neon-green rounded-full" />
                <span className="text-gray-300">
                  <strong className="text-white">Strategic Gameplay:</strong> Form alliances,
                  wage wars, and build empires
                </span>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center space-x-3"
              >
                <div className="w-3 h-3 bg-neon-purple rounded-full" />
                <span className="text-gray-300">
                  <strong className="text-white">High-Stakes Economy:</strong> Trade, gamble, and
                  compete in our token-based system
                </span>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center space-x-3"
              >
                <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                <span className="text-gray-300">
                  <strong className="text-white">Family-Friendly Zones:</strong> Safe play areas
                  with parental controls
                </span>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="pt-6"
            >
              <p className="text-xl font-bold text-neon-blue font-space-grotesk">
                "Where Minecraft Meets Global Strategy"
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
