import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // AIMin Brand Colors
        'deep-teal': '#134f5c',
        'sage': '#a0c6c6',
        'light-sage': '#a2c4c9',
        'warm-gold': '#ad8330',
        'rose-pink': '#de5d82',
        'soft-teal': '#76a5af',
        'navy': '#232b4c',
        'navy-alt': '#242b4c',
        'indigo': '#48538e',
        'indigo-alt': '#5665b3',
        'light-gray': '#f3f4f7',
        
        // Semantic mappings
        primary: '#134f5c', // deep-teal
        secondary: '#a0c6c6', // sage
        accent: '#ad8330', // warm-gold
        neutral: '#f3f4f7', // light-gray
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'lato': ['Lato', 'sans-serif'],
      },
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1' }],
        'hero-lg': ['4.5rem', { lineHeight: '1.05' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '32': '8rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      backgroundImage: {
        'gradient-sage': 'linear-gradient(135deg, #a0c6c6 0%, #76a5af 100%)',
        'gradient-teal': 'linear-gradient(135deg, #134f5c 0%, #76a5af 100%)',
        'nature-overlay': 'linear-gradient(rgba(19, 79, 92, 0.6), rgba(19, 79, 92, 0.6))',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.8s ease-out',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config