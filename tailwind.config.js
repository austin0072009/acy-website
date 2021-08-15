module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brown: {
          100: "#b3b3b3",
          200: "#bea48b",
          300: "#504f54",
          400: "#373739",
          600: "#2a292e",
          800: "#100201",
        },
      },
      grayscale: {
        90: ".9",
        100: "1",
      },
    },
  },
  variants: {
    extend: {
      grayscale: ["hover", "focus"],
    },
  },
  plugins: [],
};
