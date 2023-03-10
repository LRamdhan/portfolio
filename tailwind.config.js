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
        "skill-md": "repeat(5, max-content)",
        "edu-md": "max-content max-content"
      },
      gridTemplateRows: {
        bio: "max-content auto",
        nav: "max-content auto",
        "skill-sm": "repeat(4, max-content)",
        "skill-md": "repeat(3, max-content)",
        "edu-md": "max-content max-content"
      },
      screens: {
        bio: "1000px"
      },
      boxShadow: {
        pr: "0 0 10.3px rgba(0, 0, 0, .7)"
      },
      backgroundImage: {
        article: "url(../img/article.avif)",
        calculator: "url(../img/calculator.avif)",
        chat: "url(../img/chat.avif)",
        fashion: "url(../img/fashion.avif)",
        film: "url(../img/film.avif)",
        filter: "url(../img/filter.avif)",
        gallery: "url(../img/gallery.avif)",
        menu: "url(../img/menu.avif)",
        pizza: "url(../img/pizza.avif)"
      }
    },
  },
  plugins: [],
}