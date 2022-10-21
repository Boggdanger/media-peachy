gsap.registerPlugin(ScrollTrigger);

// run line
gsap.to(".run-line__item-inner_one", {
    scrollTrigger: {
        trigger: ".header",
        scrub: 1.4,
        start: "-70vh bottom",
        markers: true,
    },
    x:-360,
    ease: "none",
    
});

gsap.to(".run-line__item-inner_two", {
    scrollTrigger: {
        trigger: ".header",
        scrub: 1.4,
        start: "-70vh bottom",
    },
    x:320,
    ease: "none",
});

// scrTxt.add("(max-width: 768px)", () => {
//     // scroll
//     gsap.to(".run-line__item-inner_one", {
//         scrollTrigger: {
//             trigger: ".run-line",
//             scrub: 1.4,
//             start: "top bottom",
//             // markers: true,
//         },
//         x:-260,
//         ease: "none",
        
//     });

//     gsap.to(".run-line__item-inner_two", {
//         scrollTrigger: {
//             trigger: ".run-line",
//             scrub: 1.4,
//             start: "top bottom",
//         },
//         x:250,
//         ease: "none",
//     });
// });