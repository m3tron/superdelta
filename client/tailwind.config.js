module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#20145f",
        secondary: "#f66732",
      },
      backgroundImage: {
        "hero-image": "url('/src/assets/images/homecropped.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
