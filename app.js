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
    userChoiceDiv = document.getElementById(userChoice); 
    const smallUserWord = "user". fontsize(3).sub();
    const smallCompWord = "comp". fontsize(3).sub();  
    resultDiv.innerHTML = `${convertWord(userChoice)} ${smallUserWord}  beats ${convertWord(computerChoices)} ${smallCompWord} , You Win!`; 
    userChoiceDiv.classList.add('green-glow'); 
    setTimeout(()=> userChoiceDiv.classList.remove('green-glow'), 500)
}



function lose(userChoice, computerChoices){
    compScore++;
    userScoreEl.innerHTML = userScore;
    compScoreEl.innerHTML = compScore;
    userChoiceDiv = document.getElementById(userChoice); 
    const smallUserWord = "user". fontsize(3).sub();
    const smallCompWord = "comp". fontsize(3).sub();  
    resultDiv.innerHTML = `${convertWord(userChoice)} ${smallUserWord}  loses to ${convertWord(computerChoices)} ${smallCompWord} , You Lose!`; 
    userChoiceDiv.classList.add('red-glow'); 
    setTimeout(() => userChoiceDiv.classList.remove('red-glow'), 500)
}

function draw(userChoice, computerChoices){
    const smallUserWord = "user". fontsize(3).sub();
    const smallCompWord = "comp". fontsize(3).sub(); 
    userChoiceDiv = document.getElementById(userChoice);  
    resultDiv.innerHTML = `${convertWord(userChoice)} ${smallUserWord} cancels out ${convertWord(computerChoices)} ${smallCompWord} , Its a draw!`; 
    userChoiceDiv.classList.add('gray-glow'); 
    setTimeout(() => userChoiceDiv.classList.remove('gray-glow'), 500)
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
    rockDiv.addEventListener("click" , ()=> game("roc"));
     
     paperDiv.addEventListener("click" , ()=> game("pape"));
     
     scissorDiv.addEventListener("click" , ()=> game("sciz"));
}

main(); 
