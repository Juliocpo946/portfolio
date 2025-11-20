/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Importante para el toggle Dark/Light
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // O la fuente que prefieras
        mono: ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}