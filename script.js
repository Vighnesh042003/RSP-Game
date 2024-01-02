let compScore = 0 ;
let userScore = 0 ; 


const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const compChoice = () =>{
    const options = ["rock","paper","scissors"];
    let choiceNum = Math.floor(Math.random()*3);

    return options[choiceNum];
}

const draw = ()=>{
    console.log("game was drawn!");
    msg.textContent = "its a Draw , pLay again";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin) =>{
    if(userWin){
        console.log("User is the Winner");
        userScore++ ;
        userScorePara.textContent = userScore ; 
        msg.textContent = "you win!";
        msg.style.backgroundColor = "green";
    }
    else{
        console.log("computer is the Winner");
        compScore++ ;
        compScorePara.textContent = compScore ; 
        msg.textContent = "you Lose!";
        msg.style.backgroundColor = "red";
    }
}


const playGame = (userChoice) =>{
    console.log("choice ws clicked! " + userChoice);
    const comp = compChoice();
    console.log("choice ws selected! " + comp);

    if(userChoice===comp){
        draw();
    }
    else{
        let userWin = true ;

        if(userChoice==="rock"){
            // paper , scissor
            userWin = comp==="paper"? false : true ;
            userWin = comp==="scissor"? true : false ;
        }
        else if(userChoice==="paper"){
            // rock , scissor
            userWin = comp==="rock"? true: false;
            userWin = comp==="scissor"? false: true;
        }
        else{
            // paper rock 
            userWin = comp==="paper"? true: false ;
        }
        showWinner(userWin);
    }
}

    

choices.forEach((choice)=> {
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});