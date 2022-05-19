module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'black-rgba': 'rgba(0, 0, 0, 0.54)',
      }
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        lg: '1280px',
        xl: '1280px',
        '2xl':'1280px'
      },
    }
  },
  plugins: [require("daisyui")],
};
