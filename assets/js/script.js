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

// function that sets page and functioning for question 2
function quesTwo(event) {
    // Set header on page
    startTitle.textContent = "How do you define an empty array named myArray?";
    startDescription.textContent = "";

    // Set text for answer options
    q2Option1.textContent = "A) var myArray = [];";
    q2Option2.textContent = "B) myArray == []";
    q2Option3.textContent = "C) Array myArray = ();";
    q2Option4.textContent = "D) Array myArray = ()";
    
    // append text to buttons
    startDescription.appendChild(q2Option1);
    startDescription.appendChild(q2Option2);
    startDescription.appendChild(q2Option3);
    startDescription.appendChild(q2Option4);

    // Style text for answer buttons
    q2Option1.setAttribute("style", "display: flex; background-color: #100767; color: white; border-radius: 5px; font-size: large; width: 30%;");
    q2Option2.setAttribute("style", "display: flex; background-color: #100767; color: white; border-radius: 5px; font-size: large; width: 30%;");
    q2Option3.setAttribute("style", "display: flex; background-color: #100767; color: white; border-radius: 5px; font-size: large; width: 30%;");
    q2Option4.setAttribute("style", "display: flex; background-color: #100767; color: white; border-radius: 5px; font-size: large; width: 30%;");
    
    // Have page go to question 3 content if any answer option is selected
    if (event.target.textContent === q2Option1.textContent) {
        quesThree(event);
    } else if (event.target.textContent === q2Option2.textContent) {
        quesThree(event);
    } else if (event.target.textContent === q2Option3.textContent) {
        quesThree(event);
    } else if (event.target.textContent === q2Option4.textContent) {
        quesThree(event);
    }

    // If user selects first option on question 1,
    if (event.target.textContent === q1Option1.textContent) {
        // Display "wrong" on question 2 page
        checkAnswer.textContent = "Wrong!"

        // Style "wrong"
        checkAnswer.setAttribute("style", "display: flex; color: grey; border-top: solid;");

        // Deduct 10 seconds from time
        timeLeft = timeLeft - 10;

    } 
    
    // If user selects second option on question 1,
    else if (event.target.textContent === q1Option2.textContent) {
        // Display "wrong" on question 2 page
        checkAnswer.textContent = "Wrong!";

        // Style "wrong"
        checkAnswer.setAttribute("style", "display: flex; color: grey; border-top: solid;");

        // Deduct 10 seconds from time
        timeLeft = timeLeft - 10;

    } 
    
    // If user selects third option on question 1,
    else if (event.target.textContent === q1Option3.textContent) {
        // display "correct" on question 2 page
        checkAnswer.textContent = "Correct!";

        // Style "correct"
        checkAnswer.setAttribute("style", "display: flex; color: grey; border-top: solid;");

        // Add 25 points to score
        currentScore = currentScore + 25;

        // Set points to currentScore in localStorage
        localStorage.setItem("currentScore", currentScore);

    } 
    // If user selects fourth option on question 1,
    else if (event.target.textContent === q1Option4.textContent) {
        // display "wrong" on screen
        checkAnswer.textContent = "Wrong!";

        // style "wrong"
        checkAnswer.setAttribute("style", "display: flex; color: grey; border-top: solid;");

        // Deduct 10 seconds from time
        timeLeft = timeLeft - 10;
    }
}

// function that generates third question
function quesThree(event) {
    // Third question
    startTitle.textContent = "How do you define an empty function named myFunction?";
    startDescription.textContent = "";
    
    // Text for answer options
    q3Option1.textContent = "A) myFunction";
    q3Option2.textContent = "B) function myFunction {}";
    q3Option3.textContent = "C) function myFunction () {}";
    q3Option4.textContent = "D) function = myFunction";

    // Append text to buttons
    startDescription.appendChild(q3Option1);
    startDescription.appendChild(q3Option2);
    startDescription.appendChild(q3Option3);
    startDescription.appendChild(q3Option4);

    // Style buttons
    q3Option1.setAttribute("style", "display: flex; background-color: #100767; color: white; border-radius: 5px; font-size: large; width: 30%;");
    q3Option2.setAttribute("style", "display: flex; background-color: #100767; color: white; border-radius: 5px; font-size: large; width: 30%;");
    q3Option3.setAttribute("style", "display: flex; background-color: #100767; color: white; border-radius: 5px; font-size: large; width: 30%;");
    q3Option4.setAttribute("style", "display: flex; background-color: #100767; color: white; border-radius: 5px; font-size: large; width: 30%;");

    // Have page go to question 4 if any answer option is clicked
    if (event.target.textContent === q3Option1.textContent) {
        quesFour(event);
    } else if (event.target.textContent === q3Option2.textContent) {
        quesFour(event);
    } else if (event.target.textContent === q3Option3.textContent) {
        quesFour(event);
    } else if (event.target.textContent === q3Option4.textContent) {
        quesFour(event);
    }

    // If user clicks first option on question 2,
    if (event.target.textContent === q2Option1.textContent) {
        // Display "correct" on question 3 page
        checkAnswer.textContent = "Correct!"

        // Style response
        checkAnswer.setAttribute("style", "display: flex; color: grey; border-top: solid;");

        // Add points to score
        currentScore = currentScore + 25;

        // Store current user score in local storage
        localStorage.setItem("currentScore", currentScore);

    } 
    
    // If user clicks second option on question 2,
    else if (event.target.textContent === q2Option2.textContent) {
        // Display "wrong" on question 3 page
        checkAnswer.textContent = "Wrong!";

        // Style response
        checkAnswer.setAttribute("style", "display: flex; color: grey; border-top: solid;");

        // deduct 10 seconds from time
        timeLeft = timeLeft - 10;

    } 
    
    // If user clicks third option on question 2,
    else if (event.target.textContent === q2Option3.textContent) {
        // Display "wrong" on question 3 page
        checkAnswer.textContent = "Wrong!";

        // Style response
        checkAnswer.setAttribute("style", "display: flex; color: grey; border-top: solid;");

        // deduct 10 seconds from time
        timeLeft = timeLeft - 10;

    } 
    
    // If user clicks fourth option on question 2,
    else if (event.target.textContent === q2Option4.textContent) {
        // Display "wrong" on question 3 page
        checkAnswer.textContent = "Wrong!";

        // Style response
        checkAnswer.setAttribute("style", "display: flex; color: grey; border-top: solid;");

        // deduct 10 seconds from time
        timeLeft = timeLeft - 10;
    }
}

// function that generates page for question 4
function quesFour (event) {
    // Question 4
    startTitle.textContent = "Which coding language plays the role of the brain of the webpage?";
    startDescription.textContent = "";

    // Text for nswer options
    q4Option1.textContent = "A) html";
    q4Option2.textContent = "B) javaScript";
    q4Option3.textContent = "C) css";
    q4Option4.textContent = "D) Webpages don't have brains.";

    // Append text to buttons
    startDescription.appendChild(q4Option1);
    startDescription.appendChild(q4Option2);
    startDescription.appendChild(q4Option3);
    startDescription.appendChild(q4Option4);

    // Style text
    q4Option1.setAttribute("style", "display: flex; background-color: #100767; color: white; border-radius: 5px; font-size: large; width: 30%;");
    q4Option2.setAttribute("style", "display: flex; background-color: #100767; color: white; border-radius: 5px; font-size: large; width: 30%;");
    q4Option3.setAttribute("style", "display: flex; background-color: #100767; color: white; border-radius: 5px; font-size: large; width: 30%;");
    q4Option4.setAttribute("style", "display: flex; background-color: #100767; color: white; border-radius: 5px; font-size: large; width: 30%;");

    // Send user to score page if any answer option is selected
    if (event.target.textContent === q4Option1.textContent) {
        scorePage(event);
    } else if (event.target.textContent === q4Option2.textContent) {
        scorePage(event);
    } else if (event.target.textContent === q4Option3.textContent) {
        scorePage(event);
    } else if (event.target.textContent === q4Option4.textContent) {
        scorePage(event);
    }

    // If option 1 on question 3 was selected
    if (event.target.textContent === q3Option1.textContent) {
        // display response
        checkAnswer.textContent = "Wrong!"

        // style response
        checkAnswer.setAttribute("style", "display: flex; color: grey; border-top: solid;");

        // deduct 10 seconds from time
        timeLeft = timeLeft - 10;

    } 
    
    // If option 2 on question 3 was selected
    else if (event.target.textContent === q3Option2.textContent) {
        // display response
        checkAnswer.textContent = "Wrong!";

        // style response
        checkAnswer.setAttribute("style", "display: flex; color: grey; border-top: solid;");

        // Deduct 10 seconds from time
        timeLeft = timeLeft - 10;

    } 
    
    // If option 3 on question 3 was selected
    else if (event.target.textContent === q3Option3.textContent) {
        // display repsonse
        checkAnswer.textContent = "Correct!";

        // style response
        checkAnswer.setAttribute("style", "display: flex; color: grey; border-top: solid;");

        // add 25 points to score
        currentScore = currentScore + 25;

        // store score in local storage
        localStorage.setItem("currentScore", currentScore);
    } 
    
    // If option 4 on question 3 was selected
    else if (event.target.textContent === q3Option4.textContent) {
        // diplay response
        checkAnswer.textContent = "Wrong!";

        // style response
        checkAnswer.setAttribute("style", "display: flex; color: grey; border-top: solid;");

        // deduct 10 seconds from time
        timeLeft = timeLeft - 10;
    }    
}

// Create elements for score page
var score = document.createElement("p");
var initialsContainer = document.createElement("div");
var initialsLabel = document.createElement("span");
var initialsPromp = document.createElement("textarea");
var submitSection = document.createElement("div");
var submitButton = document.createElement("button");

// assign a variable to the timer in the header
var quizTimer = document.getElementById("time");

// run function that generates score page
function scorePage(event) {
    // text at top
    startTitle.textContent = "All done!";
    startDescription.textContent = "";
    checkAnswer.textContent = "";
    
    // Stop timer
    quizTimer.textContent = "Timer: 0 seconds left.";

    // display score
    startDescription.appendChild(score);

    // attach created elements on html
    startDescription.appendChild(initialsContainer);
    initialsContainer.appendChild(initialsLabel);
    initialsContainer.appendChild(initialsPromp);
    startDescription.appendChild(submitSection);
    submitSection.appendChild(submitButton);

    // Submit button
    submitButton.textContent = "Submit";
    submitButton.setAttribute("style", "background-color: #100767; color: white; border-radius: 5px; font-size: large; width: 20%;");


    // If option 2 was selected on question 4,
    if (event.target.textContent === q4Option2.textContent) {
        // add 25 points to the score
        currentScore = currentScore + 25;

        // Store points in local storage
        localStorage.setItem("currentScore", currentScore);
    } 

    // Store current score as the score
    else {
        localStorage.setItem("currentScore", currentScore);
    }

    // Display score
    score.textContent = "Score: " + currentScore;

    // text for initials
    initialsLabel.textContent = "Initials: "
}

// set final score as the variable to hold the score
// var finalScore = localStorage.getItem("quesFourScore");

// function that is generated when submit button is clicked
function submitBtn() {
    // attach java to other html
    window.location.href="finalscores.html";
}

// Triggers functions when buttons are clicked
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
submitButton.addEventListener("click", submitBtn)

