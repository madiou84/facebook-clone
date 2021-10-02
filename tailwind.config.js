module.exports = {
  purge: [
    './public/index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#6d8bca",
          100: "#6381c0",
          200: "#5977b6",
          300: "#4f6dac",
          400: "#4563a2",
          500: "#3b5998",
          600: "#314f8e",
          700: "#274584",
          800: "#1d3b7a",
          900: "#133170"
        },
        secondary: {
          50: "#ffffff",
          100: "#ffffff",
          200: "#f8fbff",
          300: "#eef1f5",
          400: "#e4e7eb",
          500: "#dadde1",
          600: "#d0d3d7",
          700: "#c6c9cd",
          800: "#bcbfc3",
          900: "#b2b5b9"
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
