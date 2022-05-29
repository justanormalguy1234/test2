module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          "theme-blue": "#15212d",
          "theme-pink": "#f2295b",
        },
      },
    },
    plugins: [require("@tailwindcss/forms")],
  };