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
    const splitText = document.querySelector('[data-split="text"]');
    if (splitText) {
        const splitTextInstance = new SplitText(splitText, {
            type: 'words, chars',
        });
        gsap.to(splitTextInstance.chars, {
            color: "#2c3d46",
            stagger: 0.1,
            scrollTrigger: {
                trigger: ".section_expertise_land",
                start: "top center",
                end: "80% center",
                scrub: 1,
            },
        });
    }

    // ExpertiseExpo =================================
    const splitTextExpo = document.querySelector('[data-split="text-expo"]');
    if (splitTextExpo) {
        const splitTextExpoInstance = new SplitText(splitTextExpo, {
            type: 'words, chars',
        });
        gsap.to(splitTextExpoInstance.chars, {
            color: "#2c3d46",
            stagger: 0.1,
            scrollTrigger: {
                trigger: ".section_expertise",
                start: "top center",
                end: "60% center",
                scrub: 1,
            },
        });
    };

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
    };

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
        { x: '0', opacity: 1, duration: .3, stagger: 0.07 }
    )

    // Анимация второго набора (SVG) после первого
    .fromTo(elementsSvg, 
        { x: '-200%', opacity: 0 }, 
        { x: '0', opacity: 1, duration: .15, stagger: 0.05 }, "-=.15"
    )

    // Анимация третьего набора (текст) после второго
    .fromTo(elementsText, 
        { x: '-200%', opacity: 0 }, 
        { x: '0', opacity: 1, duration: .3, stagger: 0.07 }, "-=0.3"
    );

    // Vision animation =============================
    const visionElements = document.querySelectorAll('.section_vision > * *');
    if (visionElements.length) {
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
    }

    // Benefits animation =============================
    const benefitsElements = document.querySelectorAll('.section_benefits > * *');
    if (benefitsElements.length) {
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
    }

    // Leadership animation =============================
    const leadershipElements = document.querySelectorAll('.leadership__container > * *');
    if (leadershipElements.length) {
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
    }

    // Leadership animation =============================
    const leadershipElementsTitle = document.querySelectorAll('.leadership__title');
    if (leadershipElementsTitle.length) {
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
    }

    // cta animation =============================
    const cta = document.querySelectorAll('.section_cta > *');
    if (cta.length) {
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
    }

    // choise animation =============================
    const choise = document.querySelectorAll('.section_choise > * *');
    if (choise.length) {
        choise.forEach(element => {
            gsap.fromTo(element,
                { opacity: 0, y: '2em' },
                { opacity: 1, y: '0em', duration: 1, scrollTrigger: {
                    trigger: element,
                    start: 'top bottom',
                    scrub: false
                }}
            );
        });
    }

    // tailoredSolution animation =============================
    const tailoredSolution = document.querySelectorAll('.section_tailored-solution > * *');
    if (tailoredSolution.length) {
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
    }

    // coreIndustries animation =============================
    const coreIndustries = document.querySelectorAll('.section_core-industries > * *');
    if (coreIndustries.length) {
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
    }

    // servicess animation =============================
    const servicess = document.querySelectorAll('.section_services > *');
    if (servicess.length) {
        servicess.forEach(element => {
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

    // testimonial animation =============================
    const testimonial = document.querySelectorAll('.section_testimonial > * *');
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

    // ai-video-twin animation =============================
    const aiVideoTwin = document.querySelectorAll('.section_ai-video-twin > * *');
    if (aiVideoTwin.length) {
        aiVideoTwin.forEach(element => {
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

    // containerTwin animation =============================
    const containerTwin = document.querySelectorAll('.leadership__container_twin > * *');
    if (containerTwin.length) {
        containerTwin.forEach(element => {
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

    // containerTwin animation =============================
    const how = document.querySelectorAll('.section_how > * *');
    if (how.length) {
        how.forEach(element => {
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

    // digital-twin animation =============================
    const digitalTwin = document.querySelectorAll('.section_digital-twin > * *');
    if (digitalTwin.length) {
        digitalTwin.forEach(element => {
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

    // digital-twin animation =============================
    const ourVision = document.querySelectorAll('.section_our-vision > *');
    if (ourVision.length) {
        ourVision.forEach(element => {
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

    // // digital-twin animation =============================
    // const joinAbout = document.querySelectorAll('.section__join > * *');
    // if (joinAbout.length) {
    //     joinAbout.forEach(element => {
    //         gsap.fromTo(element,
    //             { opacity: 0, y: '2em' },
    //             { opacity: 1, y: '0em', duration: 1, scrollTrigger: {
    //                 trigger: element,
    //                 start: 'top 80%',
    //                 scrub: false
    //             }}
    //         );
    //     });
    // }

    // digital-twin animation =============================
    const serve = document.querySelectorAll('.section_serve > * *');
    if (serve.length) {
        serve.forEach(element => {
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

    // about-us why choose animation =============================
    gsap.fromTo('.who-choise__title',
        { opacity: 0, y: '2em' },
        { opacity: 1, y: '0em', duration: 1, scrollTrigger: {
            trigger: '.section_who-choise',
            start: 'top 80%',
            scrub: false
        }}
    );

    const isMobile = window.innerWidth < 479;

    if (isMobile) {
        const elements = ['.first-card', '.who-choose-img_01', '.second-card', '.who-choose-img_02', '.third-card', '.who-choose-img_03', '.last-card'];

        elements.forEach(selector => {
            gsap.fromTo(selector, { opacity: 0, x: '150%' }, { opacity: 1, x: '0', scrollTrigger: {
                trigger: selector,
                start: 'top 80%',
                toggleActions: 'play none none none',
                ease: 'power1.inOut'
            }});
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

        whyChoose
            .fromTo('.first-card', { opacity: 0, x: '150%' }, { opacity: 1, x: '0'})
            .fromTo('.who-choose-img_01', { opacity: 0, x: '150%' }, { opacity: 1, x: '0'}, "-=70%")
            .fromTo('.second-card', { opacity: 0, x: '150%' }, { opacity: 1, x: '0'}, "-=70%")
            .fromTo('.who-choose-img_02', { opacity: 0, x: '150%' }, { opacity: 1, x: '0'}, "-=70%")
            .fromTo('.third-card', { opacity: 0, x: '150%' }, { opacity: 1, x: '0'}, "-=70%")
            .fromTo('.who-choose-img_03', { opacity: 0, x: '150%' }, { opacity: 1, x: '0'}, "-=70%")
            .fromTo('.last-card', { opacity: 0, x: '150%' }, { opacity: 1, x: '0'}, "-=70%");
    }
    




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

    const parent = document.querySelector("[data-service-parent]");
    const progress = document.querySelector("[data-item]");
    const services = document.querySelectorAll("[data-service]");
    const images = document.querySelectorAll("[data-image]");
    const containerWrap = document.querySelector("[data-container-wrap]");
    const progressbarWrap = document.querySelector("[data-progressbar-wrap]");

    if (!parent || !progress || services.length === 0 || images.length === 0 || !containerWrap || !progressbarWrap) return;

    function updateProgress(activeService) {
      if (!activeService) return;

      const targetValue = activeService.getAttribute("data-service");

      // Закрываем все элементы
      services.forEach(s => s.classList.add("is--closed"));
      images.forEach(img => img.classList.add("is--closed"));

      // Активируем текущий
      activeService.classList.remove("is--closed");
      images.forEach(img => {
        if (img.getAttribute("data-image") === targetValue) {
          img.classList.remove("is--closed");
        }
      });

      // **Используем requestAnimationFrame, чтобы дождаться обновления DOM**
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setTimeout(() => {
            // Вычисляем высоту и отступ после обновления DOM
            const serviceHeight = activeService.offsetHeight;
            const parentRect = parent.getBoundingClientRect();
            const serviceRect = activeService.getBoundingClientRect();
            const topOffset = serviceRect.top - parentRect.top;

            const lookHeightElement = document.querySelector("[data-look-height]");
            if (window.innerWidth < 479 && lookHeightElement) {
              const lookHeightRect = lookHeightElement.getBoundingClientRect();
              const topOffsetMobile = serviceRect.top - lookHeightRect.top;
              progress.style.top = `${topOffsetMobile}px`;
            } else {
              progress.style.top = `${topOffset}px`;
            }

            // Устанавливаем height и top для data-item
            progress.style.height = `${serviceHeight}px`;

            // Обновляем высоту progressbarWrap
            const containerHeight = containerWrap.getBoundingClientRect().height;
            progressbarWrap.style.height = `${containerHeight}px`;
          }, 0);
        });
      });
    }

    function addEventListeners() {
      const isMobile = window.innerWidth < 479;
      const eventType = isMobile ? "touchstart" : "click";

      // Удаляем старые обработчики перед добавлением новых
      services.forEach(service => {
        service.removeEventListener("click", updateProgress);
        service.removeEventListener("touchstart", updateProgress);

        service.addEventListener(eventType, () => updateProgress(service));
      });
    }

    // Инициализация на первом элементе
    updateProgress(services[0]);
    addEventListeners();

    // Пересоздание обработчиков при изменении ширины экрана
    window.addEventListener("resize", addEventListeners);
});
