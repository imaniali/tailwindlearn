/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'iran-sans': ['IranSansX', 'sans-serif'], // ⬅️ کلاس جدید ما
      },
    },
  },
  plugins: [],
}

