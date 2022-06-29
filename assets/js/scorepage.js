// Set variable to hold the container for user score
var userScoreContainer = document.getElementById("user-score");

// set a variable to the score in local storage
var finalScore = localStorage.getItem("currentScore");

// set a variable to the initials in local storage
var currentInitials = localStorage.getItem("userInitials");

// Display the score
userScoreContainer.textContent = currentInitials + "-" + finalScore;

// Set variable to hold to container for user initials
var userInitialsContainer = document.getElementById("user-initials");

// Set variables to the go back and clear scores buttons
var goBack = document.getElementById("go-back");
var clearScores = document.getElementById("clear-scores");

// Set styles for buttons
goBack.setAttribute("style", "background-color: #100767; color: white; border-radius: 5px; font-size: large;");
clearScores.setAttribute("style", "background-color: #100767; color: white; border-radius: 5px; font-size: large;");

// Create a function that when generated will go back to the original html
function backToPage() {
    window.location.href="index.html";
}

// Create a function that when generated will clear the list
function clearList() {

}

// Attach the button to the function
goBack.addEventListener("click", backToPage);

