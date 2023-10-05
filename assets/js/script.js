document.addEventListener("DOMContentLoaded", function() {
    const choices = document.querySelectorAll(".choice");
    const userScore = document.getElementById("user.score");
    const computerScore = document.getElementById("computer-score");
    const actionMessage = document.getElementById("action-message");

    let userScore = 0;
    let computerScore = 0;

    function startGame() {
        choices.forEach ((choice) => {
            choice.addEventListener("click", function () {
                const userChoice = this.id;
                const computerChoice = getComputerChoice();
                const result = determineWinner(userChoice, computerChoice);
                updateScore(userChoice, computerChoice, result);
            });
        });
    }

    function getComputerChoice() {
        const choices = ["rock", "paper", "scissors"];
        const randNum = Math.floor(Math.random() *3) + 1;
        return choices[randNum]
    }

    function whoWins(userChoice, computerChoice) {
        if (userChoice === computerChoice) {
            return `${convertToWord(userChoice)} equals ${convertToWord(computerChoice)}. It's a draw!`; 
        } else if (
            (userChoice === "rock" && computerChoice === "scissors") || 
            (userChoice === "scissors" && computerChoice === "rock") ||
            (userChoice === "paper" && computerChoice === "rock") 

        ) {
            return `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You win!`;
        } else {
            return `${convertToWord(userChoice)} loses to ${convertToWord(computerChoice)}. You lose!`;
        }
    }

    
    }

})

