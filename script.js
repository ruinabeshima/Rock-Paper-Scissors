function getComputerChoice() {
  let RandNum = Math.floor(Math.random() * 3);
  let value = "" 
  if (RandNum == 0){
    value = "ROCK";
  }
  else if (RandNum == 1){
    value = "SCISSORS";
  }
  else if (RandNum == 2){
    value = "PAPER";
  }
  return value; 
};

function getHumanChoice(){
  humanRock.addEventListener("click", () => {
    playGame("ROCK")
  })
  humanPaper.addEventListener("click", () => {
    playGame("PAPER")
  })
  humanScissors.addEventListener("click", () => {
    playGame("SCISSORS")
  })
};

function getChoicePicture(computerChoice){
  const firstImg = computerImage.querySelector("img")
  if (firstImg) {
    firstImg.remove()
  }

  if (computerChoice === "ROCK"){
    let rockImage = document.createElement("img")
    rockImage.src = "resources/rock.jpg"
    rockImage.classList.add("choice-image")
    computerImage.appendChild(rockImage)
  } 
  
  else if (computerChoice === "PAPER"){
    let paperImage = document.createElement("img")
    paperImage.src = "resources/paper.jpg"
    paperImage.classList.add("choice-image")
    computerImage.appendChild(paperImage)
  } 
  
  else if (computerChoice === "SCISSORS"){
    let scissorImage = document.createElement("img")
    scissorImage.src = "resources/scissors.jpg"
    scissorImage.classList.add("choice-image")
    computerImage.appendChild(scissorImage)
  }

}

function playRound(humanChoice, computerChoice){
    let result = ""
    let computerScore = 0
    let humanScore = 0
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

function playGame(humanChoice){
  let computerChoice = getComputerChoice()
  getChoicePicture(computerChoice)
  value = playRound(humanChoice, computerChoice)
  console.log(value)
}

const humanRock = document.getElementById("human-rock")
const humanPaper = document.getElementById("human-paper")
const humanScissors = document.getElementById("human-scissors")
const computerImage = document.getElementById("computer-choice")

getHumanChoice()
playGame()
