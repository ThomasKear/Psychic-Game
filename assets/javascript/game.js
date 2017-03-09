// This is the array of possible

var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
		// this var is to reset wins to 0
var wins = 0;
		// this var is to reset loses to 0
var losses = 0;
		// this var is the number of guesses the pplayer has per round 
var guessesLeft = 9;
		// this var is to establish a reset vallue for a win
var playerWins = false;
		// this var is to establish a reset value for a lose
var playerLosses = false;
		// this var is to establish a reset to blank for the players guesses
var pastGuesses = "";
		// this var is to tell the computer to pick a letter from the options var
var computerGuess = options[Math.floor(Math.random()*options.length)];
		// I used this console.log to record the computers guesses and cheat when I'm on a big losing streak
console.log("Computer chose: " + computerGuess);
	// I went with a .onkeydown because at the beginning of the game it would take two turns for refreshing the page with CTRL r
document.onkeydown = function() {
	// To regulate the key strokes of the user 
	var userguess = String.fromCharCode(event.keyCode). toLowerCase();
	// This if statement was designed to establish a reset when the player wins, resetting the guesses left and the player wins boolean
	if(playerWins){
		computerGuess = options[Math.floor(Math.random()*options.length)];
		console.log("Player wins!!! Computer now chooses: " + computerGuess);
		guessesLeft = 9;
		playerWins = false;
	} 
	// This if statement was designed to establish a reset when the player loses, resetting the guesses left and the player loses boolean
	if(playerLosses){
		computerGuess = options[Math.floor(Math.random()*options.length)];
		console.log("Player losses.  Computer now chooses: " + computerGuess);
		guessesLeft = 9;
		playerLosses = false;
	}


	// This console.log apures and publishes the players guess
		console.log("User typed: " + userguess)
		 
 	//if we win mark a win and immediately skip to output
		if ((userguess===computerGuess)){
	//mark up win
			wins++;

			alert("You win! Good job!");

			//set playerWins so we can reset with logic at top of loop and print stuff
			playerWins = true;

			//if they win, make sure to reset pastGuesses string
			pastGuesses = "";

			// 
		} else {
			//If the user has not guessed correctly decrement guessesLeft global
			guessesLeft--;

			//concatenate to string for previous guesses to show user what they have already guessed. 
			pastGuesses += "<br />Users guess was: " + userguess;

			//now check to see if we have exhausted guesses and therefore lost!
			if ((guessesLeft===0)){
				//mark as a loss cuz they dont have guesses left!
				losses++;

				// Inform player that they are a loser
				alert("You lose.  Try Again.");

				//reset guessesLeft for next game
				guessesLeft = 9

				//sets playerLosses so we can reset with logic and print stuff
				playerLosses = true;

				//They lost! wipe out past guesses, call them funny names
				pastGuesses = ""


			}
		}

		var html = "<p>Press any letter</p>" +
		"<p>wins: " + wins + "</p>" +
		"<p>losses: " + losses + "</p>" +
		"<p>Number of guesses left: " + guessesLeft + "</p>";

		if(playerLosses){
			html += "<br /><p>If you wish to continue playing simply press your next guess.</p>";
		} else {
			if(pastGuesses.length >= 1){
				html += "<br /><p>Past guesses: " + pastGuesses + "</p>";
			}
		}

		document.querySelector('#game').innerHTML = html;

}