"use strict";

const gameBotFunction = function () {
  // Функция генерации случайного числа в диапазоне [min, max]
  function randomGenerate(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }

  let tries = 2; // Кол-во попыток
  let mysteryNumber = randomGenerate(1, 100); // Загаданное число
  let answerNum = "";

  const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  };

  return function getResult() {
    answerNum = prompt("Угадайте число от 1 до 100");

    if (answerNum === null) {
      alert("Вы завершили игру");
      return;
    }

    while (!isNumber(answerNum) || answerNum.trim() === "") {
      alert("Вы ввели строку:");
      answerNum = prompt("Угадайте число от 1 до 100");
    }

    answerNum = Number(answerNum);

    if (mysteryNumber > answerNum) {
      alert("Загаданное число больше: " + "Осталось попыток: " + tries);
    } else if (mysteryNumber < answerNum) {
      alert("Загаданное число меньше: " + "Осталось попыток: " + tries);
    } else if (mysteryNumber === answerNum) {
      const isUserWantNewGame = confirm(
        "Поздравляю, Вы угадали!!! Хотите сыграть еще раз?"
      );

      if (isUserWantNewGame) {
        tries = 2;
        mysteryNumber = randomGenerate(1, 100);
      } else {
        tries = 0;
      }
    }

    if (tries > 0) {
      tries--;
      getResult();
    } else {
      const maybeAgain = confirm(
        "Попыток больше нет, игра окончена. Хотите начать заново?"
      );

      if (maybeAgain) {
        // maybeAgain === true
        tries = 2;
        getResult();
      } else {
        alert("Вы завершили игру");
        return;
      }
    }
  };
};

let launchGameBot = gameBotFunction();
launchGameBot();
