import Animation from "./Animation.js";


class RunningAnimation {
    #animate = new Animation();
    #normalEducation = [];
    #reverseEducation = [];
    #educationDelay = 0;
    #educationDuration = 0;
    #skillImg = Array.from(document.getElementById('skill-img').children);
    #skillDuration = (innerWidth >= 640) ? 500 * 4 : 500 * 3;
    #normalProject = [];
    #reverseProject = [];
    #contact = Array.from(document.getElementById('contact').children);

    constructor() {
        this.#setHeight();
        this.#bioSection();
        this.#createNormalEducation();
        this.#createReverseEducation();
        this.#countEducationDuration();
        this.#createProject();
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
        const hexagons = document.getElementById('hexagon').children;
        const bioText = document.getElementsByClassName('bio-text');
        (innerWidth >= 768) ? this.#animate.fadeDown("#nav-desktop") : this.#animate.fadeDown("#nav-mobile");
        setTimeout(() => this.#animate.fadeUp("#geometri"), 400);
        setTimeout(() => this.#animate.writing(bioText[0]), 400);
        setTimeout(() => this.#animate.writing(bioText[1]), 1200);
        setTimeout(() => this.#animate.writing(bioText[2]), 1900);
        setTimeout(() => this.#animate.fadeUp("#desk"), 2900);
        setTimeout(() => this.#animate.fadeUp("#talk"), 3100);
        if(innerWidth >= 1000) setTimeout(() => this.#animate.fadeRight(hexagons), 3100);
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
                duration: 1000
            },
            {
                element: document.getElementById('contact'),
                visible: false,
                running: true,
                start: ".startContact()",
                end: ".endContact()",
                duration: 1000
            }
        ];
    }

    #createNormalEducation() {
        this.#normalEducation.push(['this.#animate.fadeUpR("#education-title", "normal");', 300]);
        if(innerWidth >= 768) this.#normalEducation.push(['this.#animate.pop("#graduation-cap", "normal");', 400]);
        if(innerWidth >= 768) this.#normalEducation.push(['this.#animate.growY(document.getElementById("line-1"), "normal");', 400]);
        if(innerWidth >= 768) {
            this.#normalEducation.push(['this.#animate.pop("#point-1", "normal"); this.#animate.swipe("#desk-right-1", "normal", "right"); this.#animate.swipe("#edu-left-1", "normal", "left");', 400]);
        } else {
            this.#normalEducation.push(['this.#animate.pop("#point-1", "normal"); this.#animate.swipe("#edu-left-1", "normal", "right");', 400]);
        }
        this.#normalEducation.push(['this.#animate.growY(document.getElementById("line-2"), "normal");', 400]);
        if(innerWidth >= 768) {
            this.#normalEducation.push(['this.#animate.pop("#point-2", "normal"); this.#animate.swipe("#desk-left-2", "normal", "left"); this.#animate.swipe("#edu-right-2", "normal", "right");', 400]);
        } else {
            this.#normalEducation.push(['this.#animate.pop("#point-2", "normal"); this.#animate.swipe("#edu-right-2", "normal", "right");', 400]);
        }
        this.#normalEducation.push(['this.#animate.growY(document.getElementById("line-3"), "normal");', 400]);
        if(innerWidth >= 768) {
            this.#normalEducation.push(['this.#animate.pop("#point-3", "normal"); this.#animate.swipe("#desk-right-3", "normal", "right"); this.#animate.swipe("#edu-left-3", "normal", "left");', 400]);
        } else {
            this.#normalEducation.push(['this.#animate.pop("#point-3", "normal"); this.#animate.swipe("#edu-left-3", "normal", "right");', 400]);
        }
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
        let delay = 0;
        this.#animate.fadeUpR("#skill-title", 'normal');
        this.#skillImg.forEach((el, ind) => {
            if(innerWidth >= 640) {
                if(ind > 4 && ind < 8) {
                    delay = 500;
                } else if(ind > 7) {
                    delay = 800;
                } else {
                    delay = 300;
                }
            } else {
                if(ind > 2 && ind < 6) {
                   delay = 500;
                } else if(ind > 5 && ind < 9) {
                    delay = 800;
                } else if(ind > 8) {
                    delay = 1100;
                } else {
                    delay = 300;
                }
            }
            setTimeout(() => this.#animate.fadeUpR(el, 'normal'), delay)
        });
    }
    
    endSkill() {
        let delay = 0;
        this.#skillImg.forEach((el, ind) => {
            if(innerWidth >= 640) {
                if(ind < 8 && ind > 4) {
                    delay = 300;
                } else if(ind < 5) {
                    delay = 600;
                } else {
                delay = 0
                }
            } else {
                if(ind < 9 && ind > 5) {
                    delay = 300;
                } else if(ind < 6 && ind > 2) {
                    delay = 600;
                } else if(ind < 3) {
                    delay = 900;
                } else {
                    delay = 0;
                }
            }
            setTimeout(() => this.#animate.fadeUpR(el, 'reverse'), delay);
        });
        setTimeout(() => this.#animate.fadeUpR("#skill-title", 'reverse'), (innerWidth >= 640) ? 900 : 1800);
    };

    #createProject() {
        this.#normalProject.push("this.#animate.fadeUpR('#project-title', 'normal')");
        this.#normalProject.push("this.#animate.fadeUpR('#project-desk', 'normal')");
        this.#normalProject.push("this.#animate.pop('#project-img', 'normal')");
        this.#normalProject.push("this.#animate.swipe(document.getElementById('project-nav-left'), 'normal', 'left', 'custom')");
        this.#normalProject.push("this.#animate.swipe(document.getElementById('project-nav-right'), 'normal', 'right', 'custom')");
        this.#normalProject.forEach(el => {
            this.#reverseProject.unshift(el.replaceAll('normal', 'reverse'));
        });
    }

    startProject() {
        let delay = 0;
        this.#normalProject.forEach((el, ind) => {
            if(ind == 1) {
                delay = 300;
            } else if(ind == 2) {
                delay = 700;
            } else if(ind > 2){
                delay = 1000;
            }
            setTimeout(() => eval(el), delay);
        });
    }

    endProject() {
        let delay = 0;
        this.#reverseProject.forEach((el, ind) => {
            if(ind == 1) {
                delay = 300;
            } else if(ind == 2) {
                delay = 700;
            } else if(ind > 2){
                delay = 1000;
            }
            setTimeout(() => eval(el), delay);
        });
    }

    startContact() {
        let delay = 0;
        this.#contact.forEach((el, ind) => {
            setTimeout(() => this.#animate.fadeUpR(el, 'normal'), delay);
            delay += 200;
        });
    }

    endContact() {
        let delay = 1000;
        this.#contact.forEach((el, ind) => {
            setTimeout(() => this.#animate.fadeUpR(el, 'reverse'), delay);
            delay -= 200;
        });
    }
}

export default RunningAnimation;