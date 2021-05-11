module.exports = {
  purge: ["./src/**/*.{js,jsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      "2md": "896px",
      "3md": "968px",
      lg: "1024px",
      lg2: "1190px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1675px",
    },
    extend: {
      colors: {
        beige: "#fefaf1",
        red: "#af171a",
        greyTeal: "#f7f7f7",
        dark: "#282828",
      },
      maxWidth: {
        345: "21.563rem",
        "full-30": "calc(100% - 60px)",
      },
      spacing: {
        4: "0.25rem",
        8: "0.5rem",
        10: "0.625rem",
        11: "0.688rem",
        12: "0.75rem",
        14: "0.875rem",
        16: "1rem",
        21: "1.313rem",
        24: "1.5rem",
        30: "1.875rem",
        42: "2.625rem",
        48: "3rem",
        49: "3.063rem",
        56: "3.5rem",
        78: "4.875rem",
        84: "5.25rem",
      },
      fontFamily: {
        sans:
          "'NeueHaasGroteskText Pro', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        serif: "'Caslon Pro', 'Caslon', serif",
      },
      fontSize: {
        11: "0.688rem",
        18: "1.125rem",
        20: "1.25rem",
        21: "1.313rem",
        23: "1.438rem",
        29: "1.813rem",
        30: "1.875rem",
        37: "2.313rem",
      },
      lineHeight: {
        24: "1.5rem",
        27: "1.688rem",
        34: "2.125rem",
        37: "2.313rem",
        39: "2.438rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    container: false,
  },
}
