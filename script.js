let boxes = document.querySelectorAll(".box");
let reset_btn = document.querySelector(".reset-btn");
let msg = document.querySelector("#msg");
let newgameBtn = document.querySelector(".newgame-btn");
let msgContainer = document.querySelector(".msg-container");
let gamedraw = document.querySelector(".gamedrawn");

reset_btn.classList.remove("hide");

let turnO = true;
let clickCount = 0;


const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        if(turnO) {
            box.innerText = "O";
            turnO = false;
        }else{
            box.innerText = "X";
            box.style.color = "green";
            turnO = true;
        }
        box.disabled = true;
        clickCount++; 
        const winnerFound = checkWinner();
        if(clickCount === 9 && !winnerFound){
            gamedraw.classList.remove("hide");
        }
    });
});

const disableBoxes = () =>{
    boxes.forEach((box) => {
        box.disabled = true;
    });
};

const enableBoxes = () =>{
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
    });
    reset_btn.classList.remove("hide");
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    reset_btn.classList.add("hide");
    disableBoxes();
}

const checkWinner = () =>{
    reset_btn.classList.remove("hidereset-btn")
    for(let pattern of winPattern){
        if(boxes[pattern[0]].innerText != "" && boxes[pattern[1]].innerText != "" && boxes[pattern[2]].innerText != ""){
            if(boxes[pattern[0]].innerText === boxes[pattern[1]].innerText && boxes[pattern[1]].innerText === boxes[pattern[2]].innerText){
                   showWinner(boxes[pattern[0]].innerText);   
                   return true;
            }                        
        }else{
            return false;
        }        
    }
}

newgameBtn.addEventListener("click", ()=>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
});

reset_btn.addEventListener("click", ()=>{
    turnO = true;
    enableBoxes();
    gamedraw.classList.add("hide");
});

