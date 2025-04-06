'use client'

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

interface ApplyProps {
    onClose?: () => void
}

const Apply = ({ onClose }: ApplyProps) => {
    const [currentStep, setCurrentStep] = useState(1)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        experience: '',
        message: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const nextStep = () => {
        setCurrentStep(prev => Math.min(prev + 1, 3))
    }

    const prevStep = () => {
        setCurrentStep(prev => Math.max(prev - 1, 1))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Here you would typically handle form submission to your backend
        alert('Application submitted successfully!')
        onClose?.()
    }

    // Form sections with cool icons
    const steps = [
        {
            id: 1,
            title: "Personal Information",
            description: "Tell us who you are",
            icon: (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M6 21V19C6 16.7909 7.79086 15 10 15H14C16.2091 15 18 16.7909 18 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        },
        {
            id: 2,
            title: "Professional Details",
            description: "Share your experience",
            icon: (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16 21V5C16 3.89543 15.1046 3 14 3H10C8.89543 3 8 3.89543 8 5V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        },
        {
            id: 3,
            title: "Final Step",
            description: "Review and submit",
            icon: (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" />
                </svg>
            )
        }
    ]

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center p-4 z-50"
                onClick={(e) => {
                    if (e.target === e.currentTarget) onClose?.()
                }}
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="w-full max-w-2xl relative"
                >
                    {/* Animated background blur */}
                    <div className="absolute -inset-3 bg-gradient-to-r from-pink-600/20 via-indigo-600/20 to-cyan-600/20 rounded-2xl blur-xl"></div>

                    {/* Main card */}
                    <div className="relative z-10 bg-zinc-900/90 border border-white/10 rounded-xl shadow-2xl overflow-hidden">
                        {/* Header with progress steps */}
                        <div className="bg-gradient-to-r from-indigo-950 to-zinc-900 border-b border-white/10 p-6">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-indigo-400">Apply Now</h2>
                                <button
                                    onClick={onClose}
                                    className="text-gray-400 hover:text-white transition-colors p-1"
                                >
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            {/* Progress steps */}
                            <div className="flex justify-between relative">
                                {steps.map((step) => (
                                    <div key={step.id} className="flex flex-col items-center relative z-10">
                                        <div
                                            className={`w-10 h-10 rounded-full flex items-center justify-center border-2 
                                            ${currentStep >= step.id
                                                    ? 'bg-indigo-600 border-indigo-400 text-white'
                                                    : 'bg-zinc-800 border-zinc-700 text-gray-400'}`}
                                        >
                                            {step.icon}
                                        </div>
                                        <div className="mt-2 text-center">
                                            <p className={`text-xs font-semibold ${currentStep >= step.id ? 'text-indigo-400' : 'text-gray-500'}`}>
                                                {step.title}
                                            </p>
                                            <p className="text-xs text-gray-500 hidden sm:block">{step.description}</p>
                                        </div>
                                    </div>
                                ))}

                                {/* Progress line */}
                                <div className="absolute top-5 left-0 h-0.5 bg-zinc-700 w-full -z-10"></div>
                                <motion.div
                                    className="absolute top-5 left-0 h-0.5 bg-gradient-to-r from-pink-500 to-indigo-500 -z-10"
                                    initial={{ width: '0%' }}
                                    animate={{ width: `${(currentStep - 1) * 50}%` }}
                                    transition={{ duration: 0.5 }}
                                ></motion.div>
                            </div>
                        </div>

                        {/* Form content */}
                        <div className="p-6">
                            <form onSubmit={handleSubmit}>
                                <AnimatePresence mode="wait">
                                    {currentStep === 1 && (
                                        <motion.div
                                            key="step1"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: 20 }}
                                            transition={{ duration: 0.3 }}
                                            className="space-y-4"
                                        >
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium text-gray-300" htmlFor="name">
                                                    Full Name <span className="text-pink-500">*</span>
                                                </label>
                                                <div className="relative">
                                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                        </svg>
                                                    </div>
                                                    <input
                                                        type="text"
                                                        id="name"
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        className="w-full pl-10 pr-4 py-2.5 bg-zinc-800/50 border border-zinc-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 rounded-lg text-white placeholder-gray-400 transition-colors"
                                                        placeholder="John Doe"
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-sm font-medium text-gray-300" htmlFor="email">
                                                    Email <span className="text-pink-500">*</span>
                                                </label>
                                                <div className="relative">
                                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                        </svg>
                                                    </div>
                                                    <input
                                                        type="email"
                                                        id="email"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        className="w-full pl-10 pr-4 py-2.5 bg-zinc-800/50 border border-zinc-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 rounded-lg text-white placeholder-gray-400 transition-colors"
                                                        placeholder="john@example.com"
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-sm font-medium text-gray-300" htmlFor="phone">
                                                    Phone Number
                                                </label>
                                                <div className="relative">
                                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                        </svg>
                                                    </div>
                                                    <input
                                                        type="tel"
                                                        id="phone"
                                                        name="phone"
                                                        value={formData.phone}
                                                        onChange={handleChange}
                                                        className="w-full pl-10 pr-4 py-2.5 bg-zinc-800/50 border border-zinc-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 rounded-lg text-white placeholder-gray-400 transition-colors"
                                                        placeholder="(123) 456-7890"
                                                    />
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}

                                    {currentStep === 2 && (
                                        <motion.div
                                            key="step2"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            transition={{ duration: 0.3 }}
                                            className="space-y-4"
                                        >
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium text-gray-300" htmlFor="experience">
                                                    Years of Sales Experience <span className="text-pink-500">*</span>
                                                </label>
                                                <div className="relative">
                                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                        </svg>
                                                    </div>
                                                    <select
                                                        id="experience"
                                                        name="experience"
                                                        value={formData.experience}
                                                        onChange={handleChange}
                                                        className="w-full pl-10 pr-4 py-2.5 bg-zinc-800/50 border border-zinc-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 rounded-lg text-white placeholder-gray-400 transition-colors"
                                                        required
                                                    >
                                                        <option value="">Select your experience</option>
                                                        <option value="Less than 1 year">Less than 1 year</option>
                                                        <option value="1-3 years">1-3 years</option>
                                                        <option value="3-5 years">3-5 years</option>
                                                        <option value="5+ years">5+ years</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-sm font-medium text-gray-300" htmlFor="message">
                                                    Why do you want to join our team? <span className="text-pink-500">*</span>
                                                </label>
                                                <textarea
                                                    id="message"
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    rows={5}
                                                    className="w-full px-4 py-2.5 bg-zinc-800/50 border border-zinc-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 rounded-lg text-white placeholder-gray-400 transition-colors"
                                                    placeholder="Tell us a bit about yourself and why you'd be a great fit for our sales team."
                                                    required
                                                ></textarea>
                                            </div>
                                        </motion.div>
                                    )}

                                    {currentStep === 3 && (
                                        <motion.div
                                            key="step3"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            transition={{ duration: 0.3 }}
                                            className="space-y-6"
                                        >
                                            <div className="bg-zinc-800/50 border border-zinc-700 rounded-lg p-5">
                                                <h3 className="text-lg font-semibold text-white mb-4">Application Summary</h3>
                                                <div className="space-y-3">
                                                    <div className="flex justify-between border-b border-zinc-700/50 pb-2">
                                                        <span className="text-gray-400">Full Name:</span>
                                                        <span className="text-white font-medium">{formData.name || "--"}</span>
                                                    </div>
                                                    <div className="flex justify-between border-b border-zinc-700/50 pb-2">
                                                        <span className="text-gray-400">Email:</span>
                                                        <span className="text-white font-medium">{formData.email || "--"}</span>
                                                    </div>
                                                    <div className="flex justify-between border-b border-zinc-700/50 pb-2">
                                                        <span className="text-gray-400">Phone:</span>
                                                        <span className="text-white font-medium">{formData.phone || "--"}</span>
                                                    </div>
                                                    <div className="flex justify-between border-b border-zinc-700/50 pb-2">
                                                        <span className="text-gray-400">Experience:</span>
                                                        <span className="text-white font-medium">{formData.experience || "--"}</span>
                                                    </div>
                                                </div>
                                                <div className="mt-4">
                                                    <span className="text-gray-400 block mb-2">Why you want to join:</span>
                                                    <p className="text-white px-4 py-3 bg-zinc-800 rounded border border-zinc-700">
                                                        {formData.message || "--"}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="bg-zinc-800/30 border border-zinc-700/50 rounded-lg p-4 text-sm text-gray-400">
                                                <p>By submitting this application, you agree to our terms and conditions and allow us to contact you regarding your application.</p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* Navigation buttons */}
                                <div className="flex justify-between mt-8">
                                    {currentStep > 1 ? (
                                        <button
                                            type="button"
                                            onClick={prevStep}
                                            className="px-5 py-2 bg-zinc-800 text-gray-300 rounded-lg hover:bg-zinc-700 transition-colors flex items-center"
                                        >
                                            <svg className="w-5 h-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                            </svg>
                                            Back
                                        </button>
                                    ) : (
                                        <div></div>
                                    )}

                                    {currentStep < 3 ? (
                                        <button
                                            type="button"
                                            onClick={nextStep}
                                            className="px-5 py-2 bg-gradient-to-r from-pink-600 to-indigo-600 hover:from-pink-500 hover:to-indigo-500 text-white rounded-lg transition-colors flex items-center"
                                        >
                                            Next
                                            <svg className="w-5 h-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </button>
                                    ) : (
                                        <button
                                            type="submit"
                                            className="px-5 py-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white rounded-lg transition-colors flex items-center"
                                        >
                                            Submit Application
                                            <svg className="w-5 h-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </button>
                                    )}
                                </div>
                            </form>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}

export default Apply 