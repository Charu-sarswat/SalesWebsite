'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import Image from 'next/image'

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const [autoplay, setAutoplay] = useState(true)
    const autoplayTimeoutRef = useRef(null)
    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { once: false, amount: 0.3 })

    const testimonials = [
        {
            id: 1,
            name: "Alex Morgan",
            role: "Senior Sales Executive",
            years: "4 years with us",
            quote: "Joining this sales team was the best career decision I've made. The support, training, and opportunities have been incredible. I've grown my income by 230% since I started.",
            avatar: "/testimonials/person1.jpg",
            stats: [
                { label: "Deals Closed", value: "750+" },
                { label: "Income Growth", value: "230%" },
                { label: "Client Retention", value: "94%" }
            ],
            color: "from-pink-500 to-rose-500"
        },
        {
            id: 2,
            name: "Maya Williams",
            role: "Team Lead",
            years: "6 years with us",
            quote: "The collaborative atmosphere and cutting-edge tools gave me the foundation to excel. I started as an entry-level rep and now lead a team of 12 high-performing sales professionals.",
            avatar: "/testimonials/person2.jpg",
            stats: [
                { label: "Team Size", value: "12" },
                { label: "Quarterly Target", value: "142%" },
                { label: "Promotion Timeline", value: "2 years" }
            ],
            color: "from-indigo-500 to-blue-500"
        },
        {
            id: 3,
            name: "David Chen",
            role: "Regional Sales Director",
            years: "7 years with us",
            quote: "What sets this company apart is how they invest in your growth. The mentorship program paired me with leaders who helped me develop my skills and advance rapidly in my career.",
            avatar: "/testimonials/person3.jpg",
            stats: [
                { label: "Region Growth", value: "87%" },
                { label: "Team Expansion", value: "3x" },
                { label: "Annual Revenue", value: "$4.2M" }
            ],
            color: "from-cyan-500 to-teal-500"
        },
    ]

    useEffect(() => {
        if (autoplay) {
            autoplayTimeoutRef.current = setTimeout(() => {
                setActiveIndex((prev) => (prev + 1) % testimonials.length)
            }, 5000)
        }
        return () => {
            if (autoplayTimeoutRef.current) {
                clearTimeout(autoplayTimeoutRef.current)
            }
        }
    }, [activeIndex, autoplay, testimonials.length])

    const handleDotClick = (index) => {
        setActiveIndex(index)
        setAutoplay(false)
        // Resume autoplay after 10 seconds of inactivity
        setTimeout(() => setAutoplay(true), 10000)
    }

    // Card and content animations
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    }

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 100, damping: 15 }
        }
    }

    return (
        <section
            id="testimonials"
            ref={sectionRef}
            className="py-24 relative overflow-hidden bg-zinc-950"
        >
            {/* Background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -left-40 w-80 h-80 bg-pink-600/10 rounded-full blur-[100px]"></div>
                <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-indigo-600/10 rounded-full blur-[100px]"></div>
                <div className="absolute top-1/4 right-0 w-40 h-40 bg-cyan-600/10 rounded-full blur-[60px]"></div>

                {/* Animated grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_10%,transparent_100%)]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center mb-20"
                >
                    <div className="inline-block mb-3">
                        <div className="flex items-center justify-center px-4 py-1.5 bg-zinc-900/80 backdrop-blur-sm rounded-full border border-zinc-800 mb-4 mx-auto w-fit">
                            <span className="text-sm font-medium bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
                                Success Stories
                            </span>
                        </div>
                    </div>

                    <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400">
                        Hear From Our Team
                    </h2>
                    <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
                        Real stories from real sales professionals who have transformed their careers with us.
                    </p>
                </motion.div>

                {/* Testimonial carousel */}
                <div className="relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ type: "spring", stiffness: 100, damping: 20 }}
                            className="relative overflow-hidden"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                                {/* Left column with avatar */}
                                <div className="relative">
                                    <div className={`absolute -inset-1 bg-gradient-to-r ${testimonials[activeIndex].color} rounded-2xl opacity-70 blur-md`}></div>
                                    <div className="relative rounded-2xl overflow-hidden aspect-square">
                                        <Image
                                            src={testimonials[activeIndex].avatar}
                                            alt={testimonials[activeIndex].name}
                                            className="object-cover"
                                            fill
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent opacity-60"></div>

                                        {/* Info overlay */}
                                        <div className="absolute bottom-0 left-0 right-0 p-6">
                                            <h3 className="text-2xl font-bold text-white mb-1">{testimonials[activeIndex].name}</h3>
                                            <p className="text-zinc-300 mb-1">{testimonials[activeIndex].role}</p>
                                            <p className="text-sm text-zinc-400">{testimonials[activeIndex].years}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Right column with quote and stats */}
                                <div className="lg:col-span-2 space-y-8">
                                    <motion.div
                                        variants={containerVariants}
                                        initial="hidden"
                                        animate="visible"
                                        className="relative"
                                    >
                                        {/* Quote */}
                                        <div className="absolute -top-8 -left-2 text-5xl opacity-20 text-indigo-500">
                                            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                            </svg>
                                        </div>
                                        <motion.blockquote
                                            variants={cardVariants}
                                            className="relative z-10 text-2xl font-light italic text-zinc-300 leading-relaxed ml-6 mb-8"
                                        >
                                            "{testimonials[activeIndex].quote}"
                                        </motion.blockquote>

                                        {/* Stats cards */}
                                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
                                            {testimonials[activeIndex].stats.map((stat, index) => (
                                                <motion.div
                                                    key={index}
                                                    variants={cardVariants}
                                                    whileHover={{ scale: 1.05, y: -5 }}
                                                    className="bg-zinc-900/70 backdrop-blur-sm border border-zinc-800 rounded-xl p-5 text-center"
                                                >
                                                    <h4 className={`text-3xl font-bold bg-gradient-to-r ${testimonials[activeIndex].color} text-transparent bg-clip-text mb-2`}>
                                                        {stat.value}
                                                    </h4>
                                                    <p className="text-zinc-400 text-sm">{stat.label}</p>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation dots */}
                    <div className="flex justify-center mt-12 space-x-3">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => handleDotClick(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeIndex
                                        ? 'bg-gradient-to-r from-pink-500 to-indigo-500 w-8'
                                        : 'bg-zinc-700 hover:bg-zinc-600'
                                    }`}
                                aria-label={`View testimonial ${index + 1}`}
                            />
                        ))}
                    </div>

                    {/* Autoplay control */}
                    <button
                        className={`absolute bottom-0 right-0 p-3 rounded-full transition-all ${autoplay ? 'text-indigo-400' : 'text-zinc-600'
                            }`}
                        onClick={() => setAutoplay(!autoplay)}
                        aria-label={autoplay ? "Pause autoplay" : "Start autoplay"}
                    >
                        {autoplay ? (
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        ) : (
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-24 text-center"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative group inline-flex items-center"
                        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 blur-sm opacity-70 group-hover:opacity-100 transition-opacity"></span>
                        <span className="relative py-3 px-8 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-lg transition-all duration-300 font-medium flex items-center">
                            Join Our Team Today
                            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </span>
                    </motion.button>
                </motion.div>
            </div>
        </section>
    )
}

export default Testimonials 