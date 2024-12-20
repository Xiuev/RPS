//let computerSelection = getComputerChoice();
//dom queries
let rockButton = document.querySelector("#rockBtn");
let paperButton = document.querySelector("#paperBtn");
let scissorBtn = document.querySelector("#scissorBtn");

rockButton.addEventListener("click", () => {
  let result = playRound("rock", getComputerChoice());
  console.log(result);
});
paperButton.addEventListener("click", () => {
  let result = playRound("paper", getComputerChoice());
  console.log(result);
});
scissorBtn.addEventListener("click", () => {
  let result = playRound("scissor", getComputerChoice());
  console.log(result);
});
//functions

function playRound(humanChoice, computerChoice) {
  let humanScore = document.querySelector("#hmn-score");
  let computerScore = document.querySelector("#cpu-score");
  //DONT FORGET TO INCREASE SCORE OF WINNER
  if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore.innerHTML = parseInt(humanScore.innerHTML) + 1;
  } else if (humanChoice === "rock" && computerChoice === "scissor") {
    humanScore.innerHTML = parseInt(humanScore.innerHTML) + 1;
  } else if (humanChoice === "scissor" && computerChoice === "paper") {
    humanScore.innerHTML = parseInt(humanScore.innerHTML) + 1;
  } else if (computerChoice === "paper" && humanChoice === "rock") {
    computerScore.innerHTML = parseInt(computerScore.innerHTML) + 1;
  } else if (computerChoice === "rock" && humanChoice === "scissor") {
    computerScore.innerHTML = parseInt(computerScore.innerHTML) + 1;
  } else if (computerChoice === "scissor" && humanChoice === "paper") {
    computerScore.innerHTML = parseInt(computerScore.innerHTML) + 1;
  } else if (computerChoice === humanChoice) {
  }
  //total score/game winner;
  if (
    parseInt(humanScore.innerHTML) === 5 &&
    parseInt(computerScore.innerHTML) < 5
  ) {
    let gameWinner = prompt("Congratulations YOU won the game!");
    return gameWinner;
  } else if (
    parseInt(computerScore.innerHTML) === 5 &&
    parseInt(humanScore.innerHTML) < 5
  ) {
    let gameWinner = prompt("You lose Computer won the game!");
    return gameWinner;
  }
}
function playGame() {
  let totalHumanScore = 0;
  let totalComputerScore = 0;

  let humanSelection = getHumanChoice();

  let result = playRound(humanSelection, computerSelection);
  totalHumanScore = totalHumanScore + humanScore;
  totalComputerScore = totalComputerScore + computerScore;
  console.log(result);
  console.log(humanScore, computerScore);
  //console.log(totalHumanScore, totalComputerScore);

  if (totalHumanScore > totalComputerScore) {
    return `You Win! The final score is ${totalHumanScore} - ${totalComputerScore}`;
  } else if (totalComputerScore > totalHumanScore) {
    return `You lost to AI! The final score is ${totalHumanScore} - ${totalComputerScore} `;
  } else if (totalHumanScore === totalComputerScore) {
    return `No one wins its a DRAW! ${totalHumanScore} - ${totalComputerScore}`;
  }
}

function getHumanChoice() {
  let humanChoice = prompt("Rock Paper or Scissor?");
  let humanResult = humanChoice.toLowerCase();
  switch (humanResult) {
    case "rock":
      return "rock";
      break;
    case "paper":
      return "paper";
      break;
    case "scissor":
      return "scissor";
      break;

    default:
      return "invalid choice";
  }
}

function getComputerChoice() {
  let randomCpuChoice = ["rock", "paper", "scissor"];
  let computerChoice = Math.floor(Math.random() * randomCpuChoice.length);
  //add switch statement
  switch (computerChoice) {
    case 0:
      return randomCpuChoice[0];
      break;
    case 1:
      return randomCpuChoice[1];
      break;
    case 2:
      return randomCpuChoice[2];
      break;
  }
}
//console.log(getComputerChoice());
//console.log(playRound(getHumanChoice(), getComputerChoice()));
//console.log(playGame());
