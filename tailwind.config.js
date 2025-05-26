/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2F4F4F',
        secondary: '#1a2f2f',
      },
      fontFamily: {
        poppins: ['"poppins"', 'sans-serif'],
      },
      fontWeight: {
        extrabold: 800,
      },
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(8px)',
      },
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.backdrop-blur-sm': {
          backdropFilter: 'blur(4px)',
          '-webkit-backdrop-filter': 'blur(4px)',
        },
        '.backdrop-blur-md': {
          backdropFilter: 'blur(8px)',
          '-webkit-backdrop-filter': 'blur(8px)',
        },
        '.backdrop-blur-lg': {
          backdropFilter: 'blur(12px)',
          '-webkit-backdrop-filter': 'blur(12px)',
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    },
  ],
}; 