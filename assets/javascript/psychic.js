
    
    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var wins = 0;
    var losses = 0;
    var guessesLeft = 9;
    var yourGuess = [];


function startGame() {
    //computer chooses letter
    var computerGuess = letters[Math.floor(Math.random() * letters.length)];

    //user chooses letter
    document.onkeyup = function(event) {
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

        //logic
        if (userGuess == computerGuess) {
            wins++;
            guessesLeft = 9;
            yourGuess = [];
            startGame();
        
        }  else {
            guessesLeft--;
            yourGuess.push(userGuess);
        }

        if (guessesLeft == 0) {
            losses++;
            guessesLeft = 9;
            yourGuess = [];
            startGame();
        }

        

//write to DOM
        document.getElementById("winPlace").innerHTML = wins;
        document.getElementById("lossPlace").innerHTML = losses;
        document.getElementById("guessPlace").innerHTML = guessesLeft;
        document.getElementById("yourPlace").innerHTML = yourGuess;
    }

}

window.onLoad = startGame();
