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
        clock: "url(/img/project/fullclock.avif)",
        calculator: "url(/img/project/fullcalculatormd.avif)",
        weather: "url(/img/project/fullweather.avif)",
        "movie-gallery": "url(/img/project/fullmoviegallery.avif)",
        pizza: "url(/img/project/fullpizza.avif)",
        fashion: "url(/img/project/fullfashion.avif)",
        lapangku: "url(/img/project/fulllapangku.avif)",
        "design-clock": "url(/img/design/clock.avif)",
        "design-weather": "url(/img/design/weather.avif)",
        "design-portfolio": "url(/img/design/portfolio.avif)",
        "design-lapangku": "url(/img/design/lapangku.avif)"
      }, 
      aspectRatio: {
        design: "229 / 159"
      }
    },
  },
  darkMode: "class",
  plugins: [],
}