let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");

const getComputerChoice = () => {
const compChoice = ["rock", "paper", "scissors"];
 const randIndex = Math.floor(Math.random() * 3 );
 return compChoice[randIndex];
}

const msg = document.querySelector("#msg");
const user_score = document.querySelector("#user-score");
const comp_score = document.querySelector("#robot-score");

const drawGame = () => {
    msg.innerText = "Draw";
    msg.style.backgroundColor = "yellow";
    msg.style.color = "black";
}

const showWinner = (userWin, userChoice, compChoice) => {
     if (userWin) {
        userScore++;
        user_score.innerText= userScore;
        msg.innerText = `Win!!! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
     } else{
        compScore++;
        comp_score.innerText= compScore;
        msg.innerText = `Lost!!! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
     }
}

const playGame = (userChoice) => {
    const compChoice =   getComputerChoice();
    if(userChoice === compChoice){
        drawGame();
    }
    else {
        let userWin =true;
        if(userChoice === "rock") {
            userWin = compChoice==="paper"? false:true;
        } else if (userChoice==="paper"){
            userWin = compChoice==="scissors"? false:true;
        }else{
            userWin= compChoice==="rock"?  false:true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", ()=> {
        const userChoice = choice.getAttribute("id");
    playGame(userChoice);
    })
})