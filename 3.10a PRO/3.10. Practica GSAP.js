// Practica GSAP

gsap.from(".root", {
  duration: 2,
  autoAlpha: 0,
  ease: "power3.inOut",
  delay: 0.5,
});

gsap.from(".text-animation", {
  duration: 2,
  y: "6vw",
  autoAlpha: 0,
  ease: "power3.inOut",
  delay: 3.5,
  stagger: 0.5,
});

const draggable = document.querySelector(".s-hero");
const scroll = document.querySelector(".scroll-down-icon");

Draggable.create(scroll, {
  // type: "y",
  bounds: draggable,
  onRelease: function () {
    console.log("drag ended");
    gsap.to(".drag", { scale: 1 });
  },
  onPress: function () {
    console.log("onPress");
    gsap.to(".drag", { scale: 0.9 });
  },
  dragClickables: true,
});

scroll.addEventListener("click", () => {
  gsap.to(window, {
    duration: 0.8,
    scrollTo: {
      y: "#img",
      offsetY: 0,
    },
  });
});

let imgSection = gsap.timeline({
  scrollTrigger: {
    trigger: "#img",
    scrub: true,
    pin: true,
    start: "top top",
    end: "+=300%",
  },
});

imgSection
  .from(".unsplash-image", { scale: 1.3 })
  .from("#left", { x: "-50vw" })
  .from("#right", { x: "50vw" });

const containerBox = document.querySelector(".box-container.flex");
const play = document.getElementById("play");
const reverse = document.getElementById("reverse");

let boxesAnim = gsap.to(".box", {
  x: () => containerBox.offsetWidth,
  xPercent: -100,
  rotation: 360,
  ease: "power2.Out",
  paused: true,
  stagger: 0.5,
  duration: 2.5,
});

play.addEventListener("click", () => {
  boxesAnim.timeScale(1).play();
});
reverse.addEventListener("click", () => {
  boxesAnim.timeScale(2).reverse();
});
