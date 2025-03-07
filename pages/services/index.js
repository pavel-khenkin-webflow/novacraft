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
    //BURGER MENU ======================================
    const burger = document.querySelector(".menu-burger");
    const topLine = document.querySelector(".burger-line_top");
    const centerLine = document.querySelector(".burger-line_center");
    const botLine = document.querySelector(".burger-line_bot");
    const menu = document.querySelector('[data-menu]'); // Элемент меню
    const body = document.body;
    
    let isOpen = false;
    let scrollPosition = 0;
    
    burger.addEventListener("click", () => {
        if (!isOpen) {
            // Запоминаем текущую позицию скролла
            scrollPosition = window.scrollY;
    
            // Анимация бургер-меню
            gsap.to(topLine, { top: "50%", yPercent: -50, rotation: 45, duration: 0.4, ease: "power3.out" });
            gsap.to(botLine, { bottom: "50%", yPercent: 50, rotation: -45, duration: 0.4, ease: "power3.out" });
            gsap.to(centerLine, { opacity: 0, duration: 0.2, ease: "power3.out" });
    
            // Открытие меню
            menu.style.display = "block";
            gsap.fromTo(menu, { x: "-100%" }, { x: "0%", duration: 0.5, ease: "power3.out" });
    
            // Блокировка скролла (без прыжка наверх)
            body.style.position = "fixed";
            body.style.top = `-${scrollPosition}px`;
            body.style.width = "100%";
    
        } else {
            // Анимация бургер-меню назад
            gsap.to(topLine, { top: "0%", yPercent: 0, rotation: 0, duration: 0.4, ease: "power3.out" });
            gsap.to(botLine, { bottom: "0%", yPercent: 0, rotation: 0, duration: 0.4, ease: "power3.out" });
            gsap.to(centerLine, { opacity: 1, duration: 0.2, ease: "power3.out" });
    
            // Закрытие меню
            gsap.to(menu, { x: "-100%", duration: 0.5, ease: "power3.out", onComplete: () => {
                menu.style.display = "none";
            }});
    
            // Разблокировка скролла и возврат к позиции
            body.style.position = "";
            body.style.top = "";
            window.scrollTo(0, scrollPosition);
        }
        isOpen = !isOpen;
    });

    //CALANDLY =================================
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

    // h3 appear split animation
    const headersHThree = document.querySelectorAll("h3:not(.no-animation)"); // Исключаем элементы с классом .no-animation

    headersHThree.forEach(h3 => {
        const split = new SplitText(h3, { type: "words, chars" });
        gsap.set(split.chars, { opacity: 0, x: 50 });

        gsap.to(split.chars, {
            opacity: 1,
            x: 0,
            stagger: 0.03, // Задержка между символами
            duration: 0.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: h3,
                start: "top 80%", // Анимация срабатывает, когда заголовок попадает в зону видимости
                toggleActions: "play none none none"
            }
        });
    });

    
        // digitalTwin animation =============================
        const digitalTwin = document.querySelectorAll('.digital-twin__main > *');
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
        // digitalTwinCards animation =============================
        const digitalTwinCards = document.querySelectorAll('.digital-twin__cards-wrapper > *');
        if (digitalTwinCards.length) {
            digitalTwinCards.forEach(element => {
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
        // digitalTwinBot animation =============================
        const digitalTwinBot = document.querySelectorAll('.digital-twin__bottom');
        if (digitalTwinBot.length) {
            digitalTwinBot.forEach(element => {
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
        // twinLabelDesc animation =============================
        const twinLabelDesc = document.querySelectorAll('.twin__label__desc.twin__label__title.service-page');
        if (twinLabelDesc.length) {
            twinLabelDesc.forEach(element => {
                gsap.fromTo(element,
                    { opacity: 0, y: '3em' },
                    { opacity: 1, y: '0em', duration: 1, scrollTrigger: {
                        trigger: element,
                        start: 'top 80%',
                        scrub: false
                    }}
                );
            });
        }
        // remoteVideoDesc animation =============================
        const remoteVideoDesc = document.querySelectorAll('.remote-video__label p');
        if (remoteVideoDesc.length) {
            remoteVideoDesc.forEach(element => {
                gsap.fromTo(element,
                    { opacity: 0, y: '3em' },
                    { opacity: 1, y: '0em', duration: 1, scrollTrigger: {
                        trigger: element,
                        start: 'top 80%',
                        scrub: false
                    }}
                );
            });
        }
        // remoteVideoContainer animation =============================
        const remoteVideoContainer = document.querySelectorAll('.remote-video__main__container > * *');
        if (remoteVideoContainer.length) {
            remoteVideoContainer.forEach(element => {
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
        // remoteVideoBottom animation =============================
        const remoteVideoBottom = document.querySelectorAll('.remote-video__bottom__content');
        if (remoteVideoBottom.length) {
            remoteVideoBottom.forEach(element => {
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
        // remoteVideoBottomButton animation =============================
        const remoteVideoBottomButton = document.querySelectorAll('.remote-video__bottom__button:not(.no-animation)');

        if (remoteVideoBottomButton.length) {
            remoteVideoBottomButton.forEach(element => {
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

        // sectionLabelPh animation =============================
        const sectionLabelPh = document.querySelectorAll('.section__label p');
        if (sectionLabelPh.length) {
            sectionLabelPh.forEach(element => {
                gsap.fromTo(element,
                    { opacity: 0, y: '3em' },
                    { opacity: 1, y: '0em', duration: 1, scrollTrigger: {
                        trigger: element,
                        start: 'top 80%',
                        scrub: false
                    }}
                );
            });
        }
        // podcastConainer animation =============================
        const podcastConainer = document.querySelectorAll('.podcast__container__content > * *');
        if (podcastConainer.length) {
            podcastConainer.forEach(element => {
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
        // rowOneHundred animation =============================
        const rowOneHundred = document.querySelectorAll('.row-100_48');
        if (rowOneHundred.length) {
            rowOneHundred.forEach(element => {
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
        // sectionLabelDescription animation =============================
        const sectionLabelDescription = document.querySelectorAll('.section-label__desc');
        if (sectionLabelDescription.length) {
            sectionLabelDescription.forEach(element => {
                gsap.fromTo(element,
                    { opacity: 0, y: '3em' },
                    { opacity: 1, y: '0em', duration: 1, scrollTrigger: {
                        trigger: element,
                        start: 'top 80%',
                        scrub: false
                    }}
                );
            });
        }
        // presenceBlock animation =============================
        const presenceBlock = document.querySelectorAll('.presence__info-block__wrapper > *');
        if (presenceBlock.length) {
            presenceBlock.forEach(element => {
                gsap.fromTo(element,
                    { opacity: 0, y: '3em' },
                    { opacity: 1, y: '0em', duration: 1, scrollTrigger: {
                        trigger: element,
                        start: 'top 80%',
                        scrub: false
                    }}
                );
            });
        }
        // whatWeOffer animation =============================
        const whatWeOffer = document.querySelectorAll('.what-we-offer__content > * *');
        if (whatWeOffer.length) {
            whatWeOffer.forEach(element => {
                gsap.fromTo(element,
                    { opacity: 0, y: '3em' },
                    { opacity: 1, y: '0em', duration: 1, scrollTrigger: {
                        trigger: element,
                        start: 'top 80%',
                        scrub: false
                    }}
                );
            });
        }
        // whatWeOfferCards animation =============================
        const whatWeOfferCards = document.querySelectorAll('.what-we-offer__content_marketing > *');
        if (whatWeOfferCards.length) {
            whatWeOfferCards.forEach(element => {
                gsap.fromTo(element,
                    { opacity: 0, y: '3em' },
                    { opacity: 1, y: '0em', duration: 1, scrollTrigger: {
                        trigger: element,
                        start: 'top 80%',
                        scrub: false
                    }}
                );
            });
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
                    ease: 'power1.inOut'
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

// Функция для сортировки и получения элементов по data-атрибуту
function getSortedElements(selector) {
    return Array.from(document.querySelectorAll(selector))
        .sort((a, b) => a.getAttribute(selector.replace(/[\[\]]/g, '')) - b.getAttribute(selector.replace(/[\[\]]/g, '')));
}
