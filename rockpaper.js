console.log("hi");

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
