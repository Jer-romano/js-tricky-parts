function guessingGame() {

    const randomNumb = Math.floor(Math.random() * 100);
    let hasWon = false;
    let guesses = 0;

    return function makeGuess(guess) {
        if(hasWon) {
            return "The game is over, you already won!";
        }
        guesses++;
        if(guess > randomNumb) {
           return `${guess} is too high!`;
        }
        else if(guess < randomNumb) {
            return `${guess} is too low!`;
        }
        else {
            hasWon = true;
           return `You win! You found ${randomNumb} in ${guesses} guesses.`;
        }
        
    }
}

module.exports = { guessingGame };
