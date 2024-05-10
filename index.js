const arrChoices = [`rock`, `paper`, `scissors`];
let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * arrChoices.length); // gets a random index number
    const computerChoice = arrChoices[randomIndex]; // gets the corresponding item from the array
    return computerChoice; //returns as a variable
}

function getHumanChoice() {
    const humanInput = prompt(`Enter a choice: rock, paper, scissors`); // prompts human input, saves in humanChoice
    return humanInput.toLowerCase(); // changes human input to lowercase for consistency in comparisons below
}

function playGame() {

    function playRound(humanInput, computerChoice) {

        if (humanInput == `rock` && computerChoice == `rock`) {
            console.log(`Tie! You both chose rock.`);
            console.log(`you: ` + humanScore + ` ` + `computer: ` + computerScore);
        } else if (humanInput == `paper` && computerChoice == `paper`) {
            console.log(`Tie! You both chose paper.`);
            console.log(`you: ` + humanScore + ` ` + `computer: ` + computerScore);
        } else if (humanInput == `scissors` && computerChoice == `scissors`) {
            console.log(`Tie! You both chose scissors.`);
            console.log(`you: ` + humanScore + ` ` + `computer: ` + computerScore);
        } else if (humanInput == `rock` && computerChoice == `paper`) {
            console.log(`You lose. Paper beats rock.`);
            computerScore++;
            console.log(`you: ` + humanScore + ` ` + `computer: ` + computerScore);
        } else if (humanInput == `rock` && computerChoice == `scissors`) {
            console.log(`You win! Rock beats scissors.`);
            humanScore++; 
            console.log(`you: ` + humanScore + ` ` + `computer: ` + computerScore);
        } else if (humanInput == `paper` && computerChoice == `rock`) {
            console.log(`You win! Paper beats rock.`);
            humanScore++; 
            console.log(`you: ` + humanScore + ` ` + `computer: ` + computerScore);
        } else if (humanInput == `paper` && computerChoice == `scissors`) {
            console.log(`You lose. Scissors beats paper.`);
            computerScore++;
            console.log(`you: ` + humanScore + ` ` + `computer: ` + computerScore);
        } else if (humanInput == `scissors` && computerChoice == `rock`) {
            console.log(`You lose. Rock beats scissors.`);
            computerScore++;
            console.log(`you: ` + humanScore + ` ` + `computer: ` + computerScore);
        } else if (humanInput == `scissors` && computerChoice == `paper`) {
            console.log(`You win! Scissors beats paper.`);
            humanScore++; 
            console.log(`you: ` + humanScore + ` ` + `computer: ` + computerScore);
        } else {
            console.log(`You didn't enter a valid choice.`);
        }

    }

    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());

    if (humanScore > computerScore) {
        console.log(`You win!!`);
    } else if (computerScore > humanScore) {
        console.log(`Computer wins. Tough luck.`);
    } else {
        console.log(`It's a tie. Play again!`);
    }
}


playGame();