            //make a program to play rock paper scissors vs computer.
            //code needs to be in javascript. 

            //declaring a way to keep score.   
    let userscore = 0;
    let computerscore = 0;
    let tiegames = 0;

   
            // play 5 rounds, using a loop.


        for (let i = 0; i < 5; i++) {


                     //name the the variable for what the computer picks, name of varible computerPlay.
                     //ComputerPlay needs to pick Rock, Paper, Scissors randomly for its Choice and return it.
            function computerPlay(){
                let computerselections = ['Rock', 'Paper', 'Scissor'];
                let computerselection = computerselections[Math.floor(Math.random()*computerselections.length)];
                return computerselection;
            }  

                      //use prompt to get anwser for player choice.
            function useroption(){
                playerpick = prompt('Do you chose Rock, Paper or Scissors?');
                return playerpick.charAt(0).toUpperCase() + playerpick.slice(1).toLowerCase();
            }

                //make console.log to see value in console
            const computerSelection = computerPlay();
            const playerSelection = useroption();
        
                //logging the choices to make sure code is workiogn this far.
            console.log ('The player chose: ' + playerSelection);
            console.log ("The computer chose: " + computerSelection);
                //write a function to play a round of the game
                //the function needs two parameters, playerselection and computerselection.
                // need to return the winner of the round. will be used later.
            function game()
            {
                playRound(playerSelection, computerSelection);
            }
                function playRound(playerSelection, computerSelection){

     
                if(playerSelection === 'Scissor'){
                    if (computerSelection ==='Paper'){
                        userscore++;
                        return ('You Won!!! Scissors beat Paper');
                    }
                    else if (computerSelection === 'Rock'){
                        computerscore++;
                        return ('Computer Won! Rock beat Scissors');
                    }
                    else {
                        tiegames++;
                        return ('Tie');
                    }
                } 
                
               
                else if (playerSelection === 'Paper') {
                    if (computerSelection === 'Rock'){
                        userscore++;
                        return ('You Won!!! Paper beats Rock');
                    }
                    else if (computerSelection === 'Scissors'){
                        computerscore++;
                        return ('Computer Won! Scissors beat Paper');
                    }
                    else {
                        tiegames++;
                        return ('Tie Game');
                    }    
                }
                else if (playerSelection === 'Rock') {
                    if (computerSelection === 'Scissor'){
                        userscore++;
                        return ('You Won!!! Rock beats Scissor' );
                    }
                    else if (computerSelection === 'Paper'){
                        computerscore++;
                        return ('Computer Won! Paper beats Rock');
                    }
                    else {
                        tiegames++;
                        return ('Tie Game');
                    }
                }
                }
            console.log(playRound(playerSelection, computerSelection));
        }

            console.log (userscore, computerscore, tiegames);

            function gameresult(userscore, computerscore){
                if (userscore > computerscore) {
                    return ('Congratz, You beat a Computer!');
                }
                else if (userscore < computerscore) {
                    return (' You lost to a Computer');
                }
                else {
                    return ('Tie Score');
                }
               
            }

        alert(gameresult(userscore, computerscore));
    
 


       
    
                      


