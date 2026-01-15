let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newGamebtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true ;//player O turns

// let arr2D = [["Apple", "Mango", "Banana"],["Shirt", "Pents", "Shoes"],["Nike", "Addidas", "Puma"]];
// console.log(arr2D);

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const resetGame = () =>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true; //so that we cant change the value

        checkWinner();
    });
});

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) =>{
    msg.innerText = `Congratulations , Winner is ${winner} 
    Scroll to see Game `;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () => {
    for(let pattern of winPatterns){
        let p1value = boxes[pattern[0]].innerText;
        let p2value = boxes[pattern[1]].innerText;
        let p3value = boxes[pattern[2]].innerText;

        if(p1value != "" && p2value != "" && p3value != ""){
            if (p1value === p2value && p2value === p3value){
                showWinner(p1value);
            }
        }
    }
};

newGamebtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);