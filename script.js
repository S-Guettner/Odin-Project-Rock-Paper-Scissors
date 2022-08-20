
/* Score */

let playerScore = 0;
let computerScore = 0;

function gamePlay(playerInput){



/*Score*/



/* computerSelection = random item of itemsArray */    

    let itemsArray = ["rock","paper","scissor"];
    let computerSelection = itemsArray[Math.floor(Math.random()*itemsArray.length)];

/* computerSelection = random item of itemsArray */        



let outcome = document.querySelector('.score');
console.log(outcome.textContent);



/*Input from Button */
let playerSelection = playerInput;



if (computerSelection == "rock" && playerSelection == "paper"){
    outcome.textContent = "You Win Paper beats Rock" ;
    playerScore++;
    }
    
    

else if (computerSelection == "rock" && playerSelection == "scissor"){
    outcome.textContent = "You Lose! Rock beats scissor."
    computerScore++; }
    


else if (computerSelection == "rock" && playerSelection == "rock"){
    outcome.textContent = "Rock VS Rock No Winner!" 
    }



else if (computerSelection == "paper" && playerSelection == "paper"){
    outcome.textContent = "Paper VS Paper No Winner!"  }



else if (computerSelection == "paper" && playerSelection == "rock"){
    outcome.textContent = "You Lose! Paper beats Rock."  
    computerScore++;}

   

else if (computerSelection == "paper" && playerSelection == "scissor"){
    outcome.textContent = "You Win! Scissor beats Paper." 
    playerScore++;}    




 else if (computerSelection == "scissor" && playerSelection == "rock"){
    outcome.textContent = "You Win! Rock beats scissor."
    playerScore++;}



else if (computerSelection == "scissor" && playerSelection == "paper"){
    outcome.textContent = "You Lose! Scissor beats Paper." 
    computerScore++;}



else if (computerSelection == "scissor" && playerSelection == "scissor"){
    outcome.textContent = "Scissor VS Scissor No Winner!" }     


    document.querySelector("#player").textContent = playerScore;
    document.querySelector("#computer").textContent = computerScore;
    

    
}

function reset(){
    playerScore=0;
    computerScore=0;
    
    document.querySelector("#player").textContent = playerScore;
    document.querySelector("#computer").textContent = computerScore;

}
