
function getComputerChoice(){
    let n =Math.floor(Math.random()*10)%3;
    if (n ===0){
        return "rock";
    }
    else if (n ===1){
        return "paper";
    }
    else if (n ===2){
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
}