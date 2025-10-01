"use strict";

console.log(document);

const heading = document.querySelector(".h1"); // поиск по тегу

heading.addEventListener("click", () => {
  console.log("clicked");
  heading.classList.toggle("is--active");
});
