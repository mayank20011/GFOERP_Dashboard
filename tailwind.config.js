/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true, // centers the container by default
      padding: '2rem', // adds padding to the container
      screens: {
        sm: '100%', // 100% width on small screens
        md: '768px', // 768px max-width on medium screens
        lg: '1024px', // 1024px max-width on large screens
        xl: '1280px', // 1280px max-width on extra-large screens
      }
    },
    extend: {},
  },
  plugins: [],
}

