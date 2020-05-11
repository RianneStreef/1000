const player1 = document.getElementById('player1');
const score1 = document.getElementById('score1');
const newScore1 = document.getElementById('newScore1');
const addScore1Btn = document.getElementById('addScore1');
const newPlayer1 = document.getElementById('newPlayer1');
const addNewPlayer1Btn = document.getElementById('addNewPlayer1');

addNewPlayer1Btn.addEventListener('click', ($event) => {
    $event.preventDefault ();
    player1.textContent = newPlayer1.value;
});




addScore1Btn.addEventListener('click', ($event) => {
    $event.preventDefault ();
    score1.textContent = newScore1.value;

    // score1.value = score1.value + newScore1.value;
    
    // let oldScore = score1;    
    // let newScore = newScore1;
    // newScore1.value = oldScore + newScore; 
});