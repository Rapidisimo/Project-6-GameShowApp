const startGame = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
let missed = 0;
const phrases = ['blue sky', 'gentle breeze', 'morning mist', 'sunny day', 'cool night'];
const phraseArray = getRandomPhraseAsArray(phrases);
const keys = document.querySelectorAll('button');
let letterMatch = null;
const hearts = document.querySelectorAll('.tries');
const title = document.querySelector('.title');

// Listens for a click on the overlay button and depending on it's text it either starts the game or resets it.
startGame.addEventListener ('click', (event) => {
    if ( event.target.innerHTML === 'Start Game') {
        overlay.style.display = 'none';
    } else if ( event.target.innerHTML === 'Replay?') {
        location.reload();
    }
} )

// Gets a random phrase from phrases constant and creates an array of letters from it.
function getRandomPhraseAsArray (arr) {
    const randomP = Math.floor(Math.random() * arr.length );
    const letras = Array.from(arr[randomP]);
    return letras
}
// Creates list items bases on the resulting letter array. If it's a space it assigns space as a class if not then it gets assigned a letter class.
function addPhraseToDisplay(arr) {
    const list = document.querySelector('#phrase ul');

    for (let i = 0; i < arr.length; i++ ) {
        const item = document.createElement('li'); 
        list.append(item)
        item.textContent = arr[i];
        if ( item.textContent === ' ') {
            item.className = 'space';
        } else {
            item.className = 'letter';
        }
        }
        return arr;
}
//Runs the function to create/display the phrase to guess
addPhraseToDisplay(phraseArray);

//Listens to clicks for onscreen keyboard buttons, assigns "chosen" class and disables button it for futher use.
//Sends the innerHTML of the button the the checkLetter function for comparison. If they are the same it's class is update and the function to check for a win is called.
//If they don't match, the missed counter is increased, the class is updated, the badGuess function is called to remove a heart and checkWin function is called to see if they lost.
qwerty.addEventListener('click', (event) => {

   if (event.target.tagName === 'BUTTON') {
        event.target.className = 'chosen';
        event.target.disabled = true;
        let buttonLetter = event.target.innerHTML;
        checkLetter(buttonLetter);
        if (letterMatch === buttonLetter) {
            event.target.className = 'chosen correctLetter';
            checkWin();
        } else {
            missed += 1;
            event.target.className = 'chosen wrongLetter';
            badGuess(hearts);
            checkWin();
        }
   }
})

// Called by the keyboard event listener.
// Checks to see if the letter of the button matches the letter in the li not being shown. If it does then a class is added to show it on the board.
function checkLetter (arr) {
    const letters = document.querySelectorAll('.letter'); 

    for (let i = 0; i < letters.length; i++) {
        if ( letters[i].innerHTML === arr) {
            letters[i].className = 'letter show';
            letterMatch = letters[i].innerHTML;
        } 
    } return letterMatch
}
// Called by the keyboard event listener.
// If the letter clicked wasn't a match then this function increases the missed count and then removes a heart from the board.
function badGuess (arr) {
    let score = missed - 1;
    for (let i = score; i < arr.length; i++ ) {
        arr[i].innerHTML = '<img src="images/lostHeart.png" height="35px" width="30px">';
        if(i === score) {
            break
        }
    }
}
// Called by the keyboard event listener.
// Checks to see if you have won or lost the game by comparing the count of the initial set of letters to
// the count of letters you have guessed correctly. It also changes the overlay screen to a win or lose version and the button text/behaviour.
// I also added a delay when winning or losing so you can see the completed phrase(if you won).
function checkWin () {
    let lettersShown = document.querySelectorAll('.show');
    let letter = document.querySelectorAll('.letter');
    setTimeout(function () {
    if ( lettersShown.length === letter.length ) {
        overlay.className = 'win';
        overlay.style.display = 'flex';
        title.innerHTML = 'YOU WIN!';
        startGame.innerHTML = 'Replay?';
    } else if ( missed === 5 ) {
        overlay.className = 'lose';
        overlay.style.display = 'flex';
        title.innerHTML = 'YOU LOSE!';
        startGame.innerHTML = 'Replay?';
    }
}, 990);
}

