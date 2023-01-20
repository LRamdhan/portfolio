// import anime from "./../../node_modules/animejs/lib/anime.es.js";
import Animation from "./animation.js";

const animate = new Animation();

// bio section
// const hexagons = document.getElementById('hexagon').children;
// const bioText = document.getElementsByClassName('bio-text');
// (innerWidth >= 768) ? animate.fadeDown("#nav-desktop") : animate.fadeDown("#nav-mobile");
// setTimeout(() => animate.fadeUp("#geometri"), 400);
// setTimeout(() => animate.writing(bioText[0]), 400);
// setTimeout(() => animate.writing(bioText[1]), 1200);
// setTimeout(() => animate.writing(bioText[2]), 1900);
// setTimeout(() => animate.fadeUp("#desk"), 2900);
// setTimeout(() => animate.fadeUp("#talk"), 3100);
// if(innerWidth >= 1000) setTimeout(() => animate.fadeRight(hexagons), 3100);




// innerWidth = 789
// 40% = 315
// 50% = 394
// kondisi masuk
// kondisi keluar
const skill = document.getElementById('skills');
let inside = false;
let start = innerHeight * (40 / 100);
let end = innerHeight * (50 / 100);
let mid = ((end - start) / 2) + start;

window.addEventListener('scroll', event => {
    let top = skill.getBoundingClientRect().top;
    if(top < end && top > mid) {
        // animation start
        // reverse
        // if(inside)
        // inside = false
        if(inside) console.log('masuk');
        inside = false;
    } else if(top > start && top < mid) {
        // animation end
        // reverse
        // if(inside)
        // inside = false
        if(inside) console.log('keluar');
        inside = false;
    } else {
        inside = true;
    }
}, {passive: true});