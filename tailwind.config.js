/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'open-close': 'openClose 0.5s ease-in-out',
        slideInDown: 'slideInDown 1s ease-in-out'
      },
      keyframes: {
        openClose: {
          '0%': { opacity: 0, transform: 'scale(0.9)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
        slideInDown: {
          '0%': { transform: 'translateY(-15%)' },
          '50%': { transform: 'translateY(5%)' },
          '100%': { transform: 'translateY(0)' },
        }
      },
    },
  },
  plugins: [],
}

