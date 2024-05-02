

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

    gsap.to('.svg--circle', {rotation:"360", repeat:-1, duration: 4, ease: "linear"});
};

document.addEventListener("DOMContentLoaded", initProject);