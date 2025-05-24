/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "se-primary": "#0D5BA6",
        "se-secondary": "#f79420",
        "se-white": "#fff",
        "se-black": "#000000",
        'custom-dark': '#363636',
      },
      fontFamily: {
        "se-smooch": ["Smooch Sans", "sans-serif"], // Added primary font
        "se-titillium": ["Titillium Web", "sans-serif"], // Added secondary and body font
      },
    },
  },
  plugins: [],
};
