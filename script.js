let firstCard = 10
let secondCard = 9
let sum = firstCard + secondCard
let hasBlackjack = false
let isAlive = true
let responseMessage = ''
let gameMessage = document.getElementById("message")

// Store the total-element <p> in a new variable called theTotal.

let theTotal = document.getElementById("total-element")


function startGame() {
    // Display theTotal on the page
    theTotal.textContent = "The sum is: " + sum

    if (sum < 21) {
        responseMessage = "Do you want another card?"
    } else if (sum === 21) {
        responseMessage = "Blackjack!"
        hasBlackjack = true
    } else if (sum > 21) {
        responseMessage = "You lose. Sorry, chump."
        isAlive = false
    }
    gameMessage.textContent = responseMessage
}






