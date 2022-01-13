const header = document.querySelector('.main-header');
const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('.main-header .nav-links li')

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
})