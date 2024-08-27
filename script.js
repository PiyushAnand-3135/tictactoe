let boxes = document.querySelectorAll(".stage-item");
let resetBtn = document.querySelector(".reset");
let winner;
let turn0 = false;

let winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const checkWinner = () => {
    for (pattern of winPatterns) {
        pos1Val = boxes[pattern[0]].innerText;
        pos2Val = boxes[pattern[1]].innerText;
        pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val == pos2Val && pos2Val == pos3Val) {
                console.log("winner", pos1Val);
                winner = pos1Val;
                disableBtns();
                // displays a winner message 
                showWinner();

            }
        }
    }
}

const showWinner = () => {
    let winMsg = document.createElement("p");
    winMsg.innerText = "The Winner is " + winner;
    let msgDiv = document.querySelector(".win-msg");
    msgDiv.append(winMsg);
}

const disableBtns = () =>{
    boxes.forEach( (box) => {
        box.disabled = true;
    })
}

resetBtn.addEventListener('click', () => {
    console.log("Game was reset");
    gameActive = true;
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
        let winMsg = document.querySelector(".win-msg");
        winMsg.innerHTML = "";
    })
    turn0 = false;
})

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        console.log("Box was clicked");
        if (turn0) {
            box.innerText = "O";
            turn0 = false;
        }
        else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    })
})





