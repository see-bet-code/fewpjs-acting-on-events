// Your code here
let dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";
dodger.style.bottom = "0px";

function moveDodgerLeft() {
    // let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(dodger.style.left, 10);

    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
}

function moveDodgerRight() {
    // let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(dodger.style.left, 10);

    if (left < 400) {
        dodger.style.left = `${left + 1}px`;
    }
}

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft()
    } else if (e.key === "ArrowRight") {
        console.log("hello again")
        moveDodgerRight()
    }
});

