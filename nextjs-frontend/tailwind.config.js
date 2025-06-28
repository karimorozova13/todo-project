/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          main: "#c0d1c2",
          light: "#e0f0e0",
          dark: "#a0b1a0",
        },
        background: {
          light: "#f9f9f9", // Light background color
          dark: "#e0e0e0", // Dark background color
        },
      },
      fontSize: {
        lg: "1.125rem", // 18px
        xl: "1.25rem", // 20px
        "2xl": "1.5rem", // 24px
      },
      spacing: {
        section: "8px",
        container: "16px", // 16px for container spacing
        card: "24px", // 24px for card spacing
        button: "12px", // 12px for button spacing
        input: "8px", // 8px for input spacing
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out",
        slideIn: "slideIn 0.5s ease-in-out",
      },
      boxShadow: {
        card: "0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)",
        button: "0 2px 4px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)",
      },
    },
  },
  plugins: [],
};
