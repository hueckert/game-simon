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