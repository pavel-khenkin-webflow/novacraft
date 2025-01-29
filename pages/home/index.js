import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import Lenis from 'lenis'
import { setupHeaderAnimations } from '../../utils/header'
// register plugins
gsap.registerPlugin(ScrollTrigger, SplitText)

document.addEventListener('DOMContentLoaded', function () {
    const lenis = new Lenis();
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(time => {
        lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    setupHeaderAnimations();

    // Expertise =================================
    const splitText = new SplitText('[data-split="text"]', {
        type: 'words, chars',
    });
    // ExpertiseExpo =================================
    const splitTextExpo = new SplitText('[data-split="text-expo"]', {
        type: 'words, chars',
    });

    // Promo =====================================
    const splitTextPromo = new SplitText('.section_promo [data-split="text-promo"]', {
        type: 'words, chars',
    });

    gsap.to(splitText.chars, {
        color: "#2c3d46",
        stagger: 0.1,
        scrollTrigger: {
            trigger: ".section_expertise_land",
            start: "top center",
            end: "80% center",
            scrub: 1,
        },
    });
    gsap.to(splitTextExpo.chars, {
        color: "#2c3d46",
        stagger: 0.1,
        scrollTrigger: {
            trigger: ".section_expertise",
            start: "top center",
            end: "60% center",
            scrub: 1,
        },
    });

    gsap.to(splitTextPromo.chars, {
        color: "#2c3d46",
        stagger: 0.1,
        scrollTrigger: {
            trigger: ".section_promo",
            start: "top center",
            end: "80% center",
            scrub: 1,
        },
    });

    // SVG container =============================

    const tlConus = gsap.timeline({
        scrollTrigger: {
            trigger: '.leadership__svg-container',
            start: 'top center',
            end: 'bottom center',
            scrub: false,
        }
    });
    
    // Функция для сортировки и получения элементов по data-атрибуту
    function getSortedElements(selector) {
        return Array.from(document.querySelectorAll(selector))
            .sort((a, b) => a.getAttribute(selector.replace(/[\[\]]/g, '')) - b.getAttribute(selector.replace(/[\[\]]/g, '')));
    }
    
    // Получаем и сортируем элементы
    const elementsConus = getSortedElements('[data-animation-conus]');
    const elementsSvg = getSortedElements('[data-animation-conus-svg]');
    const elementsText = getSortedElements('[data-animation-conus-text]');
    
    // Анимация первого набора элементов
    tlConus.fromTo(elementsConus, 
        { x: '-200%', opacity: 0 }, 
        { x: '0', opacity: 1, duration: .5, stagger: 0.2 }
    )
    
    // Анимация второго набора (SVG) после первого
    .fromTo(elementsSvg, 
        { x: '-200%', opacity: 0 }, 
        { x: '0', opacity: 1, duration: .3, stagger: 0.13 }
    )

    // Анимация третьего набора (текст) после второго
    .fromTo(elementsText, 
        { x: '-200%', opacity: 0 }, 
        { x: '0', opacity: 1, duration: 1, stagger: 0.2 }
    );

    
    
    // Vision animation =============================
    const visionElements = document.querySelectorAll('.section_vision > * *');
    visionElements.forEach(element => {
        gsap.fromTo(element,
            { opacity: 0, y: '2em' },
            { opacity: 1, y: '0em', duration: 1, scrollTrigger: {
                trigger: element,
                start: 'top 80%',
                scrub: false
            }}
        );
    });
    // Benefits animation =============================
    const benefitsElements = document.querySelectorAll('.section_benefits > * *');
    benefitsElements.forEach(element => {
        gsap.fromTo(element,
            { opacity: 0, y: '2em' },
            { opacity: 1, y: '0em', duration: 1, scrollTrigger: {
                trigger: element,
                start: 'top 80%',
                scrub: false
            }}
        );
    });

    // Leadership animation =============================
    const leadershipElements = document.querySelectorAll('.leadership__container > * *');
    leadershipElements.forEach(element => {
        gsap.fromTo(element,
            { opacity: 0, y: '2em' },
            { opacity: 1, y: '0em', duration: 1, scrollTrigger: {
                trigger: element,
                start: 'top 80%',
                scrub: false
            }}
        );
    });
    // Leadership animation =============================
    const leadershipElementsTitle = document.querySelectorAll('.leadership__title');
    leadershipElementsTitle.forEach(element => {
        gsap.fromTo(element,
            { opacity: 0, y: '2em' },
            { opacity: 1, y: '0em', duration: 1, scrollTrigger: {
                trigger: element,
                start: 'top 80%',
                scrub: false
            }}
        );
    });
    // cta animation =============================
    const cta = document.querySelectorAll('.section_cta > * *');
    cta.forEach(element => {
        gsap.fromTo(element,
            { opacity: 0, y: '2em' },
            { opacity: 1, y: '0em', duration: 1, scrollTrigger: {
                trigger: element,
                start: 'top 80%',
                scrub: false
            }}
        );
    });
    // choise animation =============================
    const choise = document.querySelectorAll('.section_choise > * *');
    choise.forEach(element => {
        gsap.fromTo(element,
            { opacity: 0, y: '2em' },
            { opacity: 1, y: '0em', duration: 1, scrollTrigger: {
                trigger: element,
                start: 'top 80%',
                scrub: false
            }}
        );
    });
    // tailoredSolution animation =============================
    const tailoredSolution = document.querySelectorAll('.section_tailored-solution > * *');
    tailoredSolution.forEach(element => {
        gsap.fromTo(element,
            { opacity: 0, y: '2em' },
            { opacity: 1, y: '0em', duration: 1, scrollTrigger: {
                trigger: element,
                start: 'top 80%',
                scrub: false
            }}
        );
    });
    // coreIndustries animation =============================
    const coreIndustries = document.querySelectorAll('.section_core-industries > * *');
    coreIndustries.forEach(element => {
        gsap.fromTo(element,
            { opacity: 0, y: '2em' },
            { opacity: 1, y: '0em', duration: 1, scrollTrigger: {
                trigger: element,
                start: 'top 80%',
                scrub: false
            }}
        );
    });
    // services animation =============================
    const services = document.querySelectorAll('.section_services > * *');
    services.forEach(element => {
        gsap.fromTo(element,
            { opacity: 0, y: '2em' },
            { opacity: 1, y: '0em', duration: 1, scrollTrigger: {
                trigger: element,
                start: 'top 80%',
                scrub: false
            }}
        );
    });
    // testimonial animation =============================
    const testimonial = document.querySelectorAll('.section_testimonial > * *');
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

    // DropDown icon animation =============================
    const dropdownContainers = document.querySelectorAll('.dd-container.w-dropdown');

    dropdownContainers.forEach(dropdown => {
        const dropdownToggle = dropdown.querySelector('.dropdown-toogle.w-dropdown-toggle');
        const dropdownIcon = dropdown.querySelector('.dropdown-toogle__icon');

        if (dropdownToggle && dropdownIcon) {
            const observer = new MutationObserver(() => {
                if (dropdownToggle.classList.contains('w--open')) {
                    gsap.to(dropdownIcon, { rotationX: 180, duration: 0 });
                } else {
                    gsap.to(dropdownIcon, { rotationX: 0, duration: 0 });
                }
            });

            observer.observe(dropdownToggle, { attributes: true, attributeFilter: ['class'] });
        }
    });
});
