/** @type {import('tailwindcss').Config} */
export default {
  // El contenido de los archivos a escanear se infiere automáticamente en v4,
  // por lo que la propiedad 'content' ya no es necesaria.

  theme: {
    // Ya no se usa 'extend', las personalizaciones van directamente aquí.
    colors: {
        'primary': '#a855f7', // Púrpura principal
        'primary-100': '#d8b4fe',
        'primary-200': '#c084fc',
        'primary-300': '#a855f7',
        'primary-500': '#7e22ce',
        // Es importante volver a añadir los colores por defecto que necesites
        'white': '#ffffff',
        'black': '#000000',
        'transparent': 'transparent',
        'gray': {
            700: '#374151',
            600: '#4b5563',
        },
    },
    animation: {
      gradientBackground: 'gradientBackground 9s ease infinite',
      blink: 'blink 1.5s infinite',
    },
    keyframes: {
      gradientBackground: {
        '0%, 100%': { backgroundPosition: '0% 50%' },
        '50%': { backgroundPosition: '100% 50%' },
      },
      blink: {
        '0%, 100%': { opacity: '1' },
        '50%': { opacity: '0.3' },
      }
    }
  },
  plugins: [],
}