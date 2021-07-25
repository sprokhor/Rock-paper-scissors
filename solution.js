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

}