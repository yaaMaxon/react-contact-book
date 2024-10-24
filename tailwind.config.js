/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'card': '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
        'onHoverCard': '0 8px 16px 0 rgba(0, 0, 0, 0.2)'
      },
      borderRadius: {
        'photoCard': '4px 4px 0 0',
      },
    },
  },
  plugins: [],
}

