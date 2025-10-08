let yellowSectionAnimation = gsap.timeline({
  scrollTrigger: {
    trigger: ".section.is-yellow",
    scrub: true,
    pin: true,
    start: "top top",
    end: "+=300%",
  },
});

yellowSectionAnimation
  .to(".circle", {
    scale: 1.2,
    autoAlpha: 1,
    ease: "power2",
    stagger: 0.5,
  })

  .from(".line-1", {
    scaleX: 0,
    transformOrigin: "left center",
    ease: "none",
  })
  .from(".h3", {
    y: "5vw",
    autoAlpha: 0,
  })

  .to(".boxes-1", {
    x: "60vw",
    scale: 1.4,
    autoAlpha: 1,
    ease: "sine.inOut",
    backgroundColor: "#ff0000",
    rotation: 360,
    stagger: 0.5,
  });
