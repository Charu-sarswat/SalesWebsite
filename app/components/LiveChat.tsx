'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const LiveChat = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState([
        {
            id: 1,
            sender: 'bot',
            text: 'Hi there! 👋 Have questions about joining our sales team?',
            time: '10:30 AM'
        }
    ])
    const [inputValue, setInputValue] = useState('')
    const messagesEndRef = useRef(null)
    const inputRef = useRef(null)

    // Auto responses
    const autoResponses = [
        "That's a great question! Our sales training program is comprehensive and tailored to each individual's needs.",
        "We offer competitive base salaries plus uncapped commission structures, meaning your earnings are limited only by your drive.",
        "Our application process is simple! Just click the Apply button at the top of the page to get started.",
        "Many of our top performers had no prior sales experience. We value attitude and aptitude over existing skills.",
        "We provide extensive training, mentorship, and ongoing support to help you succeed in your sales career."
    ]

    useEffect(() => {
        scrollToBottom()
    }, [messages, isOpen])

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }

    const handleSendMessage = (e) => {
        e.preventDefault()
        if (!inputValue.trim()) return

        // Add user message
        const userMessage = {
            id: messages.length + 1,
            sender: 'user',
            text: inputValue,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }

        setMessages(prev => [...prev, userMessage])
        setInputValue('')

        // Simulate typing indicator
        setTimeout(() => {
            const botResponse = {
                id: messages.length + 2,
                sender: 'bot',
                text: autoResponses[Math.floor(Math.random() * autoResponses.length)],
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            }

            setMessages(prev => [...prev, botResponse])
        }, 1000)
    }

    // Animation variants
    const chatContainerVariants = {
        hidden: { opacity: 0, y: 20, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { type: "spring", stiffness: 500, damping: 30 }
        },
        exit: {
            opacity: 0,
            y: 20,
            scale: 0.9,
            transition: { duration: 0.2 }
        }
    }

    const buttonVariants = {
        initial: { scale: 1 },
        hover: { scale: 1.05 },
        tap: { scale: 0.95 }
    }

    const messageVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 500, damping: 30 }
        }
    }

    return (
        <>
            {/* Chat toggle button */}
            <motion.button
                className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg"
                onClick={() => setIsOpen(!isOpen)}
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                aria-label="Chat with us"
            >
                {isOpen ? (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                )}

                {/* Notification dot */}
                <span className="absolute -top-1 -right-1 bg-pink-500 rounded-full w-4 h-4 border-2 border-white animate-pulse"></span>
            </motion.button>

            {/* Chat container */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed bottom-24 right-6 z-50 w-80 md:w-96 max-h-[500px] bg-zinc-900 rounded-2xl shadow-2xl overflow-hidden border border-indigo-500/20"
                        variants={chatContainerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        {/* Chat header */}
                        <div className="bg-gradient-to-r from-indigo-600 to-blue-600 p-4 flex items-center">
                            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-white font-medium">Sales Team Support</h3>
                                <p className="text-xs text-indigo-100">Online | Typically replies in minutes</p>
                            </div>
                        </div>

                        {/* Messages container */}
                        <div className="h-80 overflow-y-auto p-4 bg-zinc-950">
                            <div className="space-y-4">
                                {messages.map((message) => (
                                    <motion.div
                                        key={message.id}
                                        variants={messageVariants}
                                        initial="hidden"
                                        animate="visible"
                                        className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                    >
                                        <div
                                            className={`max-w-[80%] rounded-2xl px-4 py-3 ${message.sender === 'user'
                                                    ? 'bg-indigo-600 text-white rounded-tr-none'
                                                    : 'bg-zinc-800 text-gray-200 rounded-tl-none'
                                                }`}
                                        >
                                            <p className="text-sm">{message.text}</p>
                                            <p className="text-xs opacity-60 mt-1 text-right">{message.time}</p>
                                        </div>
                                    </motion.div>
                                ))}
                                <div ref={messagesEndRef} />
                            </div>
                        </div>

                        {/* Input area */}
                        <form onSubmit={handleSendMessage} className="p-3 bg-zinc-800 border-t border-zinc-700">
                            <div className="flex items-center">
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder="Type your question..."
                                    className="flex-1 py-2 px-4 bg-zinc-700 rounded-l-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                                <button
                                    type="submit"
                                    className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white p-2 rounded-r-full"
                                >
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default LiveChat 