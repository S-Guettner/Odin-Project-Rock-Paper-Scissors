itemsArray = ["Stone","Paper","Scissor"];
 let item = "";

 /* Function returns random item from itemsArray */
function computerPlay(){
   return itemsArray[Math.floor(Math.random()*itemsArray.length)];
}



/* Function that checks for winner and returns message*/ 


const playerSelection = prompt ("What is your Weapon of Choice?");
const computerSelection = computerPlay();
const weaponSelection = playerSelection.toLowerCase();

function playRound (playerSelection,computerSelection){

    

    if (weaponSelection == "rock" && computerSelection == "Paper") {
        return "You Lose! Paper beats Rock"
    }

    if (weaponSelection == "rock" && computerSelection == "Scissor") {
        return "You Win! Rock beats Scissor"
    }

    if (weaponSelection == "paper" && computerSelection == "Scissor") {
        return "You Lose! Scissor beats Paper"
    }

    if (weaponSelection == "paper" && computerSelection == "Rock") {
        return "You Win! Paper beats Rock"
    }

    if (weaponSelection == "scissor" && computerSelection == "Paper") {
        return "You Win! Scissor beats Paper"
    }
    
    
    if (weaponSelection == "scissor" && computerSelection == "Rock") {
        return "You Lose! Rock beats Scissor"
    }
}
console.log(playRound(playerSelection, computerSelection));


