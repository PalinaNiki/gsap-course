const gameBotFunction = function () {
  // Функция генерации случайного числа в диапазоне [min, max]
  const randomGenerate = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  // Кол-во попыток
  let tries = 5;

  // Загаданное число
  let mysteryNumber = randomGenerate(1, 10);

  // Рекурсивная функция взаимодействия
  const getResult = function () {
    let answer = prompt("Угадайте число от 1 до 100");

    if (answer === null) {
      alert("Вы завершили игру");
      return;
    }

    answer = answer.trim();

    while (answer === "" || isNaN(answer)) {
      answer = prompt("Пожалуйста, введите корректное число от 1 до 100");
      if (answer === null) {
        alert("Вы завершили игру");
        return;
      }
      answer = answer.trim();
    }

    const answerNum = Number(answer);

    if (mysteryNumber > answerNum) {
      tries--;
      alert(`Загаданное число больше. Осталось попыток: ${tries}`);
    } else if (mysteryNumber < answerNum) {
      tries--;
      alert(`Загаданное число меньше. Осталось попыток: ${tries}`);
    } else {
      alert("Поздравляем! Вы угадали число.");

      if (confirm("Хотите сыграть заново?")) {
        tries = 5;
        mysteryNumber = randomGenerate(1, 100);
        getResult();
      } else {
        tries = 0;
        alert("Спасибо за игру!");
      }
      return;
    }

    if (tries > 0) {
      getResult();
    } else {
      if (confirm("Попытки закончились. Хотите попробовать снова?")) {
        tries = 5;
        mysteryNumber = randomGenerate(1, 100);
        getResult();
      } else {
        alert("Вы завершили игру");
        return;
      }
    }
  };

  // Запускаем игру
  getResult();
};

// Запустить игру
gameBotFunction();
