'use strict'

let rock = document.getElementById("rock")
let paper = document.getElementById("paper")
let scissors = document.getElementById("scissors");
let restartBtn = document.getElementById("restart");
let playerOption = document.getElementById("item-container");
let playerScore = document.querySelector(".playerScore")
let computerScore = document.querySelector(".computerScore")
let resultContainer = document.querySelector(".result-container");
let wrapper = document.querySelector(".wrapper")
let winnerIndicator = document.querySelector(".winner-indicator");
let computerChoiceLogo = document.querySelector(".computerChoiceIcon")


let isFunctionRunning = false;

let currentPlayerScore = 0;
let currentComputerScore = 0;

function playGame(e) {
  if(isFunctionRunning === true){
    return;
  }


  let playerChoice = e.target.id;
  let computerChoice = getComputerChoice()
  let result = checkForWinner(playerChoice,computerChoice)

  showWinner(result)
  wrapper.style.backgroundColor = "rgb(230, 226, 226)";
  let displayIcon =  displayComputerChoiceIcon(computerChoice)

  resultContainer.style.display = "block";
  resultContainer.style.margin = "300px"
  removeScoreModal()
  
  restartBtn.style.display = "block"
  
}


let options = [rock, paper, scissors];

for (let i = 0; i < options.length; i++) {
  options[i].addEventListener("click",playGame);
}


function getComputerChoice(){   
let number = Math.random()

if(number < 0.333){
 return "rock"
}
else if(number < 0.666){
     return "paper"
}
else{
     return "scissors"
}

}

function checkForWinner(Player,Computer){

if(Player === Computer){
  return "It is a tie"
}

else if(Player === "rock" && Computer === "scissors"){
  return "Player wins"
}
else if(Player === "paper" && Computer === "rock"){
  return "Player wins"
}
else if(Player === "scissors" && Computer === "paper"){
  return "Player wins"
}
else if(Player === "rock" && Computer === "paper"){
  return "Computer wins"
}
else if(Player === "paper" && Computer === "scissors"){
  return "Computer wins"
}
else if(Player === "scissors" && Computer === "rock"){
  return "Computer wins"
}

}

function showWinner(result){

if(result === "Player wins"){
 ++currentPlayerScore
 playerScore.innerText = currentPlayerScore;
 winnerIndicator.innerText = result;

}

else if(result === "Computer wins"){
++currentComputerScore
computerScore.innerText = currentComputerScore;
winnerIndicator.innerText = result;
}
else{
     winnerIndicator.innerText = "It is a tie"
}
}


  function displayComputerChoiceIcon(computerChoice){

    if(computerChoice === "rock"){
      computerChoice = "back-fist"
    }
    computerChoiceLogo.innerHTML = `
    <i class="fa-solid fa-hand-${computerChoice} " id = "rock"></i>
    `

  }

function removeScoreModal(){

  isFunctionRunning = true;
  setTimeout(()=>{
    
    if (document.contains(resultContainer)){
      resultContainer.style.display = "none";
      wrapper.style.backgroundColor = "#fff";
    }
  isFunctionRunning = false;
  }, 2000) 

}

// removeScoreModal(playGame);

restartBtn.addEventListener("click",()=>{

  if(isFunctionRunning){
    return ;
  }
  if(currentComputerScore !== 0 || currentPlayerScore !== 0){
     currentComputerScore = 0;
     currentPlayerScore = 0;

     playerScore.innerText = currentPlayerScore;
     computerScore.innerText = currentComputerScore
     resultContainer.style.display = "none";

     wrapper.style.backgroundColor = "#fff";
     wrapper.style.backgroundColor = "#fff";
     restartBtn.style.display = "none"
  }
  
})

