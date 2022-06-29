// Global variables
var startButton = document.getElementById("start-button");
console.log(startButton);
var startTitle = document.getElementById("start-title");
var startDescription = document.getElementById("start-description");
var response = document.getElementById("disp");

// Buttons used on webpage
var q1Option1 = document.createElement("button");
var q1Option2 = document.createElement("button");
var q1Option3 = document.createElement("button");
var q1Option4 = document.createElement("button");
var q2Option1 = document.createElement("button");
var q2Option2 = document.createElement("button");
var q2Option3 = document.createElement("button");
var q2Option4 = document.createElement("button");
var q3Option1 = document.createElement("button");
var q3Option2 = document.createElement("button");
var q3Option3 = document.createElement("button");
var q3Option4 = document.createElement("button");
var q4Option1 = document.createElement("button");
var q4Option2 = document.createElement("button");
var q4Option3 = document.createElement("button");
var q4Option4 = document.createElement("button");

// Variable used to hold response of "correct" or "wrong"
var checkAnswer = document.createElement("div");

// Attaching the response to the webpage
response.appendChild(checkAnswer);

// function that is accessed when "start" button is clicked
// enters into the function used to generate question 1
function strtBtn(event) {
    // enters into the function used to generate question 1
    quesOne(event);
    // Starts the timer in the header
    clock();
}

// Sets the initial time for the timer
var timeLeft = 60;

// Attaches the time to the header
var timer = document.getElementById("timer");

// Function used to generate timer
function clock() {
    // setInterval function is used to generate timer
    setInterval(function() {
        // Counts down if time left on timer is more than 1
        if (timeLeft > 1) {
            timeLeft--;
            timer.textContent = timeLeft + ' seconds left.';
        // Changes the text when there is 1 second left on timer.
        } else if (timeLeft === 1) {
            timeLeft--;
            timer.textContent = timeLeft + ' second left.'
        // Alerts user when there are no seconds left.
        } else {
            timer.textContent = 'Times up!'
            scorePage();
        }
    }, 1000); 
}

// Sets users current score to 0
var currentScore = 0;

// Function used to generate first question
function quesOne(event) {
    // Text display
    startButton.style = "display: none;"
    startTitle.textContent = "Which syntax is a string written in?";
    startDescription.textContent = "";
    q1Option1.textContent = "A) []";
    q1Option2.textContent = "B) //";
    q1Option3.textContent = "C) ' '";
    q1Option4.textContent = "D) ()";

    // Attaching text to page
    startDescription.appendChild(q1Option1);
    startDescription.appendChild(q1Option2);
    startDescription.appendChild(q1Option3);
    startDescription.appendChild(q1Option4);
    startButton = document.createElement('h1');
    startDescription.appendChild(startButton);

    // Styling text
    q1Option1.setAttribute("style", "display: flex; background-color: #100767; color: white; border-radius: 5px; font-size: large; width: 30%;");
    q1Option2.setAttribute("style", "display: flex; background-color: #100767; color: white; border-radius: 5px; font-size: large; width: 30%;");
    q1Option3.setAttribute("style", "display: flex; background-color: #100767; color: white; border-radius: 5px; font-size: large; width: 30%;");
    q1Option4.setAttribute("style", "display: flex; background-color: #100767; color: white; border-radius: 5px; font-size: large; width: 30%;");  
    
    // If any answer buttons are clicked, code moves to question 2 function
    if (event.target.textContent === q1Option1.textContent) {
        quesTwo(event);
    } else if (event.target.textContent === q1Option2.textContent) {
        quesTwo(event);
    } else if (event.target.textContent === q1Option3.textContent) {
        quesTwo(event);
    } else if (event.target.textContent === q1Option4.textContent) {
        quesTwo(event);
    } 
}


function quesTwo(event) {
    startTitle.textContent = "How do you define an empty array named myArray?";
    startDescription.textContent = "";
    // console.log(response);

    q2Option1.textContent = "A) var myArray = [];";
    q2Option2.textContent = "B) myArray == []";
    q2Option3.textContent = "C) Array myArray = ();";
    q2Option4.textContent = "D) Array myArray = ()";
    
    startDescription.appendChild(q2Option1);
    startDescription.appendChild(q2Option2);
    startDescription.appendChild(q2Option3);
    startDescription.appendChild(q2Option4);

    q2Option1.setAttribute("style", "display: flex; background-color: #100767; color: white; border-radius: 5px; font-size: large; width: 30%;");
    q2Option2.setAttribute("style", "display: flex; background-color: #100767; color: white; border-radius: 5px; font-size: large; width: 30%;");
    q2Option3.setAttribute("style", "display: flex; background-color: #100767; color: white; border-radius: 5px; font-size: large; width: 30%;");
    q2Option4.setAttribute("style", "display: flex; background-color: #100767; color: white; border-radius: 5px; font-size: large; width: 30%;");
    
    // console.log(q1Option1.textContent);
    // console.log(event.target.textContent === q1Option1.textContent);
    if (event.target.textContent === q2Option1.textContent) {
        quesThree(event);
    } else if (event.target.textContent === q2Option2.textContent) {
        quesThree(event);
    } else if (event.target.textContent === q2Option3.textContent) {
        quesThree(event);
    } else if (event.target.textContent === q2Option4.textContent) {
        quesThree(event);
    }

    if (event.target.textContent === q1Option1.textContent) {
        checkAnswer.textContent = "Wrong!"

        checkAnswer.setAttribute("style", "display: flex; color: grey; border-top: solid;");

        timeLeft = timeLeft - 10;

    } else if (event.target.textContent === q1Option2.textContent) {
        checkAnswer.textContent = "Wrong!";

        checkAnswer.setAttribute("style", "display: flex; color: grey; border-top: solid;");

        timeLeft = timeLeft - 10;

    } else if (event.target.textContent === q1Option3.textContent) {
        checkAnswer.textContent = "Correct!";

        checkAnswer.setAttribute("style", "display: flex; color: grey; border-top: solid;");

        currentScore = currentScore + 25;

        localStorage.setItem("quesOneScore", currentScore);

    } else if (event.target.textContent === q1Option4.textContent) {
        checkAnswer.textContent = "Wrong!";

        checkAnswer.setAttribute("style", "display: flex; color: grey; border-top: solid;");

        timeLeft = timeLeft - 10;
    }
}

function quesThree(event) {
    startTitle.textContent = "How do you define an empty function named myFunction?";
    startDescription.textContent = "";
    q3Option1.textContent = "A) myFunction";
    q3Option2.textContent = "B) function myFunction {}";
    q3Option3.textContent = "C) function myFunction () {}";
    q3Option4.textContent = "D) function = myFunction";

    startDescription.appendChild(q3Option1);
    startDescription.appendChild(q3Option2);
    startDescription.appendChild(q3Option3);
    startDescription.appendChild(q3Option4);

    q3Option1.setAttribute("style", "display: flex; background-color: #100767; color: white; border-radius: 5px; font-size: large; width: 30%;");
    q3Option2.setAttribute("style", "display: flex; background-color: #100767; color: white; border-radius: 5px; font-size: large; width: 30%;");
    q3Option3.setAttribute("style", "display: flex; background-color: #100767; color: white; border-radius: 5px; font-size: large; width: 30%;");
    q3Option4.setAttribute("style", "display: flex; background-color: #100767; color: white; border-radius: 5px; font-size: large; width: 30%;");

    if (event.target.textContent === q3Option1.textContent) {
        quesFour(event);
    } else if (event.target.textContent === q3Option2.textContent) {
        quesFour(event);
    } else if (event.target.textContent === q3Option3.textContent) {
        quesFour(event);
    } else if (event.target.textContent === q3Option4.textContent) {
        quesFour(event);
    }

    if (event.target.textContent === q2Option1.textContent) {
        checkAnswer.textContent = "Correct!"

        checkAnswer.setAttribute("style", "display: flex; color: grey; border-top: solid;");

        currentScore = currentScore + 25;

        localStorage.setItem("quesTwoScore", currentScore);

    } else if (event.target.textContent === q2Option2.textContent) {
        checkAnswer.textContent = "Wrong!";

        checkAnswer.setAttribute("style", "display: flex; color: grey; border-top: solid;");

        timeLeft = timeLeft - 10;

    } else if (event.target.textContent === q2Option3.textContent) {
        checkAnswer.textContent = "Wrong!";

        checkAnswer.setAttribute("style", "display: flex; color: grey; border-top: solid;");

        timeLeft = timeLeft - 10;

    } else if (event.target.textContent === q2Option4.textContent) {
        checkAnswer.textContent = "Wrong!";

        checkAnswer.setAttribute("style", "display: flex; color: grey; border-top: solid;");

        timeLeft = timeLeft - 10;
    }
}

function quesFour (event) {
    startTitle.textContent = "Which coding language plays the role of the brain of the webpage?";
    startDescription.textContent = "";
    q4Option1.textContent = "A) html";
    q4Option2.textContent = "B) javaScript";
    q4Option3.textContent = "C) css";
    q4Option4.textContent = "D) Webpages don't have brains.";

    startDescription.appendChild(q4Option1);
    startDescription.appendChild(q4Option2);
    startDescription.appendChild(q4Option3);
    startDescription.appendChild(q4Option4);

    q4Option1.setAttribute("style", "display: flex; background-color: #100767; color: white; border-radius: 5px; font-size: large; width: 30%;");
    q4Option2.setAttribute("style", "display: flex; background-color: #100767; color: white; border-radius: 5px; font-size: large; width: 30%;");
    q4Option3.setAttribute("style", "display: flex; background-color: #100767; color: white; border-radius: 5px; font-size: large; width: 30%;");
    q4Option4.setAttribute("style", "display: flex; background-color: #100767; color: white; border-radius: 5px; font-size: large; width: 30%;");

    if (event.target.textContent === q4Option1.textContent) {
        scorePage(event);
    } else if (event.target.textContent === q4Option2.textContent) {
        scorePage(event);
    } else if (event.target.textContent === q4Option3.textContent) {
        scorePage(event);
    } else if (event.target.textContent === q4Option4.textContent) {
        scorePage(event);
    }

    if (event.target.textContent === q3Option1.textContent) {
        checkAnswer.textContent = "Wrong!"

        checkAnswer.setAttribute("style", "display: flex; color: grey; border-top: solid;");

        timeLeft = timeLeft - 10;

    } else if (event.target.textContent === q3Option2.textContent) {
        checkAnswer.textContent = "Wrong!";

        checkAnswer.setAttribute("style", "display: flex; color: grey; border-top: solid;");

        timeLeft = timeLeft - 10;

    } else if (event.target.textContent === q3Option3.textContent) {
        checkAnswer.textContent = "Correct!";

        checkAnswer.setAttribute("style", "display: flex; color: grey; border-top: solid;");

        currentScore = currentScore + 25;

        localStorage.setItem("quesThreeScore", currentScore);

    } else if (event.target.textContent === q3Option4.textContent) {
        checkAnswer.textContent = "Wrong!";

        checkAnswer.setAttribute("style", "display: flex; color: grey; border-top: solid;");

        timeLeft = timeLeft - 10;
    }    
}
var score = document.createElement("p");
var initialsContainer = document.createElement("div");
var initialsLabel = document.createElement("span");
var initialsPromp = document.createElement("textarea");
var submitSection = document.createElement("div");
var submitButton = document.createElement("button");

var quizTimer = document.getElementById("time");

function scorePage(event) {
    startTitle.textContent = "All done!";
    startDescription.textContent = "";
    checkAnswer.textContent = "";
    quizTimer.textContent = "Timer: 0 seconds left.";

    startDescription.appendChild(score);
    startDescription.appendChild(initialsContainer);
    initialsContainer.appendChild(initialsLabel);
    initialsContainer.appendChild(initialsPromp);
    startDescription.appendChild(submitSection);
    submitSection.appendChild(submitButton);

    submitButton.textContent = "Submit";
    submitButton.setAttribute("style", "background-color: #100767; color: white; border-radius: 5px; font-size: large; width: 20%;");
    // console.log(startDescription);

    score.textContent = "Score: " + currentScore;
    initialsLabel.textContent = "Initials: "
    // submitButton.setAttribute("style", "display: flex; align-items: center; width: 5%;");

    if (event.target.textContent === q4Option2.textContent) {
        currentScore = currentScore + 25;

        localStorage.setItem("quesFourScore", currentScore);

    } 
}

var finalScore = localStorage.getItem("quesFourScore");
var endScore = (finalScore).toString();
// console.log((finalScore).toString());

// var userScore = finalscores.getElementById("user-score");
// console.log(userScore);

// function submitBtn() {
//     window.location.href="finalscores.html";

//     userScore.textContent = endScore;
// }

startButton.addEventListener("click", strtBtn)
q1Option1.addEventListener("click", quesOne)
q1Option2.addEventListener("click", quesOne)
q1Option3.addEventListener("click", quesOne)
q1Option4.addEventListener("click", quesOne)
q2Option1.addEventListener("click", quesTwo)
q2Option2.addEventListener("click", quesTwo)
q2Option3.addEventListener("click", quesTwo)
q2Option4.addEventListener("click", quesTwo)
q3Option1.addEventListener("click", quesThree)
q3Option2.addEventListener("click", quesThree)
q3Option3.addEventListener("click", quesThree)
q3Option4.addEventListener("click", quesThree)
q4Option1.addEventListener("click", quesFour)
q4Option2.addEventListener("click", quesFour)
q4Option3.addEventListener("click", quesFour)
q4Option4.addEventListener("click", quesFour)
// submitButton.addEventListener("click", submitBtn)

