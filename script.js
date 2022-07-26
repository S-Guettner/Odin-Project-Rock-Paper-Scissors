itemsArray = ["stone","paper","scissor"];


 /* Function returns random item from itemsArray */
function computerPlay(){
   return itemsArray[Math.floor(Math.random()*itemsArray.length)];
}





//! Changing Playerselection Variable value to "rock" , "paper" or "scissor" after click on button !//

let playerSelection;
function playerInput(){
    if (document.getElementById("rock").clicked == true)
    playerSelection = "rock";

    else if (document.getElementById("paper").clicked == true)
    playerSelection = "paper";

    else if (document.getElementById("scissor").clicked == true)
    playerSelection = "scissor";
}   


//! Changing Playerselection Variable value to "rock" , "paper" or "scissor" after click on button !//







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





console.log(playerInput());


