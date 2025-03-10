import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import { setupHeaderAnimations } from '../../utils/header'
// register plugins
gsap.registerPlugin(ScrollTrigger, SplitText)

document.addEventListener('DOMContentLoaded', function () {

    setupHeaderAnimations();
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
});


