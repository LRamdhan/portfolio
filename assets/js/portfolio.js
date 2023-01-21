import anime from "./../../node_modules/animejs/lib/anime.es.js";
import Animation from "./animation.js";

const animate = new Animation();

// bio section
const hexagons = document.getElementById('hexagon').children;
const bioText = document.getElementsByClassName('bio-text');
(innerWidth >= 768) ? animate.fadeDown("#nav-desktop") : animate.fadeDown("#nav-mobile");
setTimeout(() => animate.fadeUp("#geometri"), 400);
setTimeout(() => animate.writing(bioText[0]), 400);
setTimeout(() => animate.writing(bioText[1]), 1200);
setTimeout(() => animate.writing(bioText[2]), 1900);
setTimeout(() => animate.fadeUp("#desk"), 2900);
setTimeout(() => animate.fadeUp("#talk"), 3100);
if(innerWidth >= 1000) setTimeout(() => animate.fadeRight(hexagons), 3100);


// education
let normalEducation = []
let reverseEducation = []
let delay = 0;
normalEducation.push(['animate.fadeUpR("#education-title", "normal");', 300]);
if(innerWidth >= 768) normalEducation.push(['animate.pop("#graduation-cap", "normal");', 400]);
if(innerWidth >= 768) normalEducation.push(['animate.growY(document.getElementById("line-1"), "normal");', 400]);
if(innerWidth >= 768) {
    normalEducation.push(['animate.pop("#point-1", "normal"); animate.swipe("#desk-right-1", "normal", "right"); animate.swipe("#edu-left-1", "normal", "left");', 400]);
} else {
    normalEducation.push(['animate.pop("#point-1", "normal"); animate.swipe("#edu-left-1", "normal", "right");', 400]);
}
normalEducation.push(['animate.growY(document.getElementById("line-2"), "normal");', 400]);
if(innerWidth >= 768) {
    normalEducation.push(['animate.pop("#point-2", "normal"); animate.swipe("#desk-left-2", "normal", "left"); animate.swipe("#edu-right-2", "normal", "right");', 400]);
} else {
    normalEducation.push(['animate.pop("#point-2", "normal"); animate.swipe("#edu-right-2", "normal", "right");', 400]);
}
normalEducation.push(['animate.growY(document.getElementById("line-3"), "normal");', 400]);
if(innerWidth >= 768) {
    normalEducation.push(['animate.pop("#point-3", "normal"); animate.swipe("#desk-right-3", "normal", "right"); animate.swipe("#edu-left-3", "normal", "left");', 400]);
} else {
    normalEducation.push(['animate.pop("#point-3", "normal"); animate.swipe("#edu-left-3", "normal", "right");', 400]);
}
normalEducation.forEach(el => {
    reverseEducation.unshift([el[0].replaceAll("normal", "reverse"), el[1]]);
});
let educationDuration = 0;
normalEducation.forEach(el => {
    educationDuration += el[1];
});

const showEducation = () => {
    delay = 0;
    normalEducation.forEach((el, ind) => {
        setTimeout(() => eval(el[0]), delay);
        delay += el[1];
    });
};

const hideEducation = () => {
    delay = 0;
    reverseEducation.forEach((el, ind) => {
        setTimeout(() => eval(el[0]), delay);
        delay += el[1];
    });
};









// scroll trigger
const education = document.getElementById('education');
let inside = false;
const start = innerHeight * (40 / 100);
const end = innerHeight * (50 / 100);
const mid = ((end - start) / 2) + start;
let running = false;
window.addEventListener('scroll', event => {
    let top = education.getBoundingClientRect().top;
    if(top < end && top > mid) {
        // animation start
        // reverse
        // if(inside)
        // inside = false
        if(inside && (!running)) {
            showEducation();
            running = true;
            setTimeout(() => running = false, educationDuration);
        }
        inside = false;
    } else if(top > start && top < mid) {
        // animation end
        // reverse
        // if(inside)
        // inside = false
        if(inside && (!running)) {
            hideEducation();
            running = true;
            setTimeout(() => running = false, educationDuration);
        }
        inside = false;
    } else {
        inside = true;
    }
}, {passive: true});

