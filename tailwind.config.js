module.exports = {
  purge: ["./src/**/*.{js,jsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        beige: "#fefaf1",
        red: "#af171a",
        greyTeal: "#f7f7f7",
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
          "'Helvetica Now Text W01', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        serif: "'ITC Caslon_224 W01 Book','Adobe Caslon Pro', 'Caslon', serif",
      },
      fontSize: {
        xs: ["0.688rem", "0.813rem"],
        sm: ["0.875rem", "1rem"],
        base: ["1.313rem", "1.5rem"],
        md: ["2.625rem", "3rem"],
        lg: ["5.25rem", "4.875rem"],
        24: "1.5rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
