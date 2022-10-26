let playerScore=0;
let computerScore=0;
let tieScore=0;

function getComputerChoice(){
let rps = ["rock", "paper", "scissors"];
let random = rps[Math.floor(Math.random() * rps.length)];
return random;
}


function playRound(playerSelection, computerSelection ){
    if (playerSelection == computerSelection){
        tieScore++ // we are telling the code to keep count and increase tie score by 1, each time this happens
        console.log("It's a draw");
    }else if ((playerSelection.toLowerCase() === "rock") && (computerSelection === "scissors")) {
        playerScore++
        return (" You played rock. You win! Rock crushes scissors");
      } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "paper") {
        computerScore++
        return ("You played rock. You lose! Paper covers rock");
      } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {
        playerScore++
        return ("You played paper. You win! Paper covers rock");
      } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors") {
        computerScore++
        return ("You played paper. You lose! Scissors cuts paper");
      } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") {
        playerScore++
        return ("You played scissors. You win! Scissors cuts paper");
      } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock") {
        computerScore++
        return ("You played scissors. You lose!Rock crushes scissors");
      }else{
        error = "You must input rock,paper or scissors!"
        return (error)
      }
}
//const playerSelection = "rock";   //this piece of code was the first run inside the console before we made the user input their choice at the end

//console.log(playRound(playerSelection, computerSelection));



function game() {
    for (let i = 1; i < 6; i++) {
    const playerSelection = prompt(" Game " + i +". Choose your weapon").toLowerCase() // because we want a selection each time
    const computerSelection = getComputerChoice(); // do this so you can get a new selection each time
    const computerPlay = ("Computer played " + computerSelection+ ".") // logs the computer's selection
    alert(computerPlay + " " + playRound(playerSelection, computerSelection))
    }
    

    if (playerScore > computerScore){
    alert("WINNER!! Play again?");
    } else if(computerScore > playerScore){;
    alert("You failed this time! Try again?")
    } else{
    alert("You tied with the computer!")
    }
}

console.log(game())



/*let computerSelection = getComputerChoice();
let playerSelection = prompt("Choose your weapon");
console.log(playRound(playerSelection, computerSelection)); */