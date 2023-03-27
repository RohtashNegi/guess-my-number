"use strict";

let score = Number(document.querySelector(".score").textContent);
let highscore = 0;
const secretNumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector(".check").addEventListener("click", function () {
  var guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  //when player has no input
  if (!guess) {
    document.querySelector(".message").textContent = "⛔❌No Number";

    // when player wins
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct number";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "grey";
    document.querySelector(".number").style.width = "25rem";

    // when guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📈Too High";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "👎 You lost the game";
      document.querySelector(".score").textContent = 0;
    } // when guess is too Low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📉 Too low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "👎 You lost the game";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = score;
  document.querySelector(".message").textContent = "start guessing";
  document.querySelector("body").style.backgroundColor = "khaki";
  document.querySelector(".guess").value = "";
  document.querySelector(".number").style.width = "7rem";
});
