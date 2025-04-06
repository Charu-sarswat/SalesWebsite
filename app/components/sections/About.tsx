'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const About = () => {
    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
    const [activeFeature, setActiveFeature] = useState(null)

    const features = [
        {
            id: 1,
            title: "Vision",
            description: "Transforming the future of sales through innovation, technology, and exceptional talent.",
            icon: "/icons/vision.svg",
            color: "from-fuchsia-600 to-pink-400",
            delay: 0.1
        },
        {
            id: 2,
            title: "Excellence",
            description: "Setting the industry standard with cutting-edge techniques and strategies for unparalleled results.",
            icon: "/icons/excellence.svg",
            color: "from-indigo-600 to-blue-400",
            delay: 0.2
        },
        {
            id: 3,
            title: "Growth",
            description: "Fostering continuous personal and professional development in a supportive environment.",
            icon: "/icons/growth.svg",
            color: "from-cyan-600 to-teal-400",
            delay: 0.3
        },
        {
            id: 4,
            title: "Innovation",
            description: "Leveraging the latest technologies to give our sales team a competitive edge in the marketplace.",
            icon: "/icons/innovation.svg",
            color: "from-violet-600 to-purple-400",
            delay: 0.4
        }
    ]

    const staggerContainer = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.3
            }
        }
    }

    const itemVariant = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 50 } }
    }

    const parallaxBg = (e) => {
        if (!sectionRef.current) return
        const move = 15
        const moveX = (e.pageX * move) / window.innerWidth
        const moveY = (e.pageY * move) / window.innerHeight

        const section = sectionRef.current
        const decorations = section.querySelectorAll('.parallax-decoration')

        decorations.forEach((decoration, index) => {
            const factor = index % 2 === 0 ? 1 : -1
            decoration.style.transform = `translate(${moveX * factor}px, ${moveY * factor}px)`
        })
    }

    return (
        <section
            id="about"
            ref={sectionRef}
            className="py-32 relative overflow-hidden bg-zinc-950"
            onMouseMove={parallaxBg}
        >
            {/* 3D Parallax Background decorations */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="parallax-decoration absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-fuchsia-500/30 to-transparent"></div>
                <div className="parallax-decoration absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent"></div>

                <div className="parallax-decoration absolute -top-40 -right-40 w-80 h-80 bg-fuchsia-600/20 rounded-full blur-[100px]"></div>
                <div className="parallax-decoration absolute -bottom-20 -left-20 w-60 h-60 bg-indigo-600/20 rounded-full blur-[100px]"></div>

                <div className="absolute top-1/4 left-10 w-64 h-64 border border-indigo-500/10 rounded-full"></div>
                <div className="absolute bottom-1/4 right-10 w-80 h-80 border border-pink-500/10 rounded-full"></div>

                {/* Animated grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_10%,transparent_100%)]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center mb-20"
                >
                    <div className="inline-block mb-3">
                        <div className="flex items-center justify-center px-4 py-1.5 bg-zinc-900/80 backdrop-blur-sm rounded-full border border-zinc-800 mb-4 mx-auto w-fit">
                            <span className="text-sm font-medium bg-gradient-to-r from-pink-400 to-indigo-400 text-transparent bg-clip-text">
                                Our Mission
                            </span>
                        </div>
                    </div>

                    <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-fuchsia-400 to-indigo-400">
                        About Our Sales Program
                    </h2>
                    <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
                        We&apos;re building the next generation of sales professionals through comprehensive training,
                        mentorship, and cutting-edge technology.
                    </p>
                </motion.div>

                {/* Main content with 3D parallax effects */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-14 mt-16">
                    {/* Left column with image and 3D effects */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative group"
                    >
                        <div
                            className="absolute -inset-1.5 bg-gradient-to-r from-pink-500 to-indigo-500 rounded-2xl opacity-60 blur-md group-hover:opacity-80 transition-opacity duration-500"
                            style={{ transformStyle: 'preserve-3d', transform: 'translateZ(-10px)' }}
                        ></div>
                        <div
                            className="relative rounded-2xl overflow-hidden"
                            style={{ transformStyle: 'preserve-3d', transform: 'translateZ(0px)' }}
                        >
                            <div className="aspect-[4/3] relative">
                                <Image
                                    src="/sales-team.jpg"
                                    alt="Sales Team"
                                    className="w-full h-full object-cover"
                                    width={600}
                                    height={450}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-transparent opacity-70"></div>
                            </div>

                            {/* Hover effects and overlays */}
                            <div className="absolute inset-0 flex flex-col justify-end p-8">
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.5, duration: 0.5 }}
                                    className="backdrop-blur-sm bg-zinc-900/60 rounded-xl p-5 border border-white/10 transform transition-transform duration-300 hover:scale-105"
                                >
                                    <div className="flex items-center mb-3">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-indigo-500 flex items-center justify-center mr-3">
                                            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-indigo-300">
                                            Join our exceptional team
                                        </h3>
                                    </div>
                                    <p className="text-zinc-300">
                                        Become part of a community that values innovation, growth, and excellence in sales.
                                    </p>
                                </motion.div>
                            </div>

                            {/* Interactive floating elements */}
                            <motion.div
                                initial={{ x: -20, y: 20, opacity: 0 }}
                                animate={{ x: 0, y: 0, opacity: 1 }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                                className="absolute top-6 right-6 bg-zinc-900/80 backdrop-blur-md rounded-xl p-3 border border-white/10"
                            >
                                <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                    <span className="text-xs font-medium text-zinc-300">Elite Program</span>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right column with feature cards */}
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        animate={isInView ? "show" : "hidden"}
                        className="grid sm:grid-cols-2 gap-6"
                    >
                        {features.map((feature) => (
                            <motion.div
                                key={feature.id}
                                variants={itemVariant}
                                whileHover={{ scale: 1.05, y: -8 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                className="relative group"
                                onMouseEnter={() => setActiveFeature(feature.id)}
                                onMouseLeave={() => setActiveFeature(null)}
                            >
                                <div
                                    className={`absolute inset-0 rounded-xl bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-100 blur transition-all duration-300`}
                                    style={{
                                        transformStyle: 'preserve-3d',
                                        transform: 'translateZ(-10px)',
                                        filter: 'blur(12px)'
                                    }}
                                ></div>
                                <div
                                    className="relative h-full bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 p-6 rounded-xl hover:border-zinc-700 transition-all duration-300"
                                    style={{ transformStyle: 'preserve-3d', transform: 'translateZ(0)' }}
                                >
                                    <div className="flex items-center mb-4">
                                        <div className={`flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} text-white`}>
                                            <Image src={feature.icon} className="w-6 h-6" alt={feature.title} width={24} height={24} />
                                        </div>
                                        <h3 className="ml-3 text-xl font-bold text-white">{feature.title}</h3>
                                    </div>
                                    <p className="text-zinc-400 leading-relaxed">{feature.description}</p>

                                    {/* Animated indicator on active state */}
                                    <AnimatePresence>
                                        {activeFeature === feature.id && (
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.8 }}
                                                transition={{ duration: 0.2 }}
                                                className="absolute bottom-3 right-3"
                                            >
                                                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature.color}`}></div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Call-to-action section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-24 text-center"
                >
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-pink-600/20 via-indigo-600/20 to-purple-600/20 rounded-xl blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative p-8 bg-gradient-to-r from-zinc-900/90 to-zinc-950/90 backdrop-blur-md rounded-xl border border-white/10">
                            <h3 className="text-3xl font-bold text-white mb-4">Ready to elevate your sales career?</h3>
                            <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
                                Our program is designed to help you succeed in the dynamic world of sales with a supportive team and proven strategies.
                            </p>
                            <motion.button
                                onClick={() => document.getElementById('roles')?.scrollIntoView({ behavior: 'smooth' })}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="relative group inline-flex items-center"
                            >
                                <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-pink-600 to-indigo-600 blur-sm opacity-70 group-hover:opacity-100 transition-opacity"></span>
                                <span className="relative py-3 px-8 bg-gradient-to-r from-pink-600 to-indigo-600 hover:from-pink-500 hover:to-indigo-500 text-white rounded-lg transition-all duration-300 font-medium flex items-center">
                                    Explore Roles
                                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </span>
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default About 