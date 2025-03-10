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

    // PROMO =====================================
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
    
    // SUBHEADERS IN APPEAR =====================
    const subheaders = document.querySelectorAll(".vision__label p, .serve__label__desc, .serve__desc_bottom, .serve__wrapper > *");

    if (subheaders.length) {
        subheaders.forEach(element => {
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

    // about-us why choose animation =============================
    const whoChoiseTitle = document.querySelector('.who-choise__title');
    if (whoChoiseTitle) {
        gsap.fromTo(whoChoiseTitle,
            { opacity: 0, y: '2em' },
            { opacity: 1, y: '0em', duration: 1, scrollTrigger: {
                trigger: '.section_who-choise',
                start: 'top 80%',
                scrub: false
            }}
        );
    }
    
    const isMobile = window.innerWidth < 479;

    if (isMobile) {
        const elements = ['.first-card', '.who-choose-img_01', '.second-card', '.who-choose-img_02', '.third-card', '.who-choose-img_03', '.last-card'];

        elements.forEach(selector => {
            const element = document.querySelector(selector);
            if (element) {
                gsap.fromTo(element, { opacity: 0, x: '150%' }, { opacity: 1, x: '0', scrollTrigger: {
                    trigger: element,
                    start: 'top 80%',
                    toggleActions: 'play none none none',
                    ease: 'power3.out'
                }});
            }
        });
    } else {
        const whyChoose = gsap.timeline({
            scrollTrigger: {
                trigger: ".section_who-choise",
                start: "center center",
                scrub: false,
                ease: "power1.inOut"
            }
        });

        const firstCard = document.querySelector('.first-card');
        const whoChooseImg01 = document.querySelector('.who-choose-img_01');
        const secondCard = document.querySelector('.second-card');
        const whoChooseImg02 = document.querySelector('.who-choose-img_02');
        const thirdCard = document.querySelector('.third-card');
        const whoChooseImg03 = document.querySelector('.who-choose-img_03');
        const lastCard = document.querySelector('.last-card');

        if (firstCard && whoChooseImg01 && secondCard && whoChooseImg02 && thirdCard && whoChooseImg03 && lastCard) {
            whyChoose
                .fromTo(firstCard, { opacity: 0, x: '150%' }, { opacity: 1, x: '0'})
                .fromTo(whoChooseImg01, { opacity: 0, x: '150%' }, { opacity: 1, x: '0'}, "-=70%")
                .fromTo(secondCard, { opacity: 0, x: '150%' }, { opacity: 1, x: '0'}, "-=70%")
                .fromTo(whoChooseImg02, { opacity: 0, x: '150%' }, { opacity: 1, x: '0'}, "-=70%")
                .fromTo(thirdCard, { opacity: 0, x: '150%' }, { opacity: 1, x: '0'}, "-=70%")
                .fromTo(whoChooseImg03, { opacity: 0, x: '150%' }, { opacity: 1, x: '0'}, "-=70%")
                .fromTo(lastCard, { opacity: 0, x: '150%' }, { opacity: 1, x: '0'}, "-=70%");
        }
    }
        
});