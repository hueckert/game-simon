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
  var randomNumber = Math.floor(Math.random() * 4);
  var randomColor = colors[randomNumber];
  gamePattern.push(randomColor);
  // testing to make sure it worked
  //console.log(gamePattern)
}
  

function animatePress(color) {
    $("#" + color).addClass("pressed")
  
    setTimeout(function() {
      $("#" + color).removeClass("pressed")
    }, 100)
  }



  function playSound(color) {
    const audio = new Audio("sounds/" + color + ".mp3")
    audio.play()
    console.log("clicked")
  }

  function showGamePattern() {

    let start = 0
    let pattern = setInterval(thisFunction, 1000)
  
    function thisFunction() {
      if (start < gamePattern.length) {
        var currentcolor = gamePattern[start]
        animatePress(currentcolor)
        playSound(currentcolor)
        start++
      }
      else {
        clearInterval(pattern)
      }
    }
  }

$(document).on("keypress", function(event) {
    if (!start) {
        start = true
        nextSequence()
        console.log(gamePattern)
    }
})

// create the animation of the button pressed

$('.btn').on("click", function(event) {
    var userClickedButtonColor = event.target.id

    animatePress(userClickedButtonColor)
    playSound(userClickedButtonColor)

    userClickedPattern.push(userClickedButtonColor)
    //testing
    //console.log(userClickedPattern)
})



//make sound when pressed



// create pattern

//event handlers
//---------------------

//press any key to start

//mouse click for userclinckedPattern


// animation and sound when button is clicked



// to check if the userClickedPattern is equal to gamePattern

// if true, run code to go to next level

// if reach level 10 YOU WIN!!

// youWin and reset game

// if there is a difference between userClickedPattern and gamePattern

//gameOver and reset game

