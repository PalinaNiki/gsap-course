const tabMenu = document.querySelectorAll(".tab-link");
const tabContent = document.querySelectorAll(".tab-pane");
const tabNum = document.querySelectorAll(".tab-num");

console.log(tabMenu);
console.log(tabContent);
console.log(tabNum);

tabMenu.forEach((tabLink, index) => {
  tabLink.addEventListener("click", () => {
    // Убираем класс is-active у всех tab-link
    tabMenu.forEach((link) => {
      link.classList.remove("is-active");
    });

    // Добавляем класс is-active к текущему tab-link
    tabLink.classList.add("is-active");

    // Убираем класс active у всех tab-pane
    tabContent.forEach((tabItem) => {
      tabItem.classList.remove("active");
    });

    // Добавляем класс active к текущему tab-pane
    tabContent[index].classList.add("active");
  });
});

tabNum.forEach((item, index) => {
  item.textContent = index + 1;
});
