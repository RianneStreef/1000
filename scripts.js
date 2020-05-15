const player1 = document.getElementById('player1');
const player1Name = document.getElementById('player1Name');
const player1ScoreDisplay = document.getElementById('player1ScoreDisplay');

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

    let oldScore = player1ScoreDisplay.lastChild.innerHTML ? parseInt(player1ScoreDisplay.lastChild.innerHTML) : 0

    console.log ('this is the old score: ' + oldScore)
    // if(score1.innerHTML)

//    oldScore = parseInt(score1.innerHTML)
// else
//    oldScore = 0

    let scoreInput = parseInt(player1ScoreInput.value)
    let newScore = oldScore + scoreInput;

    let newDisplayScore = document.createElement('li');

    newDisplayScore.textContent = Number(newScore);

    player1ScoreDisplay.appendChild(newDisplayScore);

    let player1AllScores = player1ScoreDisplay.children;
    let player1AllScoresArray = Array.from(player1AllScores);

    console.log ('this is the score list: ' + player1AllScores); // gives an HTML Collection
    

    console.log ('this is the PlayerAllScoresArray ' + player1AllScoresArray)  // gives something weid (takes the HTML Collention as a string?!)
    console.log ('this is they array length: ' + player1AllScoresArray.length) // so it actually did work! 

    

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



const player2 = document.getElementById('player2');
const player2Name = document.getElementById('player2Name');
const player2ScoreDisplay = document.getElementById('player2ScoreDisplay').lastChild;
const player2ScoreInput = document.getElementById('player2ScoreInput');
const player2AddScoreButton = document.getElementById('player2AddScoreButton');
const player2NameInput = document.getElementById('player2NameInput');
const player2NameInputButton = document.getElementById('player2NameInputButton');




player2NameInputButton.addEventListener('click', ($event) => {
$event.preventDefault ();

let newName = player2NameInput.value ? player2NameInput.value : player2NameInput.value = "Player 2"

player2Name.textContent  = player2NameInput.value;
});


player2AddScoreButton.addEventListener('click', ($event) => {
$event.preventDefault ();

    let oldScore = player2ScoreDisplay.lastChild.innerHTML ? parseInt(player2ScoreDisplay.lastChild.innerHTML) : 0

    // if(score1.innerHTML)

//    oldScore = parseInt(score1.innerHTML)
// else
//    oldScore = 0

    let scoreInput = parseInt(player2ScoreInput.value)
    let newScore = oldScore + scoreInput;


    console.log ('this is the score: ' + newScore)

    let newDisplayScore = document.createElement('li');
    player2ScoreDisplay.appendChild(newDisplayScore);

    player2ScoreDisplay.lastChild.innerHTML =  newScore; 
});

function showPlayer3Function() {
   
    if (player3.style.display === 'none') {
        player3.style.display = 'block';
        player2AddRemoveButtons.style.display = 'none';

    } else {
        player2.style.display = 'none';
    }
}


function removePlayer2Function() {
   
    if (player2.style.display === 'block') {
        player2.style.display = 'none';
        player1AddRemoveButtons.style.display = 'block';
        player2AddRemoveButtons.style.display = 'none';
    } 
}
