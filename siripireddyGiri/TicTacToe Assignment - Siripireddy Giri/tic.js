let boxes = document.querySelectorAll(".box");
let reset = document.getElementById("reset");

let turn = "X";
let gameOver = false;

/*winning combination*/
let win = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.innerText === "" && !gameOver) {
            box.innerText = turn;
            if (checkwin()) {
                alert(turn + " is the winner!");
                gameOver = true;
                return;
            }
            if ([...boxes].every(b => b.innerText !== "")) {
                alert("It's a draw!");
                gameOver = true;
                return;
            }
            if (turn === "X") {
                turn = "O";
                } 
            else {
                turn = "X";
                }
        }
    });
});

function checkwin() {
    return win.some(pattern =>
        pattern.every(index =>
            boxes[index].innerText === turn
        )
    );
}

reset.addEventListener("click", () => {
    boxes.forEach(box => box.innerText = "");
    turn = "X";
    gameOver = false;
});
