/*==Icono de menú despegable, está función sirve para que el ícono (no el menú en general)  se retraiga o expanda al darle click==*/
let menuIcon = document.querySelector('#icono');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*==Link activo por sección, este script dejará un "active" en el menú según en la sección que se encuentre==*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    })


    /*===============================================Navbar fija=============================================================*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*========================Función que permite que el menú despegable se retraiga de forma automática al darle click
    y no permanezca en pantalla mientras se navega en el sitio===================================*/
    menuIcon.classList.remove('bx-x');      /* ('bx-x') es la manera con la que referenciamos el ícono "x", proveniente de https://boxicons.com*/
    navbar.classList.remove('active');

};

/*===============================================Scroll Reveal (animación de contenido en #home)=============================================================*/
ScrollReveal({
   // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-cont, .hdng', { origin: 'top' });
ScrollReveal().reveal('.home-img, .serv-cont, .port-box, .contacto form', { origin: 'bottom' });
ScrollReveal().reveal('.home-cont h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-cont p, .abt-cont', { origin: 'right' });


/*===============================================================================typed js=====================================================================*/

const typed = new Typed('.txt-multi', {
    strings : ['Desarrollador Frontend', 'Creador de contenido', 'IT Support Specialist'],
    typeSpeed: 75,
    backSpeed: 75,
    backDelay: 100,
    loop: true
});