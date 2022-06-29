// Set variable to hold the container for user score
var userScoreContainer = document.getElementById("user-score");

// set a variable to the score in local storage
var finalScore = localStorage.getItem("currentScore")

// Display the score
userScoreContainer.textContent = "Final Score: " + finalScore;