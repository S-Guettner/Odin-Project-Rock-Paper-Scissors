




function gamePlay(playerInput){

/* computerSelection = random item of itemsArray */    

    let itemsArray = ["rock","paper","scissor"];
    let computerSelection = itemsArray[Math.floor(Math.random()*itemsArray.length)];

/* computerSelection = random item of itemsArray */        

let outcome = document.querySelector('.score');
console.log(outcome.textContent);

/*Input from Button */
let playerSelection = playerInput;

if (computerSelection == "rock" && playerSelection == "paper"){
    outcome.textContent = "You Win Paper beats Rock"  }


else if (computerSelection == "rock" && playerSelection == "scissor"){
    outcome.textContent = "You Lose! Rock beats scissor." }



else if (computerSelection == "rock" && playerSelection == "rock"){
    outcome.textContent = "No Winner!"  }



else if (computerSelection == "paper" && playerSelection == "paper"){
    outcome.textContent = "No Winner!"  }



else if (computerSelection == "paper" && playerSelection == "rock"){
    outcome.textContent = "You Lose! Paper beats Rock."  }

   

else if (computerSelection == "paper" && playerSelection == "scissor"){
    outcome.textContent = "You Win! Scissor beats Paper." }    




 else if (computerSelection == "scissor" && playerSelection == "rock"){
    outcome.textContent = "You Win! Rock beats scissor."}



else if (computerSelection == "scissor" && playerSelection == "paper"){
    outcome.textContent = "You Lose! Scissor beats Paper." }



else if (computerSelection == "scissor" && playerSelection == "scissor"){
    outcome.textContent = "No Winner!" }     

}







