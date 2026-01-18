let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () =>{
    const options = ["rock", "paper","scissors"]
    //math.random() is use to generate a random no from maths class which is always between 0 to 1
    //if we musltiply that number with 2 it come to 0 to 2 range if with 3 then 0 to 3 range likewise
    //here we use a random no between 0 to 3 by math.random()*3
    // this random number is use as the index of the array options 
    // now if we want only whole number solutuion then use the function math.floor(math.random()) ->> greatest integer funcion
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () =>{
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#081b31";
};

const showWinner =(userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
    //generate computer choice
    const compChoice = genCompChoice();

    if(userChoice === compChoice){
        //Draw Game
        drawGame();
    }else{
        let userChoice = true;
        if(userChoice === "rock"){
            //computer choice = scissors or paper
            userWin = compChoice === "paper" ? false : true;
        }else if (userChoice === "paper"){
            //computer choice = rock or scissors
            userWin = compChoice === "scissors" ? false : true;
        }else {
            //computer choice = rock or paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});