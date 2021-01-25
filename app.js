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
    const choices = ["roc", "pape", "sciz"];
    const randomNum = (Math.floor(Math.random() * 3)); 
    return choices[randomNum]; 
}


// User
function game(userChoice){
    // console.log("poop  " + userChoice)
    const computerChoices = compChoice(); 
    switch (userChoice + computerChoices){
        case "rocsciz":
        case "paperoc":
        case "scizpape":
        console.log("User Wins!!");
        break;
        case "rocpape":
        case "papesciz":
        case "scizroc":
        console.log("User Loses!!");
        break; 
        case "rocroc":
        case "papepape":
        case "scizsciz":
        console.log("Its a draw!!");
        break; 
    }
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
