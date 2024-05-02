

const initProject = () => {
    gsap.from('.project--info--container', {opacity: 0, y:100, duration: 1});

    let targets = gsap.utils.toArray(".item-img");

    targets.forEach((obj, i) => {
      gsap.from(obj, {
        scrollTrigger: {
          trigger: obj,
          start: "top center",
        },
        y: 200,
        opacity: 0,
        duration: 2,
        ease: "power4"
      });
    });
};

document.addEventListener("DOMContentLoaded", initProject);