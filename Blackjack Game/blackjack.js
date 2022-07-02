let firstCard = getRandomNumber()
let secondCard = getRandomNumber()

let cards = [firstCard, secondCard]
let sum = firstCard + secondCard;
let message = "";
let isAlive = true;
let hasBlackjack = false;

let sumEl = document.getElementById("sum-el")
// let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")
let messageEl = document.getElementById("message-el")
let betEl = document.getElementById("bet-el")

let player = {
    name: "Mustafa",
    chips: 200
}

function betting(){
    betEl.textContent = "Your Bet: " + document.getElementById("input").value +"$"
    playerEl.textContent = `Remaining Chips:  ${player.chips - document.getElementById("input").value}$`;
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = `${player.name} : ${player.chips}$`



function getRandomNumber(){
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if(randomNumber > 10){
        return 10
    }
    else if(randomNumber === 1){
        return 11
    }
    else{
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomNumber()
    let secondCard = getRandomNumber()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){

    cardsEl.textContent = "Cards: "
    for(let i=0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum

    if (sum <= 20) {
        message ="Do you want a another card?"
    }
    else if(sum === 21) { // we definitely use triple "="
        message = "Blackjack!"
        hasBlackjack = true; // logic of blackjack result

    }
    else{
        message = "Sorry,You lost!"
        isAlive = false; // logic of losing

    }
    messageEl.textContent = message
}
function newCard(){
    if( isAlive === true && hasBlackjack === false) {
        let NewNewCard = getRandomNumber()
        sum += NewNewCard
        cards.push(NewNewCard)
        console.log(cards)
        renderGame()
    }
   
}
// console.log(hasBlackjack)
// console.log(isAlive)
