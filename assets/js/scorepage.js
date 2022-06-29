var userScoreContainer = document.getElementById("user-score");

var finalScore = localStorage.getItem("currentScore")

userScoreContainer.textContent = "Final Score: " + finalScore;