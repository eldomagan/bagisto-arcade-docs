module.exports = {
  content: ["./**/*.md", "./.vitepress/**/*.vue", "./.vitepress/**/*.ts"],
  darkMode: "media",
  darkMode: "class",
  theme: {
    extend: {},
    screen: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1400px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
