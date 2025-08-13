/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}", "./src/layouts/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui']
      },
      colors: {
        primary: {
          50:'#eef9ff',
          100:'#d9f0ff',
          200:'#b6e3ff',
          300:'#85d0ff',
          400:'#45b5ff',
          500:'#119dff',
          600:'#067dd8',
          700:'#055fa8',
          800:'#074f88',
          900:'#0b426f'
        }
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,0.08)'
      }
    },
  },
  plugins: [],
}
