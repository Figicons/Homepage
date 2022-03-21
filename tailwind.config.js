module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./hooks/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xs: ["12px", { lineHeight: "1.32" }],
        s: ["13px", { lineHeight: "16px" }],
        sm: ["14px", { lineHeight: "1.25rem" }],
        base: ["18px", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "1.15" }],
        "6xl": ["3.75rem", { lineHeight: "1.15" }],
        "7xl": ["4.5rem", { lineHeight: "1.15" }],
        "8xl": ["6rem", { lineHeight: "1.15" }],
        "9xl": ["8rem", { lineHeight: "1.15" }],
      },

      fontFamily: {
        sans: '"Satoshi", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";',
      },
      colors: {
        primary: "#08115c",
        secondary: "#ff3e87",
        tertiary: "#ffe2e2",
      },
    },
  },
  plugins: [],
};
