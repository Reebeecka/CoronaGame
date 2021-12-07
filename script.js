let playerOne = document.getElementById("p1");
let playerOneImg = document.getElementById("P1img");
let playerTwo = document.getElementById("p2");

let p1bottom = 0;
let p1left = 0;

let p2bottom = 20;
let p2left = 20;

//PlayerOne images
p1imgArray = new Array();
p1imgArray[0] = new Image();
p1imgArray[0].src = "p1still.PNG";
p1imgArray[1] = new Image();
p1imgArray[1].src = 'p1run.PNG';

let p1img = document.getElementById("P1img");
p1img.src = p1imgArray[0].src;

//PlayerTwo Images
p2imgArray = new Array();
p2imgArray[0] = new Image();
p2imgArray[0].src = "p2still.PNG";
p2imgArray[1] = new Image();
p2imgArray[1].src = 'p2run.PNG';

let p2img = document.getElementById("P2img");
p2img.src = p2imgArray[0].src;


//Key movements
document.addEventListener("keyup", (evt) => {

    switch (evt.key) {

        //PlayerONE
        case "a":
            //PlayerOne utanför skärm till vänster utanför skärm
            if (p1left < 20) {
                break;
            }
            p1left -= 20;
            playerOne.style.left = p1left + "px";
            playerOne.classList="mirror";

            if (p1img.src == p1imgArray[0].src) {
                p1img.src = p1imgArray[1].src;
            }
            else {
                p1img.src = p1imgArray[0].src;
            }
            break;

        case "d":
            if (p1left > 380) {
                break;
            }
            p1left += 20;
            playerOne.style.left = p1left + "px";
            playerOne.classList="";
            
            if (p1img.src == p1imgArray[0].src) {
                p1img.src = p1imgArray[1].src;
            }
            else {
                p1img.src = p1imgArray[0].src;
            }
            break;

        case "w":
            if (p1bottom > 380) {
                break;
            }
            p1bottom += 20;
            playerOne.style.bottom = p1bottom + "px";
            console.log("right");
            if (p1img.src == p1imgArray[0].src) {
                p1img.src = p1imgArray[1].src;
            }
            else {
                p1img.src = p1imgArray[0].src;
            }
            break;

        case "s":
            if (p1bottom < 20) {
                break;
            }
            p1bottom -= 20;
            playerOne.style.bottom = p1bottom + "px";
            console.log("right");
            if (p1img.src == p1imgArray[0].src) {
                p1img.src = p1imgArray[1].src;
            }
            else {
                p1img.src = p1imgArray[0].src;
            }
            break;

        //PlaterTWO
        case "ArrowLeft":

            if (p2left < 20) {
                break;
            }
            p2left -= 20;
            playerTwo.style.left = p2left + "px";
            playerTwo.classList="mirror";

            if (p2img.src == p2imgArray[0].src) {
                p2img.src = p2imgArray[1].src;
            }
            else {
                p2img.src = p2imgArray[0].src;
            }
            break;

        case "ArrowRight":
            if (p2left > 380) {
                break;
            }
            p2left += 20;
            playerTwo.style.left = p2left + "px";
            playerTwo.classList="";
            
            if (p2img.src == p2imgArray[0].src) {
                p2img.src = p2imgArray[1].src;
            }
            else {
                p2img.src = p2imgArray[0].src;
            }
            break;

        case "ArrowUp":
            if (p2bottom > 380) {
                break;
            }
            p2bottom += 20;
            playerTwo.style.bottom = p2bottom + "px";
            console.log("right");
            if (p2img.src == p2imgArray[0].src) {
                p2img.src = p2imgArray[1].src;
            }
            else {
                p2img.src = p2imgArray[0].src;
            }
            break;
        case "ArrowDown":
            if (p2bottom < 20) {
                break;
            }
            p2bottom -= 20;
            playerTwo.style.bottom = p2bottom + "px";
            console.log("right");
            if (p2img.src == p2imgArray[0].src) {
                p2img.src = p2imgArray[1].src;
            }
            else {
                p2img.src = p2imgArray[0].src;
            }
            break;

        default:
            break;
    }
})
