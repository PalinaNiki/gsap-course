let titleProject = prompt('Название проекта?');
let screensValue = prompt('Укажите типы экранов (например: шаблонные, с уникальным дизайном, с анимациями)');
let screenPrice = 10000;
let percentage = 10;
let isresponsive = confirm('Нужен ли респонсивный сайт?'); // confirm возвращает true или false

let service1 = prompt('Какой сервис нужен?');
let servicePrice1 = +prompt('Сколько это будет стоить?');
let service2 = prompt('Какой еще сервис тебе нужен?');
let servicePrice2 = +prompt('Сколько будет стоить этот второй сервис?');

let fullPrice = screenPrice + servicePrice1 + servicePrice2;

// Рассчитываем итоговую сумму за вычетом процента
let servicePercentPrice = Math.round(fullPrice - (fullPrice * percentage / 100));

console.log(`Итоговая сумма за вычетом процента: ${servicePercentPrice}`);

// Рассчет скидок

if (fullPrice > 50000) {
    console.log('Сделаем скидку 10%');
} else if (fullPrice > 20000 && fullPrice <= 50000) {
    console.log('Сделаем скидку 5%');
} else if (fullPrice > 0 && fullPrice <= 20000) {
    console.log('Скидка не предусмотрена');
} else if (fullPrice === 0) {
    console.log('Цена равна нулю. Проверьте данные.');
} else {
    console.log('Что-то пошло не так');
}









// let x = 11;

// if (x > 10) {
//     console.log("Условие верно");
// } else {
//     console.log("Условие не верно");
// }



// let a = 5;
// let b = '10';
// let res = a + +b; // унарный плюс преобразует строку в число

// console.log(a.toString()); // "5" преобразование числа в строку

// console.log(res); // 15 сложение чисел


// console.log(typeof a); // number
// console.log(typeof b); // string

// console.log(a + b); // 510 сложение строк и чисел приводит к конкатенации



//alert("Привет");

// let age = +prompt('Укажите ваш возраст'); // 15 = 25
// let a = 10;
// let res = age + a; // 25 + 10

// console.log(res);