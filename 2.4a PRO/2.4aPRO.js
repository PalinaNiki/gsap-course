let screenPrice = 10000;
let percentage = 10;

let titleProject = prompt("Название проекта?");
console.log(titleProject);

let screensValue = prompt(
  "Укажите типы экранов (например: шаблонные, с уникальным дизайном, с анимациями)"
);
console.log(screensValue);

let isresponsive = confirm("Нужен ли респонсивный сайт?"); // confirm возвращает true или false
console.log(isresponsive);

let service1 = prompt("Какой сервис нужен?");
console.log(service1);

let servicePrice1 = +prompt("Сколько это будет стоить?");
console.log(servicePrice1);

let service2 = prompt("Какой еще сервис тебе нужен?");
console.log(service2);

let servicePrice2 = +prompt("Сколько будет стоить этот второй сервис?");
console.log(servicePrice2);

let fullPrice = screenPrice + servicePrice1 + servicePrice2;
console.log(fullPrice);

let percentageResult = +(fullPrice * (percentage / 100));
console.log(percentageResult, "Процент подрядчику: ");

// Рассчитываем итоговую сумму за вычетом процента
let servicePercentPrice = fullPrice - percentageResult;
console.log(
  Math.ceil(servicePercentPrice),
  "Итоговая сумма проекта за вычетом % подрядчику"
);

// 1

let allServicePrices;

const getAllServicePrices = function () {
  return servicePrice1 + servicePrice2;
}; // function expression

allServicePrices = getAllServicePrices(); // вызов функции
console.log(allServicePrices, "Сумма стоимости услуг"); // выводим общую стоимость услуг

// 2

function getFullPrice() {
  // function declaration
  return screenPrice + allServicePrices;
} // функция для расчета полной стоимости проекта

fullPrice = getFullPrice(); // вызов функции
console.log(fullPrice, "Полная стоимость проекта"); // выводим полную стоимость проекта

// 3

let newTitle = ""; // новая переменная для преобразованного названия проекта

const getTitle = function () {
  return titleProject[0].toUpperCase() + titleProject.slice(1).toLowerCase(); // преобразуем название проекта: первая буква заглавная, остальные строчные
};
newTitle = getTitle(); // вызов функции

console.log(newTitle, "Преобразованное название проекта"); // выводим преобразованное название проекта

// 4

const getServicePercentPrices = function () {
  return fullPrice - servicePercentPrice;
}; // функция для расчета процента подрядчику

servicePercentPrice = getServicePercentPrices(); // вызов функции
console.log(
  Math.ceil(servicePercentPrice),
  "выводим сумму за вычетом процента"
); // выводим сумму за вычетом процента

// Рассчет скидок

function getRollbackMessage(price) {
  if (price > 50000) {
    console.log("Сделаем скидку 10%");
  } else if (price > 20000 && price <= 50000) {
    console.log("Сделаем скидку 5%");
  } else if (price > 0 && price <= 20000) {
    console.log("Скидка не предусмотрена");
  } else if (price === 0) {
    console.log("Цена равна нулю. Проверьте данные.");
  } else {
    console.log("Что-то пошло не так");
  }
}

getRollbackMessage(fullPrice); // вызов функции для расчета скидки по полной стоимости проекта

// 'use strict'

// let name = 'John'

// function foo() {
//     name = 'Bob'
//     console.log('Привет', name);
// }

// console.log('Привет', name); // Привет John

// foo(); // Привет Bob

// function foo() {
//     let age = 30
//     console.log('Привет', name);
//     console.log('Возраст', age);
// }

// foo();

// age = 31 // ReferenceError: age is not defined
// console.log(age);

// function declaration
// function expression

// foo();

// function foo() {
//   console.log('Hello World');
// }

// const foo2 = function() {
//   console.log('Hello World 2');
// }
// foo2();
