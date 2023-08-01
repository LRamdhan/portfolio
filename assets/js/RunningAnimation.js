import Animation from "./Animation.js";

class RunningAnimation {
    #animate = new Animation();
    #normalEducation = [];
    #reverseEducation = [];
    #educationDelay = 0;
    #educationDuration = 0;
    #skillImg = Array.from(document.getElementById('skill-img').children);
    #skillDuration = (innerWidth >= 640) ? 300 * 4 : 300 * 5;
    #normalProject = [];
    #reverseProject = [];
    #contact = Array.from(document.getElementById('contact').firstElementChild.children);
    #projectGallery = document.getElementById('project-gallery').children;
    #currentProject = Math.ceil(this.#projectGallery.length / 2) - 1;
    #dropNav;
    #navChild;
    #dropNavLang;
    #dropNavExit;
    #eduRoot;

    constructor() {
        this.#setHeight();
        this.#bioSection();
        this.#createNormalEducation();
        this.#createReverseEducation();
        this.#countEducationDuration();
        this.#createProject();
        this.#createDropNav();
        this.#contact.push(document.getElementById('copyright'));
    }

    #setHeight() {
        const education = document.getElementById('education');
        education.style.height = `${education.clientHeight}px`;
        const skills = document.getElementById('skills');
        skills.style.height = `${skills.clientHeight}px`;
        const projects = document.getElementById('projects');
        projects.style.height = `${projects.clientHeight}px`;
    }

    #bioSection() {
        const bioText = document.getElementsByClassName('bio-text');
        (innerWidth >= 768) ? this.#animate.fadeDown("#nav-desktop") : this.#animate.fadeDown("#nav-mobile");
        setTimeout(() => this.#animate.writing(bioText[0]), 400);
        setTimeout(() => this.#animate.writing(bioText[1]), 1200);
        setTimeout(() => this.#animate.writing(bioText[2]), 1900);
        setTimeout(() => this.#animate.fadeUp("#desk"), 2900);
        setTimeout(() => this.#animate.fadeUp("#talk"), 3100);
        setTimeout(() => this.#animate.fadeUp("#myself"), 3400);
    }

    get triggerData() {
        return [
            {
                element: document.getElementById('education'),
                visible: false,
                running: true,
                start: ".startEducation()",
                end:".endEducation()",
                duration: this.#educationDuration
            },
            {
                element: document.getElementById('skills'),
                visible: false,
                running: true,
                start: ".startSkill()",
                end: ".endSkill()",
                duration: this.#skillDuration
            },
            {
                element: document.getElementById('projects'),
                visible: false,
                running: true,
                start: ".startProject()",
                end: ".endProject()",
                duration: 1200
            },
            {
                element: document.getElementById('contact'),
                visible: false,
                running: true,
                start: ".startContact()",
                end: ".endContact()",
                duration: 1100
            }
        ];
    }

    #createNormalEducation() {
        this.#normalEducation.push(['this.#animate.fadeUpR("#education-title", "normal");', 300]);
        this.#normalEducation.push(['this.#animate.growY(document.getElementById("line-1"), "normal");', 300]);
        this.#normalEducation.push([`this.#animate.pop("#point-1", "normal"); this.#animate.swipe("#desk-right-1", "normal", "left"); this.#animate.swipe("#edu-left-1", "normal", ${innerWidth >= 768 ? '"right"' : '"left"'});`, 300]);
        this.#normalEducation.push(['this.#animate.growY(document.getElementById("line-2"), "normal");', 300]);
        this.#normalEducation.push([`this.#animate.pop("#point-2", "normal"); this.#animate.swipe("#desk-left-2", "normal", "left"); this.#animate.swipe("#edu-right-2", "normal", ${innerWidth >= 768 ? '"right"' : '"left"'});`, 300]);       
        this.#normalEducation.push(['this.#animate.growY(document.getElementById("line-3"), "normal");', 300]);
        this.#normalEducation.push([`this.#animate.pop("#point-3", "normal"); this.#animate.swipe("#desk-right-3", "normal", "left"); this.#animate.swipe("#edu-left-3", "normal", ${innerWidth >= 768 ? '"right"' : '"left"'});`, 300]);
        this.#normalEducation.push(['this.#animate.growY(document.getElementById("line-4"), "normal");', 300]);
    }

    #createReverseEducation() {     
        this.#normalEducation.forEach(el => {
            this.#reverseEducation.unshift([el[0].replaceAll("normal", "reverse"), el[1]]);
        });
    }

    #countEducationDuration() {
        this.#normalEducation.forEach(el => {
            this.#educationDuration += el[1];
        });
    }

    startEducation() {
        this.#educationDelay = 0;
        this.#normalEducation.forEach((el, ind) => {
            setTimeout(() => eval(el[0]), this.#educationDelay);
            this.#educationDelay += el[1];
        });
    }

    endEducation() {
        this.#educationDelay = 0;
        this.#reverseEducation.forEach((el, ind) => {
            setTimeout(() => eval(el[0]), this.#educationDelay);
            this.#educationDelay += el[1];
        });
    }

    startSkill() {
        let delay = 150;
        this.#animate.fadeUpR("#skill-title", 'normal');
        this.#skillImg.forEach((el, ind) => {
            if(innerWidth < 640) {
                if(ind % 2 === 0) delay += 150;
            } else if(innerWidth > 640 && innerWidth < 768) {
                ind = (ind) / 3;
                if(ind - Math.floor(ind) === 0) delay += 150;
            } else {
                ind = (ind) / 4;
                if(ind - Math.floor(ind) === 0) delay += 150;
            }
            setTimeout(() => this.#animate.fadeUpR(el, 'normal'), delay)
        });
    }
    
    endSkill() {
        let delay = 0;
        for(let i = this.#skillImg.length - 1; i >= 0; i--) {
            let ind = i;
            if(innerWidth < 640) {
                ind--;
                if(ind % 2 === 0) delay += 150;
            } else if(innerWidth > 640 && innerWidth < 768) {
                switch(ind) {
                    case 2 :
                    case 5 :
                    case 7 :
                    case 11 :
                    case 14 :
                        delay += 150;
                }
            } else {
                switch(ind) {
                    case 3 :
                    case 7 :
                    case 11 :
                    case 15 :
                        delay += 150;
                }
            }
            setTimeout(() => this.#animate.fadeUpR(this.#skillImg[i], 'reverse'), delay);
        };
        setTimeout(() => this.#animate.fadeUpR("#skill-title", 'reverse'), (innerWidth >= 640) ? 900 : 1800);
    };

    #createProject() {
        this.#normalProject.push("this.#animate.fadeUp('#project-title', 'normal', 20)");
        this.#normalProject.push("this.#animate.fadeUp('#project-desk', 'normal', 20)");
        this.#normalProject.push("this.#animate.pop('#project-img', 'normal', 20)");
        this.#normalProject.forEach(el => {
            this.#reverseProject.unshift(el.replaceAll('normal', 'reverse'));
        });
    }

    startProject() {
        let delay = 0;
        this.#normalProject.forEach((el, ind) => {
            if(ind == 1) {
                delay = 200;
            } else if(ind == 2) {
                delay = 500;
            } else if(ind > 2){
                delay = 700;
            }
            setTimeout(() => eval(el), delay);
        });
    }

    endProject() {
        let delay = 0;
        this.#reverseProject.forEach((el, ind) => {
            if(ind == 1) {
                delay = 200;
            } else if(ind == 2) {
                delay = 500;
            } else if(ind > 2) {
                delay = 700;
            }
            setTimeout(() => eval(el), delay);
        });
    }

    startContact() {
        let delay = 0;
        this.#contact.forEach((el, ind) => {
            setTimeout(() => this.#animate.fadeUp(el, 'normal', undefined, 300), delay);
            delay += 150;
        });
    }

    endContact() {
        let delay = 800;
        this.#contact.forEach((el, ind) => {
            setTimeout(() => this.#animate.fadeUp(el, 'reverse', undefined, 300), delay);
            delay -= 150;
        });
    }

    startArrowUp() {
        this.#animate.fadeUp('#arrow-up', 'normal', undefined, 300);
    }
    
    endArrowUp() {
        this.#animate.fadeUp('#arrow-up', 'reverse', undefined, 300);
    }

    nextProject() {
        const scaleAmount = (innerWidth >= 640 && innerWidth < 768) ? 1.8 : 1.65;
        if(this.#currentProject == this.#projectGallery.length - 1) return;
        this.#animate.scale(this.#projectGallery[this.#currentProject].firstElementChild, 'reverse', scaleAmount);
        setTimeout(() => this.#projectGallery[this.#currentProject].firstElementChild.style.position = "static", 350);
        setTimeout(() => this.#currentProject++, 355);
        setTimeout(() => this.#projectGallery[this.#currentProject].scrollIntoView({block: 'nearest', inline: 'center', behavior: 'smooth'}), 360);    
        const width = this.#projectGallery[this.#currentProject].firstElementChild.clientWidth;
        setTimeout(() => {
            this.#projectGallery[this.#currentProject].firstElementChild.style.position = "absolute";
            this.#projectGallery[this.#currentProject].firstElementChild.style.left = `calc(50% - ${parseInt(width) / 2}px)`;
        }, 760);
        setTimeout(() => this.#animate.scale(this.#projectGallery[this.#currentProject].firstElementChild, 'normal', scaleAmount), 765);
    }

    previousProject() {
        const scaleAmount = (innerWidth >= 640 && innerWidth < 768) ? 1.8 : 1.65;
        if(this.#currentProject == 0) return;
        this.#animate.scale(this.#projectGallery[this.#currentProject].firstElementChild, 'reverse', scaleAmount);
        setTimeout(() => this.#projectGallery[this.#currentProject].firstElementChild.style.position = "static", 350);
        setTimeout(() => this.#currentProject--, 355);
        setTimeout(() => this.#projectGallery[this.#currentProject].scrollIntoView({block: 'nearest', inline: 'center', behavior: 'smooth'}), 360);    
        const width = this.#projectGallery[this.#currentProject].firstElementChild.clientWidth;
        setTimeout(() => {
            this.#projectGallery[this.#currentProject].firstElementChild.style.position = "absolute";
            this.#projectGallery[this.#currentProject].firstElementChild.style.left = `calc(50% - ${parseInt(width) / 2}px)`;
        }, 760);
        setTimeout(() => this.#animate.scale(this.#projectGallery[this.#currentProject].firstElementChild, 'normal', scaleAmount), 765);
    }

    #createDropNav() {
        this.#navChild = Array.from(document.getElementById('drop-nav-child').children);
        this.#navChild.reverse();
        this.#dropNav = document.getElementById('drop-nav');
        this.#dropNavLang = document.getElementById('drop-nav-lang');
        this.#dropNavExit = document.getElementById('drop-nav-exit');
    }

    startDropNav() {
        this.#animate.swipeDown(this.#dropNav, 'normal');
        setTimeout(() => this.#animate.dock(this.#navChild, 'normal'), 300);
        setTimeout(() => this.#animate.pop(this.#dropNavLang, 'normal'), 300);
        setTimeout(() => this.#animate.pop(this.#dropNavExit, 'normal'), 300);
    }
    
    endDropNav() {
        this.#animate.pop(this.#dropNavExit, 'reverse');
        this.#animate.pop(this.#dropNavLang, 'reverse');
        this.#animate.dock(this.#navChild, 'reverse');
        setTimeout(() => this.#animate.swipeDown(this.#dropNav, 'reverse'), 600);
    }
}

export default RunningAnimation;