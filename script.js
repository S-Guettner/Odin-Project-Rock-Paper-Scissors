




function gamePlay(playerInput){

/* computerSelection = random item of itemsArray */    

    let itemsArray = ["rock","paper","scissor"];
    let computerSelection = itemsArray[Math.floor(Math.random()*itemsArray.length)];

/* computerSelection = random item of itemsArray */        



/*Input from Button */
let playerSelection = playerInput;

console.log(playerInput)


/* game mechanic */

    if (computerSelection == "rock" && playerSelection == "paper"){
        return "You Win! Paper beats Rock."}
    

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
        
      /* game mechanic */
}





/* Input working, but function not returning result */


