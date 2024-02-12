let userScore = 0;
let computerScore = 0;
let userScore_span = document.querySelector(".userscore");
let computerScore_span = document.querySelector(".computerscore");
let scoreboard_div = document.querySelector(".scoreboard");
let result_p = document.querySelector(".results");
let rock_btn = document.querySelector("#rock");
let paper_btn = document.querySelector("#paper");
let scissors_btn = document.querySelector("#scissors");
let paragraph = document.querySelector(".paragraph")

function getComputerChoice() {
    let choices = ['r', 'p', 's']
    let randomNumber = Math.floor(Math.random() * 3)
    return choices[randomNumber]
}

function game(userChoice) {
    let computerChoice = getComputerChoice()
    let result;

    if ((userChoice + computerChoice === 'rs') || (userChoice + computerChoice === 'sp') || (userChoice + computerChoice === 'pr')) {
        paragraph.innerText = 'USER WINS'
    } else if ((userChoice + computerChoice === 'rp') || (userChoice + computerChoice === 'ps') || (userChoice + computerChoice === 'sr')) {
        paragraph.innerText = 'USER LOSES'
    } else if ((userChoice + computerChoice === 'rr') || (userChoice + computerChoice === 'ss') || (userChoice + computerChoice === 'pp')) {
        paragraph.innerText = 'IT IS A DRAW'
    }
   

    console.log(result);

    
}

function main() {
    rock_btn.addEventListener('click', () => {
        game('r');
    });

    paper_btn.addEventListener('click', () => {
        game('p');
    });

    scissors_btn.addEventListener('click', () => {
        game('s');
    });
}
console.log(main())
