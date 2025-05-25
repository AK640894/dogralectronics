/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      colors: {
        blue: {
          50: '#f0f7ff',
          100: '#e0eefe',
          200: '#b9ddfc',
          300: '#7cc2fb',
          400: '#36a3f6',
          500: '#0c87e8',
          600: '#0069c5',
          700: '#0054a0',
          800: '#004985',
          900: '#00396e',
        },
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
    },
  },
  plugins: [],
};