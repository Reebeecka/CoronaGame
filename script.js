
let playerOne = document.getElementById("p1");
let playerOneImg = document.getElementById("P1img");
let playerTwo = document.getElementById("p2");

let p1Pointstext = document.getElementById("p1Points");
let p2Pointstext = document.getElementById("p2Points");
let timerText = document.getElementById("timer");
let startBtn = document.createElement("button");
let body = document.getElementById("body");
body.append(startBtn);
startBtn.innerText = "START";

let p1bottom = 250;
let p1left = 0;

let p2bottom = 250;
let p2left = 1100;

let p1left100 = p1left + 70;
let p1bottom100 = p1bottom + 80;

let p2left100 = p2left + 70;
let p2bottom100 = p2bottom + 80;

let p1points = 0;
let p2points = 0;

p1Pointstext.innerHTML = p1points;
p2Pointstext.innerHTML = p2points;

let corona = false;

let timerIntervall;
let time = 40;

let coronaTimer;

let endGameTimer;

let host = new Audio();
host.src = "img/korthost.mp3";

let scoreSound = new Audio();
scoreSound.src = "img/score.mp3";

//PlayerOne images
let p1imgArray = new Array();
p1imgArray[0] = new Image();
p1imgArray[0].src = "img/p1still.png";
p1imgArray[1] = new Image();
p1imgArray[1].src = 'img/p1run.png';
p1imgArray[2] = new Image();
p1imgArray[2].src = 'img/p1stillcorona.png';
p1imgArray[3] = new Image();
p1imgArray[3].src = 'img/p1runcorona.png';

let p1img = document.getElementById("P1img");
p1img.src = p1imgArray[0].src;

//PlayerTwo Images
let p2imgArray = new Array();
p2imgArray[0] = new Image();
p2imgArray[0].src = "img/p2still.png";
p2imgArray[1] = new Image();
p2imgArray[1].src = 'img/p2run.png';
p2imgArray[2] = new Image();
p2imgArray[2].src = 'img/p2stillcorona.png';
p2imgArray[3] = new Image();
p2imgArray[3].src = 'img/p2runcorona.png';

let p2img = document.getElementById("P2img");
p2img.src = p2imgArray[0].src;
startBtn.addEventListener("click", startGame);
 


function startGame() {
timerIntervall = setInterval(timer, 1000);
coronaTimer = setInterval(coronaSwitch, 10000);
endGameTimer = setInterval(endgame, 40900)

var sound = document.getElementById("myAudio");

p1Pointstext.innerHTML = p1points;
p2Pointstext.innerHTML = p2points;

sound.play();
sound.volume = 0.2;
startBtn.remove(startBtn);
p1ImgFunction()
p2ImgFunction()

    document.addEventListener("keydown", function (evt) {

        if (evt.key == "1") {

            sound = document.getElementById("myAudio");

            sound.play();

        } else if (evt.key == "2") {

            sound = document.getElementById("myAudio");

            sound.pause();

        }

    });

    document.addEventListener("keyup", (evt) => {
        switch (evt.key) {

            //PlayerONE
            case "a":
                //PlayerOne utanför skärm till vänster utanför skärm
                if (p1left < 40) {
                    break;
                }
                p1left -= 40;
                p1left100 = p1left + 70;

                playerOne.style.left = p1left + "px";
                playerOne.classList = "mirror";

                //coronaFunction();
                p1ImgFunction();

                collision()
                break;

            case "d":
                if (p1left > 1060) {
                    break;
                }
                p1left += 40;
                p1left100 = p1left + 70;

                playerOne.style.left = p1left + "px";
                playerOne.classList = "";

                //coronafunction();
                p1ImgFunction();
                collision()
                break;

            case "w":
                if (p1bottom > 460) {
                    break;
                }
                p1bottom += 40;
                p1bottom100 = p1bottom + 80;

                playerOne.style.bottom = p1bottom + "px";

                //coronafunction();
                p1ImgFunction();
                collision()
                break;

            case "s":
                if (p1bottom < 40) {
                    break;
                }
                p1bottom -= 40;
                p1bottom100 = p1bottom + 80;

                playerOne.style.bottom = p1bottom + "px";

                //coronafunction();
                p1ImgFunction();
                collision()
                break;

            //PlaterTWO
            case "ArrowLeft":

                if (p2left < 40) {
                    break;
                }
                p2left -= 40;
                p2left100 = p2left + 70;

                playerTwo.style.left = p2left + "px";
                playerTwo.classList = "";

                p2ImgFunction();
                collision()
                break;

            case "ArrowRight":
                if (p2left > 1060) {
                    break;
                }
                p2left += 40;
                p2left100 = p2left + 70;

                playerTwo.style.left = p2left + "px";
                playerTwo.classList = "mirror";

                p2ImgFunction();
                collision()
                break;

            case "ArrowUp":
                if (p2bottom > 460) {
                    break;
                }
                p2bottom += 40;
                p2bottom100 = p2bottom + 80;

                playerTwo.style.bottom = p2bottom + "px";

                p2ImgFunction();
                collision()
                break;
            case "ArrowDown":
                if (p2bottom < 40) {
                    break;
                }
                p2bottom -= 40;
                p2bottom100 = p2bottom + 80;

                playerTwo.style.bottom = p2bottom + "px";

                p2ImgFunction();
                collision()
                break;

            default:
                break;
        }
    })

    function collision() {

        if (
            p1left > p2left100 ||

            p1left100 < p2left ||

            p1bottom > p2bottom100 ||

            p1bottom100 < p2bottom
        ) {
            //no collision
        } else {

            if (corona) {
                p2points++;
                p2Pointstext.innerHTML = p2points;  
            }
            else {
                p1points++;
                p1Pointstext.innerHTML = p1points;
            }

            p1bottom = 250;
            p1left = 0;
            p2bottom = 250;
            p2left = 1100;
            playerOne.style.left = p1left + "px";
            playerOne.style.bottom = p1bottom + "px";
            playerTwo.style.left = p2left + "px";
            playerTwo.style.bottom = p2bottom + "px";
            scoreSound.play();
            scoreSound.volume = 0.2;
        }
    }

    function p1ImgFunction() {
        if (corona) {
            if (p1img.src == p1imgArray[0].src) {
                p1img.src = p1imgArray[1].src;
            }
            else {
                p1img.src = p1imgArray[0].src;
            }
        }
        else {
            if (p1img.src == p1imgArray[2].src) {
                p1img.src = p1imgArray[3].src;
            }
            else {
                p1img.src = p1imgArray[2].src;
            }
        }
    }

    function p2ImgFunction() {
        if (!corona) {

            if (p2img.src == p2imgArray[0].src) {
                p2img.src = p2imgArray[1].src;
            }
            else {
                p2img.src = p2imgArray[0].src;
            }
        }
        else {
            if (p2img.src == p2imgArray[2].src) {
                p2img.src = p2imgArray[3].src;
            }
            else {
                p2img.src = p2imgArray[2].src;
            }
        }
    }

    function endgame() {

        let userplay;
        if (p1points > p2points) {
            userplay = confirm("Player One won, vill du spela igen?")
        }
        else if (p2points > p1points) {
            userplay = confirm("Player Two won, vill du spela igen?")
        }
        else {
            userplay = confirm("ingen vann ni suger")
        }

        if (userplay == true) {

            location.reload();

        }

        else {

            body.append(startBtn);
            clearInterval(timerIntervall);
            clearInterval(coronaTimer);
            clearInterval(endGameTimer);
            time = 40;

            p1Pointstext.innerHTML = "Skit ner";
            p2Pointstext.innerHTML = "dig då!";

        }



    }

    function timer() {
        time--;
        timerText.innerHTML = time


    }

    function coronaSwitch() {
        corona = !corona
        p1bottom = 250;
        p1left = 0;
        p2bottom = 250;
        p2left = 1100;
        playerOne.style.left = p1left + "px";
        playerOne.style.bottom = p1bottom + "px";
        playerTwo.style.left = p2left + "px";
        playerTwo.style.bottom = p2bottom + "px";
        host.play();
        p1ImgFunction()
        p2ImgFunction()

    }
}
