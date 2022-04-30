const startGame = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');
const querty = document.getElementById('querty');
const phrase = document.getElementById('phrase');
const missed = 0;
const phrases = ['one', 'two', 'three', 'four', 'five'];


startGame.addEventListener ('click', () => {
    console.log('Prueba');
    overlay.style.display = 'none';
} )

function getRandomPhraseAsArray (arr) {
    const randomP = Math.floor(Math.random() * arr.length );
    const letras = Array.from(arr[randomP]);
    return letras

}