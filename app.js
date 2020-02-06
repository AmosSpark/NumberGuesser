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



        /*RANDOM NUBER GENERATOR*/

        function genRandString (len) {
            let chars = "0123456789ABCDEFGHIJKLMNOPRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
            let randStr = "";

            for (i = 0; i < len; i++) {
                let rnum = Math.floor (Math.random() * chars.length);
                randStr += chars.substring(rnum, rnum + 1);
            }
            return randStr;
        }

        console.log(genRandString(16));




    // Obj Literals

    const myObj = {
        fullName () {
            return `${this.firstName} ${this.lastName}`;
        },
        age: 25
    }
        
    // for (const key of Object.keys(myObj)) {
    //     console.log(key);
    // }

    // for (const value of Object.values(myObj)) {
    //     console.log(value);  
    // }

    // for (const [key,value] of Object.entries(myObj)) {
    //     console.log(`${key}: ${value}`);
    // }

    // console.log(myObj.hasOwnProperty("firstName"));

    // console.log("firstName" in myObj);

    // const myBio = Object.create (myObj, {
    //                                         firstName: {value: "Ayobami"},
    //                                         lastName: {value: "Olugboyega"}
    //                                     });

    // console.log(myBio.fullName());


    // ES 6 classes

    class Person {
        constructor (firstName,lastName) {
            this.firstName = firstName,
            this.lastName = lastName
        }

        greeting () {
            return `Hello there ${this.firstName} ${this.lastName}`;
        }

        getsMarried (newLastName) {
            this.lastName = newLastName;
        }

        static addNumbers (x,y) {
            return x * y;
        }
    }

    const mary = new Person ("Mary", "Ann");

    mary.getsMarried ("Thompson");

    console.log(mary);

    console.log(Person.addNumbers(3,3));
    


    // ES 6 sub cllasses (inheritance)

    class Customer extends Person {
        constructor (firstName, lastName, phone, membership) {
            super (firstName,lastName),
                this.phone = phone,
                this.membership = membership
        }

        static getMembershipCost () {
            return 500;
        }
    }

    const john = new Customer ("John", "Doe", "555-555-555", "active");

    console.log(john.greeting());

    console.log(Customer.getMembershipCost());

    const david = new john.constructor ("david","adeleke","222-222-222","inactive");

    console.log(david.greeting());

    console.log(Person.prototype);

    console.log(Person.prototype.isPrototypeOf(david));
    

    Person.prototype.getFullName = function () {
        return `${this.firstName} ${this.lastName}`;
    }

    console.log(david.getFullName());

    console.log(Object.getPrototypeOf(john));
    
    
    
    
    
    
    

    
    
    


    
    
    
