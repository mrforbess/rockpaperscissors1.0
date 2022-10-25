//var userChoice = prompt("Rock, Paper, Scissors?")
var computerChoice = Math.floor(Math.random()*4); // math floor will round it to the nearest whole number and  multiply by 3 allows code to generate random number between 0 and 3
if (computerChoice == 1){
    computerChoice ="Rock";
}else if(computerChoice == 2){
    computerChoice = "Paper";
}else{
    computerChoice = "Scissors";
}
console.log(computerChoice);

