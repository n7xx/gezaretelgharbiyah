/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // لتفعيل الـ dark mode باستخدام class
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(35, 50%, 96%)",
        foreground: "hsl(25, 40%, 15%)",
        card: "hsl(35, 40%, 99%)",
        "card-foreground": "hsl(25, 40%, 15%)",
        gold: "hsl(42, 85%, 55%)",
        primary: "hsl(0, 78%, 42%)",
        secondary: "hsl(220, 85%, 45%)",
      },
      fontFamily: {
        ibm: ["'IBM Plex Sans Arabic'", "sans-serif"]
      },
      borderRadius: {
        lg: "0.75rem",
      },
    },
  },
  plugins: [],
};
