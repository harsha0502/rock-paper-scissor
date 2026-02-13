let userScore = 0;
let computerScore = 0;
const choices = document.querySelectorAll('.option');

const choiceDisplay = document.querySelector('.rock-paper-scissors');
const userScoreDisplay = document.querySelector('.score-value-player');
const computerScoreDisplay = document.querySelector('.score-value-computer');

const options = [
   document.getElementById('0'),
   document.getElementById('1'),
   document.getElementById('2'),
];

const optionsText = ["rock", "scissors", "paper"];
const getScoresLocally = ()=>{
    const scores = localStorage.getItem("SCORES");
    if(scores){
        const parsedScores = JSON.parse(scores);
        userScore = parsedScores.user;
        computerScore = parsedScores.computer;
        userScoreDisplay.textContent = userScore;
        computerScoreDisplay.textContent = computerScore;
    }
}
getScoresLocally();
const playGame = (userChoiceId)=>{
    const userChoice = optionsText[userChoiceId];
    const computerChoiceId = Math.floor(Math.random()*3);
    const computerChoice = optionsText[computerChoiceId];
    const result = calculateWinner(userChoice, computerChoice);
    showResults(result)
}

choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener('click',()=>{
        const userChoiceId = choice.id;
        playGame(userChoiceId);
    })
})

const calculateWinner = (userChoice, computerChoice)=>{
    let result = null;
    if(userChoice === computerChoice){


        result = 0;
    }else if(
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "scissors" && computerChoice === "paper") ||
        (userChoice === "paper" && computerChoice === "rock")
    ){
        userScore++;
        userScoreDisplay.textContent = userScore;
        result = 1;
    }else{
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
        result = -1;
    }
    scores = {
        user: userScore,
        computer: computerScore
    }
    setScoresLocally(scores)
    return result;
}

const setScoresLocally = (scores)=>{
    localStorage.setItem("SCORES", JSON.stringify(scores));
}

