// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
const navBrand = document.getElementById('nav-brand');
const navLinks = document.querySelectorAll('.nav-link');
const navBtn = document.querySelector('.nav-btn');
const mobileBtn = document.getElementById('mobile-menu-btn');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('bg-white', 'shadow-md');
        navbar.classList.remove('bg-white/10', 'backdrop-blur-sm', 'border-white/10');

        // Text colors for light navbar
        if(navBrand) {
            navBrand.classList.remove('text-white');
            navBrand.classList.add('text-olive');
        }

        navLinks.forEach(link => {
            link.classList.remove('text-white/90');
            link.classList.add('text-gray-600');
        });

        if(navBtn) {
            navBtn.classList.remove('text-gold', 'border-gold');
            navBtn.classList.add('bg-olive', 'text-white', 'border-olive');
        }

        if(mobileBtn) {
            mobileBtn.classList.remove('text-white');
            mobileBtn.classList.add('text-olive');
        }

    } else {
        navbar.classList.remove('bg-white', 'shadow-md');
        navbar.classList.add('bg-white/10', 'backdrop-blur-sm', 'border-white/10');

        // Revert text colors
        if(navBrand) {
            navBrand.classList.add('text-white');
            navBrand.classList.remove('text-olive');
        }

        navLinks.forEach(link => {
            link.classList.add('text-white/90');
            link.classList.remove('text-gray-600');
        });

        if(navBtn) {
            navBtn.classList.add('text-gold', 'border-gold');
            navBtn.classList.remove('bg-olive', 'text-white', 'border-olive');
        }

        if(mobileBtn) {
            mobileBtn.classList.add('text-white');
            mobileBtn.classList.remove('text-olive');
        }
    }
});

// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinksList = document.querySelectorAll('.mobile-link');

if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('flex');
    });

    mobileLinksList.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('flex');
        });
    });
}

// GSAP Animations
document.addEventListener("DOMContentLoaded", () => {
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        // Hero Animation
        const tlHero = gsap.timeline();
        tlHero.fromTo(".gsap-hero > *",
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out", delay: 0.2 }
        );

        // Fade Up Elements
        gsap.utils.toArray(".gsap-fade-up").forEach(element => {
            gsap.fromTo(element,
                { opacity: 0, y: 40 },
                {
                    opacity: 1, y: 0, duration: 1, ease: "power3.out",
                    scrollTrigger: { trigger: element, start: "top 85%" }
                }
            );
        });

        // Fade Right
        gsap.utils.toArray(".gsap-fade-right").forEach(element => {
            gsap.fromTo(element,
                { opacity: 0, x: -50 },
                {
                    opacity: 1, x: 0, duration: 1, ease: "power3.out",
                    scrollTrigger: { trigger: element, start: "top 80%" }
                }
            );
        });

        // Fade Left
        gsap.utils.toArray(".gsap-fade-left").forEach(element => {
            gsap.fromTo(element,
                { opacity: 0, x: 50 },
                {
                    opacity: 1, x: 0, duration: 1, ease: "power3.out",
                    scrollTrigger: { trigger: element, start: "top 80%" }
                }
            );
        });

        // Stagger Features
        if (document.querySelector(".gsap-features")) {
            gsap.fromTo(".gsap-features > div",
                { opacity: 0, y: 30 },
                {
                    opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power2.out",
                    scrollTrigger: { trigger: ".gsap-features", start: "top 80%" }
                }
            );
        }

        // Stagger Services
        if (document.querySelector(".gsap-services")) {
            gsap.fromTo(".gsap-services > div",
                { opacity: 0, scale: 0.95, y: 30 },
                {
                    opacity: 1, scale: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out",
                    scrollTrigger: { trigger: ".gsap-services", start: "top 75%" }
                }
            );
        }

        // Testimonial Pop
        if (document.querySelector(".gsap-testimonial")) {
            gsap.fromTo(".gsap-testimonial",
                { opacity: 0, scale: 0.9 },
                {
                    opacity: 1, scale: 1, duration: 1, ease: "elastic.out(1, 0.7)",
                    scrollTrigger: { trigger: ".gsap-testimonial", start: "top 85%" }
                }
            );
        }

        // Stagger Gallery
        if (document.querySelector(".gsap-gallery")) {
            gsap.fromTo(".gsap-gallery > div",
                { opacity: 0, y: 20 },
                {
                    opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power2.out",
                    scrollTrigger: { trigger: ".gsap-gallery", start: "top 85%" }
                }
            );
        }

        // Parallax Banner Image
        if (document.querySelector("#parallax-banner")) {
            gsap.to("#parallax-banner", {
                yPercent: 30,
                ease: "none",
                scrollTrigger: {
                    trigger: "#parallax-banner",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            });
        }
    }
});
