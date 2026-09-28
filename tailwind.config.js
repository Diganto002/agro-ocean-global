/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        agro: {
          navy: {
            950: '#060B18',
            900: '#0B132B',
            850: '#111B38',
            800: '#1C2541',
            700: '#26345A',
            600: '#3A4F82',
          },
          gold: {
            300: '#F7DFB8',
            400: '#E7BD88',
            500: '#D4A373',
            600: '#C67D0A',
            700: '#A16207',
          },
          amber: {
            400: '#FBBF24',
            500: '#F59E0B',
            600: '#D97706',
            700: '#B45309',
          },
          emerald: {
            400: '#4ADE80',
            500: '#2D6A4F',
            600: '#1B4332',
            700: '#081C15',
          },
          cream: {
            50: '#FDFBF7',
            100: '#FAF6ED',
            200: '#F3EBDD',
          }
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        display: ['Outfit', 'Syne', 'sans-serif'],
      },
      boxShadow: {
        'glow-gold': '0 0 25px -5px rgba(224, 169, 109, 0.35)',
        'glow-navy': '0 10px 40px -10px rgba(11, 19, 43, 0.45)',
        'glow-emerald': '0 0 25px -5px rgba(45, 106, 79, 0.4)',
        'card-glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'marquee-reverse': 'marquee-reverse 25s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-gentle': 'float 6s ease-in-out infinite',
        'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
