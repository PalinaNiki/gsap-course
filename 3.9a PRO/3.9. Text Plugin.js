// Text Plugin

const textAnimation = gsap.to(".text1", {
  duration: 2,
  text: {
    value: "The text has been changed using the Text Plugin!",
    newClass: "class2",
    delimiter: " ",
  },
  ease: "none",
  paused: true,
});

document.querySelector(".play-text").addEventListener("click", () => {
  textAnimation.play();
});

const textTl = gsap.timeline({
  repeat: -1,
  repeatDelay: 1,
  yoyo: true,
});

textTl.to(".text2", {
  duration: 2,
  text: "Простой способ написать текст с анимацией.",
});

// Добавление анимации для изменения текста кнопки
const button = document.querySelector(".button");
const buttonText = document.querySelector(".btn");

buttonText.textContent = "Открыть модальное окно";

button.addEventListener("click", () => {
  const newText =
    buttonText.textContent === "Открыть модальное окно"
      ? "Закрыть модальное окно"
      : "Открыть модальное окно";

  gsap.to(buttonText, {
    duration: 0.5,
    text: newText,
    ease: "power1.inOut",
  });
});
