let countDownNumber = 3;

let randomNumbers = [];

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (i = 0; i < 5; i++) {
  randomNumbers.push(generateRandomNumber(1, 50));
}
console.log(randomNumbers);

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
    }
    const countDownEl = document.getElementById("countdown");
    countDownEl.innerHTML = countDownNumber;
  }
}

const countDown = setInterval(minusOne, 1000);

console.log(countDownNumber);

const instructionEl = document.getElementById("instructions");
