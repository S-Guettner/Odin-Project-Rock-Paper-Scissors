itemsArray = ["stone","paper","scissor"];


 /* Function returns random item from itemsArray */
function computerPlay(){
   return itemsArray[Math.floor(Math.random()*itemsArray.length)];
}



function gamePlay(computerSelection,playerSelection){

    if (computerSelection == "rock" && playerSelection == "paper"){
    return "You Win! Paper beats Rock.";}
    

    else if (computerSelection == "rock" && playerSelection == "scissor"){
    return "You Lose! Rock beats scissor.";}

  

    else if (computerSelection == "rock" && playerSelection == "rock"){
    return "No Winner!";}

   
    
    else if (computerSelection == "paper" && playerSelection == "paper"){
    return "No Winner!";}

   
    
    else if (computerSelection == "paper" && playerSelection == "rock"){
        return "You Lose! Paper beats Rock.";}

       

    else if (computerSelection == "paper" && playerSelection == "scissor"){
        return "You Win! Scissor beats Paper.";}    

 


     else if (computerSelection == "scissor" && playerSelection == "rock"){
    return "You Win! Rock beats scissor.";}


    
    else if (computerSelection == "scissor" && playerSelection == "paper"){
        return "You Lose! Scissor beats Paper.";}


    else if (computerSelection == "scissor" && playerSelection == "scissor"){
        return "No Winner!.";}        
    
        else {

            return "Wrong Input!!!!!!!!!";}
        
        
}

function game(){

for (let i = 0; i < 5; i++) {

    

    let playerInput = window.prompt("Your Weapon of choice?");
    let playerSelection = playerInput.toLowerCase();
    let computerSelection = computerPlay();
    console.log(gamePlay(computerSelection,playerSelection));
    
 }

}

console.log(game());


