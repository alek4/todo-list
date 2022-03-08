module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        dropdown: {
          '100%': { transform: 'translate(0, 4rem)' },
        }
      },
      animation: {
        dropdown: 'dropdown .5s ease-in forwards',
      }
    },
  },
  plugins: [],
};
