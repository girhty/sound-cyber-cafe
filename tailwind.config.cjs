/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#1B1630',
        cream: '#FCF5E9',
        butter: '#FFEBB0',
        gold: '#FFC93C',
        pink: '#FF7EB6',
        lav: '#B7B4FF',
        star: '#F5B301',
      },
      fontFamily: {
        display: ['Anton', 'Impact', 'Haettenschweiler', 'sans-serif'],
        mono: ['"Space Mono"', 'ui-monospace', 'monospace'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      maxWidth: { shell: '1320px' },
    },
  },
  plugins: [],
};