const userScore = 0; 
const compScore = 0; 

const scoreboardDiv = document.querySelector(".score-board"); 
const userScoreEl = document.getElementById("user-score");
const compScoreEl = document.getElementById("comp-score");


const resultDiv = document.querySelector(".result"); 

const rockDiv = document.getElementById("roc"); 
const paperDiv = document.getElementById("pape");
const scissorDiv = document.getElementById("sciz");

// Computer
function compChoice(){
    const choices = ["roc", "pape", "sciz"]
}

compChoice(); 



// User
function game(userChoice){
    console.log("poop  " + userChoice)
}

function main(){
    rockDiv.addEventListener("click" , function(){
        game("roc");
     });
     
     paperDiv.addEventListener("click" , function(){
         game("pape");
     });
     
     scissorDiv.addEventListener("click" , function(){
         game("sciz"); 
     });
}

main(); 
