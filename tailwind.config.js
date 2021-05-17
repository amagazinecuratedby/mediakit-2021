module.exports = {
  purge: ["./src/**/*.{js,jsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: "475px",
      sm: "640px",
      md: "768px",
      "2md": "896px",
      "3md": "968px",
      lg: "1024px",
      lg2: "1190px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1675px",
      maxXxs: { max: "330px" },
      maxSm: { max: "639px" },
      maxMd: { max: "767px" },
    },
    extend: {
      colors: {
        beige: "#fefaf1",
        red: "#af171a",
        greyTeal: "#f7f7f7",
        dark: "#282828",
        grey: "#adadad",
      },
      maxWidth: {
        345: "21.563rem",
        500: "31.25rem",
        "full-30": "calc(100% - 60px)",
        "55p": "55%",
      },
      maxHeight: {
        345: "21.563rem",
        500: "31.25rem",
        "screen-65": "calc(100vh - 65px)",
      },
      spacing: {
        4: "0.25rem",
        8: "0.5rem",
        10: "0.625rem",
        11: "0.688rem",
        12: "0.75rem",
        14: "0.875rem",
        16: "1rem",
        20: "1.25rem",
        21: "1.313rem",
        24: "1.5rem",
        25: "1.563rem",
        30: "1.875rem",
        32: "2rem",
        35: "2.188rem",
        40: "2.5rem",
        42: "2.625rem",
        48: "3rem",
        49: "3.063rem",
        56: "3.5rem",
        60: "3.75rem",
        78: "4.875rem",
        84: "5.25rem",
        "15p": "15%",
        "40p": "40%",
        "1/2": "50%",
        "60p": "60%",
        "1/10": "10%",
      },
      fontFamily: {
        sans:
          "'NeueHaasGroteskText Pro', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        serif: "'Caslon Pro', 'Caslon', serif",
      },
      fontSize: {
        11: "0.688rem", // 11
        18: "1rem", // 16
        20: "1.125rem", // 18
        21: "1.188rem", // 19
        23: "1.313rem", // 21
        29: "1.563rem", // 27 -> 25
        30: "1.625rem", // 28 -> 26
        37: "2.063rem", // 35 -> 33
      },
      lineHeight: {
        11: "0.688rem",
        24: "1.375rem",
        27: "1.438rem", // 25 -> 23
        34: "1.875rem", // 32 -> 30
        37: "2.063rem", // 35 -> 33
        39: "2.188rem", // 37 -> 35
      },
      flex: {
        "0-auto": "0 0 auto",
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
