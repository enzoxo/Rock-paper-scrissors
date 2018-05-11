//===========Button to inicialise the game
var newGameBtn = document.getElementById('js-newGameButton');
newGameBtn.addEventListener('click', newGame);

//Buttons with players Pick
var pickRock = document.getElementById('js-playerPick_rock'),
	pickPaper = document.getElementById('js-playerPick_paper'),
	pickScissors = document.getElementById('js-playerPick_scissors');

//call to action of buttons, every button gets a listener. After click a function playerPick is executed
pickRock.addEventListener('click', function(){playerPick('rock') });
pickPaper.addEventListener('click', function(){playerPick('paper') });
pickScissors.addEventListener('click', function(){playerPick('scissors') });

//
var gameState = 'notStarted';//'started'//, 'ended'; 
	player = {
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


	//variables to the new game funciton
var playerPointsElem = document.getElementById('js-playerPoints'),
	playerNameElem = document.getElementById('js-playerName'),
	computerPointsElem = document.getElementById('js-computerPoints');



	//variables to be used on actual site.
var playerPickElem = document.getElementById('js-playerPick'),
	computerPickElem = document.getElementById('js-computerPick'),
	playerResultElem = document.getElementById('js-playerResult'),
	computerResultElem = document.getElementById('js-computerResult');

//=========Function dsplays appropriate layout of the game.
function setGameElements(){
	switch(gameState) {
		case 'started':
				newGameElem.style.display = 'none';
				pickElem.style.display = 'block';
				resultsElem.style.display ='block';
					
			break;
		case 'ended':
				newGameBtn.innerText = 'Play again';
		case 'notStarted':
		default:
			newGameElem.style.display = 'block';
			pickElem.style.display = 'none';
			resultsElem.style.display ='none';
	}
}

//==============================Starting point of the game. 
setGameElements();



//Function to start a game after we click new game or play again
function newGame(){
	player.name = prompt("Please enter your name", "imie gracza");
	if(player.name) {
		player.score = computer.score = 0;
		gameState = 'started';
		setGameElements();

	
	playerNameElem.innerHTML = player.name;
	setGamePoints();
	}
	
}


function playerPick(playerChoice) {
	
	var computerChoice  = getComputerPick();

	playerPickElem.innerHTML = playerChoice;
	computerPickElem.innerHTML = computerChoice;

	checkRoundWinner(playerChoice, computerChoice);	
	checkGameEnd();
	

}

/*Function is using library Math. It's also use a simple trick to get random choice out of 3.
 Math.random() gives a random number. Then I use Math.floor() to decrease down given number to
 integer value. Then I multiply it by 3 to get random number from range 0 - 2 which is an index of our array.
 rock = 0, paper = 1 scissors = 2.

*/
function getComputerPick() {
	var possiblePicks =['rock', 'paper', 'scissors'];
	return possiblePicks[Math.floor(Math.random()*3)];
}


function checkRoundWinner(playerPick, computerPick) {
 playerResultElem.innerHTML = computerResultElem.innerHTML = '';

 var winnerIs = 'player';

 	if(playerPick == computerPick) {
 		
 	} else if (
 			  (computerPick == 'rock' && playerPick == 'scissors') ||
			  (computerPick == 'scissors' && playerPick == 'paper') ||
			  (computerPick == 'paper' && playerPick == "rock")){

  			computer.score++;
 			computerResultElem.innerHTML = "Win!";
 	}else {
 		player.score++;
 		playerResultElem.innerHTML = "Win!";
 	} 

	setGamePoints();
 	
}

//Function to display the results.
function setGamePoints() {
    playerPointsElem.innerHTML = player.score;
    computerPointsElem.innerHTML = computer.score;
}

function checkGameEnd(){
	if(computer.score == 10){
		alert("You lost! :( ");
		gameState = 'ended';
		
		setGameElements();

		
	} else if(player.score == 10) {
		alert("You won! :D ");
		gameState = 'ended';
		setGameElements();
	}
	

}