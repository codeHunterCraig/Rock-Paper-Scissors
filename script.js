// Algorithm describing how the game will work

// (1) getComputerChoice function should have a string array that contains three strings: 'rock', 'paper', 'scissors'
    // the function should randomly select a string using it's respective index in the array
    // the function should then return the randomly selected string.

// (2) playRound function should take two parameters: playerSelection and computerSelection
    // the parameter playerSelection is passed to a variable that handles user input, making it case-insensitive
    // the parameter computerSelection handles the computer's randomized selection generated by the computerChoice() function
    // a series of conditional statements define how the game round is run.
    // the function returns 3 values: the round result, user-score and computer-score.

// (3) play function encapsulates playRound function
    // makes game run for 5 rounds
    // keeps the score / sums up the scores at the end of the game
    // reports the winner and loser at the end of the game
    // console.logs the results of each round and winner at the end.

    function getComputerChoice() {
        let computerChoice;
        let guessOptions = ['rock', 'paper', 'scissors'];
        let indexGenerator = Math.floor(Math.random() * 3);
        return computerChoice = guessOptions[indexGenerator];    
    }

    function playRound(playerSelection, computerSelection) {
        let userInput;
        let computerInput = computerSelection;
        let userScore = 0;
        let computerScore = 0;
        (playerSelection.toUpperCase())
        ? userInput = playerSelection.toLowerCase()
        : userInput = playerSelection;
        if (userInput == computerInput) {
            return {
                roundResult: "It's a TIE! Play another round",
                userScore: userScore,
                computerScore: computerScore
            }
            
        }
        else if (userInput == "rock" && computerInput == "paper") {
            return {
                roundResult: "You lose! Paper beats Rock",
                userScore: userScore,
                computerScore: ++computerScore
            }
            
        }
        else if (userInput == "paper" && computerInput == "scissors") {
            return {
                roundResult: "You lose! Scissors beats Paper",
                userScore: userScore,
                computerScore: ++computerScore

            }
           
        }
        else if (userInput == "scissors" && computerInput == "rock") {
            return {
                roundResult: "You lose! Rock beats Scissors",
                userScore: userScore,
                computerScore: ++computerScore
            }
        }
        else if (userInput == "paper" && computerInput =="rock") {
            return {
                roundResult: "You win! Paper beats Rock",
                userScore: ++userScore,
                computerScore: computerScore
            }
        }
        else if (userInput == "scissors" && computerInput == "paper") {
            return {
                roundResult: "You win! Scissors beats Paper",
                userScore: ++userScore,
                computerScore: computerScore
            }
        }
        else if (userInput == "rock" && computerInput == "scissors") {
            return {
                roundResult: "You win! Rock beats Scissors",
                userScore: ++userScore,
                computerScore: computerScore
            }
           
        }
       
          
    }
    

   function game() {
    let tries = 1;
    let userMove;
    let computerMove = getComputerChoice();
    let userScore = 0;
    let computerScore = 0;
    

    while (tries < 6) {
        
        console.log(`Round: ${tries}`);
        userMove = prompt("Enter your move: ");
        if (userMove != "rock" && userMove != "paper" && userMove != "scissors") {
            alert("You don't know how to play rock paper scissors do you? lol.")    
        }
         const roundResults = playRound(userMove, computerMove);
         let roundOutcome = roundResults.roundResult;
         if(roundOutcome === "It's a TIE! Play another round") {
            tries --
         }
         userScore = roundResults.userScore + userScore;
         computerScore = roundResults.computerScore + computerScore;
         console.log(roundOutcome);
         console.log(`User Score: ${userScore}`);
         console.log(`Computer Score: ${computerScore}`);
        tries ++;
        
    }
    if(userScore > computerScore) {
        console.clear();
        console.log("Congratulations! You Won");
        console.log(`Scores: 
        User: ${userScore} | Computer: ${computerScore}`);
    }
    else {
        console.clear();
        console.log("Better luck next time! You Lost");
        console.log(`Scores: 
        Computer: ${computerScore} | User: ${userScore}`);
    }
   }
   game()
   
