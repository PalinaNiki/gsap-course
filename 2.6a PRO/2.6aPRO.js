"use strict";

function counter() {
  let a = 0;

  return function () {
    return a++;
  };
}

const resCounter = counter();

console.log(resCounter());
console.log(resCounter());
console.log(resCounter());
console.log(resCounter());
