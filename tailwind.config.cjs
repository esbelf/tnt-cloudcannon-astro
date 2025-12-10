/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    colors: {
      'white': '#fff',
      'primary': '#ED7465',
      'secondary': '#2A2F33'
    },
    extend: {
      fontFamily: {
        system: ['system-ui'],
        outfit: ['Outfit']
      }
    },
    plugins: [],
  },
};
