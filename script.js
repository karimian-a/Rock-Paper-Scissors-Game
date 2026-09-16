"use strict";

// ----------<< Selecting elements >>----------
const modes = document.querySelectorAll(".modes");
const showUserChoice = document.querySelector(".user");
const showComputerChoice = document.querySelector(".computer");
const message = document.querySelector(".message");
const userScoreEl = document.querySelector(".my-score");
const computerScoreEl = document.querySelector(".computer-score");

// ----------<< Default points >>----------
let userScore = 0;
let computerScore = 0;

// ----------<< Get the user's input, display it, and show the winner >>----------
function playRound() {
  modes.forEach((choice) => {
    choice.addEventListener("click", () => {
      const choicedIcon = choice.dataset.icon;

      showUserChoice.textContent = choicedIcon;

      computerChoice();

      getWinner(choicedIcon, computerChoice());

      message.classList.remove("hidden-message");
    });
  });
}
playRound();

// ----------<< Creating and displaying random hand mode >>----------
function computerChoice() {
  const handGestures = ["✊", "✋", "✌️"];
  const randumNum = Math.floor(Math.random() * 3);
  showComputerChoice.textContent = handGestures[randumNum];
  return handGestures[randumNum];
}

// ----------<< Determining the winner and displaying the correct message >>----------
function getWinner(user, computer) {
  // ----------<< If it ends in a draw >>----------
  if (user === computer) {
    message.textContent = "It's a tie!";

    message.classList.remove("message-won", "message-lost");
    message.classList.add("message-equal");
  }

  // ----------<< If the user wins >>----------
  else if (
    (user === "✋" && computer === "✊") ||
    (user === "✌️" && computer === "✋") ||
    (user === "✊" && computer === "✌️")
  ) {
    message.textContent = "You win!";

    message.classList.remove("message-lost", "message-equal");
    message.classList.add("message-won");

    userScore += 1;
    userScoreEl.textContent = userScore;
  }

  // ----------<< If the user loses >>----------
  else {
    message.textContent = "You lose!";

    message.classList.remove("message-won", "message-equal");
    message.classList.add("message-lost");

    computerScore += 1;
    computerScoreEl.textContent = computerScore;
  }
}
