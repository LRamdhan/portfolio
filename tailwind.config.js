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
        "skill-sm": "repeat(3, max-content)",
        "skill-md": "repeat(5, max-content)"
      },
      gridTemplateRows: {
        bio: "max-content auto",
        nav: "max-content auto",
        "skill-sm": "repeat(4, max-content)",
        "skill-md": "repeat(3, max-content)"
      },
      screens: {
        bio: "1000px"
      },
      boxShadow: {
        pr: "0 0 10.3px rgba(0, 0, 0, .7)"
      },
      backgroundImage: {
        // desktop: "url(../img/desktopX.png)",
        // phone: "url(../img/phone.pXng)",
        // ipad: "url(../img/ipad.pnXg)"
      }
    },
  },
  plugins: [],
}