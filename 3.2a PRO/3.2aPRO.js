let line = document.querySelector(".line-1");
let progress = document.querySelector(".progress");
let circle = document.querySelector(".circle");

gsap.from(line, {
  scrollTrigger: {
    trigger: line,
    scrub: true,
    start: "top bottom",
    end: "top top",
    markers: true,
  },
  scaleX: 0,
  transformOrigin: "left center",
  ease: "none",
});

gsap.to(".line-2", {
  scrollTrigger: {
    trigger: ".line-2",
    scrub: true,
    start: "top bottom",
    end: "top top",
    // markers: true,
  },
  scaleX: 0,
  transformOrigin: "left center",
  ease: "none",
});

gsap.from(progress, {
  scrollTrigger: {
    trigger: progress,
    scrub: true,
    start: "top bottom",
    end: "top top",
    markers: true, // Удалите, если не нужны маркеры
  },
  scaleY: 0, // Анимация вертикального роста
  transformOrigin: "center top", // Точка трансформации — сверху
  ease: "none",
});

gsap.from(circle, {
  scrollTrigger: {
    trigger: progress,
    scrub: true,
    start: "top bottom",
    end: "top top",
    markers: false, // Удалите, если не нужны маркеры
  },
  opacity: 0, // Появление элемента
  scale: 0.5, // Увеличение размера
  ease: "none",
});
