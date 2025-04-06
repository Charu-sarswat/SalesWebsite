'use client'

import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import About from './components/sections/About'
import Credentials from './components/sections/Credentials'
import Roles from './components/sections/Roles'
import Compensation from './components/sections/Compensation'
import EarningPotential from './components/sections/EarningPotential'
import Testimonials from './components/sections/Testimonials'
import HiringProcess from './components/sections/HiringProcess'
import FAQ from './components/sections/FAQ'
import Apply from './components/Apply'
import LiveChat from './components/LiveChat'
import { Button } from '@/components/ui/button'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Home() {
  const [showApply, setShowApply] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollYProgress } = useScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const textY = useTransform(scrollYProgress, [0, 0.3], ["0%", "100%"])
  const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const calculateMovement = (e: { x: number; y: number }, intensity = 10) => {
    const centerX = window.innerWidth / 2
    const centerY = window.innerHeight / 2
    const moveX = (e.x - centerX) / intensity
    const moveY = (e.y - centerY) / intensity
    return { x: moveX, y: moveY }
  }

  const movement = calculateMovement(mousePosition)

  // Button animation variants
  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        yoyo: Infinity,
      },
    },
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-white overflow-hidden">
      {/* Futuristic background with animated gradients */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(236,72,153,0.2),transparent_50%),radial-gradient(ellipse_at_bottom_left,_rgba(59,130,246,0.2),transparent_50%)] z-0">
        {/* Animated shine lines */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent top-[30%] animate-[sweep_8s_linear_infinite]"></div>
          <div className="absolute w-[1px] h-full bg-gradient-to-b from-transparent via-pink-500/20 to-transparent left-[20%] animate-[sweep-vertical_10s_linear_infinite]"></div>
          <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent top-[70%] animate-[sweep_15s_linear_infinite]" style={{ animationDelay: "3s" }}></div>
        </div>
      </div>

      {/* Futuristic grid */}
      <motion.div
        className="fixed inset-0 z-0 opacity-20"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center"></div>
      </motion.div>

      {/* Interactive cursor light */}
      <div
        className="fixed z-0 pointer-events-none w-[800px] h-[800px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(236,72,153,0.15) 0%, rgba(99,102,241,0.15) 50%, transparent 80%)",
          left: mousePosition.x - 400,
          top: mousePosition.y - 400,
          transform: "translate(-50%, -50%)"
        }}
      ></div>

      {/* Navbar with glassmorphism */}
      <Navbar />

      {/* Hero section with 3D parallax */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 z-10">
        <motion.div
          className="max-w-7xl mx-auto px-6 text-center"
          style={{ y: textY, opacity: textOpacity }}
        >
          {/* Animated floating elements */}
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-pink-500/30 blur-[100px] animate-float-slow"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-indigo-500/30 blur-[100px] animate-float-slow" style={{ animationDelay: "2s" }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-blue-500/20 blur-[120px] animate-pulse-slow"></div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Glowing, futuristic heading */}
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-black mb-6 leading-none tracking-tight">
              <motion.span
                className="block relative"
                style={{ x: movement.x * -0.5, y: movement.y * -0.5 }}
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-indigo-400 to-cyan-500 drop-shadow-[0_0_10px_rgba(236,72,153,0.3)]">JOIN OUR</span>
              </motion.span>
              <motion.span
                className="block relative mt-2"
                style={{ x: movement.x * -0.2, y: movement.y * -0.2 }}
              >
                <span className="relative inline-block bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 drop-shadow-[0_0_10px_rgba(59,130,246,0.3)]">
                  SALES TEAM
                  <motion.span
                    className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-indigo-500"
                    animate={{
                      width: ["0%", "100%", "0%"],
                      left: ["0%", "0%", "100%"]
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  ></motion.span>
                </span>
              </motion.span>
            </h1>

            {/* Glass card with animated border */}
            <motion.div
              className="relative max-w-3xl mx-auto my-12 overflow-hidden group"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              style={{ x: movement.x * 0.1, y: movement.y * 0.1 }}
            >
              {/* Animated border */}
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-pink-500 via-indigo-500 to-cyan-500 opacity-70 blur-sm group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-rotate"></div>

              {/* Card content */}
              <div className="relative rounded-2xl backdrop-blur-xl bg-zinc-900/60 border border-white/10 p-8">
                <p className="text-xl md:text-2xl font-light leading-relaxed text-zinc-200">
                  Discover <span className="font-semibold text-cyan-400">unlimited</span> earning potential and grow your <span className="font-semibold text-pink-400">career</span> with us
                </p>
              </div>
            </motion.div>

            {/* Futuristic buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-6 items-center mt-10">
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="text-lg font-bold px-10 py-7 w-full sm:w-auto bg-gradient-to-r from-pink-600 to-indigo-600 hover:from-pink-500 hover:to-indigo-500 shadow-[0_0_20px_rgba(236,72,153,0.3)] hover:shadow-[0_0_30px_rgba(236,72,153,0.5)] rounded-xl relative overflow-hidden group"
                  onClick={() => setShowApply(true)}
                >
                  {/* Noise texture overlay */}
                  <span className="absolute inset-0 opacity-20 bg-[url('/noise.png')] mix-blend-overlay"></span>

                  {/* Light effect */}
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>

                  {/* Button text with icon */}
                  <span className="relative z-10 flex items-center">
                    Apply Now
                    <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </Button>
              </motion.div>

              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg font-bold px-10 py-7 w-full sm:w-auto border-2 border-indigo-500/30 hover:border-indigo-400 text-indigo-300 hover:text-indigo-200 hover:bg-indigo-500/10 rounded-xl transition-all duration-300 backdrop-blur-sm"
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <span className="relative z-10 flex items-center">
                    Learn More
                    <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </span>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Animated scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
            <motion.div
              className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2"
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            ></motion.div>
          </div>
        </motion.div>
      </section>

      {/* Content sections */}
      <About />
      <Credentials />
      <Roles />
      <Compensation />
      <Testimonials />
      <EarningPotential />
      <HiringProcess />
      <FAQ />
      {showApply && <Apply onClose={() => setShowApply(false)} />}
      <LiveChat />
    </main>
  )
}
