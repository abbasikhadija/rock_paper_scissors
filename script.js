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

function getHumanChoice(event){
    let choice = event.target.id;
    if (choice ==="rock"){
        return "rock";
    }
    else if (choice ==="paper"){
        return "paper";
    }
    else if(choice ==="scissors"){
        return "scissors";
    }
    
}

function playRound(event){
    dialog.innerText="choose your move from the buttons above";
    let x = getHumanChoice(event);
        dialog.innerText="You chose: "+x;
    let y = getComputerChoice();
    dialog.innerText="Computer choice: " + y;
    if (x === y){
        result.innerText="It's a tie!";
    }
    else if ((x === "rock" && y === "scissors") || (x === "paper" && y === "rock") || (x === "scissors" && y === "paper")){
        
        
        humanScore++;
         result.innerText="You win! "+x+" beats "+y;
    }
    else{
        
        computerScore++;
        result.innerText="Computer wins! "+y+" beats "+x;
    }
    if (humanScore === 5 || computerScore === 5){
    result.innerText = humanScore > computerScore
        ? "Congratulations! You won the game!"
        : "Computer wins the game!";
    
    div.removeEventListener("click", playRound);
}
    
}




let div=document.getElementById("choices");

div.addEventListener("click", playRound);
let result=document.getElementById("result");


let dialog=document.createElement("div");
document.body.appendChild(dialog);


}

playGame();