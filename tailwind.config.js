/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#0a0a0a", // deeply dark
                surface: "#171717", // slightly lighter for cards
                primary: {
                    DEFAULT: "#06b6d4", // Cyan-500
                    foreground: "#ffffff",
                },
                secondary: {
                    DEFAULT: "#6366f1", // Indigo-500
                    foreground: "#ffffff",
                },
                accent: {
                    DEFAULT: "#22d3ee", // Cyan-400
                    foreground: "#000000",
                },
                muted: {
                    DEFAULT: "#262626", // Neutral-800
                    foreground: "#a3a3a3", // Neutral-400
                },
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-out',
                'slide-up': 'slideUp 0.5s ease-out',
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
            },
        },
    },
    plugins: [],
}
