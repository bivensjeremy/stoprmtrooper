/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
    plugins: [
      require("@tailwindcss/typography"), 
      require("daisyui")
    ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#76ABAE",
          "secondary": "#31363F",
          "accent": "#DC5F00",
          "neutral": "#737373",
          "base-100": "#EEEEEE",
          "info": "#0369a1",
          "success": "#166534",
          "warning": "#fde047",
          "error": "#991b1b",
          },
      },
      "cupcake"
    ],
  },
};
