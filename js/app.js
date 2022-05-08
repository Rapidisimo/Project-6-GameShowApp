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


startGame.addEventListener ('click', (event) => {
    if ( event.target.innerHTML === 'Start Game') {
        overlay.style.display = 'none';
    } else if ( event.target.innerHTML === 'Replay?') {
        location.reload();
    }
    
} )

function getRandomPhraseAsArray (arr) {
    const randomP = Math.floor(Math.random() * arr.length );
    const letras = Array.from(arr[randomP]);
    return letras
}

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
addPhraseToDisplay(phraseArray);


qwerty.addEventListener('click', (event) => {

   if (event.target.tagName === 'BUTTON') {
        event.target.className = 'chosen';
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

function checkLetter (arr) {
    const letters = document.querySelectorAll('.letter'); 

    for (let i = 0; i < letters.length; i++) {
        if ( letters[i].innerHTML === arr) {
            letters[i].className = 'letter show';
            letterMatch = letters[i].innerHTML;
        } 
    } return letterMatch
}

function badGuess (arr) {
    let score = missed - 1;
    for (let i = score; i < arr.length; i++ ) {
        arr[i].innerHTML = '<img src="images/lostHeart.png" height="35px" width="30px">';
        if(i === score) {
            break
        }
    }
}

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

