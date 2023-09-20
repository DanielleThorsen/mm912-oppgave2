const MIN_NUMBER = 1;
const MAX_NUMBER = 100;
    
const randomNumber = 
  Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER + 1)) + MIN_NUMBER;
    
const output = document.getElementById("output");
const button = document.getElementById("guessMyNumber");

button.addEventListener("click", updateButton);

  function updateButton(){ 
    const guess = parseInt(document.getElementById("inputNumber").value);
    const li = document.createElement("li");

  if (isNaN(guess)) {
    li.innerHTML = "Enter a number";
  } else if (guess === randomNumber) {
      li.innerHTML = `Your guess was ${guess}, you guessed correctly!`; 
      button.disabled = true;
      playAgain.disabled = false;
    } else if (guess < randomNumber) {
      li.innerHTML = `Your guess was ${guess}, you guessed too low!`;  
    } else {
      li.innerHTML = `Your guess was ${guess}, you guessed too high!`;  
    }

    output.appendChild(li);
  }
