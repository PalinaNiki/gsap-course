const tabMenu = document.querySelectorAll(".tab-link");
const tabContent = document.querySelectorAll(".tab-pane");
const tabNum = document.querySelectorAll(".tab-num");

console.log(tabMenu);
console.log(tabContent);

tabMenu.forEach((tabLink, index) => {
  tabLink.addEventListener("click", () => {
    tabContent.forEach((tabItem) => {
      tabItem.classList.remove("active");
    });
    tabContent[index].classList.add("active");
  });
});
