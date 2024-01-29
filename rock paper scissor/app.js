let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const showWinner =(userwin)=>{
    if(userwin){
        msg.innerHTML = "You Win";
    }else{
        msg.innerHTML = "You Lose";
    }
};
const drawGame =()=>{
    msg.innerHTML = "Draw";
};
const genCompChoice = ()=>{
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};
const playGame = (choice)=>{
    const compChoice = genCompChoice();
    if(userChoice == compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper"?false:true;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissors"?false:true;
        }else{
            userWin = compChoice === "rock"?false:true;
        }
        showWinner(userWin);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        console.log(userChoice);
        playGame(userChoice);
    });
});