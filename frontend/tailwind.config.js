/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#242424',
        light: '#ffffff',
        primary: '#646cff',  // Custom primary color
        secondary: '#535bf2',  // Hover color for links
        accent: '#747bff',  // Light hover color
        background: '#1a1a1a', // Button background
      },
      fontFamily: {
        sans: ['system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],  // Custom font family
      },
      spacing: {
        '18': '4.5rem', // Custom spacing
      },
    },
  },
  plugins: [],
}
