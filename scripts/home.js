
const animated = document.querySelectorAll('.border--animated');

const home = document.getElementById('home');
const work = document.getElementById('work');
const contact = document.getElementById('contact');

const tsmorales = document.getElementById('tsmorales');
const photoportfolio = document.getElementById('photoportfolio');
const ricardo = document.getElementById('ricardo');
const rodolfo = document.getElementById('rodolfo');

const icons = document.querySelectorAll('.icon--techno');

let tlContact, tlIcons, tlLanding, tlNavbar1, tlNavbar2, tlNavbar3;

const initHome = () => {
    gsap.from('.landing', {opacity: 0, y:100, duration: 1});

    runAnimations();

    runNavbar();

    notes();

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

    gsap.to(".contact", {
        scrollTrigger: {
            trigger: ".comments--container",
            start: "bottom bottom", // When the contact section starts
            end: "bottom top", // Duration for the animation
            scrub: true, // Smooth transition based on scroll,
            pin: true,
            onEnter: () => console.log("Animation triggered"), // Log to confirm
        },
        top: "0vh", // Slide the footer up to the top
        ease: "none",
    });

    //Slider image animation on scrolling
    tlLanding = gsap.timeline({
        scrollTrigger: {
            trigger: ".landing",
            start: "top top", // Animation starts when the top of the container hits the top of the viewport
            end: "center top", // Animation ends when the center of the container hits the top of the viewport
            scrub: true, // Smoothly animates the changes
            //markers: true, // For debugging, can be removed
            pin: false,
        }
    });
    // Define individual tweens for each image
    tlLanding.to(".landing--title", { y: '250px' }, 'landing');
    tlLanding.to(".landing--text", { y: '100px', opacity: '0' }, 'landing');

    tlIcons = gsap.timeline({
        repeat: -1,
        yoyo: true,
    });
    tlIcons.to(icons,{y: 25, stagger: .25, duration: 1.5});
};

const notes = () => {
    const container = document.getElementById('commentsContainer');
    
    // Array of note objects
    const notes = [
        { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at quam dolor. Etiam nisl felis, pulvinar vitae egestas non, pretium eu ipsum. Aliquam at urna sit amet elit porta lacinia vel vitae dui.', 
            from: '- Ricardo Leija' 
        },
        { 
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at quam dolor. Etiam nisl felis, pulvinar vitae egestas non, pretium eu ipsum. Aliquam at urna sit amet elit porta lacinia vel vitae dui.', 
            from: '- My gf'  
        },
        { 
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at quam dolor. Etiam nisl felis, pulvinar vitae egestas non, pretium eu ipsum. Aliquam at urna sit amet elit porta lacinia vel vitae dui.', 
            from: '- Fernando Morales'  
        }
    ];
    
    let currentIndex = 0;

    // Function to generate a random color
    const getRandomLightColor = () => {
        // Generate a random color with high RGB values to ensure lightness
        const r = Math.floor(Math.random() * 156) + 100; // Range from 100 to 255
        const g = Math.floor(Math.random() * 156) + 100; // Range from 100 to 255
        const b = Math.floor(Math.random() * 156) + 100; // Range from 100 to 255
        return `rgb(${r}, ${g}, ${b})`;
    };

    container.addEventListener('click', (event) => {
        // Get the position of the click relative to the container
        const rect = container.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        
        // Get the current note text
        const currentNote = notes[currentIndex];
        
        // Create a new note element
        const newNote = document.createElement('div');
        newNote.classList.add('note');

        newNote.style.backgroundColor = getRandomLightColor();

        // Add the new note to the container
        container.appendChild(newNote);

        const paragraph = document.createElement('p');
        paragraph.textContent = currentNote.text;
        newNote.appendChild(paragraph);

        const from = document.createElement('h1');
        from.textContent = currentNote.from;
        newNote.appendChild(from);


        // Calculate the position
        const noteRect = newNote.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        
        // Position the note at the click location
        newNote.style.position = 'absolute';
        newNote.style.left = `${Math.min(x, containerRect.width - noteRect.width)}px`;
        newNote.style.top = `${Math.min(y, containerRect.height - noteRect.height)}px`;
        
        newNote.style.display = 'flex';
        
        // Move to the next note or restart if at the end
        currentIndex = (currentIndex + 1) % notes.length;
        
        // Hide the note after 2 seconds and remove it from the container
        setTimeout(() => {
            newNote.style.display = 'none';
            newNote.remove();
        }, 5000);
    });
};


document.addEventListener("DOMContentLoaded", initHome);
