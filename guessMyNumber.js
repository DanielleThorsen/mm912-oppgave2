const button = document.querySelector("input");
const paragraph = document.querySelector("p");

button.addEventListener("click", updateButton);

function updateButton() {
  if (button.value === "Start machine") {
    button.value = "Stop machine";
    paragraph.textContent = "The machine has started!";
  } else {
    button.value = "Start machine";
    paragraph.textContent = "The machine is stopped.";
  }
}

const MAX_NUMBER = 100;
const MIN_NUMBER = 1;

let isPlaying = true;
let numPlays = 0;
let totalGuesses = 0;
let correctGuesses = 0;
let incorrectGuesses = 0;

async function playGame() {
  const randomNumber = Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER + 1)) + MIN_NUMBER;
  console.log (`${DICTIONARY.guessANumber}`);

  while (isPlaying) {
    const answer = await rl.question(DICTIONARY.yourGuess);
    const number = parseInt(answer);

    if (isNaN(number) || number < MIN_NUMBER || number > MAX_NUMBER) {
      console.log(`${DICTIONARY.invalidInput}`); 
    } else {
      totalGuesses++;

      if (number === randomNumber) {
        console.log(`${DICTIONARY.youGuessedIt}`); 
        correctGuesses++;
        isPlaying = false;
      } else if (number < randomNumber) {
        console.log(`${DICTIONARY.tooLow}`);  
        incorrectGuesses++;
      } else {
        console.log(`${DICTIONARY.tooHigh}`);  
        incorrectGuesses++;
      }
    }
  }
  }