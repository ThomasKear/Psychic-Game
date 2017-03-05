// This is the array of possible

var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var gameReset = false;
var pastGuesses = "";
var computerGuess = options[Math.floor(Math.random()*options.length)];
console.log("Computer chose: " + computerGuess);
	// I went with a .onkeydown because at the beginning of the game it would take two turns for refreshing the page with CTRL r
document.onkeydown = function() {
	// To regulate the key strokes of the user 
	var userguess = String.fromCharCode(event.keyCode). toLowerCase();

	if(gameReset){
		computerGuess = options[Math.floor(Math.random()*options.length)];
		console.log("Game over! Fresh game, new computer choice is: " + computerGuess);
		guessesLeft = 9;
		gameReset = false;
	} 

		console.log("User typed: " + userguess)
		//console.log("" + computerGuess)
 
 		//if we win mark a win and immediately skip to output
		if ((userguess===computerGuess)){
			//mark up win
			wins++;

			//set gameReset so we can reset with logic at top of loop and print stuff
			gameReset = true;

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

				//reset guessesLeft for next game
				guessesLeft = 9

				// 
				gameReset = true;

				//They lost! wipe out past guesses, call them funny names
				pastGuesses = ""


			}
		}

		var html = "<p>Press any letter</p>" +
		"<p>wins: " + wins + "</p>" +
		"<p>losses: " + losses + "</p>" +
		"<p>Number of guesses left: " + guessesLeft + "</p>";

		if(gameReset){
			html += "<br /><p>If you wish to continue playing simply press your next guess.</p>";
		} else {
			if(pastGuesses.length >= 1){
				html += "<br /><p>Past guesses: " + pastGuesses + "</p>";
			}
		}

		document.querySelector('#game').innerHTML = html;

}