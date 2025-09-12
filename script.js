function getComputerChoice() {
  let RandNum = Math.floor(Math.random() * 3);
  let value = "" 
  if (RandNum == 0){
    value = "Rock";
  }
  else if (RandNum == 1){
    value = "Scissors";
  }
  else if (RandNum == 2){
    value = "Paper";
  }
  return value; 
};

function getHumanChoice(){
  let Choice = prompt("Enter a choice between Rock, Paper, Scissors: ")
  return Choice
};


function playGame(){

  let humanScore = 0;
  let computerScore = 0;  
  
  function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toUpperCase();
    computerChoice = computerChoice.toUpperCase();
    let result = ""
    if (humanChoice == computerChoice){
      result = "It was a draw! No points gained!";
    } else if (humanChoice == "ROCK" && computerChoice == "SCISSORS"){
      result = "You win! Rock beats scissors!";
      humanScore += 1;
    } else if (humanChoice == "ROCK" && computerChoice == "PAPER"){
      result = "You lose! Paper beats rock!";
      computerScore += 1; 
    } else if (humanChoice == "SCISSORS" && computerChoice == "ROCK"){
      result = "You lose! Rock beats scissors!";
      computerScore += 1; 
    } else if (humanChoice == "PAPER" && computerChoice == "ROCK"){
      result = "You win! Paper beats rock!";
      humanScore += 1; 
    } else if (humanChoice == "PAPER" && computerChoice == "SCISSORS"){
      result = "You lose! Scissors beats paper!"
      computerScore += 1; 
    } else if (humanChoice == "SCISSORS" && computerChoice == "PAPER"){
      result = "You win! Scissors beats paper!"
      humanScore += 1; 
    }
    return result
  };

  for (let i=0; i<5; i++){
    console.log(playRound(getHumanChoice(), getComputerChoice()))
  }

}

console.log(playGame())