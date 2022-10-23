gsap.registerPlugin(ScrollTrigger);


// let headAnim = gsap.matchMedia();

// headAnim.add("(min-width: 768px)", () => {
//     gsap.to(".offer__img-absolute", {
//         scrollTrigger: {
//             trigger: ".header",
//             scrub: 1.4,
//             start: "top top",
//             // markers: true,
//         },
//         x:-360,
//         ease: "none",
        
//     });

//     gsap.to(".offer__main-wrapper", {
//         scrollTrigger: {
//             trigger: ".header",
//             scrub: 1.4,
//             start: "top top",
//             // markers: true,
//         },
//         x:360,
//         ease: "none",
        
//     });
// });



// run line
gsap.to(".run-line__item-inner_one", {
    scrollTrigger: {
        trigger: ".run-line",
        scrub: 1.4,
        start: "-70vh bottom",
        // markers: true,
    },
    x:-360,
    ease: "none",
    
});

gsap.to(".run-line__item-inner_two", {
    scrollTrigger: {
        trigger: ".run-line",
        scrub: 1.4,
        start: "-70vh bottom",
    },
    x: 320,
    ease: "none",
});

// run line
gsap.to(".run-line__item-inner_one-contact", {
    scrollTrigger: {
        trigger: ".run-line_contact",
        scrub: 1.4,
        start: "-70vh bottom",
        // markers: true,
    },
    x:-360,
    ease: "none",
    
});

gsap.to(".run-line__item-inner_two-contact", {
    scrollTrigger: {
        trigger: ".run-line_contact",
        scrub: 1.4,
        start: "-70vh bottom",
    },
    x: 320,
    ease: "none",
});





const seoFor = gsap.timeline({
    scrollTrigger: {
    trigger: ".provide-list",
    start: "top 80%",
    //   markers: true,
    toggleActions: "play none none reverse",
    },
});

seoFor.from(".provide-item", {y: "100px", opacity: "0"});


    // about
    gsap.from(".about-img", {
        scrollTrigger: {
            trigger: ".about",
            start: "top 70%",
    //   markers: true,
    toggleActions: "play none none reset",
        },
        x: -220,
        opacity: 0,
    });

    gsap.from(".about-txt", {
        scrollTrigger: {
        trigger: ".about",
        start: "top 70%",
    //   markers: true,
    toggleActions: "play none none reset",
        },
        x: 220,
        opacity: 0,
    });


let yourPath = gsap.matchMedia();

yourPath.add("(min-width: 768px)", () => {
    const seoFor = gsap.timeline({
        scrollTrigger: {
        trigger: ".path",
        start: "top 50%",
        //   markers: true,
        toggleActions: "play none none reset",
        },
    });
    
    seoFor.from(".path-item:nth-child(1)", {y: "50px", opacity: "0"})
        .from(".path-item:nth-child(2)", {y: "50px", opacity: "0"})
        .from(".path-item:nth-child(3)", {y: "50px", opacity: "0"});
});

    // form
    gsap.from(".form-img", {
        scrollTrigger: {
            trigger: ".form-wrapper",
            start: "top 60%",
    //   markers: true,
    toggleActions: "play none none reverse",
        },
        x: -220,
        opacity: 0,
    });

    gsap.from(".contact-form", {
        scrollTrigger: {
        trigger: ".form-wrapper",
        start: "top 60%",
    //   markers: true,
    toggleActions: "play none none reverse",
        },
        x: 220,
        opacity: 0,
    });