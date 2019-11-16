//Variables
var startButton = document.getElementById("startButton");
var startContainer = document.getElementById("startContainer");
var questionContainer = document.getElementById("questionContainer");
var title = document.getElementById("title");
const choiceButton0 = document.getElementById("choiceButton0");
const choiceButton1= document.getElementById("choiceButton1");
const choiceButton2 = document.getElementById("choiceButton2");
const choiceButton3 = document.getElementById("choiceButton3");
var wrongAudio = document.getElementById("wrongAudio");
var correctAudio = document.getElementById("correctAudio");
var answerResult = document.getElementById("answerResult");
var currentQuestion = 0;
var score = 0;


startButton.addEventListener("click", startQuiz);


function startQuiz(){
    startContainer.style.display = "none";
    renderQuestion();
    questionContainer.style.display = "block";
    startInterval();
}

function renderQuestion(){
    var q = questions[currentQuestion];
    title.innerHTML = q.title;
    choiceButton0.textContent = q.choices[0];
    choiceButton1.textContent = q.choices[1];
    choiceButton2.textContent = q.choices[2];
    choiceButton3.textContent = q.choices[3];
}

function checkAnswer(answerId){
    if( answerId === 0) {
        if(choiceButton0.textContent === questions[currentQuestion].answer){
            choiceButton0.style.backgroundColor = "#28a745";
            correctAudio.play();
            answerResult.textContent = "Correct";
            answerResult.style.color = "green";
            answerResult.style.fontSize = "bolder";
            score++;
        } else {
            choiceButton0.style.backgroundColor = "#dc3545";
            wrongAudio.play();
            answerResult.textContent = "Wrong";
        } 
    }else if( answerId === 1) {
        if(choiceButton1.textContent === questions[currentQuestion].answer){
            choiceButton1.style.backgroundColor = "#28a745";
            correctAudio.play();
            answerResult.textContent = "Correct";
            score++;
        } else {
            choiceButton1.style.backgroundColor = "#dc3545";
            wrongAudio.play();
            answerResult.textContent = "Wrong";
        }
    }else if( answerId === 2) {
        if(choiceButton2.textContent === questions[currentQuestion].answer){
            choiceButton2.style.backgroundColor = "#28a745";
            correctAudio.play();
            answerResult.textContent = "Correct";
            score++;
        } else {
            choiceButton2.style.backgroundColor = "#dc3545";
            wrongAudio.play();
            answerResult.textContent = "Wrong";
        }
    }else if( answerId === 3) {
        if(choiceButton3.textContent === questions[currentQuestion].answer){            
            choiceButton3.style.backgroundColor = "#28a745";
            correctAudio.play();
            answerResult.textContent = "Correct";
            score++;
        } else {
            choiceButton3.style.backgroundColor = "#dc3545";
            wrongAudio.play();
            answerResult.textContent = "Wrong";
        }
    }
    answerResult.style.display = "block";
    choiceButton0.disabled = true;
    choiceButton1.disabled = true;
    choiceButton2.disabled = true;
    choiceButton3.disabled = true;
    setTimeout(afterTimeOut, 1800);
}

//Timer section
var countdown = 100;
var t;
var timer_is_on = 0;
var counter;

function afterTimeOut() {

    choiceButton0.style.backgroundColor = "#007bff";
    choiceButton1.style.backgroundColor = "#007bff";
    choiceButton2.style.backgroundColor = "#007bff";
    choiceButton3.style.backgroundColor = "#007bff";
    choiceButton0.style.color = "white";
    choiceButton1.style.color = "white";
    choiceButton2.style.color = "white";
    choiceButton3.style.color = "white";
    choiceButton0.disabled = false;
    choiceButton1.disabled = false;
    choiceButton2.disabled = false;
    choiceButton3.disabled = false;
    answerResult.style.display = "none";

    if(currentQuestion < questions.length){
        currentQuestion++;
        console.log(currentQuestion);
        renderQuestion();
    }else{
        // end the quiz and show the score
        console.log(currentQuestion);
        console.log(typeof(currentQuestion));
        console.log(lastQuestion);
        console.log(typeof(lastQuestion));
        //scoreRender();
    }
}

function count() {
  document.getElementById("txtCountdown").innerHTML = "Time: " + countdown;
  countdown--;
}

function startInterval() {
  if (!timer_is_on) {
    timer_is_on = 1;
  }
  counter = setInterval(count,1000);
}

function stopInterval() {
  timer_is_on = 0;
  clearInterval(counter);
}

//Audio section

var x = document.getElementById("myAudio"); 

function playAudio() { 
  x.play(); 
} 

//This is a comment
/*This is a 
comment*/