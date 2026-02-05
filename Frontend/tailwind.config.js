/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      /* =======================
         FONTS
      ======================= */
      fontFamily: {
        merri: ['Merriweather', 'serif'],
        devanagari: ['Noto Serif Devanagari', 'serif'],
      },

      /* =======================
         COLORS
      ======================= */
      colors: {
        spiritual: {
          50: '#fef3c7',
          100: '#fde68a',
          200: '#fcd34d',
          300: '#fbbf24',
          400: '#f59e0b',
          500: '#d97706',
          600: '#b45309',
          700: '#92400e',
          800: '#78350f',
          900: '#451a03',
        },
        admin: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        brandBlue: '#1100d7',
      },

      /* =======================
         SHADOWS (MATCH CSS)
      ======================= */
      boxShadow: {
        mantra: '0 0 20px rgba(220,120,50,0.2)',
        note: '0 6px 15px rgba(245,158,11,0.6)',
        spiritual: '0 4px 20px rgba(217,119,6,0.15)',
        admin: '0 4px 20px rgba(14,165,233,0.15)',
        'inner-lg': 'inset 0 2px 4px rgba(0,0,0,0.06)',
      },

      /* =======================
         ANIMATIONS
      ======================= */
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },

      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-in': 'slideIn 0.4s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4,0,0.6,1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'spin-slow': 'spin 3s linear infinite',
      },

      /* =======================
         LAYOUT
      ======================= */
      screens: {
        xs: '475px',
        '3xl': '1920px',
      },

      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },

      backdropBlur: {
        xs: '2px',
      },
    },
  },

  /* Bootstrap safe */
  corePlugins: {
    preflight: false,
  },

  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};
