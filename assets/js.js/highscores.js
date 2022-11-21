function displayScores() {
    var scoreArray = JSON.parse(localStorage.getItem("scores"))||[];
    scoreArray.forEach(function(score) {
    var scoreItem = document.createElement("li")
    var orderedList = document.querySelector("#scoreList")
    scoreItem.textContent = score.name + " - " + score.score
    orderedList.append(scoreItem);
    })
    }
    displayScores();