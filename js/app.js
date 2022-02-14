//function new game reset parameters to "0"
function newGame() {
    window.location.reload()
}

//change name
function changeNamePlayer() {
    var player1 = "player1"
    var player2 = "player2"

    player1 = prompt("Changer le nom du joeur 1 : ")
    player2 = prompt("Changer le nom du joueur 2 :")

    document.querySelector('#name-0').innerHTML = player1
    document.querySelector('#name-1').innerHTML = player2
}


function changeLimitScore() {
    var pointLimit = '';
    pointLimit = prompt('Indiquez le nombre de point a faire : ');
    document.querySelector('#scoreLimit').innerHTML = pointLimit;

}

activePlayer = 0

function active() {

    document.getElementById('p-0').classList.toggle('active');
    document.getElementById('p-1').classList.toggle('active');


}


function nextPlayer() {
    //next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

    // raz score
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';


    active()
}



function rollDice() {
    var randomDice = Math.floor(Math.random() * 6 + 1)
    var img = document.querySelector('#img')
    img.setAttribute('src', `/assets/${randomDice}.png`)

    if (randomDice != 1) {

        var score = document.querySelector('#score-' + activePlayer)
        score.innerHTML = randomDice + parseInt(score.textContent)
        winGame()
    } else {

        nextPlayer()

    }
}

function hold() {

    var holdScore = document.querySelector('#winpoint-' + activePlayer)
    var score = document.querySelector('#score-' + activePlayer)

    holdScore.innerHTML = parseInt(holdScore.textContent) + parseInt(score.textContent)

    nextPlayer()

}

function winGame() {
    var limit = parseInt(document.querySelector('#scoreLimit').textContent)
    var holdScore = document.querySelector('#winpoint-' + activePlayer).textContent
    var score = document.querySelector('#score-' + activePlayer).textContent

    if ((parseInt(holdScore) + (parseInt(score)) >= limit)) {
        alert('Vous avez gagné')
        newGame()
    }

}

function cheat() {
    alert("Vous avez gagné!!!!")
    newGame()
}