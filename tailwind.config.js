/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0066FF',
        secondary: '#00D4FF',
        accent: '#7B61FF',
        dark: '#0A0E27',
        darker: '#050818',
        light: '#F0F4FF'
      }
    },
  },
  plugins: [],
}
