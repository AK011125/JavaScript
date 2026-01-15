let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");


let turnO = true ;//player O turns

// let arr2D = [["Apple", "Mango", "Banana"],["Shirt", "Pents", "Shoes"],["Nike", "Addidas", "Puma"]];
// console.log(arr2D);

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        console.log("box was clicked");
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

const checkWinner = () => {
    for(let pattern of winPatterns){
        let p1value = boxes[pattern[0]].innerText;
        let p2value = boxes[pattern[1]].innerText;
        let p3value = boxes[pattern[2]].innerText;

        if(p1value != "" && p2value != "" && p3value != ""){
            if (p1value === p2value && p2value === p3value){
                console.log("winner",p1value);
            }
        }
    }
};