gsap.to(".boxes", {
  scrollTrigger: {
    trigger: ".section.is-purple",
    scrub: true,
    pin: true,
    start: "top top",
    end: "+=200%",
  },
  x: "44vw",
  stagger: 0.5,
  ease: "none",
});

gsap.to(".circles", {
  scrollTrigger: {
    trigger: ".circles", // Триггером будет сам элемент .circles
    scrub: true,
    start: "top bottom", // Анимация начнется, когда верхняя часть .circles коснется нижней части экрана
    end: "bottom top", // Анимация закончится, когда нижняя часть .circles коснется верхней части экрана
    markers: true, // Для визуализации границ триггера
  },
  backgroundColor: "#ff0000", // Цвет, на который будут меняться элементы
  stagger: 0.5, // Задержка между изменением цвета каждого элемента
  ease: "none",
});
