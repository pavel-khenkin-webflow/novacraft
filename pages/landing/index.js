import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import { setupHeaderAnimations } from '../../utils/header'
// register plugins
gsap.registerPlugin(ScrollTrigger, SplitText)

document.addEventListener('DOMContentLoaded', function () {

    setupHeaderAnimations();

    //h2 appear split animation
    const headers = document.querySelectorAll("h2");

    headers.forEach(h2 => {
        const split = new SplitText(h2, { type: "words, chars" });
        gsap.set(split.chars, { opacity: 0, x: 50 });

        gsap.to(split.chars, {
            opacity: 1,
            x: 0,
            stagger: 0.03, // Задержка между символами
            duration: 0.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: h2,
                start: "top 80%", // Анимация срабатывает, когда заголовок попадает в зону видимости
                toggleActions: "play none none none"
            }
        });
    });

    //BURGER MENU ======================================
    const burger = document.querySelector(".menu-burger");
    const topLine = document.querySelector(".burger-line_top");
    const centerLine = document.querySelector(".burger-line_center");
    const botLine = document.querySelector(".burger-line_bot");
    const menu = document.querySelector('[data-menu]');
    const body = document.body;
    
    let isOpen = false;
    
    burger.addEventListener("click", () => {
        if (!isOpen) {
            // Блокируем скролл без фиксации позиции
            body.style.overflow = "hidden";
    
            // Анимация бургер-меню
            gsap.to(topLine, { top: "50%", yPercent: -50, rotation: 45, duration: 0.4, ease: "power3.out" });
            gsap.to(botLine, { bottom: "50%", yPercent: 50, rotation: -45, duration: 0.4, ease: "power3.out" });
            gsap.to(centerLine, { opacity: 0, duration: 0.2, ease: "power3.out" });
    
            // Открытие меню
            menu.style.display = "block";
            gsap.fromTo(menu, { x: "-100%" }, { x: "0%", duration: 0.7, ease: "power3.out" });
    
        } else {
            // Анимация бургер-меню назад
            gsap.to(topLine, { top: "0%", yPercent: 0, rotation: 0, duration: 0.4, ease: "power3.out" });
            gsap.to(botLine, { bottom: "0%", yPercent: 0, rotation: 0, duration: 0.4, ease: "power3.out" });
            gsap.to(centerLine, { opacity: 1, duration: 0.2, ease: "power3.out" });
    
            // Закрытие меню
            gsap.to(menu, { x: "-100%", duration: 0.7, ease: "power3.out", onComplete: () => {
                menu.style.display = "none";
                body.style.overflow = ""; // Разблокируем скролл
            }});
        }
        isOpen = !isOpen;
    });

    
    
    // CALENDLY =================================
    const openButtons = document.querySelectorAll("[data-calendar-open]");
    const popupCalendar = document.querySelector("[data-calendar-popup]");
    const calendar = document.querySelector("[data-calendar]");
    
    if (!popupCalendar) return;
    
    function lockScroll() {
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        body.style.overflow = "hidden";
        body.style.paddingRight = `${scrollbarWidth}px`;
    }
    
    function unlockScroll() {
        body.style.overflow = "";
        body.style.paddingRight = "";
    }
    
    openButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            if (button.getAttribute("data-calendar-open") === "none") return; // Если "none", кнопка ведет себя как ссылка

            event.preventDefault();
            popupCalendar.classList.add("is--open");
            lockScroll();
        });
    });
    
    popupCalendar.addEventListener("click", (event) => {
        if (calendar && !calendar.contains(event.target)) {
            popupCalendar.classList.remove("is--open");
            unlockScroll();
        }
    });
    
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && popupCalendar.classList.contains("is--open")) {
            popupCalendar.classList.remove("is--open");
            unlockScroll();
        }
    });
    
    // DIGITAL TWIN LANDING =====================
    const digitalTwinLanding = document.querySelectorAll(".digital-twin__main, .twin__label__desc, .digital-twin__bottom");

    if (digitalTwinLanding.length) {
        digitalTwinLanding.forEach(element => {
            gsap.fromTo(element,
                { opacity: 0, y: '2em' },
                { 
                    opacity: 1, 
                    y: '0em', 
                    duration: 1, 
                    ease: "power3.out", 
                    scrollTrigger: {
                        trigger: element,
                        start: "top 80%",
                        scrub: false
                    }
                }
            );
        });
    }

    // expertise-marketing =================================
    const splitText = document.querySelector('[data-split="text-twin"]');
    if (splitText) {
        const splitTextInstance = new SplitText(splitText, {
            type: 'words, chars',
        });
        gsap.to(splitTextInstance.chars, {
            color: "#2c3d46",
            stagger: 0.1,
            scrollTrigger: {
                trigger: ".section_expertise_land-twin",
                start: "top center",
                end: "60% center",
                scrub: 1,
            },
        });
    }
    
    // AI VIDEO TWIN LANDING =====================
    const aiVideoTwinLanding = document.querySelectorAll(".ai-video-twin__info__desc, .ai-video-twin__info__list > *");

    if (aiVideoTwinLanding.length) {
        aiVideoTwinLanding.forEach(element => {
            gsap.fromTo(element,
                { opacity: 0, y: '2em' },
                { 
                    opacity: 1, 
                    y: '0em', 
                    duration: 1, 
                    ease: "power3.out", 
                    scrollTrigger: {
                        trigger: element,
                        start: "top 80%",
                        scrub: false
                    }
                }
            );
        });
    }

    // choise landing cards  =====================
    const choiseLanding = document.querySelectorAll(".choise__wrapper > *");
    
    if (choiseLanding.length) {
        choiseLanding.forEach(element => {
            gsap.fromTo(element,
                { opacity: 0, y: '2em' },
                { 
                    opacity: 1, 
                    y: '0em', 
                    duration: 1, 
                    ease: "power3.out", 
                    scrollTrigger: {
                        trigger: element,
                        start: "top 80%",
                        scrub: false
                    }
                }
            );
        });
    }
    // leadership landing cards  =====================
    const leadershipLanding = document.querySelectorAll(".leadership__container_twin > *");

    if (leadershipLanding.length) {
        leadershipLanding.forEach(element => {
            gsap.fromTo(element,
                { opacity: 0, y: '2em' },
                { 
                    opacity: 1, 
                    y: '0em', 
                    duration: 1, 
                    ease: "power3.out", 
                    scrollTrigger: {
                        trigger: element,
                        start: "top 80%",
                        scrub: false
                    }
                }
            );
        });
    }
    // how landing cards  =====================
    const howLanding = document.querySelectorAll(".how__main > * *");

    if (howLanding.length) {
        howLanding.forEach(element => {
            gsap.fromTo(element,
                { opacity: 0, y: '2em' },
                { 
                    opacity: 1, 
                    y: '0em', 
                    duration: 1, 
                    ease: "power3.out", 
                    scrollTrigger: {
                        trigger: element,
                        start: "top 80%",
                        scrub: false
                    }
                }
            );
        });
    }
    
    //CONUS SVG container =============================
    const elementsConus = getSortedElements('[data-animation-conus]');
    const elementsSvg = getSortedElements('[data-animation-conus-svg]');
    const elementsText = getSortedElements('[data-animation-conus-text]');

    if (elementsConus.length && elementsSvg.length && elementsText.length) {
        const tlConus = gsap.timeline({
            scrollTrigger: {
                trigger: '.leadership__svg-container',
                start: 'top center',
                end: 'bottom center',
                scrub: false,
            }
        });

        tlConus.fromTo(elementsConus, 
            { x: '-200%', opacity: 0 }, 
            { x: '0', opacity: 1, duration: .3, stagger: 0.07 }
        )

        .fromTo(elementsSvg, 
            { x: '-200%', opacity: 0 }, 
            { x: '0', opacity: 1, duration: .15, stagger: 0.05 }, "-=.15"
        )

        .fromTo(elementsText, 
            { x: '-200%', opacity: 0 }, 
            { x: '0', opacity: 1, duration: .3, stagger: 0.07 }, "-=0.3"
        );
    }

    // Функция для сортировки и получения элементов по data-атрибуту //svg conus 
    function getSortedElements(selector) {
        return Array.from(document.querySelectorAll(selector))
        .sort((a, b) => a.getAttribute(selector.replace(/[\[\]]/g, '')) - b.getAttribute(selector.replace(/[\[\]]/g, '')));
    }
    
    // Promo =====================================
    const splitTextPromo = document.querySelector('.section_promo [data-split="text-promo"]');
    if (splitTextPromo) {
        const splitTextPromoInstance = new SplitText(splitTextPromo, {
            type: 'words, chars',
        });
        gsap.to(splitTextPromoInstance.chars, {
            color: "#2c3d46",
            stagger: 0.1,
            scrollTrigger: {
                trigger: ".section_promo",
                start: "top center",
                end: "80% center",
                scrub: 1,
            },
        });
    }
    
    // testimonial animation =============================
    const testimonial = document.querySelectorAll('.testimonial__container');
    if (testimonial.length) {
        testimonial.forEach(element => {
            gsap.fromTo(element,
                { opacity: 0, y: '2em' },
                { opacity: 1, y: '0em', duration: 1, scrollTrigger: {
                    trigger: element,
                    start: 'top 80%',
                    scrub: false
                }}
            );
        });
    }
    

});