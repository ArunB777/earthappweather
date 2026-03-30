/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'space-blue': '#1e3a8a',
        'sky-blue': '#38bdf8',
        'midnight-blue': '#3b82f6',
      },
      backgroundImage: {
        'day-to-night': 'linear-gradient(180deg, #38bdf8 0%, #3b82f6 40%, #1e3a8a 100%)',
      },
    },
  },
  plugins: [],
}
