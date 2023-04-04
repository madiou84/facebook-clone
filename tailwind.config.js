/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
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
          900: "#133170",
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
          900: "#b2b5b9",
        },
        defaultcolor: {
          50: "#3aacff",
          100: "#30a2ff",
          200: "#2698ff",
          300: "#1c8efe",
          400: "#1284f4",
          500: "#087aea",
          600: "#0070e0",
          700: "#0066d6",
          800: "#005ccc",
          900: "#0052c2",
        },
      },
      width: {
        "3/7": "46%",
      },
      height: {
        "h-93": "22rem",
        "max-h-93": "22rem",
      },
    },
  },
  plugins: [],
};
