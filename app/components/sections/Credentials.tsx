'use client'

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const Credentials = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.3 })

    return (
        <div id="credentials" ref={ref} className="min-h-screen bg-zinc-950 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                        Why You&apos;ll Succeed With Us
                    </h2>
                    <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
                        Our comprehensive training and support systems are designed to ensure your success in the competitive world of sales.
                    </p>
                </div>

                {/* Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                    <div className="space-y-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            className="bg-zinc-900/50 backdrop-blur-lg border border-zinc-800 p-8 rounded-xl"
                        >
                            <h3 className="text-2xl font-bold mb-4 text-white">Expert Training</h3>
                            <p className="text-zinc-400">
                                Our industry-leading training program equips you with the knowledge, skills, and techniques needed to excel in sales conversations and close deals effectively.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                            className="bg-zinc-900/50 backdrop-blur-lg border border-zinc-800 p-8 rounded-xl"
                        >
                            <h3 className="text-2xl font-bold mb-4 text-white">Mentorship Program</h3>
                            <p className="text-zinc-400">
                                You&apos;ll be paired with experienced sales professionals who will guide you, provide feedback, and help you develop your unique selling style.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.7, delay: 0.5 }}
                            className="bg-zinc-900/50 backdrop-blur-lg border border-zinc-800 p-8 rounded-xl"
                        >
                            <h3 className="text-2xl font-bold mb-4 text-white">Cutting-Edge Tools</h3>
                            <p className="text-zinc-400">
                                Access to the latest sales technology, CRM systems, and analytics tools to track your performance and identify opportunities for improvement.
                            </p>
                        </motion.div>
                    </div>

                    <div className="space-y-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="bg-zinc-900/50 backdrop-blur-lg border border-zinc-800 p-8 rounded-xl"
                        >
                            <h3 className="text-2xl font-bold mb-4 text-white">Supportive Environment</h3>
                            <p className="text-zinc-400">
                                Join a collaborative team where knowledge sharing, celebrating successes, and learning from challenges are part of our daily culture.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                            className="bg-zinc-900/50 backdrop-blur-lg border border-zinc-800 p-8 rounded-xl"
                        >
                            <h3 className="text-2xl font-bold mb-4 text-white">Career Advancement</h3>
                            <p className="text-zinc-400">
                                Clear pathways for growth and promotion based on performance, with opportunities to move into specialized sales roles, team leadership, or management positions.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.7, delay: 0.6 }}
                            className="bg-zinc-900/50 backdrop-blur-lg border border-zinc-800 p-8 rounded-xl"
                        >
                            <h3 className="text-2xl font-bold mb-4 text-white">Continuous Learning</h3>
                            <p className="text-zinc-400">
                                Regular workshops, industry speakers, and certification opportunities to keep your skills current and advance your professional development.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Background elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-600/20 rounded-full blur-[100px]"></div>
                <div className="absolute -top-20 -left-20 w-60 h-60 bg-pink-600/20 rounded-full blur-[100px]"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>
            </div>
        </div>
    )
}

export default Credentials 