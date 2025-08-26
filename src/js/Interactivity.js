import Animation from "./Animation.js";


// provide interactivity and animation method
class Interactivity {
    #animate = new Animation(); // provide all simplified animation method
    #normalEducation = [];
    #educationDelay = 0;
    #educationDuration = 0;
    #skillImg = Array.from(document.getElementById('skill-img').children);
    #skillDuration = (innerWidth >= 640) ? 300 * 4 : 300 * 5;
    #projectElement = [
        document.getElementById('project-title'),
        document.getElementById('project-desk'),
        document.getElementById('project-item-1'),
        document.getElementById('project-item-2'),
        document.getElementById('project-item-3'),
        document.getElementById('project-item-4'),
        document.getElementById('project-item-5'),
        document.getElementById('project-item-6'),
        document.getElementById('project-item-7'),

    ];
    #contact = Array.from(document.getElementById('contact').firstElementChild.children);
    #dropNav;
    #navChild;
    #dropNavLang;
    #dropNavExit;
    #switchModeElement;
    #certificationElements = {
        title: document.getElementById('cert-title'),
        cert1: document.getElementById('cert-1'),
        cert2: document.getElementById('cert-2'),
        cert3: document.getElementById('cert-3'),
        cert4: document.getElementById('cert-4'),
        cert5: document.getElementById('cert-5'),
    };
    #designElements = {
        title: document.getElementById('design-title'),
        desk: document.getElementById('design-desk'),
        pict: Array.from(document.getElementById('design-pict').children)
    };

    constructor() {
        this.#setHeight();
        this.#bioSection();
        this.#createNormalEducation();
        // this.#createReverseEducation();
        this.#countEducationDuration();
        // this.#createProject();
        this.#createDropNav();
        this.#contact.push(document.getElementById('copyright'));
        this.#createSwitchMode();
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
        setTimeout(() => this.#animate.writing(bioText[0]), 300); // 7
        setTimeout(() => this.#animate.writing(bioText[1]), 860);
        setTimeout(() => this.#animate.writing(bioText[2]), 1100);
        setTimeout(() => this.#animate.writing(bioText[3]), 2060);
        setTimeout(() => this.#animate.fadeUp("#desk"), 2500);
        setTimeout(() => this.#animate.fadeUp("#talk"), 2700);
        setTimeout(() => this.#animate.fadeUp("#myself"), 3000);
    }

    // provide current section info, used to check whether to run start/reverse animation
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
                element: document.getElementById('certifications'),
                visible: false,
                running: true,
                start: ".startCertification()",
                end: ".endCertification()",
                duration: 850
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
                element: document.getElementById('designs'),
                visible: false,
                running: true,
                start: ".startDesign()",
                end: ".endDesign()",
                duration: 1050
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
    
    startProject() {
        let delay = 0;
        this.#projectElement.forEach((el, ind) => {
            setTimeout(() => {
                this.#animate.fadeUp(el, 'normal', 20)
            }, delay);
            delay += 200;
        });
    }

    startContact() {
        let delay = 0;
        this.#contact.forEach((el, ind) => {
            setTimeout(() => this.#animate.fadeUp(el, 'normal', undefined, 300), delay);
            delay += 150;
        });
    }

    startArrowUp() {
        this.#animate.fadeUp('#arrow-up', 'normal', undefined, 300);
    }
    
    endArrowUp() {
        this.#animate.fadeUp('#arrow-up', 'reverse', undefined, 300);
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

    #createSwitchMode() {
        const elements = {
            root: document.getElementById('root')
        };
        if(innerWidth < 640) {
            elements.sun = document.getElementById('sun-sm');
            elements.moon = document.getElementById('moon-sm');
        } else if(innerWidth >= 640 && innerWidth < 768) {
            elements.sun = document.getElementById('sun-sm');
            elements.moon = document.getElementById('moon-sm');
        } else {
            elements.sun = document.getElementById('sun-lg');
            elements.moon = document.getElementById('moon-lg');
        }
        this.#switchModeElement = elements;
    }

    startSwitchMode() {
        this.#animate.pop(this.#switchModeElement.sun, "reverse");
        setTimeout(() => this.#switchModeElement.sun.style.display = "none", 350);
        setTimeout(() => this.#switchModeElement.moon.style.display = "block", 360);
        setTimeout(() => this.#animate.pop(this.#switchModeElement.moon, "normal"), 370);
        this.#switchModeElement.root.classList.toggle('dark');
    }

    endSwitchMode() {
        this.#animate.pop(this.#switchModeElement.moon, "reverse");
        setTimeout(() => this.#switchModeElement.moon.style.display = "none", 350);
        setTimeout(() => this.#switchModeElement.sun.style.display = "block", 360);
        setTimeout(() => this.#animate.pop(this.#switchModeElement.sun, "normal"), 370);
        this.#switchModeElement.root.classList.toggle('dark');
    }

    startCertification() {
        this.#animate.fadeUp(this.#certificationElements.title, "normal", undefined, 200);
        setTimeout(() => this.#animate.fadeUp(this.#certificationElements.cert1, "normal", undefined, 400), 200);
        setTimeout(() => this.#animate.fadeUp(this.#certificationElements.cert2, "normal", undefined, 400), 400);
        setTimeout(() => this.#animate.fadeUp(this.#certificationElements.cert3, "normal", undefined, 400), 600);
        setTimeout(() => this.#animate.fadeUp(this.#certificationElements.cert4, "normal", undefined, 400), 800);
        setTimeout(() => this.#animate.fadeUp(this.#certificationElements.cert5, "normal", undefined, 400), 1000);
    }
    
    startDesign() {
        this.#animate.fadeUp(this.#designElements.title, "normal", undefined, 200);
        setTimeout(() => this.#animate.fadeUp(this.#designElements.desk, "normal", undefined, 200), 100);
        setTimeout(() => this.#animate.fadeUp(this.#designElements.pict[0], "normal", undefined, 400), 200);
        setTimeout(() => this.#animate.fadeUp(this.#designElements.pict[1], "normal", undefined, 400), 400);
        setTimeout(() => this.#animate.fadeUp(this.#designElements.pict[2], "normal", undefined, 400), 600);
        setTimeout(() => this.#animate.fadeUp(this.#designElements.pict[3], "normal", undefined, 400), 800);

    }    
}

export default Interactivity;