// run line
gsap.to(".run-line__item-inner_one", {
    scrollTrigger: {
        trigger: ".run-line",
        scrub: 1,
        start: "-70vh bottom",
    },
    x:-200,
    duration: 2,
    ease: "none",
});

gsap.to(".run-line__item-inner_two", {
    scrollTrigger: {
        trigger: ".run-line",
        scrub: 1,
        start: "-70vh bottom",
    },
    x:200,
    duration: 2,
    ease: "none",
});