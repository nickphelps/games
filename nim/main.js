//~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~Init~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~
    var playerTurn = 'player 2'
    //inital game board
    const gameBoard = ['1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0']
    var totalPebblesTaken = 1

    var content = document.getElementById('content');

    var nim = "Replace this with your own abstraction of Nim"

    content.innerHTML = renderGame(gameBoard);

function updateGameBoard() {

    //store user input
    let userPebbleInput = document.getElementById('takeInput').value
    console.log('User pebble input is...', userPebbleInput)
    console.log('Total Pebbles taken is...', totalPebblesTaken)
    
    //adding played pebbles to gameBoard
    for (let i = (+totalPebblesTaken); i < (+totalPebblesTaken) + (+userPebbleInput); i++) {
        gameBoard[i] = '1'
        console.log('Here is i : ', i)
    }//for loop
    totalPebblesTaken = (+totalPebblesTaken) + (+userPebbleInput)
    console.log('Total Pebbles Taken updated is... ',totalPebblesTaken)

}//updateGameBoard()

function takeTurn() {
    // console.log( changePlayerTurn() )
    updateGameBoard()
    content.innerHTML = renderGame(gameBoard)
    changePlayerTurn()
}//take turn

function changePlayerTurn() {
    playerTurn = playerTurn === 'player 1' ? 'player 2' : 'player 1'
    // if (playerTurn = 'player 2') {
    //     playerTurn = 'player 1'
    // } 
    // if (playerTurn = 'player 1') {
    //     playerTurn = 'player 2'
    // }
    console.log(playerTurn)
    return playerTurn
    //TODO: make sure this is working
}//change Player Turn

function renderGame(game) {
    // Change this render function to use the "game" parameter
    
    let updateGameBoard =  game.map(function(ele) {
        if (ele === '0') {
            return `<div class="pebble"></div>`
        } else {
            return `<div class="pebble taken"></div>`
        }
    })//map

    let pebbles = updateGameBoard.join('')

    //game over logic

    if (totalPebblesTaken < 16) {
       gameOverText = `<h4>There are ${16 - (+totalPebblesTaken)} pebbles left</h4>`
    } else {
        gameOverText = `<h1>THE GAME IS OVER... ${changePlayerTurn()} WINS</h1>
                        <hr>
                        <button onclick="refreshPage()" class="btn btn-primary">Refresh</button>`
    }

    // map gameBoard into pebbels (i.e <div class="pebble"></div>)
    // if element is 1, then use class 'taken'
    // otherwise use just pebble
    // TODO: GAME OVER LOGIC
    // then combine these pebbles with rest of html

    return `
        <div class="container d-flex flex-column justify-content-start align-items-center">
            ${gameOverText}
            <div class="w-50 text-center pebble-container">
                ${pebbles}
            </div>
            <h4 class="mt-5">It's ${changePlayerTurn()} turn! How many pebbles will you take?</h4>
            <div>
                <select id="takeInput">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <button onclick="takeTurn()" class="btn btn-primary">Take</button>
            </div>
        </div>
    `
}//renderGame

function refreshPage () {
    location.reload()
}
