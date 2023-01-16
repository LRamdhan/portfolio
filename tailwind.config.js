/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html, js}"],
  theme: {
    extend: {
      colors: {
        background: "#21272F",
        accent: "#00BD95",
        dark: "#171C23",
        base: "#EBECED"
      },
      dropShadow: {
        basic: "0 13px 5px rgba(0, 189, 148, 0.443)"
      },
      fontFamily: {
        suez: "suez, arial",
        arial: "arial",
        sansation: "sansation"
      },
      gridTemplateColumns: {
        bio: "minmax(max-content, 500px) minmax(max-content, 500px)",
      },
      gridTemplateRows: {
        bio: "max-content auto",
        nav: "max-content auto"
      },
      screens: {
        bio: "1000px"
      }
    },
  },
  plugins: [],
}