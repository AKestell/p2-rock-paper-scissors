document.addEventListener("DOMContentLoaded", function () {
  const choices = document.querySelectorAll(".choice");
  const userScore = document.getElementById("user-score");
  const computerScore = document.getElementById("computer-score");
  const actionMessage = document.getElementById("action-message");

  let userScoreNum = 0;
  let computerScoreNum = 0;

  // Function to determine the Computers choice.
  function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randNum = Math.floor(Math.random() * 3);
    return choices[randNum];
  }

  // Function to see which player wins the game.
  function whoWins(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return `${userChoice} equals ${computerChoice}. It's a draw!`;
    } else if (
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "scissors" && computerChoice === "paper") ||
      (userChoice === "paper" && computerChoice === "rock")
    ) {
      return `${userChoice} beats ${computerChoice}. You win!`;
    } else {
      return `${userChoice} loses to ${computerChoice}. You lose!`;
    }
  }

  //Function to update and display the score of the game.
  function updateScore(userChoice, computerChoice, result) {
    if (result.includes("You win!")) {
      userScoreNum++;
    } else if (result.includes("You lose!")) {
      computerScoreNum++;
    }

    userScore.textContent = userScoreNum;
    computerScore.textContent = computerScoreNum;
    result.textContent = result;
    actionMessage.textContent = `${userChoice} vs ${computerChoice}. ${result}`;
  }

  // Event listener for the players choices.
  function startGame() {
    choices.forEach((choice) => {
      choice.addEventListener("click", function () {
        const userChoice = this.id;
        const computerChoice = getComputerChoice();
        const result = whoWins(userChoice, computerChoice);
        updateScore(userChoice, computerChoice, result);
      });
    });
  }

  //Starts the game.
  startGame();
});
