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
    const expertise = new SplitText('[data-split="text"]', {
        type: 'words, chars',
    });
    gsap.to(expertise.chars, {
        //color: 'var(--colors-text--white)',
        opacity: 1,
        stagger: 0.1,
        scrollTrigger: {
            trigger: '.section_expertise_land',
            start: 'top center+=20vh',
            end: 'top+=100vh bottoms',
            scrub: 1,
        },
    });
});
