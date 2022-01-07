//const playBtn = document.getElementById("playBtn");
const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorBtn = document.getElementById("scissorBtn");
const gameContainer = document.getElementById("gameContainer");
const playerOne = document.getElementById("playerOne");
const playerTwo = document.getElementById("playerTwo");
const playerOnePoint = document.getElementById("playerOnePoint");
const playerTwoPoint = document.getElementById("playerTwoPoint");

let player1points = 0;

let player2points = 0;

gsap.from(".header", { y: -1000, duration: 2, ease: "elastic" });
gsap.from(".playersContainer", { x: -1000, duration: 2, ease: "elastic" });
gsap.from("#pointContainer", { x: +1000, duration: 2, ease: "elastic" });
gsap.from("#gameContainer", { y: -1000, duration: 2, ease: "bounce" });

gsap.from("#rockBtn", { y: -1000, duration: 2.1, delay: 0.8, ease: "bounce" });
gsap.from("#paperBtn", { y: -1000, duration: 2.1, delay: 0.9, ease: "bounce" });
gsap.from("#scissorBtn", { y: -1000, duration: 2.1, delay: 1, ease: "bounce" });


gsap.from("#playerOne", { y: -1000, duration: 2.2, delay: 1.1, ease: "bounce" });
gsap.from("#playerTwo", { y: -1000, duration: 2.2, delay: 1.2, ease: "bounce" });

gsap.from(".playerOneH1", { x: -1000, duration: 2.3, delay: 1.2, ease: "bounce" });
gsap.from(".playerTwoH1", { x: +1000, duration: 2.3, delay: 1.2, ease: "bounce" });




// knappar för att välja ditt drag

rockBtn.addEventListener("click", () => {
    playGame(0);
});

scissorBtn.addEventListener("click", () => {
    playGame(1);
});

paperBtn.addEventListener("click", () => {
    playGame(2);
});


// slumpa datorns "kast och ränkna poäng
function playGame(yourMove) {

    // 0 är sten
    // 1 är sax
    // 2 är påse

    playerOne.style.backgroundColor = "whitesmoke";

    playerTwo.style.backgroundColor = "whitesmoke";

    playerOne.style.fontSize = "4rem";

    playerTwo.style.fontSize = "4rem";


    let playerOnesHand = yourMove;
    let playerTwosHand = Math.floor(Math.random() * 3);

    if (playerOnesHand === 0 && playerTwosHand === 0) {
        renderGame("👊", "👊", player1points, player2points);

    }

    if (playerOnesHand === 1 && playerTwosHand === 1) {
        renderGame("✌️", "✌️", player1points, player2points);

    }

    if (playerOnesHand === 2 && playerTwosHand === 2) {
        renderGame("🖐", "🖐", player1points, player2points);

    }

    ///////////////////////////////////////////////////////

    if (playerOnesHand === 1 && playerTwosHand === 0) {

        player1points;

        player2points++;

        //playerTwo.style.backgroundColor = "lightgreen";
        //playerTwo.style.fontSize = "7rem";


        renderGame("✌️", "👊", player1points, player2points);


    }

    if (playerOnesHand === 2 && playerTwosHand === 0) {
        player1points++;

        player2points;

        //playerOne.style.backgroundColor = "lightgreen";
        //playerOne.style.fontSize = "7rem";

        renderGame("🖐", "👊", player1points, player2points);

    }

    if (playerOnesHand === 0 && playerTwosHand === 1) {
        player1points++;

        player2points;

        //playerOne.style.backgroundColor = "lightgreen";
        //playerOne.style.fontSize = "7rem";

        renderGame("👊", "✌️", player1points, player2points);



    }

    if (playerOnesHand === 2 && playerTwosHand === 1) {

        player1points;

        player2points++;

        //playerTwo.style.backgroundColor = "lightgreen";
        //playerTwo.style.fontSize = "7rem";


        renderGame("🖐", "✌️", player1points, player2points);



    }

    if (playerOnesHand === 0 && playerTwosHand === 2) {
        player1points;

        player2points++;

        //playerTwo.style.backgroundColor = "lightgreen";
        //playerTwo.style.fontSize = "7rem";


        renderGame("👊", "🖐", player1points, player2points);



    }

    if (playerOnesHand === 1 && playerTwosHand === 2) {
        player1points++;

        //playerOne.style.backgroundColor = "lightgreen";
        //playerOne.style.fontSize = "7rem";

        player2points;
        renderGame("✌️", "🖐", player1points, player2points);

    }

};




//rendera spel på sidan och ge poäng

function renderGame(player1hand, player2hand, player1point, player2point) {

    playerOne.innerHTML = "";
    let player1sHand = player1hand;
    playerOne.append(player1sHand);
    gsap.from("#playerOne", { duration: 0.4, rotation: 1440, ease: "power1" });

    playerTwo.innerHTML = "";
    let player2sHand = player2hand;
    playerTwo.append(player2sHand);
    gsap.from("#playerTwo", { duration: 1.7, rotation: 8640, ease: "power1", onComplete: () => (renderPoints(player1point, player2point)) });

};

function renderPoints(player1point, player2point) {

    playerOnePoint.innerHTML = "";
    playerOnePoint.innerText = player1point;
    playerOnePoint.style.opacity = 1
    gsap.from("#playerOnePoint", { duration: 0.3, rotation: 360, ease: "bounce" });

    playerTwoPoint.innerHTML = "";
    playerTwoPoint.innerText = player2point;
    playerTwoPoint.style.opacity = 1
    gsap.from("#playerTwoPoint", { duration: 0.3, rotation: 360, ease: "bounce" });

};