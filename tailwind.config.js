const plugin = require("tailwindcss/plugin");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "title-bg": "url('/src/assets/main_panel_bg.png')",
        "gov-bg": "url('/src/assets/stars.png')",
      }),
      colors: {
        brown: {
          50: "#de5b24",
          100: "#b3b3b3",
          200: "#bea48b",
          300: "#504f54",
          400: "#373739",
          600: "#2a292e",
          700: "#212123",
          800: "#211c1e",
        },
        gray: {
          100: "#b0adb0",
          200: "#707070",
        },
        orange: "#ea5c1f",
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
      brightness: ["hover"],
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const extendLineThrough = {
        ".line-through": {
          textDecoration: "line-through",
          "text-decoration-color": "#ea5c1f",
          "text-decoration-thickness": "3px",
        },
      };
      addUtilities(extendLineThrough);
    }),
  ],
};
