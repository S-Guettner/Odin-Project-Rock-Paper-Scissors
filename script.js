itemsArray = ["Stone","Paper","Scissor"];
 let item = "";

function computerPlay(){
   

    return itemsArray[Math.floor(Math.random()*itemsArray.length)];
}

function playRound (playerSelection,computerSelection){
    if (playerSelection == "Rock" && computerSelection == "Paper") {
        return "You Lose! Paper beats Rock"
    }
    
    if (playerSelection == "Paper" && computerSelection == "Rock") {
        return "You Win! Paper beats Rock"
    }

    if (playerSelection == "Scissor" && computerSelection == "Paper") {
        return "You Win! Scissor beats Paper"
    }
    
    if (playerSelection == "Paper" && computerSelection == "Scissor") {
        return "You Lose! Scissor beats Paper"
    }

    if (playerSelection == "Rock" && computerSelection == "Scissor") {
        return "You Win! Rock beats Scissor"
    }

    if (playerSelection == "Scissor" && computerSelection == "Rock") {
        return "You Lose! Rock beats Scissor"
    }
}



const playerSelection = "Rock";
const computerSelection = computerPlay();

console.log(playRound(playerSelection, computerSelection))
