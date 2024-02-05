let userscore = 0
let computerscore = 0
let userscore_span = document.querySelector (".userscore")
let computerscore_span = document.querySelector (".computerscore")
let scoreboard = document.querySelector(".scoreboard")
let results = document.querySelector(".results")
let rock = document.querySelector('#rock')
let paper = document.querySelector('#paper')
let scissors = document.querySelector('#scissors')




function getComputerChoice() {
let choices = ['r','p','s']
let randomNumber = Math.floor( Math.random() * 3)
return choices[randomNumber]
}

function game() {
let computerChoice = getComputerChoice()
let userchoice = main()
if(userchoice + computerChoice === 'rs'|| 'sp' ||'pr') {
console.log('USER WINS')
} else if(userchoice + computerChoice === 'rp' || 'ps' || 'sr') {
console.log('USER LOSES')
} else if( userchoice + computerChoice === 'rr' || 'ss' || 'pp') {
console.log('IT IS A DRAW')}
}

function main () {
rock.addEventListener('click', ()=>{
console.log('r')
})
paper.addEventListener('click', ()=>{
console.log('p')
})
scissors.addEventListener('click', ()=>{
 console.log('s')
})
}
