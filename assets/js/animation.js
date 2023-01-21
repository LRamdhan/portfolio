import anime from "./../../node_modules/animejs/lib/anime.es.js";

class Animation {
    #growHeight = 0;

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
            duration: 500,
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
            duration: 400,
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
            duration: 400,
            delay: 20,
            opacity: {
                value: 1,
                duration: 5,
                delay: 0
            },
            height: [0, parseInt(dom.dataset.height)],
        });
    }

    swipe(dom, direction, to) {
        new anime({
            targets: dom,
            easing: 'easeInOutCubic',
            direction: direction,
            duration: 500,
            delay: 50,
            translateY: {
                value: "20%",
                duration: 10,
                delay: 0
            },
            opacity: [0, 1],
            translateX: [(to == 'right') ? -20 : 20, 0]
        });
    }
}

export default Animation;