const calbacksRow = document.querySelector(".callbacks-row");
console.log(calbacksRow.offsetWidth);

// Устанавливаем начальное состояние: блоки уменьшены в 2 раза
gsap.set(".rectangle", {
  autoAlpha: 0.1,
  scale: 0.5, // Уменьшение размера в 2 раза
  backgroundColor: "#000", // Исходный цвет (черный)
});

let blackRectangles = gsap.to(".rectangle", {
  x: () => calbacksRow.offsetWidth,
  xPercent: -100,
  rotation: 360,
  autoAlpha: 1,
  ease: "power2.out",
  paused: true,
  stagger: 0.5,
  duration: 2.5,
});

// Анимация изменения цвета и размера
let colorAndScaleAnimation = gsap.fromTo(
  ".rectangle",
  {
    scale: 0.5, // Начальное состояние (уменьшенные блоки)
    backgroundColor: "#000", // Исходный цвет (черный)
  },
  {
    scale: 1, // Конечное состояние (стандартный размер)
    backgroundColor: "red", // Новый цвет (красный)
    duration: 2.5, // Длительность анимации
    stagger: 0.2, // Задержка между элементами
    paused: true, // Анимация изначально на паузе
  }
);

const play = document.getElementById("play");
const pause = document.getElementById("pause");
const reverse = document.getElementById("reverse");
const restart = document.getElementById("restart");
const resume = document.getElementById("resume");

play.addEventListener("click", () => {
  blackRectangles.timeScale(1).play();
  colorAndScaleAnimation.timeScale(1).play(); // Запускаем анимацию цвета и размера
});

pause.addEventListener("click", () => {
  blackRectangles.pause();
  colorAndScaleAnimation.pause(); // Ставим на паузу анимацию цвета и размера
});

reverse.addEventListener("click", () => {
  blackRectangles.timeScale(2).reverse();
  colorAndScaleAnimation.timeScale(2).reverse(); // Возвращаем анимацию цвета и размера в исходное положение
});

restart.addEventListener("click", () => {
  blackRectangles.restart();
  colorAndScaleAnimation.restart(); // Перезапускаем анимацию цвета и размера
});

resume.addEventListener("click", () => {
  blackRectangles.resume();
  colorAndScaleAnimation.resume(); // Возобновляем анимацию цвета и размера
});
