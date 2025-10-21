document.addEventListener("DOMContentLoaded", function() {
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    const elementsToReveal = document.querySelectorAll('.reveal');
    elementsToReveal.forEach(element => {
        observer.observe(element);
    });

    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links a');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = hamburger.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });

    navLinksItems.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                const icon = hamburger.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });

    let mySwiper = null;

    function initSwiper() {
        const screenWidth = window.innerWidth;
        
        if (screenWidth < 769 && mySwiper === null) {
            mySwiper = new Swiper('.swiper-container', {
                effect: 'slide',
                grabCursor: true,
                centeredSlides: true,
                slidesPerView: 1,
                loop: true,
                
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                breakpoints: {
                    480: {
                        slidesPerView: 1.2,
                        spaceBetween: 10
                    },
                    768: {
                        slidesPerView: 1,
                    }
                }
            });
        } 
        else if (screenWidth >= 769 && mySwiper !== null) {
            mySwiper.destroy(true, true);
            mySwiper = null;
        }
    }

    initSwiper();

    window.addEventListener('resize', initSwiper);

});