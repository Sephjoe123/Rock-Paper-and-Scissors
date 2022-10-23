let rock = document.getElementById("rock")
let paper = document.getElementById("paper")
let scissors = document.getElementById("scissors")
let showWinner = document.getElementsByClassName("result-container")[0]
let BgChange = document.querySelectorAll(".wrapper")[0]
let playerScore = document.querySelectorAll(".playerScore")[0]
let computerScore = document.querySelectorAll(".computerScore")[0]
playerScore = 0
computerScore = 0;

function playGame(e){
let playerChoice = e.target.id;
let computer = computerChoice()
let winner = getWinner(playerChoice,computer);
let display = displayWinner(winner,computer)
let score = displayScore(winner,playerScore,computerScore)

}

rock.addEventListener("click",playGame)
paper.addEventListener("click",playGame)
scissors.addEventListener("click",playGame)

function computerChoice(){
let randomSelection = Math.random();
if(randomSelection < 0.333 ){
 return "rock";
}
 else if( randomSelection < 0.66){
    return "paper"
 }
 else{
    return "scissors"
 }
}

function getWinner(playerChoice,computerChoice){
if(playerChoice === computerChoice){
  return "It is a draw"
}
else if(playerChoice === "rock" && computerChoice === "scissors"){
    return "Player win"
}
else if(playerChoice === "paper" && computerChoice === "rock"){
    return "Player win"
}
else if(playerChoice === "scissors" && computerChoice === "paper"){
    return "Player win"
}
else if(playerChoice === "rock" && computerChoice === "paper"){
    return "Computer win"
}
else if(playerChoice === "paper" && computerChoice === "scissors"){
    return "Computer win"
}
else if(playerChoice === "scissors" && computerChoice === "rock"){
    return "Computer win"
}

}


 function displayWinner(w,computer){
    showWinner.style.display = "block"
    BgChange.style.backgroundColor = "rgb(218, 218, 218)"
    if(w === "Player win"){
   return showWinner.innerHTML = ` <h1 style = "color: green">
    You Win
  </h1>
  <i class="fa-solid fa-hand-back-fist"></i>
   <h4>
    Computer choose ${computer}
   </h2>`
    }
else if(w === "Computer win"){
    return showWinner.innerHTML = ` <h1 style = "color: red">
    You lose
  </h1>
  <i class="fa-solid fa-hand-back-fist"></i>
   <h4>
    Computer  choose  ${computer}
   </h2>`
}
else if (w === "It is a draw"){
    return showWinner.innerHTML = ` <h1 style = "color: gray">
    It's a draw
  </h1>
  <i class="fa-solid fa-hand-back-fist"></i>
   <h4>
    Computer choose  ${computer}
   </h2>`
}
else {
    return ""
}
 }

 function displayScore(winner,p,c){
 if( winner === "Player win" ){
   return  playerScore.value = p++
 }
 else if(winner === "Computer win"){
   return computerScore.value = c++
 }


}