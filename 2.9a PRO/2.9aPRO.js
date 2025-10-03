"use strict";

const closeBtn = document.querySelector(".close-btn");
const row = document.querySelector(".row");
const heading = document.querySelector("h1");

console.log(closeBtn);
console.log(row);
console.log(heading);

row.addEventListener("click", function (event) {
  console.log(event.target);

  if (event.target.closest(".close-btn")) {
    row.style.background = "grey";
  } else {
    row.style.background = "transparent";
  }
});
