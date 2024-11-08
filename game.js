// const and variables 
// -----------------------------------------------

const colors = ['blue', 'red', 'yellow', 'green'];
let gamePattern = [];
let userClickedPattern = [];
let level = 0;
let start = false;

// -----------------------------------------------
// FUNCTIONS
// -----------------------------------------------

// Render function to update the game header
function render(message) {
  const header = document.querySelector(".header");
  header.textContent = message || `Level ${level}`;
}

