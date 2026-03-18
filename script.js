function playGame(){
let humanScore=0;
let computerScore=0;
function getComputerChoice(){
    let n =Math.floor(Math.random()*3);
    if (n ===0){
        return "rock";
    }
    else if (n ===1){
        return "paper";
    }
    else {
        return "scissors";
    }
}
function getHumanChoice(){
    let choice=parseInt(prompt("Enter your choice: 0 for rock, 1 for paper, 2 for scissors"));
    if (choice ===0){
        return "rock";
    }
    else if (choice ===1){
        return "paper";
    }
    else if (choice ===2){
        return "scissors";
    }
    else{
        console.log("Invalid choice! Please enter 0, 1, or 2.");
        return getHumanChoice();
    }
}

function playRound(){
    let x = getHumanChoice();
    let y = getComputerChoice();
    console.log("Computer choice: " + y);
    if (x === y){
        console.log("It's a tie!");
    }
    else if ((x === "rock" && y === "scissors") || (x === "paper" && y === "rock") || (x === "scissors" && y === "paper")){
        
        
        humanScore++;
         console.log("You win!"+x+" beats "+y);
    }
    else{
        
        computerScore++;
        console.log("Computer wins!"+y+" beats "+x);
    }
    
}
function letsPLay(){
for(let i=0; i<5; i++){
    playRound();
}
console.log("Final Score: Human: " + humanScore + " Computer: " + computerScore);
if (humanScore > computerScore){
    console.log("Congratulations! You won the game!");
    
}
else console.log("Computer wins the game! Better luck next time!");
}
letsPLay();
}
playGame();