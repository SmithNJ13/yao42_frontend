/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  prefix: "tw-",
  theme: {
    extend: {
      'dancing-script': ['Dancing Script', 'cursive'],
      'poppins': ['Poppins', 'sans-serif']
    },
  },
  plugins: [],
}

