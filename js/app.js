const startGame = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');
const querty = document.getElementById('querty');
const phrase = document.getElementById('phrase');
let missed = 0;
const phrases = ['one', 'two', 'three', 'four test', 'five'];
const phraseArray = getRandomPhraseAsArray(phrases);
const keys = document.querySelectorAll('button');
let letterMatch = null;


startGame.addEventListener ('click', () => {
    overlay.style.display = 'none';
} )

function getRandomPhraseAsArray (arr) {
    const randomP = Math.floor(Math.random() * arr.length );
    const letras = Array.from(arr[randomP]);
    return letras
}

function addPhraseToDisplay(arr) {
    const list = document.querySelector('ul');

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


    for (let i = 0; i < keys.length; i++) {
        keys[i].addEventListener('click', () => {
            keys[i].className = 'chosen';
            keys[i].disabled = true;
            let buttonLetter = keys[i].innerHTML;
            checkLetter(buttonLetter);
            console.log(letterMatch);
        })
    }

function checkLetter (arr) {
    const letters = document.querySelectorAll('.letter'); 
            
    for (let i = 0; i < letters.length; i++) {
        if ( letters[i].innerHTML === arr) {
            letters[i].className = 'show';
            letterMatch = letters[i].innerHTML;
        } else {
            letterMatch = null;
        } 
    }
    return arr
}


