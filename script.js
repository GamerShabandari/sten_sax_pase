const playBtn = document.getElementById("playBtn");
const gameContainer = document.getElementById("gameContainer");
const playerOne = document.getElementById("playerOne");
const playerTwo = document.getElementById("playerTwo");
const playerOnePoint = document.getElementById("playerOnePoint");
const playerTwoPoint = document.getElementById("playerTwoPoint");


let player1points = 0;

let player2points = 0;

gsap.from(".header", {y: -100, duration: 2, ease: "elastic"});
gsap.from(".buttonContainer", {x: -1000, duration: 2, ease: "elastic"});

// knapp för att köra random runda

playBtn.addEventListener("click", () => {
    playGame();
});


// slumpa två olika "kast och ränkna poäng
function playGame() {

    // 0 är sten
    // 1 är sax
    // 2 är påse

    let playerOnesHand = Math.floor(Math.random() * 3);
    let playerTwosHand = Math.floor(Math.random() * 3);

    if (playerOnesHand === 0 && playerTwosHand === 0) {
        renderGame("🪨", "🪨", player1points, player2points);

    }

    if (playerOnesHand === 1 && playerTwosHand === 1) {
        renderGame("✂️", "✂️", player1points, player2points);

    }

    if (playerOnesHand === 2 && playerTwosHand === 2) {
        renderGame("💰", "💰", player1points, player2points);

    }

    ///////////////////////////////////////////////////////

    if (playerOnesHand === 1 && playerTwosHand === 0) {

        player1points;

        player2points++;

        renderGame("✂️", "🪨", player1points, player2points);
    }

    if (playerOnesHand === 2 && playerTwosHand === 0) {
        player1points++;

        player2points;
        renderGame("💰", "🪨", player1points, player2points);

    }

    if (playerOnesHand === 0 && playerTwosHand === 1) {
        player1points++;

        player2points;
        renderGame("🪨", "✂️", player1points, player2points);

    }

    if (playerOnesHand === 2 && playerTwosHand === 1) {

        player1points;

        player2points++;
        renderGame("💰", "✂️", player1points, player2points);

    }

    if (playerOnesHand === 0 && playerTwosHand === 2) {
        player1points;

        player2points++;
        renderGame("🪨", "💰", player1points, player2points);

    }

    if (playerOnesHand === 1 && playerTwosHand === 2) {
        player1points++;

        player2points;
        renderGame("✂️", "💰", player1points, player2points);

    }

};




//rendera spel på sidan och ge poäng

function renderGame(player1hand, player2hand, player1point, player2point) {

    playerOne.innerHTML = "";
    let player1sHand = player1hand;
    playerOne.append(player1sHand);

    playerTwo.innerHTML = "";
    let player2sHand = player2hand;
    playerTwo.append(player2sHand);

    playerOnePoint.innerHTML = "";
    playerOnePoint.innerText = player1point;

    playerTwoPoint.innerHTML = "";
    playerTwoPoint.innerText = player2point;


};