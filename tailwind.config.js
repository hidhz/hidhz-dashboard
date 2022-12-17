/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
   /* fontSize: {
    }, */
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
        colors: {
            primary: "#0ea5e9",
            dark: "#0f172a",
            secondary: "#475569",
            secondary2: "#64748b",
        }
    },
    screens: {
        '2xl': '1320px',
    }
  },
  plugins: [
    require("daisyui"),
    require('flowbite/plugin')
  ],
  daisyui: {
    themes: false,
  },
}

