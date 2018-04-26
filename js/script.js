var newGameBtn = document.getElementById('js-newGameButton');
newGameBtn.addEventListener('click', newGame);

//Buttons with players Pick
var pickRock = document.getElementById('js-playerPick_rock'),
	pickPaper = document.getElementById('js-playerPick_paper'),
	pickScissors = document.getElementById('js-playerPick_scissors');

//call to action of buttons
pickRock.addEventListener('click', function(){playerPick('rock')});
pickPaper.addEventListener('click', function(){playerPick('paper')});
pickScissors.addEventListener('click', function(){playerPick('scissors')});


var gameState = 'notStarted';//'started'//, 'ended'; 
	player ={
		name: '',
		score: 0
	},
	computer = {
		score: 0
	};
//variables witch points on the game element or rather it's parts.
var newGameElem = document.getElementById('js-newGameElement'),
	pickElem = document.getElementById('js-playerPickElement'),
	resultsElem = document.getElementById('js-resultsTableElement');

function setGameElements(){
	switch(gameState) {
		case 'started':
			newGameElem.style.display = 'none';
			pickElem.style.display = 'block';
			resultsElem.style.display ='block';
		break;
		case 'ended':
			newGameBtn.innerText = 'Jeszcze raz';
		case 'notStarted':
		default:
			newGameElem.style.display = 'block';
			pickElem.style.display = 'none';
			resultsElem.style.display ='none';
	}
}
setGameElements();

//variables to the new game funciton
var playerPointsElem = document.getElementById('js-playerPoints'),
	playerNameElem = document.getElementById('js-playerName'),
	computerPointsElem = document.getElementById('js-computerPoints');


function newGame(){
	player.name = prompt("Please enter your name", "imię gracza");
	if(player.name) {
		player.score = computer.score = 0;
		gameState = 'started';
		setGameElements();
	}
	playerNameElement.innerHTML = player.name;

}


function playerChoice(playerPick) {
	console.log(playerPick);
	var computerPick = getComputerPick();

	playerPickElem.innerHTML = playerPick;
	computerPickElem.innerHTML = computerPick;
}

function getComputerPick() {
	var possiblePicks =['rock', 'paper', 'scissors'];
	return possiblePicks[Math.floor(Math.random()*3)];
}

var playerPickElem = document.getElementById('js-playerPick'),
	computerPickElem = document.getElementById('js-computerPick'),
	playerResultElem = document.getElementById('js-playerResult'),
	computerResultElem = document.getElementById('js-computerResult');


