//VARIABLES
var words = ["elway", "drewlock", "eddiemac", "terrelldavis", "vonmiller", "chubb", "aquibtalib"]


var randomWord = "";
var lettersOfWord = [];
var blanks = 0;
var blanksAndCorrect = [];
var wrongGuess = [];


var wins = 0;
var losses = 0;
var guessesRemaining = 9;



// ALL FUNCTIONS
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


//__________________________________________________________
//GAME START FUNCTION
//__________________________________________________________
function Game() {
   
    randomWord = words[Math.floor(Math.random() * words.length)];

     
    lettersOfWord = randomWord.split("");

    
    blanks = lettersOfWord.length;

    
    for (var i = 0; i < blanks; i++) {
        blanksAndCorrect.push("_");
    }

    
    document.getElementById("currentword").innerHTML = "  " + blanksAndCorrect.join("  ");

  
    console.log(randomWord);
    console.log(lettersOfWord)
    console.log(blanks)
    console.log(blanksAndCorrect)
}




function aud() {
    
   
    if (randomWord === words[0]) {
    
        document.getElementById("image").src = "https://tse3.mm.bing.net/th?id=OIP.IllIbmEimW_poDtwrjHJLQHaE7&pid=Api&P=0&w=242&h=162";
    }
    else if (randomWord === words[1]) {
        
        document.getElementById("image").src = "https://usatbroncoswire.files.wordpress.com/2019/08/drew-lock-injury-5.jpg?w=1024&h=576&crop=1";
    }
    else if (randomWord === words[2]) {
        
        document.getElementById("image").src = "https://www.mcall.com/resizer/NmcX67DuPXA3L7tq08sWZKRJ7wc=/1200x0/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/PMAWGX2OSFEKLKVWRYZE7USGUI.jpg";
    }
    else if (randomWord === words[3]) {
        
        document.getElementById("image").src = "https://images.complex.com/complex/image/upload/c_fill,g_center,w_1200/fl_lossy,pg_1/dlr5ygedmtnp706285tn.jpg";
    }
    else if (randomWord === words[4]) {
        
        document.getElementById("image").src = "https://ftks732kpvy18zwzc2s17egw-wpengine.netdna-ssl.com/wp-content/uploads/2015/09/Von-Miller-Sack-Dance-2.jpg";
    }
    else if (randomWord === words[5]) {
        
        document.getElementById("image").src = "https://tse1.mm.bing.net/th?id=OIP.ADCx15dRlD-mnKEunD7-7AHaE3&pid=Api&P=0&w=237&h=157";
    }
    else if (randomWord === words[6]) {
        
        document.getElementById("image").src = "https://sportshub.cbsistatic.com/i/r/2017/09/18/5845958d-9972-478e-b2a9-b0136dcf0c8d/thumbnail/770x433/285d8b6674e821341fcd7a04e913ac77/aqib-talib.jpg";
    }
}

//__________________________________________________________
//RESET FUNCTION
//__________________________________________________________
function reset() {
    guessesRemaining = 9;
    wrongGuess = [];
    blanksAndCorrect = [];
    Game()
}

//__________________________________________________________
//CHECK LETTERS/COMPARE FUNCTION
//__________________________________________________________

//If/Else, to see if letter selected matches random word
function checkLetters(letter) {
    var letterInWord = false;
    //if the generated randomword is equal to the letter entered... then variable is true
    for (var i = 0; i < blanks; i++) {
        if (randomWord[i] == letter) {
            letterInWord = true;
        }
    }
    //if letterInWord (false)
    if (letterInWord) {
        //check each letter to see if it matches word
        for (var i = 0; i < blanks; i++) {
            if (randomWord[i] == letter) {
                blanksAndCorrect[i] = letter;
            }
        }
    }
    //otherwise, push the incorrect guess in the wrong guesses section, and reduce remaining guesses
    else {
        wrongGuess.push(letter);
        guessesRemaining--;
    }
    console.log(blanksAndCorrect);
}

//__________________________________________________________
//FINAL COMPLETE FUNCTION
//__________________________________________________________

//check to see if player won...
function complete() {
    console.log("wins:" + wins + "| losses:" + losses + "| guesses left:" + guessesRemaining)

    //if WON...then alert, play audio, display image and reset new round
    if (lettersOfWord.toString() == blanksAndCorrect.toString()) {
        wins++;
        aud()
        reset()
        //display wins on screen
        document.getElementById("winstracker").innerHTML = " " + wins;

        //if LOST...then alert and reset new round
    } else if (guessesRemaining === 0) {
        losses++;
        reset()
        document.getElementById("image").src = "./assets/images/try-again.png"
        document.getElementById("losstracker").innerHTML = " " + losses;
    }
    //display losses on screen && guesses remaining countdown
    document.getElementById("currentword").innerHTML = "  " + blanksAndCorrect.join(" ");
    document.getElementById("guessesremaining").innerHTML = " " + guessesRemaining;
}


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//_____________________________________________________
// EXECUTE CODE 
//_____________________________________________________

//call start game function
Game()

//check for keyup, and convert to lowercase then store in guesses
document.onkeyup = function (event) {
    var guesses = String.fromCharCode(event.keyCode).toLowerCase();
    //check to see if guess entered matches value of random word
    checkLetters(guesses);
    //process wins/loss 
    complete();
    //store player guess in console for reference 
    console.log(guesses);

    //display/store incorrect letters on screen
    document.getElementById("playerguesses").innerHTML = "  " + wrongGuess.join(" ");
}