//Variables
var startButton = document.getElementById("startButton");
var startContainer = document.getElementById("startContainer");
var questionContainer = document.getElementById("questionContainer");
var title = document.getElementById("title");
const choiceButton0 = document.getElementById("choiceButton0");
const choiceButton1= document.getElementById("choiceButton1");
const choiceButton2 = document.getElementById("choiceButton2");
const choiceButton3 = document.getElementById("choiceButton3");
var currentQuestion = 0;
var score = 0;


startButton.addEventListener("click", startQuiz);


function startQuiz(){
    startContainer.style.display = "none";
    renderQuestion();
    questionContainer.style.display = "block";
    timedCountdown();
   //var lastQuestion = 
    console.log(lastQuestion);
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
            choiceButton0.style.color = "black";
            score++;
        } else {
            choiceButton0.style.backgroundColor = "#dc3545";
        } 
    }else if( answerId === 1) {
        if(choiceButton1.textContent === questions[currentQuestion].answer){
            choiceButton1.style.backgroundColor = "#28a745";
            choiceButton1.style.color = "black";
            score++;
        } else {
            choiceButton1.style.backgroundColor = "#dc3545";
        }
    }else if( answerId === 2) {
        if(choiceButton2.textContent === questions[currentQuestion].answer){
            choiceButton2.style.backgroundColor = "#28a745";
            choiceButton2.style.color = "black";
            score++;
        } else {
            choiceButton2.style.backgroundColor = "#dc3545";
        }
    }else if( answerId === 3) {
        if(choiceButton3.textContent === questions[currentQuestion].answer){            
            choiceButton3.style.backgroundColor = "#28a745";
            choiceButton3.style.color = "black";
            score++;
        } else {
            choiceButton3.style.backgroundColor = "#dc3545";
        }
    }

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
    setInterval(timedCountdown2,2000);
}

//Timer section
var countdown = 100;
var t;
var timer_is_on = 0;
var counter;

function afterTimeOut() {
    switch (answerId) {
        case 0:
            choiceButton0.style.backgroundColor = "#007bff";
          break;
        case 1:
            choiceButton1.style.backgroundColor = "#007bff";
          break;
        case 2:
            choiceButton2.style.backgroundColor = "#007bff";
          break;
        case 3:
            choiceButton3.style.backgroundColor = "#007bff";
          break;  
        default:
            choiceButton0.style.backgroundColor = "#007bff";
            choiceButton1.style.backgroundColor = "#007bff";
            choiceButton2.style.backgroundColor = "#007bff";
            choiceButton3.style.backgroundColor = "#007bff";
      }
  
}

function count() {
  document.getElementById("txtCountdown").innerHTML = "Time: " + countdown;
  countdown--;
}

function startIntervaln() {
  if (!timer_is_on) {
    timer_is_on = 1;
  }
  counter = setInterval(count,1000);
}

function startTimeOut() {
    t = setTimeout(timedCountdown, 1000);
}

function stopInterval() {
  timer_is_on = 0;
  clearInterval(counter);
}

function stopTimeOut() {
    clearTimeout(t);
}
//Audio section

var x = document.getElementById("myAudio"); 

function playAudio() { 
  x.play(); 
} 

//This is a comment
/*This is a 
comment*/