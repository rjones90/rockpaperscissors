        // make a program to play rock paper scissors vs computer
        // code needs to be in javascript
        //name the the variable for what the computer picks, name of varible computerPlay.
        //ComputerPlay needs to pick Rock, Paper, Scissors randomly for its Choice and return it.
    function computerPlay(){
        var computerselections = ['Rock', 'Paper', 'Scissor'];
        var computerselection = computerselections[Math.floor(Math.random()*computerselections.length)];
        return computerselection;
    }
        //make console.log to see value in console
    let computerresult = computerPlay();
    console.log ("The computer chose: " + computerresult)
   
    //write a function to play a round of the game
    //the function needs two parameters, playerselection and computerselection.
    // need to return the winner of the round. will be used later.
    // playerselection needs to be cap sensitive.
    //then need to make game of five rounds. use a loop.
    //use prompt to get anser from playerfunction computerPlay() {
