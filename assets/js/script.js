// Global variables
var startButton = document.getElementById("start-button");
console.log(startButton);
var startTitle = document.getElementById("start-title");
var startDescription = document.getElementById("start-description");
console.log(startTitle.textContent);

// console.log(startBoxHeader);
//  var quesOne = "What is a comment?";
var option1 = document.createElement("button");
var option2 = document.createElement("button");
var option3 = document.createElement("button");
var option4 = document.createElement("button");

function btnClick() {
    //    document.getElementById("start-description").textContent = "hi";
    var currentHeader = startTitle.textContent;
    startButton.style = "display: none;"
    if (currentHeader === "Coding 101 Quiz") {
        startTitle.textContent = "Which syntax is a string written in?";
        startDescription.textContent = "";
        option1.textContent = "A) []";
        option2.textContent = "B) //";
        option3.textContent = "C) ' '";
        option4.textContent = "D) ()";

        startDescription.appendChild(option1);
        startDescription.appendChild(option2);
        startDescription.appendChild(option3);
        startDescription.appendChild(option4);
        startButton = document.createElement('h1');
        startDescription.appendChild(startButton);

        option1.setAttribute("style", "display: flex; background-color: #100767; color: white; border-radius: 5px; font-size: large; width: 30%;");
        option2.setAttribute("style", "display: flex; background-color: #100767; color: white; border-radius: 5px; font-size: large; width: 30%;");
        option3.setAttribute("style", "display: flex; background-color: #100767; color: white; border-radius: 5px; font-size: large; width: 30%;");
        option4.setAttribute("style", "display: flex; background-color: #100767; color: white; border-radius: 5px; font-size: large; width: 30%;");
    }

    else if (startTitle.textContent === "Which syntax is a string written in?") {
        startTitle.textContent = "How do you define an empty array named myArray?";
        startDescription.textContent = "";
        option1.textContent = "A) var myArray = [];";
        option2.textContent = "B) myArray == []";
        option3.textContent = "C) Array myArray = ();";
        option4.textContent = "D) Array myArray = ()";

        startDescription.appendChild(option1);
        startDescription.appendChild(option2);
        startDescription.appendChild(option3);
        startDescription.appendChild(option4);
    }

    else if (startTitle.textContent === "How do you define an empty array named myArray?") {
        startTitle.textContent = "How do you define an empty function named myFunction?";
        startDescription.textContent = "";
        option1.textContent = "A) myFunction";
        option2.textContent = "B) function myFunction {}";
        option3.textContent = "function myFunction () {}";
        option4.textContent = "function = myFunction";

        startDescription.appendChild(option1);
        startDescription.appendChild(option2);
        startDescription.appendChild(option3);
        startDescription.appendChild(option4);
    }

    else if (startTitle.textContent === "How do you define an empty function named myFunction?") {
        startTitle.textContent = "Which coding language plays the role of the brain of the webpage?";
        startDescription.textContent = "";
        option1.textContent = "A) html";
        option2.textContent = "B) javaScript";
        option3.textContent = "C) css";
        option4.textContent = "D) Webpages don't have brains.";

        startDescription.appendChild(option1);
        startDescription.appendChild(option2);
        startDescription.appendChild(option3);
        startDescription.appendChild(option4);
    }

    else if (startTitle.textContent === "Which coding language plays the role of the brain of the webpage?"){
        startTitle.textContent = "";
        startDescription.textContent = "";

        startTitle.textContent = "All done!";
        // document.createElement("div id='score'");
        console.log(startDescription);
        // var score = document

    }

    else {
        // go to other html file
    }
}
startButton.addEventListener("click", btnClick)
option1.addEventListener("click", btnClick)
option2.addEventListener("click", btnClick)
option3.addEventListener("click", btnClick)
option4.addEventListener("click", btnClick)

// Remove all elements except for element that contains start button

// Create a timer that will display in the header of the page that subtracts time when
// a question is answered incorrectly

// Add event listener that goes to next element when "start" button is clicked

// Add event listener that goes to next element when any answer option button
// is clicked and displays "right" or "wrong" on the bottom of next element
// and goes to element that displays scores and prompts user to input initials

// Add event listener that displays saved score and initials after "view scores" is clicked