const startGame = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');
const querty = document.getElementById('querty');
const phrase = document.getElementById('phrase');
const missed = 0;
const phrases = ['one', 'two', 'three', 'four test', 'five'];
const phraseArray = getRandomPhraseAsArray(phrases);
const keys = document.querySelectorAll('button');


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
        console.log(arr);
}

// function checkLetter (arr) {
//     const letters = document.querySelectorAll('.letter'); 
//     const letterMatch = null;
    

//     for (let i = 0; i < letters.length; i++) {
//         if ( letters[i] === arr) {
//             letters[i].className = 'show';
//             letterMatch = letters[i];
//             return letterMatch;
//         } else {
//             return null;
//         }
//     }
    // for (let i = 0; i < keys.length; i++) {
    //     const keyClick = keys[i].innerText;
    //     keys[i].addEventListener('click', () => {
    //         keys[i].className = 'chosen';
    //         keys[i].disabled = true;
    //         console.log(keyClick);
    //         checkLetter(keyClick);
    //     })
    // }
// }

    for (let i = 0; i < keys.length; i++) {
        keys[i].addEventListener('click', () => {
            keys[i].className = 'chosen';
            keys[i].disabled = true;
            const testy = keys[i].innerHTML;
            console.log(testy + ' was clicked');
            checkLetter(testy);
        })
        function checkLetter (arr) {
            const letters = document.querySelectorAll('.letter'); 
            const letterMatch = null;
            
        
            for (let i = 0; i < letters.length; i++) {
                if ( letters[i].innerHTML === arr.innerHTML) {
                    letters[i].className = 'show';
                    letterMatch = letters[i].innerHTML;
                    return letterMatch;
                } else {
                    return null;
                }
            }
        }
    }



addPhraseToDisplay(phraseArray);
console.log('test');


