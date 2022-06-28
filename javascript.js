//make a program to play rock paper scissors vs computer.
            //code needs to be in javascript. 

            //declaring a way to keep score.   
            let userscore = 0;
            let computerscore = 0;
            let tiegames = 0;
            let playerSelection;
            const playerPick = document.querySelectorAll(".userChoice");
           
                    // play 5 rounds, using a loop.
        
        
                //for (let i = 0; i < 5; i++) {
        
        
                             //name the the variable for what the computer picks, name of varible computerPlay.
                             //ComputerPlay needs to pick Rock, Paper, Scissors randomly for its Choice and return it.
 
        
                              //use prompt to get anwser for player choice.
//function game (){
     

                        playerPick.forEach(button => button.addEventListener("click", () => {
                            playerSelection = button.textContent;
                            computerPlay();
                            const computerSelection = computerPlay();
                             //make console.log to see value in console
                            console.log ('The player chose: ' + playerSelection);
                            console.log ("The computer chose: " + computerSelection);       
                            playRound(computerSelection,playerSelection);
                            console.log (gameresult());
                        }));

                    
                    function computerPlay(){
                        let computerselections = ['Rock', 'Paper', 'Scissors'];
                        let computerselection = computerselections[Math.floor(Math.random()*computerselections.length)];
                        return computerselection;
                    }  
                                       
                  
                
                        //logging the choices to make sure code is working this far.

                        //write a function to play a round of the game
                        //the function needs two parameters, playerselection and computerselection.
                        // need to return the winner of the round. will be used later.
                        function playRound(playerSelection, computerSelection){
        
                        if(playerSelection == 'Scissors'){
                            if (computerSelection =='Paper'){
                                userscore++;
                                return ('You Won!!! Scissors beat Paper');
                            }
                            else if (computerSelection == 'Rock'){
                                computerscore++;
                                return ('Computer Won! Rock beat Scissors');
                            }
                            else {
                                tiegames++;
                                return ('Tie');
                            }
                        } 
                        
                       
                        else if (playerSelection == 'Paper') {
                            if (computerSelection == 'Rock'){
                                userscore++;
                                return ('You Won!!! Paper beats Rock');
                            }
                            else if (computerSelection ==='Scissors'){
                                computerscore++;
                                return ('Computer Won! Scissors beat Paper');
                            }
                            else {
                                tiegames++;
                                return ('Tie Game');
                            }    
                        }
                        else if (playerSelection == 'Rock') {
                            if (computerSelection == 'Scissors'){
                                userscore++;
                                return ('You Won!!! Rock beats Scissor' );
                            }
                            else if (computerSelection == 'Paper'){
                                computerscore++;
                                return ('Computer Won! Paper beats Rock');
                            }
                            else {
                                tiegames++;
                                return ('Tie Game');
                            }
                        }
                        }
                    //console.log(playRound(playerSelection, computerSelection));
                    //}
        
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
               // }