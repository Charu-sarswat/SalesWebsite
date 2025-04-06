'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null)
    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

    const faqs = [
        {
            question: "What qualifications do I need to join the sales team?",
            answer: "We value attitude and aptitude over specific qualifications. While prior sales experience can be helpful, we're looking for individuals who are enthusiastic, adaptable, and eager to learn. Our comprehensive training program will equip you with the skills you need to succeed."
        },
        {
            question: "How is compensation structured?",
            answer: "Our compensation includes a competitive base salary plus performance-based commissions with no upper limit. Top performers also qualify for bonuses, incentive trips, and additional perks. The more you sell, the more you earn, putting you in control of your financial growth."
        },
        {
            question: "What kind of training and support will I receive?",
            answer: "You'll start with our immersive onboarding program, followed by ongoing training sessions, one-on-one coaching, and mentorship from experienced team members. We provide all the tools, resources, and support you need to excel in your role and grow your career with us."
        },
        {
            question: "What opportunities are there for career advancement?",
            answer: "We believe in promoting from within, and many of our managers and leaders started as sales representatives. As you demonstrate success, you can advance to senior sales roles, team leadership, management positions, or specialize in specific markets or products."
        },
        {
            question: "What makes your sales environment different from others?",
            answer: "We've built a collaborative culture where team success is celebrated alongside individual achievements. We invest heavily in innovative tools and technologies, maintain a healthy work-life balance, and foster an environment where creativity and new ideas are encouraged."
        },
        {
            question: "Is remote work an option for sales team members?",
            answer: "We offer flexible working arrangements that include hybrid and remote options for many positions, depending on the specific role and team. Our digital infrastructure supports seamless collaboration regardless of location."
        }
    ]

    const toggleQuestion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index)
    }

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 50 }
        }
    }

    return (
        <section
            id="faq"
            ref={sectionRef}
            className="py-24 relative overflow-hidden bg-zinc-950"
        >
            {/* Background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600/10 rounded-full blur-[100px]"></div>
                <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-teal-600/10 rounded-full blur-[100px]"></div>

                {/* Grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_10%,transparent_100%)]"></div>
            </div>

            <div className="max-w-5xl mx-auto px-6 relative z-10">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center mb-16"
                >
                    <div className="inline-block mb-3">
                        <div className="flex items-center justify-center px-4 py-1.5 bg-zinc-900/80 backdrop-blur-sm rounded-full border border-zinc-800 mb-4 mx-auto w-fit">
                            <span className="text-sm font-medium bg-gradient-to-r from-purple-400 to-teal-400 text-transparent bg-clip-text">
                                Have Questions?
                            </span>
                        </div>
                    </div>

                    <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-teal-400">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
                        Get answers to common questions about joining our sales team and starting your career with us.
                    </p>
                </motion.div>

                {/* FAQ accordion */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="space-y-4"
                >
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="border border-zinc-800 rounded-xl overflow-hidden backdrop-blur-sm"
                        >
                            <button
                                onClick={() => toggleQuestion(index)}
                                className="flex justify-between items-center w-full p-5 text-left bg-zinc-900/50 hover:bg-zinc-900/80 transition-colors duration-300"
                            >
                                <h3 className="font-medium text-lg text-white pr-8">{faq.question}</h3>
                                <div className={`text-indigo-400 transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}>
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </button>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-5 bg-zinc-900/30 border-t border-zinc-800">
                                            <p className="text-zinc-400 leading-relaxed">{faq.answer}</p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Still have questions */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-16 text-center"
                >
                    <div className="relative group p-8">
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-teal-600/20 rounded-xl blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative p-8 bg-gradient-to-r from-zinc-900/90 to-zinc-950/90 backdrop-blur-md rounded-xl border border-white/10">
                            <h3 className="text-2xl font-bold text-white mb-3">Still have questions?</h3>
                            <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
                                Our team is here to help you navigate your career opportunities. Reach out anytime and we'll get back to you.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-6 py-3 bg-gradient-to-r from-purple-600 to-teal-600 hover:from-purple-500 hover:to-teal-500 text-white rounded-lg transition-all duration-300"
                                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                >
                                    Contact Support
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-6 py-3 border-2 border-zinc-700 hover:border-zinc-600 text-zinc-300 hover:text-zinc-200 hover:bg-zinc-800/50 rounded-lg transition-all duration-300"
                                >
                                    Browse Resources
                                </motion.button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default FAQ 