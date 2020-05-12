const player1Name = document.getElementById('player1Name');
const player1ScoreDisplay = document.getElementById('player1ScoreDisplay');
const player1ScoreInput = document.getElementById('player1ScoreInput');
const player1AddScoreButton = document.getElementById('player1AddScoreButton');
const player1NameInput = document.getElementById('player1NameInput');
const player1NameInputButton = document.getElementById('player1NameInputButton');



player1NameInputButton.addEventListener('click', ($event) => {
$event.preventDefault ();
player1Name.textContent  = player1NameInput.value;
});


player1AddScoreButton.addEventListener('click', ($event) => {
$event.preventDefault ();

    let oldScore = player1ScoreDisplay.innerHTML ? parseInt(player1ScoreDisplay.innerHTML) : 0
    let scoreInput = parseInt(player1ScoreInput.value)
    let newScore = oldScore + scoreInput;


    console.log ('this is the score: ' + newScore)

    player1ScoreDisplay.innerHTML =  newScore; 
});


// if(score1.innerHTML)

//    oldScore = parseInt(score1.innerHTML)
// else
//    oldScore = 0