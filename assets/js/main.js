import RunningAnimation from "./RunningAnimation.js";

const run = new RunningAnimation();

const tringgerHeight = innerHeight * (50 / 100);
const triggerData = run.triggerData;
let arrowVisibility = false;
let scrollProject = true;
const project = document.getElementById('projects');
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