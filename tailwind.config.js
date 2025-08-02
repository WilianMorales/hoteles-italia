/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2A2A2A',   // Negro / Gris oscuro - texto principal y fondo
        accentRed: '#E53935', // Rojo bandera
        accentGreen: '#1B5E20', // Verde bandera
        lightGray: '#E0E0E0', // Gris claro - fondos
        wood: '#B5651D',      // Madera cálida
      }
    },
  },
  plugins: [],
}

