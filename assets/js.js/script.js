// Create questions and answers
var myQuestions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ['Strings', 'Boolean', 'Alerts', 'Numbers'],
        correctAnswer: 'Alerts'
    },
    {
        title: "Arrays in JavaScript can be used to store _____.",
        choices: ['Numbers & Strings', 'Other Arrays', 'Booleans', 'All of the above'],
        correctAnswer: 'All of the above'
    },
    {
        title: "String values must be enclosed within _____ when being assigned to variables.",
        choices: ['Commas', 'Curly Brackets', 'Quotes', 'Parentheses'],
        correctAnswer: 'Quotes'
    },
    {
        title: "The condition of an if / else statement is inclosed in _____.",
        choices: ['Square Brackets', 'Curly Brackets', 'Quotes', 'Parentheses'],
        correctAnswer: 'Parantheses'
    },
    {
        title: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ['JavaScript', 'Terminal / Bash', 'For Loops', 'Console Log'],
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
var questionWrapper = document.querySelector("#question-wrapper")
var timerCount;
var timeLeft = 30;
var questionTitle = document.querySelector("#question-title");
var startScreen = document.querySelector("#start-screen")
var questionCounter = 0;
var answerChoices = document.querySelector("#choices");
var finalScore = document.querySelector("#final-score");
var initials = document.querySelector("#initials");
var submitButton = document.querySelector("#submit");

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

        if(questionCounter >= myQuestions.length) {
            clearInterval(timeInterval)
        }
    }, 1000);
}

function hideStart() {
    startScreen.setAttribute("style", "display: none;");
    getQuestion();
}

startButton.addEventListener('click', function () {
    startTimer();
    hideStart();
})

function getQuestion() {
    var currentQuestion = myQuestions[questionCounter];
    questionTitle.textContent = currentQuestion.title;
    questionWrapper.removeAttribute("class", "hide")
    answerChoices.innerHTML = " "
    currentQuestion.choices.forEach(function (choice) {
        var choiceButton = document.createElement("button")
        choiceButton.textContent = choice;
        choiceButton.setAttribute("value", choice);
        // add click event here to check answer
        choiceButton.onclick = checkAnswer;
        answerChoices.append(choiceButton)
    })
}

// Attach event listener to start button to call startGame function on click
function checkAnswer() {
    if (this.value === myQuestions[questionCounter].correctAnswer) {
        console.log("Correct!")
    } else {
        console.log("incorrect")
        timeLeft = timeLeft - 5;
        timeEl.textContent = timeLeft;
    }
    questionCounter++
    if (questionCounter === myQuestions.length) {
        showEnd()
    } else {
        getQuestion();
    }
}

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
    var endScreen = document.querySelector("#end-screen")
    questionWrapper.setAttribute("class", "hide");
    endScreen.removeAttribute("class", "hide");
    finalScore.textContent = timeLeft;
}

function submitScore() {

var scoreArray = JSON.parse(localStorage.getItem("scores"))||[];
var newScore = {
    name: initials.value, 
    score: timeLeft
}
scoreArray.push(newScore)
localStorage.setItem("scores", JSON.stringify(scoreArray))
// Only add the index of score array.length -1 
}




submitButton.onclick=submitScore