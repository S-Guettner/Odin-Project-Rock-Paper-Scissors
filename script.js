let choiceArray ["rock,paper,scissor"];

function computerPlay (choiceArray){
    return choiceArray[Math.floor(Math.random()*items.length)];
     

}
console.log(computerPlay(choiceArray));
