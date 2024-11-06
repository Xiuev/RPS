console.log("hi");

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
