            //make a program to play rock paper scissors vs computer
            //code needs to be in javascript         
            //then need to make game of five rounds. use a loop.
    let userscore = 0
    let computerscore = 0
    let tiegames = 0 
        for (let i = 0; i < 5; i++) {
                     //name the the variable for what the computer picks, name of varible computerPlay.
                     //ComputerPlay needs to pick Rock, Paper, Scissors randomly for its Choice and return it.
            function computerPlay(){
                var computerselections = ['Rock', 'Paper', 'Scissor'];
                var computerselection = computerselections[Math.floor(Math.random()*computerselections.length)];
                return computerselection;
                    }  
                      //use prompt to get anwser from playerfunction computerPlay()
             function useroption(){
                playerpick = prompt('Do you chose Rock, Paper or Scissors?');
                return playerpick.charAt(0).toUpperCase() + playerpick.slice(1).toLowerCase();
            }

                //make console.log to see value in console
            const computerSelection = computerPlay();
            const playerSelection = useroption();
 
            console.log ('The player chose: ' + playerSelection);
            console.log ("The computer chose: " + computerSelection);
                //write a function to play a round of the game
                //the function needs two parameters, playerselection and computerselection.
                // need to return the winner of the round. will be used later.
                
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
                function updateScore() {
                    if (roundWinner === 'tie') {
                      scoreInfo.textContent = "It's a tie!"
                    } else if (roundWinner === 'player') {
                      scoreInfo.textContent = 'You won!'
                    } else if (roundWinner === 'computer') {
                      scoreInfo.textContent = 'You lost!'
                    }
            }
            console.log(playRound(playerSelection, computerSelection));
           
        }
        console.log (userscore, computerscore, tiegames);
        

                      


