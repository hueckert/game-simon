// variables
//----------------------
const colors = ['blue', 'red', 'yellow', 'green']
var gamePattern = []
var userClickedPattern = []
var level = 0
var start = false

// functions
//-------------------
//animation of button when pressed "linked" on css
function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4)
    var randomColor = colors[randomNumber]
    gamePattern.push(randomColor)
    // testing to make sure it worked
    //console.log(gamePattern)
}

//make sound when pressed

// create pattern

//event handlers
//---------------------

//press any key to start

//mouse click for userclinckedPattern

$('.btn').on("click", function(event) {
    var userClickedButtonColor = event.target.id

    userClickedPattern.push(userClickedButtonColor)
    //testing
    //console.log(userClickedPattern)
})

// animation and sound when button is clicked



// to check if the userClickedPattern is equal to gamePattern

// if true, run code to go to next level

// if reach level 10 YOU WIN!!

// youWin and reset game

// if there is a difference between userClickedPattern and gamePattern

//gameOver and reset game

