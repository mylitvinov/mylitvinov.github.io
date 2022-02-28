const userChoiceClicks = document.querySelectorAll(".col-header");
const userChoiceDiv = document.querySelector(".userChoice");
const computerChoiceDiv = document.querySelector(".computerChoice");
const infoDiv = document.querySelector(".info");
const gameDiv = document.querySelector(".game");
const board = document.querySelector("#board");
const infoFinishDiv = document.querySelector(".infoFinish");
const userCompAllDiv = document.querySelector(".userCompAll");
const rowCol = document.querySelector(".col");
const butMenu = document.querySelector("#menu");
let userChoiceClickText = "";
let computerChoiceText = "";
let scoreUser = 0;
let scoreComp = 0;

function finishGame() {
  if (scoreUser === 10 || scoreComp === 10) {
    gameDiv.classList.add("hide");
    userCompAllDiv.classList.add("hide");
    infoFinishDiv.classList.add("forInfo");
    rowCol.classList.add("hide");
    if (scoreUser === 10) {
      infoFinishDiv.innerHTML = "Поздравляю, победа за тобой";
      butMenu.classList.remove('hide')
    }
    if (scoreComp === 10) {
      infoFinishDiv.innerHTML = "Соперник победил. Тебе повезет в следующий раз";
      butMenu.classList.remove('hide')
    }
  }
  
}

const wordsTrue = [
  "Ты просто везунчик",
  "Так держать дружище",
  "Красавчик!",
  "Еще немного и ты порвешь соперника",
  "Тебе нужно играть чаще в лотерею",
  "Сколько уже можно выигрывать?)",
  "Наверно ты долго тренировался",
  "Красава",
  "Вот видишь, собрался и пошло дело",
  "Сразу видно - профи)",
  "С таким везением надо ставки делать",
  "Красавелло",
  "Надо бы у тебя уроки взять по игре",
  "Ты слишком крут",
  "Чемпионат мира ждет тебя)",
  "Это здорово, это очень хорошо",
  "Где ты был раньше? Ты реально хорош)",
  "Хотите радоваться жизни? Так живите и этому радуйтесь.",
  "Судьба часто отбрасывает нас на шаг назад, но это лишь для разбега перед большим прыжком.",
  "Помни, что у тебя нет подарка ценнее твоего времени. Дари себе его чаще.",
];

const wordsFalse = [
  "Не огорчайся",
  "Все будет хорошо",
  "Соберись и играй дальше",
  "Не повезло(",
  "С таким везением не стоит играть",
  "Нужно больше тренироваться",
  "Я знаю, ты сможешь",
  "Еще есть раунды отыграться",
  "Проигран раунд, но не проиграна партия",
  "Сразу видно - дилетант)",
  "Видимо камень, ножницы, бумага это не твое(",
  "Ну что я могу сказать...",
  "Надо бы уроки взять по игре",
  "Ты слишком прямолинеен",
  "Чемпионат мира пройдет без тебя",
  "Это нездорово, это не очень хорошо",
  "Меня постоянно преследуют умные мысли, но я быстрее…",
  "Хотите радоваться жизни? Так живите и этому радуйтесь.",
  "Судьба часто отбрасывает нас на шаг назад, но это лишь для разбега перед большим прыжком.",
];
const roundTrue = "Раунд за тобой!";
const roundFalse = "Раунд за соперником!";
const roundNull = "Ничья тоже результат. Продолжаем!";

const randomWords = (arr) => {
  return arr[Math.floor(Math.random() * (arr.length - 1))];
};
// console.log(randomWordsTrue())

const getUserChoice = (userInput) => {
  if (
    userInput === "Камень" ||
    userInput === "Ножницы" ||
    userInput === "Бумага"
  ) {
    return userInput;
  } else {
    console.log("Error");
  }
};

const getComputerChoice = () => {
  const arr = ["Камень", "Ножницы", "Бумага"];
  return arr[Math.floor(Math.random() * 3)];
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return roundNull;
  }
  if (userChoice === "Камень") {
    if (computerChoice === "Ножницы") {
      scoreUser += 1;
      return `${randomWords(wordsTrue)}<br>${roundTrue}`;
    } else {
      scoreComp += 1;
      return `${randomWords(wordsFalse)}<br>${roundFalse}`;
    }
  }
  if (userChoice === "Бумага") {
    if (computerChoice === "Камень") {
      scoreUser += 1;
      return `${randomWords(wordsTrue)}<br>${roundTrue}`;
    } else {
      scoreComp += 1;
      return `${randomWords(wordsFalse)}<br>${roundFalse}`;
    }
  }
  if (userChoice === "Ножницы") {
    if (computerChoice === "Бумага") {
      scoreUser += 1;
      return `${randomWords(wordsTrue)}<br>${roundTrue}`;
    } else {
      scoreComp += 1;
      return `${randomWords(wordsFalse)}<br>${roundFalse}`;
    }
  }
  showScore();
};

for (const userClick of userChoiceClicks) {
  userClick.addEventListener("click", (event) => {
    gameDiv.classList.remove("hide");
    userChoiceDiv.classList.add("item");
    userChoiceClickText = userClick.textContent;
    userChoiceDiv.innerHTML = userChoiceClickText;

    computerChoiceDiv.classList.add("item");
    computerChoiceText = getComputerChoice();
    computerChoiceDiv.innerHTML = computerChoiceText;
    setTimeout(() => {
      infoDiv.classList.add("forInfo");
      infoDiv.innerHTML = playGame();
    }, 1000);
    setTimeout(() => {
      gameDiv.classList.add("hide");
      infoDiv.innerHTML = "";
    }, 4000);
  });
}

const playGame = () => {
  const userChoice = getUserChoice(userChoiceClickText);
  const computerChoice = computerChoiceText;
  console.log(`Твой выбор: ${userChoice}`);
  console.log(`Выбор компьютера: ${computerChoice}`);
  userCompAllDiv.classList.remove("hide");
  let answer = determineWinner(userChoice, computerChoice);
  showScore();
  finishGame();
  return answer;
};

function showScore() {
  board.innerHTML = `<h1>Счет: <span class='primary'>${scoreUser} : ${scoreComp}</span> </h1>`;
}

butMenu.addEventListener('click',() => {
    location.reload();
  })
