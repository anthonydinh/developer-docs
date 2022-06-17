module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './content/**/*.{md,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gray: {
          850: '#18202F',
          950: '#000a14',
        },
      },
      screens: {
        '1.5xl': '1440px',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
