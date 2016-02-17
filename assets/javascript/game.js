
    var words = ["ramones", "misfits", "buzzcocks", "fugazi", "descendents"];

    var choices = {
    	names: ["ramones", "misfits", "buzzcocks", "fugazi", "descendents"],
    	hint:  ["Often thought of as the first American punk Band", "This band formed in New Jersey in 1977", "British band known for their poppy lyrics and catchy hooks",  "Post-hardcore band that formed in Washington, D.C. in 1987", "This band's singer holds a Ph.D in biochemistry"],
    	images: ["assets/images/ramones.jpg", "assets/images/misfits.jpg", "assets/images/buzzcocks.png", "assets/images/fugazi.jpg", "assets/images/descendents.jpg"],
    	title: ["I Don't Want to Grow Up", "Hybrid Moments", "Ever Fallen in Love", "Repeater", "Coolidge"],
    	song: ["assets/songs/ramones.mp3", "assets/songs/misfits.mp3", "assets/songs/buzzcocks.mp3", "assets/songs/fugazi.mp3", "assets/songs/descendents.mp3"]
    
	};
    var wins = 0;
    var guessesLeft = 5;
    var yourGuess = [];
    var computerGuess = "";
    var showAnswer = [];
    var msg = {
    	win : "Congratulations! You Win!",
    	choose : "You already picked that letter.",
    	loss : "Sorry, you lose."
    }



//display image, title, song
function imgWin() {
	var message = words.indexOf(computerGuess);
    document.getElementById("winImg").src = choices.images[message];
    document.getElementById("info").innerHTML = choices.title[message];
    document.getElementById("audioPlace").src = choices.song[message];
};

//display hint
function msgHint() {
	var message = words.indexOf(computerGuess);
    document.getElementById("hint").innerHTML = choices.hint[message];
};


//computer chooses word
function newGame() {
    computerGuess = words[Math.floor(Math.random() * words.length)];
    msgHint();



//write word in underscores
for (var i=0; i < computerGuess.length; i++){
	showAnswer.push("_");
	if (computerGuess.indexOf(i) == " ") {
		showAnswer[i] = " ";
	}
	}
	document.getElementById("currentWord").innerHTML = showAnswer.join(' ');
};




//check for Wins
			function checkWin(){	
				if (wins == computerGuess.length) {
				imgWin();
				guess = false;
				alert(msg.win);
				guessesLeft = 5;
    			yourGuess = [];
    			computerGuess = "";
    			showAnswer = [];
				guessesLeft = 5;
				wins = 0;
				userGuess = "";
				document.getElementById("yourPlace").innerHTML = yourGuess;
	        	document.getElementById("guessPlace").innerHTML = guessesLeft;
				newGame();
				}
			}

			//Check for loss
	function checkLoss(){
		if (guessesLeft < 1) {
			guess = false;
			alert(msg.loss);
			guessesLeft = 5;
	    	yourGuess = [];
	    	computerGuess = "";
	    	showAnswer = [];
			guessesLeft = 5;
			document.getElementById("yourPlace").innerHTML = yourGuess;
		    document.getElementById("guessPlace").innerHTML = guessesLeft;
			newGame();
			}
	}




//user chooses letter

		document.onkeyup = function(event) {
	     var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	     document.getElementById("message").innerHTML = "";
		var guess = true;
	
//check for previously picked letter
	
	if (showAnswer.indexOf(userGuess) != -1) {
			document.getElementById("message").innerHTML = msg.choose;
			return false;
		}






//loop through computerGuess


for (var i =0; i < computerGuess.length; i++) {


	        	
			if (userGuess == computerGuess.charAt(i)) {
				wins++;
				guess = false;

	        		showAnswer[i] = userGuess;
				
				document.getElementById("currentWord").innerHTML = showAnswer.join(' ');
				

	        	} else if (computerGuess.indexOf(userGuess) == -1 && guess == true && yourGuess.indexOf(userGuess) == -1) {

	        		yourGuess.push(userGuess);

	        		guessesLeft --;
					
					guess = false;
				
	        		document.getElementById("yourPlace").innerHTML = yourGuess;

	        		document.getElementById("guessPlace").innerHTML = guessesLeft;
					

				}
				checkWin();
				checkLoss();
				
	   		 	}
			}



window.onLoad = newGame();












