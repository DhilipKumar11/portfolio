/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#1A4D2E', // Dark Green
                accent: '#FF9F29',  // Yellow/Orange
                secondary: '#4F6F52', // Lighter Green
                light: '#F5F5F3',   // Off-white background
                dark: '#1A1A1A'
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
