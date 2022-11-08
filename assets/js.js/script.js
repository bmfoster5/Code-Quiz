// Create questions and answers
var myQuestions = [
    {
        title: "Commonly used data types DO NOT include:",
        choice: ['Strings', 'Boolean', 'Alerts', 'Numbers'],
        correctAnswer: 'Alerts'
    },
    {
        title: "Arrays in JavaScript can be used to store _____.",
        choice: ['Numbers & Strings', 'Other Arrays', 'Booleans', 'All of the above'],
        correctAnswer: 'All of the above'
    },
    {
        title: "String values must be enclosed within _____ when being assigned to variables.",
        choice: ['Commas', 'Curly Brackets', 'Quotes', 'Parentheses'],
        correctAnswer: 'Quotes'
    },
    {
        title: "The condition of an if / else statement is inclosed in _____.",
        choice: ['Square Brackets', 'Curly Brackets', 'Quotes', 'Parentheses'],
        correctAnswer: 'Parantheses'
    },
    {
        title: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choice: ['JavaScript', 'Terminal / Bash', 'For Loops', 'Console Log'],
        correctAnswer: 'Console Log'
    }

]

// Show questions on page
var quizBox = document.getElementById("questions");
var scoreboard = document.getElementById("end-screen");


// Create variables for functionality
var finalScore = document.querySelector(".scores");
var mainEl = document.getElementById("wrapper");
var startButton = document.getElementById("start");
var timeEl = document.getElementById("time");
var scoreCounter = 0;
var scoreTracker = 0;
var timer;
var timerCount;

var questionCounter = 0;

// Load page
function init() {
    getScores();
}

// Create function to begin Quiz
function startQuiz() {
    timerCount = 30;
    startButton.disabled = true;
    startTimer()
}

// Set function timer after quiz begins
function startTimer() {
    var timeLeft = 30;

    var timeInterval = setInterval(function () {

        if (timeLeft > 1) {
            timeEl.textContent = timeLeft + ' seconds remaining';
            timeLeft--;
        } else if (timeLeft === 1) {
            timeEl.textContent = timeLeft + ' second remaining';
            timeLeft--;
        } else {
            timeEl.textContent = timeLeft + ' seconds remaining';
            timeLeft = 0;
            ;
        }
    }, 1000);
}

function hideStart() {
    var wrapper = document.querySelector(".wrapper");
    wrapper.setAttribute("style", "display: none;");
}

startButton.addEventListener('click', function () {
    startTimer();
    hideStart();
})

// function getQuestion() {
//     var currentQuestion = myQuestions[questionCounter];
//     for (var i = 0; i < myQuestions.length; i++) {
//         myQuestions.choice.
// }
// }

// Attach event listener to start button to call startGame function on click

// Call next question and check answer
choice.addEventListener("click", function () {
    if (choice === correctAnswer) {
        getQuestion();
    } else {
        getQuestion();
        timeLeft - 5;
    }
})





// Create function to store Highscores
function getScores() {
    scoreTracker = localStorage.getItem("scores");
    if (scoreTracker === null) {
        scoreCounter = o;
    } else {
        scoreCounter = scoreTracker;
    }
    getScores.textContent = scoreCounter;
}


// Create function for end game
function showScores() {
    var heldScore = JSON.parse(localStorage.getItem("score"));

    questionScreen.setAttribute("class", "hide");
    endScreen.setAttribute("class", "hide");
    highscoreScreen.classlist.remove("hide");

    highscoreScreen = true;

    // create list of scores from local storage
    for (var i = 0; i < heldScore.length; i++) {
        console.log(heldScore[i]);
    }
}

function showEnd() {
    var endScreen = document.getElementById("end-screen")
    if (endScreen = null)
    
}