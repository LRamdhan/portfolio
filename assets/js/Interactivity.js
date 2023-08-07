import Animation from "./Animation.js";

class Interactivity {
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
    #switchModeElement;
    #certificationElements = {
        title: document.getElementById('cert-title'),
        cert1: document.getElementById('cert-1'),
        cert2: document.getElementById('cert-2')
    };
    #designElements = {
        title: document.getElementById('design-title'),
        desk: document.getElementById('design-desk'),
        pict: Array.from(document.getElementById('design-pict').children)
    };
    #detailProject = {
        popup: document.getElementById('detail-project'),
        blurImg: document.getElementById('detail-project-blur'),
        clearImg: document.getElementById('detail-project-clear'),
        title: document.getElementById('detail-project-title'),
        desk: document.getElementById('detail-project-desk'),
        tech: document.getElementById('detail-project-tech'),
        demo: document.getElementById('detail-project-demo'),
        code: document.getElementById('detail-project-code'),
        paper: document.getElementById('detail-project-paper'),
        layer: document.getElementById('detail-project-layer'),
        outerExit: document.getElementById('detail-project-exit-outer'),
        skeleton: document.getElementsByClassName('skeleton'),
        error: document.getElementById('detail-project-error')
    };

    constructor() {
        this.#setHeight();
        this.#bioSection();
        this.#createNormalEducation();
        this.#createReverseEducation();
        this.#countEducationDuration();
        this.#createProject();
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

    pickProject(idx) {
        const scaleAmount = (innerWidth >= 640 && innerWidth < 768) ? 1.8 : 1.65;
        if(this.#currentProject == this.#projectGallery.length - 1) return;
        this.#animate.scale(this.#projectGallery[this.#currentProject].firstElementChild, 'reverse', scaleAmount);
        setTimeout(() => this.#projectGallery[this.#currentProject].firstElementChild.style.position = "static", 350);
        setTimeout(() => this.#currentProject = idx, 355);
        setTimeout(() => this.#projectGallery[this.#currentProject].scrollIntoView({block: 'nearest', inline: 'center', behavior: 'smooth'}), 360);    
        const width = this.#projectGallery[this.#currentProject].firstElementChild.clientWidth;
        let syncDrt = 0;
        if(innerWidth >= 1300) {
            syncDrt = 200;
        } else if(innerWidth >= 800) {
            syncDrt = 100;
        }
        setTimeout(() => {
            this.#projectGallery[this.#currentProject].firstElementChild.style.position = "absolute";
            this.#projectGallery[this.#currentProject].firstElementChild.style.left = `calc(50% - ${parseInt(width) / 2}px)`;
        }, 760 + syncDrt);
        setTimeout(() => this.#animate.scale(this.#projectGallery[this.#currentProject].firstElementChild, 'normal', scaleAmount), 765 + syncDrt);
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
    }
    
    endCertification() {
        this.#animate.fadeUp(this.#certificationElements.cert2, "reverse", undefined, 400);
        setTimeout(() => this.#animate.fadeUp(this.#certificationElements.cert1, "reverse", undefined, 400), 200);
        setTimeout(() => this.#animate.fadeUp(this.#certificationElements.title, "reverse", undefined, 200), 400);
    }

    startDesign() {
        this.#animate.fadeUp(this.#designElements.title, "normal", undefined, 200);
        setTimeout(() => this.#animate.fadeUp(this.#designElements.desk, "normal", undefined, 200), 100);
        setTimeout(() => this.#animate.fadeUp(this.#designElements.pict[0], "normal", undefined, 400), 200);
        setTimeout(() => this.#animate.fadeUp(this.#designElements.pict[1], "normal", undefined, 400), 400);
        setTimeout(() => this.#animate.fadeUp(this.#designElements.pict[2], "normal", undefined, 400), 600);

    }
    
    endDesign() {
        this.#animate.fadeUp(this.#designElements.pict[1], "reverse", undefined, 400);
        setTimeout(() => this.#animate.fadeUp(this.#designElements.pict[2], "reverse", undefined, 400), 100);
        setTimeout(() => this.#animate.fadeUp(this.#designElements.pict[0], "reverse", undefined, 400), 300);
        setTimeout(() => this.#animate.fadeUp(this.#designElements.desk, "reverse", undefined, 200), 700);
        setTimeout(() => this.#animate.fadeUp(this.#designElements.title, "reverse", undefined, 200), 800);
    }

    startDetailProject(idx) {
        this.#detailProject.popup.style.display = "flex";
        setTimeout(() => this.#detailProject.layer.style.opacity = 1, 100);
        setTimeout(() => this.#animate.fadeUp(this.#detailProject.paper, "normal", null, 300), 100);
        if(innerWidth <= 768) setTimeout(() => this.#animate.pop(this.#detailProject.outerExit, "normal"), 100);
        setTimeout(() => {
            for(let bone of this.#detailProject.skeleton) { bone.style.display = 'block'; }
            this.#detailProject.tech.innerHTML = `<div class="skeleton bone aspect-square w-9"></div>
            <div class="skeleton bone aspect-square w-9"></div>
            <div class="skeleton bone aspect-square w-9"></div>`;
        }, 150);
        setTimeout(async () => {
            try {  
                let data = await fetch(`../../data/projects_en.json`);
                data = await data.json();
                data = data[idx]; 
                this.#detailProject.blurImg.style.backgroundImage = `url(assets/img/project/${data.image})`;
                this.#detailProject.clearImg.setAttribute('src', `assets/img/project/${data.image}`);
                this.#detailProject.title.textContent = data.name;
                this.#detailProject.desk.textContent = data.description;
                let newImage = "";
                for(let tech of data.technology) { newImage += `<img src="assets/img/skill/${tech}.svg" alt="${tech}" class="h-9">`; }
                this.#detailProject.tech.innerHTML = newImage;
                this.#detailProject.demo.href = data.demo;
                this.#detailProject.code.href = data.code;
                this.#detailProject.blurImg.style.display = 'block';
                this.#detailProject.title.style.display = 'block';
                this.#detailProject.desk.style.display = 'block';
                this.#detailProject.demo.style.display = 'block';
                this.#detailProject.code.style.display = 'block';
            } catch(error) {
                console.log(error.message);
                this.#detailProject.error.style.display = 'block';
            } finally {
                for(let bone of this.#detailProject.skeleton) { bone.style.display = 'none'; }
            }
        }, 500);
    }

    endDetailProject() {
        this.#animate.fadeUp(this.#detailProject.paper, "reverse", null, 300);
        if(innerWidth <= 768) this.#animate.pop(this.#detailProject.outerExit, "reverse");
        this.#detailProject.layer.style.opacity = 0;
        setTimeout(() => this.#detailProject.popup.style.display = "none", 350);
        setTimeout(() => {
            for(let bone of this.#detailProject.skeleton) { bone.style.display = 'none'; }
            this.#detailProject.tech.innerHTML = "";
            this.#detailProject.blurImg.style.display = 'none';
            this.#detailProject.title.style.display = 'none';
            this.#detailProject.desk.style.display = 'none';
            this.#detailProject.demo.style.display = 'none';
            this.#detailProject.code.style.display = 'none';
            this.#detailProject.error.style.display = 'none';
        }, 400);
    }
}

export default Interactivity;