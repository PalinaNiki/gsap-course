const h1 = document.querySelector("h1");
const heroImg = document.querySelector(".hero-img");
const navMenu = document.querySelectorAll(".nav-link");

console.log(h1);
console.log(heroImg);
console.log(navMenu);

navMenu.forEach((navLink) => {
  navLink.addEventListener("mouseover", () => {
    navMenu.forEach((navItem) => {
      navItem.classList.remove("active");
    });
    navLink.classList.add("active");
  });

  navLink.addEventListener("mouseout", () => {
    navLink.classList.remove("active"); // Удаляем класс при покидании элемента
  });
});

// Функционал для увеличения и центрирования картинки
let isImageCentered = false;

heroImg.addEventListener("click", () => {
  if (!isImageCentered) {
    heroImg.style.position = "fixed";
    heroImg.style.top = "50%";
    heroImg.style.left = "50%";
    heroImg.style.transform = "translate(-50%, -50%) scale(0.5)";
    heroImg.style.zIndex = "1000";
    isImageCentered = true;
  } else {
    heroImg.style.position = "";
    heroImg.style.top = "";
    heroImg.style.left = "";
    heroImg.style.transform = "";
    heroImg.style.zIndex = "";
    isImageCentered = false;
  }
});

document.addEventListener("click", (event) => {
  if (isImageCentered && event.target !== heroImg) {
    heroImg.style.position = "";
    heroImg.style.top = "";
    heroImg.style.left = "";
    heroImg.style.transform = "";
    heroImg.style.zIndex = "";
    isImageCentered = false;
  }
});

// Функционал для изменения стиля h1 при наведении
h1.addEventListener("mouseover", () => {
  h1.style.fontSize = "60px"; // Увеличиваем шрифт
  h1.style.color = "pink"; // Меняем цвет на розовый
});

h1.addEventListener("mouseout", () => {
  h1.style.fontSize = ""; // Возвращаем шрифт к исходному
  h1.style.color = ""; // Возвращаем цвет к исходному
});
