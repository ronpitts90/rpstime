let userScore = 0; 
let compScore = 0; 

const scoreboardDiv = document.querySelector(".score-board"); 
const userScoreEl = document.getElementById("user-score");
const compScoreEl = document.getElementById("comp-score");


const resultDiv = document.querySelector(".result > p"); 

const rockDiv = document.getElementById("roc"); 
const paperDiv = document.getElementById("pape");
const scissorDiv = document.getElementById("sciz");

// Computer
function compChoice(){
    const choices = ["roc", "pape", "sciz"];
    const randomNum = (Math.floor(Math.random() * 3)); 
    return choices[randomNum]; 
}

// convert words
function convertWord(letter){
    if (letter === "roc") return "Rock"; 
    if (letter === "pape") return "Paper"; 
    return "Scissors"; 
}

// game results
function win(userChoice, computerChoices){
    userScore++;
    userScoreEl.innerHTML = userScore;
    compScoreEl.innerHTML = compScore;
    const smallUserWord = "user". fontsize(3).sub();
    const smallCompWord = "comp". fontsize(3).sub();  
    resultDiv.innerHTML = `${convertWord(userChoice)} ${smallUserWord}  beats ${convertWord(computerChoices)} ${smallCompWord} , You Win!`; 
}

function lose(userChoice, computerChoices){
    compScore++;
    userScoreEl.innerHTML = userScore;
    compScoreEl.innerHTML = compScore;
    const smallUserWord = "user". fontsize(3).sub();
    const smallCompWord = "comp". fontsize(3).sub();  
    resultDiv.innerHTML = `${convertWord(userChoice)} ${smallUserWord}  loses to ${convertWord(computerChoices)} ${smallCompWord} , You Lose!`; 
}

function draw(userChoice, computerChoices){
    const smallUserWord = "user". fontsize(3).sub();
    const smallCompWord = "comp". fontsize(3).sub();  
    resultDiv.innerHTML = `${convertWord(userChoice)} ${smallUserWord} cancels out ${convertWord(computerChoices)} ${smallCompWord} , Its a draw!`; 
}

// User
function game(userChoice){
    // console.log("poop  " + userChoice)
    const computerChoices = compChoice(); 
    switch (userChoice + computerChoices){
        case "rocsciz":
        case "paperoc":
        case "scizpape":
        win(userChoice, computerChoices);
        break;
        case "rocpape":
        case "papesciz":
        case "scizroc":
        lose(userChoice, computerChoices);
        break; 
        case "rocroc":
        case "papepape":
        case "scizsciz":
        draw(userChoice, computerChoices);
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
