let userScore = 0;
let computerScore = 0;
const choices = document.querySelectorAll('.option');

const choiceDisplay = document.querySelector('.rock-paper-scissors');
const userScoreDisplay = document.querySelector('.score-value-player');
const computerScoreDisplay = document.querySelector('.score-value-computer');

const options = ["rock", "scissors", "paper" ];
const playGame = (userChoiceId)=>{
    const computerChoiceId = Math.floor(Math.random()*3);
    const userChoice = options[userChoiceId];
    const computerChoice = options[computerChoiceId];
    calculateWinner(userChoice, computerChoice);
}

choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener('click',()=>{
        // choiceDisplay.style.display = "none";
        const userChoiceId = choice.id;
        playGame(userChoiceId);
    })
})

const calculateWinner = (userChoice, computerChoice)=>{
    if(userChoice === computerChoice){



        // alert("It's a tie");
    }else if(
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "scissors" && computerChoice === "paper") ||
        (userChoice === "paper" && computerChoice === "rock")
    ){
        userScore++;
        userScoreDisplay.textContent = userScore;
        // alert("You win!");
    }else{
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
        // alert("You lose!");
    }
}