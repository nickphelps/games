// ~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~Init~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~
var playerTurn = 1
// inital game board
const gameBoard = ['1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0']
var totalPebblesTaken = 1

var content = document.getElementById('content')

var nim = 'Replace this with your own abstraction of Nim'

content.innerHTML = renderGame(gameBoard)

function updateGameBoard () {
  // store user input
  let userPebbleInput = document.getElementById('takeInput').value

  // adding played pebbles to gameBoard
  for (let i = (+totalPebblesTaken); i < (+totalPebblesTaken) + (+userPebbleInput); i++) {
    gameBoard[i] = '1'
  }// for loop
  totalPebblesTaken = (+totalPebblesTaken) + (+userPebbleInput)
}// updateGameBoard()

function takeTurn () {
  // console.log( changePlayerTurn() )
  changePlayerTurn()
  updateGameBoard()
  content.innerHTML = renderGame(gameBoard)
}// take turn

function changePlayerTurn () {
  console.log('before change player turn function ', playerTurn)
  if (playerTurn === 1) {
    playerTurn = 2
  } else if (playerTurn === 2) {
    playerTurn = 1
  }
  console.log(playerTurn)
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
  return playerTurn
}// change Player Turn

function renderGame (game) {
  let updateGameBoard = game.map(function (ele) {
    if (ele === '0') {
      return `<div class="pebble"></div>`
    } else {
      return `<div class="pebble taken"></div>`
    }
  })// map

  let pebbles = updateGameBoard.join('')

  if (totalPebblesTaken < 16) {
    gameOverText = `<h4>There are ${16 - (+totalPebblesTaken)} pebbles left</h4>`
  } else {
    gameOverText = `<h1 class="gameOverText">THE GAME IS OVER... Player ${!playerTurn} WINS</h1>
                        <hr>
                        <button onclick="refreshPage()" class="btn btn-primary">Refresh</button>`
  }

  return `
        <div class="container d-flex flex-column justify-content-start align-items-center">
            ${gameOverText}
            <div class="w-50 text-center pebble-container">
                ${pebbles}
            </div>
            <h4 class="mt-5">It's ${'players ' + playerTurn} turn! How many pebbles will you take?</h4>
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
}// renderGame

function refreshPage () {
  location.reload()
}
