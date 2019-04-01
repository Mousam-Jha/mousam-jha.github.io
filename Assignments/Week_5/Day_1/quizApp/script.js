'use strict';


var questionArray = [];
var currentQuestionIndex = 0;
var counter = 10;
var timer;


var loadData = function() {
    var request = new XMLHttpRequest();
    request.open("get","quiz.json");
    request.send();
    request.onreadystatechange = function(){
        if(request.readyState == 4 && request.status == 200) {
            questionArray = JSON.parse(request.responseText);
            showQuestion();
        }
    };
};

var timerFunction = function() {
    if(counter != 0) {
        var counterElement = document.getElementById("counter");
        counterElement.innerText= counter;
        counter = counter - 1;
    } else if(counter == 0) {
        alert("Sorry, time out.");
        clearInterval(timer);
    }
}

var showQuestion = function () {
    currentQuestionIndex = Math.floor(Math.random() * 10);
    var questionElement = document.getElementById("question");
    questionElement.innerText = questionArray[currentQuestionIndex].question;

    timer = setInterval(timerFunction,1000);
};

var button = document.getElementById("button");
var answerSubmitted = function() {
    var answer = document.getElementById("input").value;

    if(answer == "") {
        alert("Please enter an answer.");
        return;
    }


    if(answer == questionArray[currentQuestionIndex].answer) {
        alert("Right Answer ! Congrulations !!!");
    } else {
        alert("Wrong Answer !");
    }
};

button.addEventListener("click",answerSubmitted);

loadData();