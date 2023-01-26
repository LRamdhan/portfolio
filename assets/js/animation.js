import anime from "./../../node_modules/animejs/lib/anime.es.js";

class Animation {
    fadeDown(dom) {
        new anime({
            targets: dom,
            easing: "easeInOutCubic",
            translateY: {
                value: [-20, 0],
                duration: 500
            },
            opacity: {
                value: [0, 1],
                duration: 200
            }
        });
    }

    writing(dom) {
        new anime({
            targets: dom,
            duration: 1000,
            easing: `steps(${dom.textContent.length})`,
            opacity: {
                value: 1,
                duration: 1
            },
            width: [0, dom.clientWidth]
        });
    }

    fadeUp(dom) {
        new anime({
            targets: dom,
            easing: "easeInOutCubic",
            duration: 500,
            translateY: [30, 0],
            opacity: [0, 1]            
        });
    }

    fadeRight(dom) {
        new anime({
            targets: dom,
            duration: 700,
            easing: "easeInOutCubic",
            opacity: [0, 1],
            translateX: [-50, 0],
            delay: anime.stagger(200, {start: 500})
        });
    }

    fadeUpR(dom, direction) {
        new anime({
            targets: dom,
            easing: "easeInOutCubic",
            duration: 300,
            direction: direction,
            translateY: [20, 0],
            opacity: [0, 1]            
        });
    }

    pop(dom, direction) {
        new anime({
            targets: dom,
            easing: 'easeInOutCubic',
            direction: direction,
            duration: 300,
            opacity: [0, 1],
            scale: [0.8, 1]
        });
    }

    growY(dom, direction) {
        if(dom.dataset.height == '') dom.dataset.height = dom.clientHeight;
        new anime({
            targets: dom,
            easing: 'linear',
            direction: direction,
            duration: 300,
            delay: 20,
            opacity: {
                value: 1,
                duration: 5,
                delay: 0
            },
            height: [0, parseInt(dom.dataset.height)],
        });
    }

    swipe(dom, direction, to, translate = 'default') {
        let elementY;
        if(translate == 'default') {
            elementY = (to != 'right') ? -20 : 20;
        } else if(translate == 'custom') {
            if(dom.dataset.x == '') {
                const translateX = parseInt(window.getComputedStyle(dom).transform.split(',')[4]);
                dom.dataset.x = (translateX < 0) ? (translateX * (-1)) : translateX;
            }
            const value = parseInt(dom.dataset.x);
            elementY = (to != 'right') ? (value * (-1)) : value;
        }
        new anime({
            targets: dom,
            easing: 'easeInOutCubic',
            direction: direction,
            duration: 300,
            delay: 50,
            translateY: {
                value: (translate == 'custom') ? 0 : '20%',
                duration: 10,
                delay: 0
            },
            opacity: [0, 1],
            translateX: [0, elementY]
        });
    }
    
    scale(dom, direction) {
        new anime({
            targets: dom,
            direction: direction,
            easing: 'easeInOutCubic',
            duration: 300,
            scale: [1, 1.5]
        });
    }

    swipeDown(dom, direction) {
        new anime({
            targets: dom,
            direction: direction,
            duration: 500,
            easing: (direction == 'normal') ? 'easeInOutCirc' : 'easeInOutExpo',
            translateY: ['-100%', 0]
        });
    }

    dock(dom, direction) {
        let y = 50;
        new anime({
            targets: dom,
            direction: direction,
            duration: 800,
            easing: 'easeOutQuint',
            translateY: () => {
                y -= 50;
                return [y, 0];
            },
        });
    }
}

export default Animation;