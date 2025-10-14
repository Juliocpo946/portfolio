/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // <-- Esta línea es crucial
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#0B192F',
        'primary-light': '#CCD6F6',
        'accent-blue': '#64FFDA',
      }
    },
  },
  plugins: [],
}