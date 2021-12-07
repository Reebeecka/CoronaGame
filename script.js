let playerOne = document.getElementById("p1");
let playerTwo = document.getElementById("p2");

let p1bottom = 0;
let p1left = 0;

let p2bottom = 20;
let p2left = 20;


document.addEventListener("keydown", (evt) => {
    console.log("key", evt.key);

    switch (evt.key) {
        //PlayerONE
        case "a":
            //PlayerOne utanför skärm till vänster utanför skärm
            if (p1left < 10) {
                break;
            }
            p1left -= 10;
            playerOne.style.left = p1left + "px";
            console.log("left");
            break;

        case "d":
            if (p1left > 390) {
                break;
            }
            p1left += 10;
            playerOne.style.left = p1left + "px";
            console.log("right");
            break;
    }
    switch (evt.key) {
        //PlaterTWO
        case "ArrowLeft":

            if (p2left < 10) {
                break;
            }
            p2left -= 10;
            playerTwo.style.left = p2left + "px";
            console.log("left");
            break;

        case "ArrowRight":
            if (p2left > 390) {
                break;
            }
            p2left += 10;
            playerTwo.style.left = p2left + "px";
            console.log("right");
            break;

        default:
            break;
    }
})
