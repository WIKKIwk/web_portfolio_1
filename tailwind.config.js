/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: "#E85C4A",
                secondary: "#F2C4BE",
                background: "#FFF5F2",
                'brand-bg': "#FFF5F2",
                'brand-dark': "#423E4C",
                'brand-pink': "#F3ADA7",
                cream: "#f7f5bc",
                neutral: {
                    ...colors.neutral,
                    DEFAULT: "#1A1A1A",
                },
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"],
                heading: ["Nunito", "sans-serif"],
            },
            borderRadius: {
                'xl': '1rem',
                '2xl': '1.5rem',
                '3xl': '2rem',
            }
        },
    },
    plugins: [],
}
