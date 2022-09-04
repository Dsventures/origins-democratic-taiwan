// console.log("test");

// gsap.registerPlugin(ScrollTrigger);

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

// gsap.from("#manchu-map", {
//     scale: 1.2, 
//     duration: 2,
//     scrollTrigger: {
//         trigger: "#manchu-map",
//         start: "top 80%",
//         end: "top 30%",
//         scrub: true,
//         toggleActions: "restart none none none",
//         marker: true
//     }
// });



// var sections = gsap.utils.toArray(".scroll-p");
// sections.forEach((section) => {
//     gsap.from(section, {
//         opacity: 0,
//         scrollTrigger: {
//             trigger: section,
//             start: "top 75%",
//             scrub: true,
//             end: "bottom 25%",
//             markers: false,
//         },
//     });
// });