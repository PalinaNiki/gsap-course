let screenPrice = 10000;
let percentage = 10;
let allServicePrices;
let newTitle = "";
let titleProject;
let screensValue;
let responsive;
let service1;
let service2;
let fullPrice;
let servicePercentPrice;

const checkIsNumber = function (x) {
  return !isNaN(parseFloat(x)) && isFinite(x); // проверка на число
};

const asking = function () {
  titleProject = prompt("Название проекта?");
  screensValue = prompt(
    "Укажите типы экранов (например: шаблонные, с уникальным дизайном, с анимациями)"
  );
  responsive = confirm("Нужен ли респонсивный сайт?"); // confirm возвращает true или false
};

const getAllServicePrices = function () {
  let sum = 0;

  for (let i = 0; i < 2; i++) {
    if (i === 0) {
      service1 = prompt("Какой дополнительный тип услуги нужен?", "Услуга 1");
    } else if (i === 1) {
      service2 = prompt("Какой дополнительный тип услуги нужен?", "Услуга 2");
    }

    let textFromPrompt = "";

    while (
      !checkIsNumber(textFromPrompt) ||
      textFromPrompt.trim() === "" ||
      textFromPrompt === null
    ) {
      textFromPrompt = prompt("Сколько это будет стоить?");
    }

    sum = sum + Number(textFromPrompt);
  }

  return sum;
};

function getFullPrice() {
  return screenPrice + allServicePrices;
}

const getServicePercentPrices = function () {
  return fullPrice - fullPrice * (percentage / 100);
};

const getTitle = function () {
  return titleProject[0].toUpperCase() + titleProject.slice(1).toLowerCase();
};

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

asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();
newTitle = getTitle();

console.log(titleProject);
console.log(screensValue);
console.log(responsive);
console.log(service1);
console.log(service2);
console.log(
  Math.ceil(servicePercentPrice),
  "Итоговая сумма проекта за вычетом % подрядчику"
);

getRollbackMessage(fullPrice); // вызов функции для расчета скидки по полной стоимости проекта
