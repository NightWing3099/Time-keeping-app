/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
      },
      colors: {
        purple: {
          600: 'hsl(246, 80%, 60%)',
          700: 'hsl(264, 64%, 52%)',
          500: 'hsl(235, 45%, 61%)',
        },
        navy: {
          950: 'hsl(226, 43%, 10%)',
          900: 'hsl(235, 46%, 20%)',
          200: 'hsl(236, 100%, 87%)',
          800: 'hsl(235, 46%, 30%)',
        },
        orange: {
          300: 'hsl(15, 100%, 70%)',
        },
        blue: {
          300: 'hsl(195, 74%, 62%)',
        },
        pink: {
          400: 'hsl(348, 100%, 68%)',
        },
        green: {
          400: 'hsl(145, 58%, 55%)',
        },
        yellow: {
          300: 'hsl(43, 84%, 65%)',
        },
      },
    },
  },
  plugins: [],
}