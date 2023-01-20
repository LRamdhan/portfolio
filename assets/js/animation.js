import anime from "./../../node_modules/animejs/lib/anime.es.js";

class Animation {
    fadeDown(dom) {
        return new anime({
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
        return new anime({
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
        return new anime({
            targets: dom,
            easing: "easeInOutCubic",
            duration: 500,
            translateY: [30, 0],
            opacity: [0, 1]            
        });
    }

    fadeRight(dom) {
        return new anime({
            targets: dom,
            duration: 700,
            easing: "easeInOutCubic",
            opacity: [0, 1],
            translateX: [-50, 0],
            delay: anime.stagger(200, {start: 500})
        });
    }
}

export default Animation;