import Interactivity from "./Interactivity.js";
import Animation from "./Animation.js";


// *initial style for animation is created in index.html (using tailwind)


// provide interactivity and animation method for each component
const run = new Interactivity();


// provide all simplified animation method
const animate = new Animation();


// utility data
const tringgerHeight = innerHeight * (50 / 100);
const triggerData = run.triggerData;
let arrowVisibility = false;
let scrollProject = true;
const half = innerHeight * (50 /100);


// check visbility of each section every 500ms, if it's either visible or invisible -> run start/reverse animation
setInterval(() => {
    triggerData.forEach(el => {
        const top = el.element.getBoundingClientRect().top;
        if(top <= tringgerHeight) {
            if(!el.visible && el.running) { // only execute once
                eval("run" + el.start);
                el.visible = true;
                el.running = false;
                setTimeout(() => el.running = true, el.duration + 200);
            }
        } 
    });
    if(scrollY > half) {
        if(!arrowVisibility) {
            run.startArrowUp();
            arrowVisibility = true;
        }
    } else {
        if(arrowVisibility) {
            run.endArrowUp();
            arrowVisibility = false;
        }
    }
}, 500); 


// open navigation in phone & tablet
let dropRun = true;
document.getElementById('hamberger').addEventListener('click', event => {
    if(dropRun) {
        run.startDropNav();
        dropRun = false;
        setTimeout(() => dropRun = true, 1150);
    }
});
document.getElementById('drop-nav-exit').addEventListener('click', event => {
    if(dropRun) {
        run.endDropNav();
        dropRun = false;
        setTimeout(() => dropRun = true, 1150);
    }
});


// click navigation in phone & tablet
const home = document.getElementById('home');
const projects = document.getElementById('projects');
const designs = document.getElementById('designs');
const contact = document.getElementById('contact');
Array.from(document.getElementById('drop-nav-child').children).forEach((el, ind) => {
    el.addEventListener('click', event => {
        if(dropRun) { 
            run.endDropNav();
            dropRun = false;
            setTimeout(() => dropRun = true, 1150);
            setTimeout(() => {
                switch(ind) {
                    case 0 : 
                        home.scrollIntoView({block: 'center', inline: 'center', behavior: 'smooth'});
                        break;
                    case 1 : 
                        projects.scrollIntoView({block: 'center', inline: 'center', behavior: 'smooth'});
                        break;
                    case 2 : 
                        designs.scrollIntoView({block: 'center', inline: 'center', behavior: 'smooth'});
                        break;
                    case 3 : 
                        contact.scrollIntoView({block: 'center', inline: 'center', behavior: 'smooth'});    
                }
            }, 1400);
        }
    });
});


// switch between dark and light mode
const root = document.getElementById('root');
let modeRun = false;
Array.from(document.getElementsByClassName('switch')).forEach(el => {
    el.addEventListener('click', () => {
        if(modeRun) return;
        modeRun = true;
        if(root.classList.contains('dark')) {
            run.endSwitchMode();
            setTimeout(() => modeRun = false, 700);
            return;
        }
        run.startSwitchMode();
        setTimeout(() => modeRun = false, 700);
    });
});