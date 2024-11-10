function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let totalHumanScore = 0;
  let totalComputerScore = 0;
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
      return "DRAW!";
    }
    //return "Invalid input,please try again!";
  }

  for (let i = 0; i < 5; i++) {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    let result = playRound(humanSelection, computerSelection);
    totalHumanScore = totalHumanScore + humanScore;
    totalComputerScore = totalComputerScore + computerScore;
    console.log(result);
    console.log(humanScore, computerScore);
    //console.log(totalHumanScore, totalComputerScore);
  }
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
console.log(playGame());
