let lenis;

//NEW CODE
const init = () => {
    gsap.registerPlugin(ScrollTrigger);

    runLenis();
};

const runLenis = () => {
    lenis = new Lenis()

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time)=>{
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)
};

document.addEventListener("DOMContentLoaded", init);