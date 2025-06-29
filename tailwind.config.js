/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      // Animations personnalisées
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'gradient-shift': 'gradient-shift 4s ease infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in-down': 'fadeInDown 0.6s ease-out forwards',
        'fade-in-left': 'fadeInLeft 0.6s ease-out forwards',
        'fade-in-right': 'fadeInRight 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'slide-in-up': 'slideInUp 0.4s ease-out forwards',
      },
      
      // Keyframes personnalisées
      keyframes: {
        wiggle: {
          '0%, 7%': { transform: 'rotate(0deg)' },
          '15%': { transform: 'rotate(-15deg)' },
          '20%': { transform: 'rotate(10deg)' },
          '25%': { transform: 'rotate(-10deg)' },
          '30%': { transform: 'rotate(6deg)' },
          '35%': { transform: 'rotate(-4deg)' },
          '40%, 100%': { transform: 'rotate(0deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(59, 130, 246, 0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.8), 0 0 30px rgba(59, 130, 246, 0.6)' },
        },
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          from: { opacity: '0', transform: 'translateY(-30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          from: { opacity: '0', transform: 'translateX(-30px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          from: { opacity: '0', transform: 'translateX(30px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          from: { opacity: '0', transform: 'scale(0.9)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        slideInUp: {
          from: { transform: 'translateY(100%)' },
          to: { transform: 'translateY(0)' },
        },
      },
      
      // Couleurs personnalisées
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
      },
      
      // Espacements personnalisés
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      
      // Rayons de bordure personnalisés
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      
      // Ombres personnalisées
      boxShadow: {
        '3xl': '0 35px 60px -12px rgba(0, 0, 0, 0.25)',
        '4xl': '0 45px 100px -12px rgba(0, 0, 0, 0.25)',
        'glow': '0 0 20px rgba(59, 130, 246, 0.4)',
        'glow-lg': '0 0 40px rgba(59, 130, 246, 0.6)',
      },
      
      // Backdrop blur personnalisé
      backdropBlur: {
        xs: '2px',
        '4xl': '72px',
      },
      
      // Transitions personnalisées
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '1200': '1200ms',
      },
      
      // Z-index personnalisés
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
      
      // Typographie personnalisée
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '0.75rem' }],
        '10xl': ['10rem', { lineHeight: '1' }],
        '11xl': ['12rem', { lineHeight: '1' }],
        '12xl': ['14rem', { lineHeight: '1' }],
      },
      
      // Largeurs personnalisées
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      
      // Hauteurs personnalisées
      minHeight: {
        '16': '4rem',
        '20': '5rem',
        '24': '6rem',
      },
      
      // Grilles personnalisées
      gridTemplateColumns: {
        '16': 'repeat(16, minmax(0, 1fr))',
        'auto-fit': 'repeat(auto-fit, minmax(280px, 1fr))',
        'auto-fill': 'repeat(auto-fill, minmax(280px, 1fr))',
      },
      
      // Aspect ratios personnalisés
      aspectRatio: {
        '4/3': '4 / 3',
        '3/2': '3 / 2',
        '2/3': '2 / 3',
        '9/16': '9 / 16',
      },
    },
  },
  plugins: [
    // Plugin pour les animations personnalisées
    function({ addUtilities, theme }) {
      const newUtilities = {
        '.animate-delay-75': {
          'animation-delay': '75ms',
        },
        '.animate-delay-100': {
          'animation-delay': '100ms',
        },
        '.animate-delay-150': {
          'animation-delay': '150ms',
        },
        '.animate-delay-200': {
          'animation-delay': '200ms',
        },
        '.animate-delay-300': {
          'animation-delay': '300ms',
        },
        '.animate-delay-500': {
          'animation-delay': '500ms',
        },
        '.animate-delay-700': {
          'animation-delay': '700ms',
        },
        '.animate-delay-1000': {
          'animation-delay': '1000ms',
        },
        '.text-shadow': {
          'text-shadow': '0 2px 4px rgba(0, 0, 0, 0.1)',
        },
        '.text-shadow-md': {
          'text-shadow': '0 4px 8px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.08)',
        },
        '.text-shadow-lg': {
          'text-shadow': '0 15px 30px rgba(0, 0, 0, 0.11), 0 5px 15px rgba(0, 0, 0, 0.08)',
        },
        '.text-shadow-none': {
          'text-shadow': 'none',
        },
      }
      addUtilities(newUtilities)
    }
  ],
};