const cells = document.querySelectorAll(".cell");
const resultText = document.getElementById("result");
const resetBtn = document.getElementById("resetBtn");

let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];
let gameOver = false;

const winningPatterns = [[0,1,2], [3,4,5], [6,7,8],[0,3,6], [1,4,7], [2,5,8],[0,4,8], [2,4,6]];

cells.forEach(cell => {
    cell.addEventListener("click", () => handleClick(cell));
});
function handleClick(cell) {
    const id = cell.getAttribute("id");

    if (board[id] !== "" || gameOver) return;

    board[id] = currentPlayer;
    cell.textContent = currentPlayer;
    if (checkWinner()) {
        resultText.textContent = `Player ${currentPlayer} Wins!`;
        gameOver = true;
        return;
    }
    if (board.every(cell => cell !== "")) {
        resultText.textContent = "It's a Draw!";
        gameOver = true;
        return;
    }
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    resultText.textContent = `Player ${currentPlayer}'s Turn`;
}
function checkWinner() {
    return winningPatterns.some(pattern => {
        const [a, b, c] = pattern;
        return board[a] && board[a] === board[b] && board[a] === board[c];
    });
}
resetBtn.addEventListener("click", resetGame);
function resetGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    gameOver = false;
    resultText.textContent = "Player X's Turn";
    cells.forEach(cell => (cell.textContent = ""));
}
