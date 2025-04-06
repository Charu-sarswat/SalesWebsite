'use client'

import Link from 'next/link'
import { useEffect, useState, useRef, useMemo } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import Apply from './Apply'

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('about')
    const [hoverItem, setHoverItem] = useState(null)
    const [showApply, setShowApply] = useState(false)
    const navRef = useRef(null)
    const { scrollYProgress } = useScroll()

    // Transform values based on scroll
    const navbarBlur = useTransform(scrollYProgress, [0, 0.05], [0, 8])

    // Nav items with icons
    const navItems = useMemo(() => [
        {
            name: 'About',
            id: 'about',
            icon: (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            name: 'Credentials',
            id: 'credentials',
            icon: (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
            )
        },
        {
            name: 'Roles',
            id: 'roles',
            icon: (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            )
        },
        {
            name: 'Compensation',
            id: 'compensation',
            icon: (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            name: 'Earnings',
            id: 'earnings',
            icon: (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            )
        }
    ], [])

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)

            // Get current active section based on scroll position
            const sections = navItems.map(item => document.getElementById(item.id)).filter(Boolean)
            const currentSection = sections.find(section => {
                const rect = section.getBoundingClientRect()
                return rect.top <= 150 && rect.bottom >= 150
            })

            if (currentSection) {
                setActiveSection(currentSection.id)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [navItems])

    const handleNavClick = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
        setMobileMenuOpen(false)
        setActiveSection(id)
    }

    // Variants for animations
    const mobileMenuVariants = {
        hidden: { opacity: 0, height: 0, y: -20 },
        visible: {
            opacity: 1,
            height: 'auto',
            y: 0,
            transition: {
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1]
            }
        },
        exit: {
            opacity: 0,
            height: 0,
            y: -20,
            transition: {
                duration: 0.2,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    }

    const buttonVariants = {
        rest: { scale: 1 },
        hover: { scale: 1.05 },
        tap: { scale: 0.95 }
    }

    const logoVariants = {
        initial: { opacity: 0, x: -20 },
        animate: { opacity: 1, x: 0, transition: { duration: 0.5 } },
        whileHover: { scale: 1.05, transition: { duration: 0.2, type: "spring", stiffness: 400 } }
    }

    return (
        <>
            <motion.nav
                ref={navRef}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                style={{
                    backdropFilter: scrolled ? `blur(${navbarBlur.get()}px)` : "blur(0px)",
                    WebkitBackdropFilter: scrolled ? `blur(${navbarBlur.get()}px)` : "blur(0px)"
                }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? 'py-3 bg-zinc-950/70 shadow-lg border-b border-white/5'
                    : 'py-5 bg-transparent'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    {/* Logo with enhanced animations */}
                    <motion.div
                        variants={logoVariants}
                        initial="initial"
                        animate="animate"
                        whileHover="whileHover"
                        className="relative group"
                    >
                        <Link href="/">
                            <div className="absolute -inset-2 bg-gradient-to-r from-pink-500 to-indigo-500 rounded-xl opacity-70 blur-sm group-hover:opacity-100 group-hover:blur-md transition duration-200"></div>
                            <div className="relative px-4 py-2 bg-zinc-950/80 rounded-xl border border-white/10 backdrop-blur-md">
                                <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-fuchsia-500 to-indigo-500">
                                    SalesHub
                                </span>
                            </div>
                        </Link>
                    </motion.div>

                    {/* Desktop Navigation with indicators and animations */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navItems.map((item, i) => (
                            <motion.button
                                key={item.id}
                                className={`relative px-4 py-2 text-gray-300 hover:text-white group flex items-center space-x-1.5 ${activeSection === item.id ? 'text-white' : ''
                                    }`}
                                onClick={() => handleNavClick(item.id)}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                onHoverStart={() => setHoverItem(item.id)}
                                onHoverEnd={() => setHoverItem(null)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {/* Active indicator */}
                                {activeSection === item.id && (
                                    <motion.div
                                        layoutId="activeIndicator"
                                        className="absolute inset-0 rounded-lg bg-white/5"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}

                                {/* Icon */}
                                <span className="relative z-10">{item.icon}</span>

                                {/* Text */}
                                <span className="relative z-10">{item.name}</span>

                                {/* Animated underline */}
                                <motion.span
                                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-pink-500 to-indigo-500"
                                    initial={{ width: 0 }}
                                    animate={{
                                        width: activeSection === item.id || hoverItem === item.id ? '100%' : '0%'
                                    }}
                                    transition={{ duration: 0.3 }}
                                ></motion.span>
                            </motion.button>
                        ))}
                    </div>

                    {/* Apply button */}
                    <motion.button
                        variants={buttonVariants}
                        initial="rest"
                        whileHover="hover"
                        whileTap="tap"
                        className="hidden md:block"
                        onClick={() => setShowApply(true)}
                    >
                        <div className="relative group overflow-hidden rounded-lg">
                            <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-indigo-600 rounded-lg opacity-70 group-hover:opacity-100 blur-sm transition duration-200"></div>
                            <div className="relative px-5 py-2 bg-zinc-950/50 rounded-lg border border-white/10">
                                <span className="font-medium text-white group-hover:text-white transition-colors">Apply</span>

                                {/* Shine effect */}
                                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-700"></div>
                            </div>
                        </div>
                    </motion.button>

                    {/* Mobile Menu Button */}
                    <motion.button
                        className="block md:hidden relative z-10 text-gray-300 focus:outline-none"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        whileTap={{ scale: 0.95 }}
                    >
                        <div className="w-10 h-10 flex items-center justify-center">
                            <div className="w-6 h-6 flex flex-col justify-center items-center">
                                <motion.span
                                    className="bg-current block h-0.5 w-6 rounded-sm"
                                    animate={{
                                        rotate: mobileMenuOpen ? 45 : 0,
                                        translateY: mobileMenuOpen ? 1.5 : -4
                                    }}
                                    transition={{ duration: 0.3 }}
                                ></motion.span>
                                <motion.span
                                    className="bg-current block h-0.5 w-6 rounded-sm my-0.5"
                                    animate={{ opacity: mobileMenuOpen ? 0 : 1 }}
                                    transition={{ duration: 0.3 }}
                                ></motion.span>
                                <motion.span
                                    className="bg-current block h-0.5 w-6 rounded-sm"
                                    animate={{
                                        rotate: mobileMenuOpen ? -45 : 0,
                                        translateY: mobileMenuOpen ? -1.5 : 4
                                    }}
                                    transition={{ duration: 0.3 }}
                                ></motion.span>
                            </div>
                        </div>
                    </motion.button>

                    {/* Mobile Menu */}
                    <AnimatePresence>
                        {mobileMenuOpen && (
                            <motion.div
                                variants={mobileMenuVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="absolute top-full left-0 right-0 bg-zinc-900/95 backdrop-blur-xl border-t border-white/10 p-5 md:hidden"
                            >
                                <div className="flex flex-col space-y-3">
                                    {navItems.map((item, i) => (
                                        <motion.button
                                            key={item.id}
                                            className={`flex items-center space-x-3 text-left py-3 px-4 ${activeSection === item.id
                                                ? 'text-white bg-gradient-to-r from-pink-500/10 to-indigo-500/10 border-l-2 border-pink-500'
                                                : 'text-gray-300 hover:text-white hover:bg-white/5 border-l-2 border-transparent'
                                                } rounded-lg transition-colors`}
                                            onClick={() => handleNavClick(item.id)}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.1 + i * 0.1 }}
                                        >
                                            <div className={`w-8 h-8 flex items-center justify-center rounded-lg ${activeSection === item.id
                                                ? 'bg-gradient-to-r from-pink-500 to-indigo-500 text-white'
                                                : 'bg-zinc-800 text-gray-400'
                                                }`}>
                                                {item.icon}
                                            </div>
                                            <span>{item.name}</span>
                                        </motion.button>
                                    ))}

                                    {/* Mobile apply button */}
                                    <motion.button
                                        className="mt-4 w-full py-3 px-4 bg-gradient-to-r from-pink-600 to-indigo-600 hover:from-pink-500 hover:to-indigo-500 text-white rounded-lg font-medium flex items-center justify-center space-x-2"
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => {
                                            setShowApply(true)
                                            setMobileMenuOpen(false)
                                        }}
                                    >
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                        <span>Apply Now</span>
                                    </motion.button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.nav>

            {/* Apply Modal */}
            {showApply && <Apply onClose={() => setShowApply(false)} />}
        </>
    )
}

export default Navbar 