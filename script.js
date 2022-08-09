




function gamePlay(playerInput){

/* computerSelection = random item of itemsArray */    

    let itemsArray = ["rock","paper","scissor"];
    let computerSelection = itemsArray[Math.floor(Math.random()*itemsArray.length)];

/* computerSelection = random item of itemsArray */        



/*Input from Button */
let playerSelection = playerInput;

if (computerSelection == "rock" && playerSelection == "paper"){
    console.log("You Win Paper beats Rock")  }


else if (computerSelection == "rock" && playerSelection == "scissor"){
    console.log("You Lose! Rock beats scissor.") }



else if (computerSelection == "rock" && playerSelection == "rock"){
    console.log("No Winner!")  }



else if (computerSelection == "paper" && playerSelection == "paper"){
    console.log("No Winner!")  }



else if (computerSelection == "paper" && playerSelection == "rock"){
    console.log("You Lose! Paper beats Rock.")  }

   

else if (computerSelection == "paper" && playerSelection == "scissor"){
    console.log("You Win! Scissor beats Paper.") }    




 else if (computerSelection == "scissor" && playerSelection == "rock"){
    console.log("You Win! Rock beats scissor.")}



else if (computerSelection == "scissor" && playerSelection == "paper"){
    console.log("You Lose! Scissor beats Paper.") }



else if (computerSelection == "scissor" && playerSelection == "scissor"){
    console.log("No Winner!.") }     




}

/* game mechanic */





