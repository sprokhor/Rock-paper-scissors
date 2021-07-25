function computerPlay() {
    let index = Math.floor(Math.random() * 3) + 1;
    if (index === 1) { return "rock";}
    if (index === 2) {return "paper";}
    if (index === 3) {return "scissors";}
}

function humanPlay() {
    let hPlay = window.prompt("Please enter your play: ");
    hPlay = hPlay.toLowerCase();
    if (hPlay === "rock" || hPlay === "paper" || hPlay === "scissors") {
        return hPlay;
    }
    else {
        console.log("Please enter the right play");
        humanPlay();
    }
}

function play(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("It's a tie! " + playerSelection + " is equal to " + computerSelection);
    }
    else {
        if (playerSelection === "rock") {
            if (computerSelection === "paper") {
                console.log("You lose! " + playerSelection + " loses to " + computerSelection);
            }
            if (computerSelection === "scissors") {
                console.log("You win! " + playerSelection + " beats " + computerSelection);
            }
        }

        else if (playerSelection === "paper") {
            if (computerSelection === "rock") {
                console.log("You win! " + playerSelection + " beats " + computerSelection);
            }
            if (computerSelection === "scissors") {
                console.log("You lose! " + playerSelection + " loses to " + computerSelection);
            }
        }
        
        else if (playerSelection === "scissors") {
            if (computerSelection === "rock") {
                console.log("You lose! " + playerSelection + " loses to " + computerSelection);
            }
            if (computerSelection === "paper") {
                console.log("You win! " + playerSelection + " loses to " + computerSelection);
            }
        }

    }
    }