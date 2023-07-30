/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html, js}"],
  theme: {
    extend: {
      colors: {
        background: "#21272F",
        accent: "#00BD95",
        dark: "#171C23",
        base: "#EBECED", 
        popup: "#303944",
        "accent-dark": "#00A17F",
        light: "#DFDFDF"
      },
      dropShadow: {
        basic: "0 13px 5px rgba(0, 189, 148, 0.443)",
        "basic-dark": "0 13px 5px rgba(0, 161, 127, 0.443)"
      },
      fontFamily: {
        suez: "suez, arial",
        arial: "arial",
        rubik: "rubik"
      },
      gridTemplateColumns: {
        bio: "minmax(max-content, 500px) minmax(max-content, 500px)",
        edu: "max-content auto",
        "edu-md": "max-content max-content max-content",
        "cert-bio": "max-content max-content"
      },
      gridTemplateRows: {
        bio: "max-content auto",
        nav: "max-content auto",
        edu: "max-content max-content",
      },
      screens: {
        bio: "1000px"
      },
      boxShadow: {
        pr: "0 0 10.3px rgba(0, 0, 0, .7)",
        project: "0 0 10px 4px rgba(0, 0, 0, 0.2)"
      },
      backgroundImage: {
        article: "url(../img/project/article.avif)",
        calculator: "url(../img/project/calculator.avif)",
        chat: "url(../img/project/chat.avif)",
        fashion: "url(../img/project/fashion.avif)",
        film: "url(../img/project/film.avif)",
        filter: "url(../img/project/filter.avif)",
        gallery: "url(../img/project/gallery.avif)",
        menu: "url(../img/project/menu.avif)",
        pizza: "url(../img/project/pizza.avif)",
        fullcalculator: "url(../img/project/fullcalculator.png)",
        fullfashion: "url(../img/project/fullfashion.png)",
      }
    },
  },
  darkMode: "class",
  plugins: [],
}