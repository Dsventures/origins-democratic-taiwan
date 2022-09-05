// console.log("test");


gsap.registerPlugin(ScrollTrigger);

// gsap.from(".leaders", {
//     opacity: 0, 
//     duration: 2,
//     scrollTrigger: {
//         trigger: "#aboutLeaders",
//         start: "top 80%",
//         end: "top 30%",
//         scrub: true,
//         toggleActions: "restart none none none",
//         marker: true
//     }
// });

// const tl = gsap.timeline({
//     scrollTrigger: {
//         trigger: "#mapsections",
//         markers: true,
//         start: "top 30%",
//         end: "+=100%",
//         scrub: 1,
//         pin: true,
//         pinSpacing: true,
//         toggleClass: { targets: "#manchu-map", className: "is-active" },
//         anticipatePin: 1
//     }
// })

// tl.from("#manchu-map", {opacity: 0, scale:1.2, duration: 1})

// var tl5 = gsap.timeline();
// // tl5.from( "#manchu-map", { opacity: 0, scale: 1.2, }, "zero" )
// // tl5.from( "#manchu-map", { opacity: 0, scale: 1.2, }, "two" )
// var pinManchuMap = ScrollTrigger.create({
//     animation: tl5,
//     trigger: "#mapsections",
//     pin: true,
//     scrub: true,
//     start: "top 50%",
//     end: "+=100%",
//     pinSpacing: true,
//     toggleClass: { targets: "#mapsections", className: "is-active" },
//     markers: true,
//   });





var fadeInSections = gsap.utils.toArray(".fadeIn");
fadeInSections.forEach((fadeInSection) => {
    gsap.from(fadeInSection, {
        opacity: 0,
        scrollTrigger: {
            trigger: fadeInSection,
            start: "top 95%",
            scrub: true,
            end: "bottom 15%",
            markers: false,
        },
    });
});

// FadeInRight
var fadeInRightSections = gsap.utils.toArray(".fadeInRight");
fadeInRightSections.forEach((fadeInRightSection) => {
    gsap.from(fadeInRightSection, {
        opacity: 0,
        x: 100,
        scrollTrigger: {
            trigger: fadeInRightSection,
            start: "top 95%",
            scrub: true,
            end: "bottom 25%",
            markers: false,
        },
    });
});

// FadeInLeft
var fadeInLeftSections = gsap.utils.toArray(".fadeInLeft");
fadeInLeftSections.forEach((fadeInLeftSection) => {
    gsap.from(fadeInLeftSection, {
        opacity: 0,
        x: -100,
        scrollTrigger: {
            trigger: fadeInLeftSection,
            start: "top 95%",
            scrub: true,
            end: "bottom 25%",
            markers: false,
        },
    });
});

// FadeInLeft
var fadeInTopSections = gsap.utils.toArray(".fadeInTop");
fadeInTopSections.forEach((fadeInTopSection) => {
    gsap.from(fadeInTopSection, {
        opacity: 0,
        y: -100,
        scrollTrigger: {
            trigger: fadeInTopSection,
            start: "top 95%",
            scrub: true,
            end: "bottom 25%",
            markers: false,
        },
    });
});


gsap.from("#manchu-map", {
    scale: 2,
    scrollTrigger: {
        trigger: "#manchu-map",
        start: "top 95%",
        scrub: true,
        end: "bottom 35%",
        markers: false,
    },
})