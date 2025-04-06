'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const HiringProcess = () => {
    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
    const [activeStep, setActiveStep] = useState(null)

    const steps = [
        {
            id: 1,
            title: "Application",
            description: "Submit your application through our online portal. We review all applications within 48 hours.",
            duration: "1-2 Days",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            ),
            color: "from-pink-600 to-rose-500"
        },
        {
            id: 2,
            title: "Phone Screening",
            description: "A quick call with our recruitment team to discuss your background and interest in the role.",
            duration: "30 Minutes",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
            ),
            color: "from-purple-600 to-indigo-500"
        },
        {
            id: 3,
            title: "Sales Challenge",
            description: "A short, practical assessment that helps us understand your approach to sales situations.",
            duration: "1 Hour",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            ),
            color: "from-blue-600 to-cyan-500"
        },
        {
            id: 4,
            title: "Team Interview",
            description: "Meet with the sales team and potential managers to discuss the role in more detail.",
            duration: "1-2 Hours",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
            color: "from-cyan-600 to-teal-500"
        },
        {
            id: 5,
            title: "Offer & Onboarding",
            description: "Successful candidates receive an offer, followed by our comprehensive onboarding program.",
            duration: "1-2 Weeks",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            color: "from-emerald-600 to-green-500"
        }
    ]

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 50 }
        }
    }

    return (
        <section
            id="hiring-process"
            ref={sectionRef}
            className="py-24 relative overflow-hidden bg-zinc-950"
        >
            {/* Background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -left-40 w-80 h-80 bg-emerald-600/10 rounded-full blur-[100px]"></div>
                <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-600/10 rounded-full blur-[100px]"></div>

                {/* Grid pattern */}
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
                            <span className="text-sm font-medium bg-gradient-to-r from-teal-400 to-emerald-400 text-transparent bg-clip-text">
                                The Journey
                            </span>
                        </div>
                    </div>

                    <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
                        Our Hiring Process
                    </h2>
                    <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
                        From application to onboarding, here's what to expect on your journey to joining our sales team.
                    </p>
                </motion.div>

                {/* Timeline */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="mt-16"
                >
                    <div className="relative">
                        {/* Vertical line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-green-500 via-cyan-500 to-purple-500 opacity-20 hidden md:block"></div>

                        {/* Timeline items */}
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                variants={itemVariants}
                                className="relative z-10 mb-16 last:mb-0"
                                onMouseEnter={() => setActiveStep(step.id)}
                                onMouseLeave={() => setActiveStep(null)}
                            >
                                <div className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                    }`}>
                                    {/* Content card */}
                                    <div className="md:w-1/2 flex flex-col items-center md:items-start md:pr-8">
                                        <motion.div
                                            className="w-full max-w-md bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 p-6 rounded-xl relative group"
                                            whileHover={{ scale: 1.03, y: -5 }}
                                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                        >
                                            {/* Gradient backdrop on hover */}
                                            <div className={`absolute -inset-1 rounded-lg bg-gradient-to-r ${step.color} opacity-0 blur-md transition-opacity duration-300 ${activeStep === step.id ? 'opacity-30' : 'group-hover:opacity-20'}`}></div>

                                            <div className="relative z-10">
                                                <div className="flex items-center mb-3">
                                                    <div className={`flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r ${step.color} text-white mr-4`}>
                                                        {step.icon}
                                                    </div>
                                                    <h3 className="text-xl font-bold text-white">{step.title}</h3>
                                                </div>
                                                <p className="text-zinc-400 mb-4">{step.description}</p>
                                                <div className="flex items-center text-sm text-zinc-500">
                                                    <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    <span>{step.duration}</span>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </div>

                                    {/* Timeline point */}
                                    <div className="flex-shrink-0 relative my-6 md:my-0">
                                        <div className="w-12 h-12 rounded-full bg-zinc-900 border-4 border-zinc-800 flex items-center justify-center">
                                            <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${step.color} transition-all duration-300 ${activeStep === step.id ? 'scale-125' : ''}`}></div>
                                        </div>
                                        <div className="text-center mt-2 md:absolute md:mt-0 md:top-1/2 md:transform md:-translate-y-1/2 md:whitespace-nowrap md:px-4">
                                            <span className={`text-lg font-bold bg-gradient-to-r ${step.color} text-transparent bg-clip-text`}>
                                                Step {step.id}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Empty space for opposite side (desktop) */}
                                    <div className="md:w-1/2"></div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

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
                        <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-green-600 to-teal-600 blur-sm opacity-70 group-hover:opacity-100 transition-opacity"></span>
                        <span className="relative py-3 px-8 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-500 hover:to-teal-500 text-white rounded-lg transition-all duration-300 font-medium flex items-center">
                            Start Your Application
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

export default HiringProcess 