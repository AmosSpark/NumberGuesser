// Game values

let min = 1,
    max = 10,
    winningNum = getRandNum(min,max),
    guessLeft = 3;

// UI Elements

const game = document.querySelector("#game");
      minNum = document.querySelector(".min-num");
      maxNum = document.querySelector(".max-num");
      guessInput = document.querySelector("#guess-input");
      guessBtn = document.querySelector("#guess-btn");
      message = document.querySelector(".message");
      

// Assign min and max to UI

// minNum.textContent = min;
// maxNum.textContent = max;

// Get random number 

function getRandNum(min,max) {
    return (Math.floor (Math.random() * (max-min+1) + min));
    
}

// Show tip after 3s

let tip = document.createElement("p"),
    tipText = document.createTextNode(`Guess a number between ${min} and ${max}`);
    tip.className = "tip";
    tip.appendChild(tipText);

    game.insertBefore(tip,guessInput);
    
function showTip () {
  let tipToShow = document.querySelector(".tip");
      tipToShow.remove();
}

setTimeout(showTip, 3000);

// set message

function setMessage (msg,color) {
    message.textContent = msg;
    message.style.color = color;
}

// set game state

function gameState (won,msg) {
    let color;
    won === true ? color = "green" : color = "red";
    guessInput.disabled = true;
    guessInput.style.borderColor = color;
    setMessage(msg,color);

    /* Play again */

    guessBtn.value = "Play Again";
    guessBtn.className += "play-again"; 
}

// Listen for guess Btn

guessBtn.addEventListener("click", clicked);

    function clicked () {
        let guess = parseInt(guessInput.value);

        // Validate

        /* CHECK IF NONE, GREATER OR LESS */

        if (isNaN(guess) || guess < min || guess > max) {
            setMessage(`Please enter a number between ${min} and ${max}`, "red");
            guessInput.style.borderColor = "red";
        }

        /* CHECK IF WON */

        if (guess === winningNum) {
            gameState(true,`${guess} is correct, YOU WON!` );
        } else {
            guessLeft -= 1;

            if (guessLeft === 0) {
                gameState(false, `Game over, you lost. The correct number is ${winningNum}`);
            } else {
                setMessage(`Your are wrong, ${guessLeft} guesses left. TRY AGAIN!`,"red");
                guessInput.style.borderColor = "red";
                guessInput.value = "";
            }
        }
    }

    // Listen for Play Again

    game.addEventListener("mousedown", playAgain);

        function playAgain (e) {
            if (e.target.className === 'play-again') {
                window.location.reload();
            }
        }

    
    
    
    
    
    
    

    
    
    


    
    
    
