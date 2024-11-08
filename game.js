//variables and const
// -------------------------------------------

const colors = ['blue', 'red', 'yellow', 'green']
let gamePattern = []
let userClickedPattern = []
let level = 0;
let start = false;

// -----------------------------------------------
// FUNCTIONS
// -----------------------------------------------
function init() {
  gamePattern = []
  userClickedPattern = []
  level = 0;
  start = false;

 
  
    render("Press any key to start")
}

// Render function to update the game header
function render(message) {
  const header = document.querySelector(".header")
  header.textContent = message || `Level ${level}`
}

// Generate next pattern
function nextSequence() {
  const randomNumber = Math.floor(Math.random() * colors.length)
  const randomColor = colors[randomNumber]
  gamePattern.push(randomColor)
  render(`Level ${level}`) // Update header with current level
  console.log(nextSequence)
}

//animation of button
function animatePress(color) {
  const button = document.getElementById(color)
  button.classList.add("pressed")

  setTimeout(() => {
    button.classList.remove("pressed")
  }, 150)
}

//play sound
function playSound(color) {
  const audio = new Audio(`sounds/${color}.mp3`)
  audio.play()
}

// game pattern
function showGamePattern() {
  let index = 0;
  const pattern = setInterval(() => {
    if (index < gamePattern.length) {
      const currentColor = gamePattern[index]
      animatePress(currentColor)
      playSound(currentColor)
      index++
    } else {
      clearInterval(pattern)
    }
  }, 1000)
}

// Reset the game when the player wins
function youWin() {
  document.body.classList.add("win")
  render(`YOU WIN!! Level ${level}`)

  setTimeout(() => {
    init()  // Reset the game after showing the win message
  }, 5000)
}

// Handle game over
function gameOver() {
  document.body.classList.add("lose");
  render(`Game Over!! Level ${level}`);

  setTimeout(() => {
    init();  // Reset the game after showing the game-over message
  }, 5000);
}



// -----------------------------------------------
// EVENT HANDLERS
// -----------------------------------------------

// start of game by pressing any key
document.addEventListener("keypress", (event) => {
  if (!start) {
    start = true
    level = 1;  // Start at level 1
    nextSequence()
    showGamePattern()
    render(`Level ${level}`)
  }
})

// event listener for pressing any button
document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener("click", (event) => {
    if (start) {
      const userClickedButtonColor = event.target.id;

      // Animation and sound when a button is pressed
      animatePress(userClickedButtonColor)
      playSound(userClickedButtonColor)

      userClickedPattern.push(userClickedButtonColor)
    }
  })
})

//working so far




// Initial render to set header text
init()