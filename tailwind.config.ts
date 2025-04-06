import type { Config } from "tailwindcss"

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            animation: {
                "fade-in": "fade-in 0.5s ease-out",
                "slide-up": "slide-up 0.5s ease-out",
                "slide-down": "slide-down 0.5s ease-out",
                "scale": "scale 0.3s ease-in-out",
                "float": "float 6s ease-in-out infinite",
                "float-slow": "float 10s ease-in-out infinite",
                "shimmer": "shimmer 2s infinite",
                "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                "wave": "wave 12s linear infinite",
                "rotate-slow": "rotate 12s linear infinite",
                "gradient-rotate": "gradient-rotate 8s linear infinite",
                "sweep": "sweep 8s linear infinite",
                "sweep-vertical": "sweep-vertical 10s linear infinite",
            },
            keyframes: {
                "fade-in": {
                    "0%": { opacity: "0", transform: "translateY(10px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                "slide-up": {
                    "0%": { transform: "translateY(100px)", opacity: "0" },
                    "100%": { transform: "translateY(0)", opacity: "1" },
                },
                "slide-down": {
                    "0%": { transform: "translateY(-100px)", opacity: "0" },
                    "100%": { transform: "translateY(0)", opacity: "1" },
                },
                "scale": {
                    "0%": { transform: "scale(0.95)" },
                    "100%": { transform: "scale(1)" },
                },
                "float": {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-20px)" },
                },
                "shimmer": {
                    "100%": { transform: "translateX(100%)" }
                },
                "wave": {
                    "0%": { transform: "translateX(0) translateY(0)" },
                    "25%": { transform: "translateX(10px) translateY(-10px)" },
                    "50%": { transform: "translateX(0) translateY(0)" },
                    "75%": { transform: "translateX(-10px) translateY(10px)" },
                    "100%": { transform: "translateX(0) translateY(0)" },
                },
                "gradient-rotate": {
                    "0%": { backgroundPosition: "0% 0%" },
                    "100%": { backgroundPosition: "100% 100%" },
                },
                "sweep": {
                    "0%": { transform: "translateX(-100%)" },
                    "100%": { transform: "translateX(100%)" }
                },
                "sweep-vertical": {
                    "0%": { transform: "translateY(-100%)" },
                    "100%": { transform: "translateY(100%)" }
                },
            },
            backgroundImage: {
                "grid-pattern": "linear-gradient(to right, #E5E7EB 1px, transparent 1px), linear-gradient(to bottom, #E5E7EB 1px, transparent 1px)",
                "gradient-radial": "radial-gradient(circle at center, var(--gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--gradient-stops))",
                "noise-pattern": "url('/noise.png')"
            },
            backgroundSize: {
                "grid-pattern": "40px 40px",
                "300%": "300% 300%",
            },
            colors: {
                primary: {
                    DEFAULT: "#4F46E5",
                    50: "#EBEAFD",
                    100: "#D7D5FB",
                    200: "#AFABF8",
                    300: "#8781F4",
                    400: "#5F57F1",
                    500: "#4F46E5",
                    600: "#2D23D4",
                    700: "#221BA3",
                    800: "#171372",
                    900: "#0C0B41",
                },
                accent: {
                    DEFAULT: "#FF6B6B",
                    50: "#FFF0F0",
                    100: "#FFE1E1",
                    200: "#FFC4C4",
                    300: "#FFA7A7",
                    400: "#FF8989",
                    500: "#FF6B6B",
                    600: "#FF3D3D",
                    700: "#FF0F0F",
                    800: "#E10000",
                    900: "#AF0000",
                },
            },
        },
    },
    plugins: [],
}
export default config 