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
        return "tie";
    }
    else {
        if (playerSelection === "rock") {
            if (computerSelection === "paper") {
                console.log("You lose! " + playerSelection + " loses to " + computerSelection);
                return "loss";
            }
            if (computerSelection === "scissors") {
                console.log("You win! " + playerSelection + " beats " + computerSelection);
                return "win";
            }
        }

        else if (playerSelection === "paper") {
            if (computerSelection === "rock") {
                console.log("You win! " + playerSelection + " beats " + computerSelection);
                return "win";
            }
            if (computerSelection === "scissors") {
                console.log("You lose! " + playerSelection + " loses to " + computerSelection);
                return "loss";
            }
        }
        
        else if (playerSelection === "scissors") {
            if (computerSelection === "rock") {
                console.log("You lose! " + playerSelection + " loses to " + computerSelection);
                return "loss";
            }
            if (computerSelection === "paper") {
                console.log("You win! " + playerSelection + " loses to " + computerSelection);
                return "win";
            }
        }

    }
}

function game() {
    let i = 1;
    let hTally = 0;
    let cTally = 0;
    while (i < 6) {

        let hPlay = humanPlay();
        let cPlay = computerPlay();
        let result = play(hPlay, cPlay);
        console.log(result);
        if (result === "win") {
            hTally++;
        }
        else if (result === "loss") {
            cTally++;
        }
        i++;
    }

    if (hTally > cTally) {
        console.log("You win! Final score is " + hTally + "-" + cTally);
    }

    if (cTally > hTally) {
        console.log("You lose! Final score is " + hTally + "-" + cTally);
    }

    if (cTally === hTally) {
        console.log("Tie! Final score is " + hTally + "-" + cTally);
    }
}