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





// Initial render to set header text
init()