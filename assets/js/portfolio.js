import RunningAnimation from "./RunningAnimation.js";

const run = new RunningAnimation();

const tringgerHeight = innerHeight * (50 / 100);
const triggerData = run.triggerData;
let arrowVisibility = false;
let scrollProject = true;
const project = document.getElementById('projects');
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

    if(scrollY > (innerHeight * (50 /100))) {
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

    if(project.getBoundingClientRect().top <= tringgerHeight && scrollProject) {
        setTimeout(() => run.nextProject(), 1500); //
        scrollProject = false;
    }
}, 400); 

document.getElementById('scroll').scrollLeft = 700;
let projectRun = true;
document.getElementById('project-nav-previous').addEventListener('click', event => {
    if(projectRun) {
        run.previousProject();
        projectRun = false;
        setTimeout(() => projectRun = true, 1000);
    }
});
document.getElementById('project-nav-next').addEventListener('click', event => {
    if(projectRun) {
        run.nextProject()
        projectRun = false;
        setTimeout(() => projectRun = true, 1000);
    }
});


let dropRun = true;
document.getElementById('hamberger').addEventListener('click', event => {
    if(dropRun) {
        run.startDropNav();
        dropRun = false;
        setTimeout(() => dropRun = true, 1400);
    }
});
document.getElementById('drop-nav-exit').addEventListener('click', event => {
    if(dropRun) {
        run.endDropNav();
        dropRun = false;
        setTimeout(() => dropRun = true, 1400);
    }
});

const home = document.getElementById('home');
const education = document.getElementById('education');
const skill = document.getElementById('skills');
const projects = document.getElementById('projects');
const contact = document.getElementById('contact');
Array.from(document.getElementById('drop-nav-child').children).forEach((el, ind) => {
    el.addEventListener('click', event => {
        if(dropRun) {
            run.endDropNav();
            dropRun = false;
            setTimeout(() => dropRun = true, 1400);
            setTimeout(() => {
                switch(ind) {
                    case 0 : 
                        home.scrollIntoView({block: 'center', inline: 'center', behavior: 'smooth'});
                        break;
                    case 1 : 
                        education.scrollIntoView({block: 'center', inline: 'center', behavior: 'smooth'});
                        break;
                    case 2 : 
                        skill.scrollIntoView({block: 'center', inline: 'center', behavior: 'smooth'});
                        break;
                    case 3 : 
                        projects.scrollIntoView({block: 'center', inline: 'center', behavior: 'smooth'});    
                        break;
                    case 4 : 
                        contact.scrollIntoView({block: 'center', inline: 'center', behavior: 'smooth'});    
                }
            }, 1400);
        }
    });
});