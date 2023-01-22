import RunningAnimation from "./RunningAnimation.js";

const run = new RunningAnimation();


const tringgerHeight = innerHeight * (50 / 100);
const triggerData = run.triggerData;
setInterval(() => {
    triggerData.forEach(el => {
        const top = el.element.getBoundingClientRect().top;
        if(top <= tringgerHeight) {
            // tampilkan
            if(!el.visible && el.running) {
                eval("run" + el.start);
                el.visible = true;
                el.running = false;
                setTimeout(() => el.running = true, el.duration + 500);
            }
        } else {
            // hilangkan
            if(el.visible && el.running) {
                eval("run" + el.end);
                el.visible = false;
                el.running = false;
                setTimeout(() => el.running = true, el.duration + 500);
            }
        }
    });
}, 500); 
