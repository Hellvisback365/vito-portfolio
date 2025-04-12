/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'; // Import default theme

export default {
  content: [
    "./index.html",
    "./app/**/*.{js,ts,jsx,tsx}", // Adjusted path for React Router template
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        // Dark Mode Palette with Electric Blue accent
        'background': '#0a0a0a', // Very dark background
        'foreground': '#ededed', // Light main text
        'card': '#1a1a1a',       // Background for cards/elevated elements
        'card-foreground': '#ededed', // Text within cards
        'primary': '#3b82f6',     // Electric Blue (Tailwind blue-500)
        'primary-foreground': '#ffffff', // Text on primary color
        'secondary': '#4f4f4f',   // Dark gray for secondary elements
        'secondary-foreground': '#ededed',
        'accent': '#10b981',      // Emerald Green (Tailwind emerald-500) for highlights
        'accent-foreground': '#ffffff',
      },
      fontFamily: {
        // Define custom font families, ensuring fallback fonts
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        mono: ['Roboto Mono', ...defaultTheme.fontFamily.mono],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
