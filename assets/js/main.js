import Interactivity from "./Interactivity.js";
import Animation from "./Animation.js";

const run = new Interactivity();
const animate = new Animation();

const tringgerHeight = innerHeight * (50 / 100);
const triggerData = run.triggerData;
let arrowVisibility = false;
let scrollProject = true;
const half = innerHeight * (50 /100);

setInterval(() => {
    triggerData.forEach(el => {
        const top = el.element.getBoundingClientRect().top;
        if(top <= tringgerHeight) {
            if(!el.visible && el.running) {
                eval("run" + el.start);
                el.visible = true;
                el.running = false;
                setTimeout(() => el.running = true, el.duration + 200);
            }
        } else {
            if(el.visible && el.running) {
                eval("run" + el.end);
                el.visible = false;
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



const projectList = Array.from(document.getElementById('project-gallery').children);
const midIdx = Math.ceil(projectList.length / 2) - 1;
const middle = projectList[midIdx].firstElementChild;
middle.style.position = "absolute";
middle.style.left = `calc(50% - ${middle.clientWidth / 2}px)`;
middle.style.transform = `scale(${(innerWidth >= 640 && innerWidth < 768) ? 1.8 : 1.65})`;
let sLeft = 0;
for(let i = 0; i < midIdx; i++) {
    sLeft += middle.clientWidth;
    sLeft += 22;
}
sLeft += 600;
sLeft -= (innerWidth / 2) - (middle.clientWidth / 2);
document.getElementById('scroll').scrollLeft = sLeft;
let projectRun = true;
document.getElementById('project-nav-previous').addEventListener('click', event => {
    if(projectRun) {
        run.previousProject();
        projectRun = false;
        setTimeout(() => projectRun = true, 1070);
    }
});
document.getElementById('project-nav-next').addEventListener('click', event => {
    if(projectRun) {
        run.nextProject();
        projectRun = false;
        setTimeout(() => projectRun = true, 1070);
    }
});
new Hammer(document.getElementById('project-img')).on('swipeleft swiperight', function(e) {
    if(e.type === "swiperight" && projectRun) {
        run.previousProject();
        projectRun = false;
        setTimeout(() => projectRun = true, 1070);
    } else if(e.type === "swipeleft" && projectRun) {
        run.nextProject();
        projectRun = false;
        setTimeout(() => projectRun = true, 1070);
    }
});
let popupOpen = false;
Array.from(document.getElementsByClassName('project-card')).forEach((el, idx) => {
    el.addEventListener('click', event => {
        if(event.target.style.position === "absolute") {
            run.startDetailProject(idx);
            popupOpen = true;
            return;
        }
        if(projectRun) {
            run.pickProject(idx);
            projectRun = false;
            let syncDrt = 0;
            if(innerWidth >= 1300) {
                syncDrt = 200;
            } else if(innerWidth >= 800) {
                syncDrt = 100;
            }
            setTimeout(() => projectRun = true, 1070 + syncDrt);
        }
    });
});
Array.from(document.getElementsByClassName('detail-project-exit')).forEach(el => el.addEventListener('click', () => {
    run.endDetailProject();
    popupOpen = false;
}));
let projectVisbility = false;
new IntersectionObserver(entries => projectVisbility = entries[0].isIntersecting).observe(document.getElementById('projects'));
document.addEventListener('keyup', event => {
    if(popupOpen && event.code === "Escape") {
        event.preventDefault();
        run.endDetailProject();
    }
    if(event.code === 'ArrowRight') {
        event.preventDefault();
        if(projectVisbility && triggerData[3].visible && projectRun) {
            run.nextProject();
            projectRun = false;
            setTimeout(() => projectRun = true, 1070);
        }
    } else if(event.code === 'ArrowLeft') {
        event.preventDefault();
        if(projectVisbility && triggerData[3].visible && projectRun) {
            run.previousProject();
            projectRun = false;
            setTimeout(() => projectRun = true, 1070);
        }
    }
});

for(let pjr of document.getElementsByClassName('project-main')) {
    let amount = (innerWidth >= 640 && innerWidth < 768) ? 1.8 : 1.65;
    pjr.addEventListener('mouseover', event => {        
        if(event.target.style.position === 'absolute' && projectRun) {
            animate.scaleHover(event.target, 'normal', amount, amount + 0.10);
        }
    });
    pjr.addEventListener('mouseleave', event => {
        if(event.target.style.position === 'absolute' && projectRun) {
            animate.scaleHover(event.target, 'reverse', amount, amount + 0.10);
        }
    });
}


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



