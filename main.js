const header = document.querySelector('.main-header');
const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('.main-header .nav-links li')
const effect = document.querySelectorAll("#effect");

window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    if(scrollPos > 10){
        header.classList.add('scrolled');
    } else{
        header.classList.remove('scrolled');
    }

    let current='';
    sections.forEach( section => {
        const sectionTop = section.offsetTop;
        const sectionHight = section.clientHeight;
        if(pageYOffset >= (sectionTop - sectionHight / 3 -75)){
            current = section.getAttribute('id');
        }
    })

    navLi.forEach( li => {
        li.classList.remove('active');
        if(li.classList.contains(current)){
            li.classList.add('active')
        }
    })

    if(window.scrollY >= 500) {
        effect.style.opacity = '1';
        effect.style.transform = 'translateX(0px)';
        effect.style.transition = '1s ease-in-out';
    } else {
        effect.style.opacity = '0';
        effect.style.transform = 'translateX(-50px)';
    }
}) 