
let screenPrice = 10000
let percentage = 10

let titleProject = prompt('Название проекта?')
console.log(titleProject);

let screensValue = prompt('Укажите типы экранов (например: шаблонные, с уникальным дизайном, с анимациями)')
console.log(screensValue);

let isresponsive = confirm('Нужен ли респонсивный сайт?') // confirm возвращает true или false
console.log(isresponsive);

let service1 = prompt('Какой сервис нужен?')
console.log(service1);

let servicePrice1 = +prompt('Сколько это будет стоить?')
console.log(servicePrice1);

let service2 = prompt('Какой еще сервис тебе нужен?')
console.log(service2);

let servicePrice2 = +prompt('Сколько будет стоить этот второй сервис?')
console.log(servicePrice2);

let fullPrice = screenPrice + servicePrice1 + servicePrice2
console.log(fullPrice);


let percentageResult = +(fullPrice * (percentage / 100))
console.log(percentageResult, 'Процент подрядчику: ')

// Рассчитываем итоговую сумму за вычетом процента
let servicePercentPrice = fullPrice - percentageResult
console.log(Math.ceil(servicePercentPrice), 'Итоговая сумма проекта за вычетом % подрядчику');


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