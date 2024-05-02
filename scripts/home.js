
const animated = document.querySelectorAll('.border--animated');

const home = document.getElementById('home');
const work = document.getElementById('work');
const contact = document.getElementById('contact');

const tsmorales = document.getElementById('tsmorales');
const photoportfolio = document.getElementById('photoportfolio');
const ricardo = document.getElementById('ricardo');
const rodolfo = document.getElementById('rodolfo');

const icons = document.querySelectorAll('.icon--techno');

let tlContact, tlIcons, tlLanding;

const initHome = () => {
    gsap.from('.landing', {opacity: 0, y:100, duration: 1});

    runAnimations();

    runNavbar();
};

const runNavbar = () => {
    runLenisScroll(home, 'top');
    runLenisScroll(work, '.projects');
    runLenisScroll(contact, 'end');
};

const runLenisScroll = (element, ubication) => {
    element.addEventListener('click', () => {
        lenis.scrollTo(ubication);
    });
}


const runAnimations = () => {
    tlContact = gsap.timeline({
        repeat: -1,
        yoyo:true
    });
    tlContact.from(animated,{scale:0, stagger: 0.25, duration: 1});

    //Slider image animation on scrolling
    tlLanding = gsap.timeline({
        scrollTrigger: {
            trigger: ".landing",
            start: "top top", // Animation starts when the top of the container hits the top of the viewport
            end: "bottom top", // Animation ends when the bottom of the container hits the top of the viewport
            scrub: true, // Smoothly animates the changes
            //markers: true, // For debugging, can be removed
            pin: false,
        }
    });
    // Define individual tweens for each image
    //Image---------------------------------------------------------------------------
    tlLanding.to(".landing--text--1", {
        y: window.innerHeight / 4,
    }, 0);
    tlLanding.to(".landing--text--2", {
        y: window.innerHeight / 4,
    }, 0);
    tlLanding.to(".landing--img--2", {
        y: window.innerHeight / 4,
    }, 0);
    tlLanding.to(".landing--img--3", {
        y: window.innerHeight / 4,
    }, 0);
    
    tlLanding.to(".landing--text--3", {
        y: -window.innerHeight / 4,
    }, 0);
    tlLanding.to(".landing--text--4", {
        y: -window.innerHeight / 4,
    }, 0);
    tlLanding.to(".landing--text--about", {
        y: -window.innerHeight / 4,
    }, 0);

    tlIcons = gsap.timeline({
        repeat: -1,
        yoyo: true,
    });
    tlIcons.to(icons,{y: 25, stagger: .25, duration: 1.5});
};

document.addEventListener("DOMContentLoaded", initHome);
