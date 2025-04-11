let countDownNumber = 30;

let randomNumbers = [];

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (i = 0; i < 5; i++) {
  randomNumbers.push(generateRandomNumber(1, 50));
}
console.log(randomNumbers);
const instructionEl = document.getElementById("instructions");

const numberOneEl = document.getElementById("numberOne");
const numberTwoEl = document.getElementById("numberTwo");
const numberThreeEl = document.getElementById("numberThree");
const numberFourEl = document.getElementById("numberFour");
const numberFiveEl = document.getElementById("numberFive");
numberOneEl.innerText = randomNumbers[0];
numberTwoEl.innerText = randomNumbers[1];
numberThreeEl.innerText = randomNumbers[2];
numberFourEl.innerText = randomNumbers[3];
numberFiveEl.innerText = randomNumbers[4];

const numberOneGuessEl = document.getElementById("NumberGuessOne");
const numberTwoGuessEl = document.getElementById("NumberGuessTwo");
const numberThreeGuessEl = document.getElementById("NumberGuessThree");
const numberFourGuessEl = document.getElementById("NumberGuessFour");
const numberFiveGuessEl = document.getElementById("NumberGuessFive");

const messageEl = document.getElementById("message");
const answerEl = document.getElementById("instructions-answer");

function minusOne() {
  if (countDownNumber >= 0) {
    countDownNumber -= 1;
    console.log(countDownNumber);

    if (countDownNumber <= 0) {
      clearInterval(countDown);
      const countDownEl = document.getElementById("countdown");
      instructionEl.classList.add("d-none");
      countDownEl.classList.add("d-none");
      const numbersListEl = document.getElementById("numbers-list");
      numbersListEl.classList.add("d-none");
      const formEl = document.getElementById("answers-form");
      formEl.classList.remove("d-none");
      answerEl.classList.remove("d-none");

      let numbersGuesses = [];
      formEl.addEventListener("submit", function (event) {
        event.preventDefault();
        numbersGuesses.push(
          parseInt(numberOneGuessEl.value),
          parseInt(numberTwoGuessEl.value),
          parseInt(numberThreeGuessEl.value),
          parseInt(numberFourGuessEl.value),
          parseInt(numberFiveGuessEl.value)
        );
        console.log(numbersGuesses);

        const uniqueGuesses = new Set(numbersGuesses);
        if (uniqueGuesses.size !== numbersGuesses.length) {
          alert("Hai inserito numeri duplicati!");
          numbersGuesses = [];
          return;
        }

        const numeriComuni = randomNumbers.filter((num) =>
          numbersGuesses.includes(num)
        );
        console.log(numeriComuni); // Output: [3, 10]
        console.log(`Numeri in comune: ${numeriComuni.length}`);

        if (numeriComuni.length === 0) {
          messageEl.innerText = `Non hai ricordato nessun numero`;
        } else {
          messageEl.innerText = `Hai ricordato ${numeriComuni.length} numeri: ${numeriComuni}`;
        }
      });
    }
    const countDownEl = document.getElementById("countdown");
    countDownEl.innerHTML = countDownNumber;
  }
}

const countDown = setInterval(minusOne, 1000);

console.log(countDownNumber);
