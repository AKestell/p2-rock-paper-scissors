document.addEventListener("DOMContentLoaded", function () {
    const choices = document.querySelectorAll(".choice");
    const userScore = document.getElementById("user-score");
    const computerScore = document.getElementById("computer-score");
    const actionMessage = document.getElementById("action-message");

    let userScoreNum = 0;
    let computerScoreNum = 0;

    function getComputerChoice() {
        const choices = ["rock", "paper", "scissors"];
        const randNum = Math.floor(Math.random() * 3);
        return choices[randNum];
    }

    function whoWins(userChoice, computerChoice) {
        if (userChoice === computerChoice) {
            return `${userChoice} equals ${computerChoice}. It's a draw!`;
        } else if (
            (userChoice === "Rock" && computerChoice === "Scissors") ||
            (userChoice === "Scissors" && computerChoice === "Paper") ||
            (userChoice === "Paper" && computerChoice === "Rock")

        ) {
            return `${userChoice} beats ${computerChoice}. You win!`;
        } else {
            return `${userChoice} loses to ${computerChoice}. You lose!`;
        }
    }

    function updateScore(userChoice, computerChoice, result) {
        if (
            result.includes("You win!")
        ) {
            userScoreNum++;
        } else if (
            result.includes("You lose!")
        ) {
            computerScoreNum++;
        }

        userScore.textContent = userScoreNum;
        computerScore.textContent = computerScoreNum;
        actionMessage.textContent = `${userChoice} vs ${computerChoice}. ${result}`;
    }

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

    startGame();

});
