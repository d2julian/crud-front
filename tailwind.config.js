/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'bg-main': "url('/src/assets/background-main.jpg')",
      },
      screens: {
        xs: { max: '639px' },
      },
    },
  },
  plugins: [],
};
