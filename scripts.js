const player1 = document.getElementById('player1');
const player1Name = document.getElementById('player1Name');
const player1ScoreDisplay = document.getElementById('player1ScoreDisplay');

const player1ScoreInputTotal = document.getElementById('player1ScoreInputTotal');
const player1ScoreInput = document.getElementById('player1ScoreInput');
const player1AddScoreButton = document.getElementById('player1AddScoreButton');
const player1NameInput = document.getElementById('player1NameInput');
const player1NameInputButton = document.getElementById('player1NameInputButton');

const addOnePlayerBtn = document.getElementById ('addOnePlayer');
const removeOnePlayerBtn = document.getElementById ('removeOnePlayer');



player1NameInputButton.addEventListener('click', ($event) => {
$event.preventDefault ();

let newName = player1NameInput.value ? player1NameInput.value : player1NameInput.value = "Player 1"

player1Name.textContent  = player1NameInput.value;
});


player1AddScoreButton.addEventListener('click', ($event) => {
$event.preventDefault ();

    let oldScore = player1ScoreDisplayTotal.lastChild.innerHTML ? parseInt(player1ScoreDisplayTotal.lastChild.innerHTML) : 0

    console.log ('this is the old score: ' + oldScore)
    // if(score1.innerHTML)

//    oldScore = parseInt(score1.innerHTML)
// else
//    oldScore = 0

    let scoreInput = parseInt(player1ScoreInput.value)
    let newScore = oldScore + scoreInput;

    let newDisplayScore = document.createElement('li');
    let newScoreInput = document.createElement('li');

    newDisplayScore.textContent = newScore;
    newScoreInput.textContent = scoreInput;

    player1ScoreDisplayTotal.appendChild(newDisplayScore);
    player1ScoreDisplay.appendChild(newScoreInput);

    let player1AllScores = player1ScoreDisplayTotal.children;
    // let player1AllScoresArray = Array.from(player1AllScores);

    console.log ('this is the score list: ' + player1AllScores); // gives an HTML Collection
    

    // console.log ('this is the PlayerAllScoresArray ' + player1AllScoresArray)  // gives something weid (takes the HTML Collention as a string?!)
    console.log ('this is they array length: ' + player1AllScores.length) // so it actually did work! 

    console.log ('this is the new score input' + newScoreInput)

    

});

function showPlayer2Function() {
   
    if (player2.style.display === 'none') {
        player2.style.display = 'block';
        player1AddRemoveButtons.style.display = 'none';
        player2AddRemoveButtons.style.display = 'block';

    } else {
        player2.style.display = 'none';
    }
}

function showPlayer3Function() {
   
    if (player3.style.display === 'none') {
        player3.style.display = 'block';
        player2AddRemoveButtons.style.display = 'none';
        player3AddRemoveButtons.style.display = 'block';

    } else {
        player3.style.display = 'none';
    }
}

function showPlayer4Function() {
   
    if (player4.style.display === 'none') {
        player4.style.display = 'block';
        player3AddRemoveButtons.style.display = 'none';
        player4AddRemoveButtons.style.display = 'block';

    } else {
        player4.style.display = 'none';
    }
}

function removePlayer2Function() {
   
    if (player2.style.display === 'block') {
        player2.style.display = 'none';
        player1AddRemoveButtons.style.display = 'block';
        player2AddRemoveButtons.style.display = 'none';
    } 
}

function removePlayer3Function() {
   
    if (player3.style.display === 'block') {
        player3.style.display = 'none';
        player2AddRemoveButtons.style.display = 'block';
        player3AddRemoveButtons.style.display = 'none';
    } 
}

function removePlayer4Function() {
   
    if (player4.style.display === 'block') {
        player4.style.display = 'none';
        player3AddRemoveButtons.style.display = 'block';
        player4AddRemoveButtons.style.display = 'none';
    } 
}

