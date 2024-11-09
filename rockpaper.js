console.log("hi");

//const humanSelection = getHumanChoice;
//const computerSelection = getComputerChoice;
function playGame() {
  let humanSelection = getHumanChoice();
  let computerSelection = getComputerChoice();
  let humanScore = 0;
  let computerScore = 0;
  function playRound(humanChoice, computerChoice) {
    //DONT FORGET TO INCREASE SCORE OF WINNER
    if (humanChoice === "paper" && computerChoice === "rock") {
      humanScore += 1;
      return "You win! Paper beats Rock!";
    } else if (humanChoice === "rock" && computerChoice === "scissor") {
      humanScore += 1;
      return "You win! Rock beats Scissors";
    } else if (humanChoice === "scissor" && computerChoice === "paper") {
      humanScore += 1;
      return "You win! Scissor beats Paper!";
    } else if (computerChoice === "paper" && humanChoice === "rock") {
      computerScore += 1;
      return "You lose! Paper beats Rock";
    } else if (computerChoice === "rock" && humanChoice === "scissor") {
      computerScore += 1;
      return "You lose! rock beats scissor";
    } else if (computerChoice === "scissor" && humanChoice === "paper") {
      computerScore += 1;
      return "You Lose! scissor beats paper";
    } else if (computerChoice === humanChoice) {
      computerScore += 1;
      return "DRAW!";
    }
  }
  //call playround 5 times using for loop?(add loop in playRound instead?)
  for (let i = 0; i < 2; i++) {
    playRound(humanSelection, computerSelection);
  }
  return humanSelection;
}

function getHumanChoice() {
  //arry?
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
//console.log(getHumanChoice());

function getComputerChoice() {
  let randomCpuChoice = ["rock", "paper", "scissors"];
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
