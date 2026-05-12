/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0D1B2A',
          dark:    '#070F18',
          mid:     '#162235',
          light:   '#1E3252',
        },
        gold: {
          DEFAULT: '#C4973C',
          light:   '#DEB96A',
          pale:    '#F0D98C',
        },
        oxford: {
          DEFAULT: '#3D4B5C',
          light:   '#6B7D8F',
        },
        'off-white':  '#F8F6F1',
        'light-gray': '#EEF0F3',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans:  ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-dot': 'pulse-dot 2s infinite',
        'wa-bounce': 'wa-bounce 3s ease-in-out infinite',
      },
      keyframes: {
        'pulse-dot': {
          '0%,100%': { opacity: '1', transform: 'scale(1)' },
          '50%':     { opacity: '.4', transform: 'scale(1.6)' },
        },
        'wa-bounce': {
          '0%,100%': { transform: 'translateY(0)' },
          '50%':     { transform: 'translateY(-5px)' },
        },
      },
      maxWidth: { container: '1200px' },
    },
  },
  plugins: [],
};
