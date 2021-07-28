let hTally = 0;
let cTally = 0;

function startGame() {
        let buttons = document.getElementById("buttons");
        buttons.innerHTML = "";
        let b1 = document.createElement("button");
        let b2 = document.createElement("button");
        let b3 = document.createElement("button");
        b1.classList += "playerButton";
        b2.classList += "playerButton";
        b3.classList += "playerButton";
        b1.innerText = "ROCK";
        b2.innerText = "PAPER";
        b3.innerText = "SCISSORS";
        b1.addEventListener('click', function() {
            game("rock");
        });
        b2.addEventListener('click', function() {
            game("paper");
        });        
        b3.addEventListener('click', function() {
            game("scissors");
        });
        buttons.appendChild(b1);
        buttons.appendChild(b2);
        buttons.appendChild(b3);
}

function computerPlay() {
    let index = Math.floor(Math.random() * 3) + 1;
    if (index === 1) { return "rock";}
    if (index === 2) {return "paper";}
    if (index === 3) {return "scissors";}
}

function capitalizeH(hPlay) {
    return hPlay.charAt(0).toUpperCase() + hPlay.slice(1);
}

function capitalizeC(cPlay) {
    return cPlay.charAt(0).toUpperCase() + cPlay.slice(1);
}

function play(playerSelection, computerSelection) {
    let d = document.getElementById("log");
    d.innerText = "";
    playerSelection = capitalizeH(playerSelection);
    computerSelection = capitalizeC(computerSelection);
    if (playerSelection === computerSelection) {
        let h = document.createElement("h3");
        h.innerText = ("It's a tie! " + playerSelection + " is equal to " + computerSelection);
        d.appendChild(h);
        return "tie";
    }
    else {
        if (playerSelection === "Rock") {
            if (computerSelection === "Paper") {
                let h = document.createElement("h3");
                h.innerText = ("You lose! " + playerSelection + " loses to " + computerSelection);
                d.appendChild(h);
                return "loss";
            }
            if (computerSelection === "Scissors") {
                let h = document.createElement("h3");
                h.innerText = ("You win! " + playerSelection + " beats " + computerSelection);
                d.appendChild(h);
                return "win";
            }
        }

        else if (playerSelection === "Paper") {
            if (computerSelection === "Rock") {
                let h = document.createElement("h3");
                h.innerText = ("You win! " + playerSelection + " beats " + computerSelection);
                d.appendChild(h);
                return "win";
            }
            if (computerSelection === "Scissors") {
                let h = document.createElement("h3");
                h.innerText = ("You lose! " + playerSelection + " loses to " + computerSelection);
                d.appendChild(h);
                return "loss";
            }
        }
        
        else if (playerSelection === "Scissors") {
            if (computerSelection === "Rock") {
                let h = document.createElement("h3");
                h.innerText = ("You lose! " + playerSelection + " loses to " + computerSelection);
                d.appendChild(h);
                return "loss";
            }
            if (computerSelection === "Paper") {
                let h = document.createElement("h3");
                h.innerText = ("You win! " + playerSelection + " beats " + computerSelection);
                d.appendChild(h);
                return "win";
            }
        }

    }
}

function game(hPlay) {
    let s = document.getElementById("score");
    s.innerText = "";

    let cPlay = computerPlay();
    let result = play(hPlay, cPlay);
        if (result === "win") {
            hTally++;
            s.innerText = (hTally + "-" + cTally);
        }
        else if (result === "loss") {
            cTally++;
            s.innerText = (hTally + "-" + cTally);
        }
        else if (result === "tie") {
            s.innerText = (hTally + "-" + cTally);
        }

    if (cTally > 4 || hTally > 4) {

        if (cTally > hTally) {
            console.log("Game ended");
            s.innerText = ("You lose! Final Score is " + hTally + "-" + cTally);
        }
        else if (cTally < hTally) {
            console.log("Game ended");
            s.innerText = ("You win! Final Score is " + hTally + "-" + cTally);
        }

        cTally = 0;
        hTally = 0;
    }

    else {
        startGame();
    }

}

