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
            score++;
            answerResult.textContent = "Correct " + score + "/" + questions.length;
            answerResult.style.color = "green";
        } else {
            choiceButton0.style.backgroundColor = "#dc3545";
            wrongAudio.play();
            answerResult.textContent = "Wrong " + score + "/" + questions.length;
            answerResult.style.color = "red";
        } 
    }else if( answerId === 1) {
        if(choiceButton1.textContent === questions[currentQuestion].answer){
            choiceButton1.style.backgroundColor = "#28a745";
            correctAudio.play();
            score++;
            answerResult.textContent = "Correct " + score + "/" + questions.length;
            answerResult.style.color = "green";
        } else {
            choiceButton1.style.backgroundColor = "#dc3545";
            wrongAudio.play();
            answerResult.textContent = "Wrong " + score + "/" + questions.length;
            answerResult.style.color = "red";
        }
    }else if( answerId === 2) {
        if(choiceButton2.textContent === questions[currentQuestion].answer){
            choiceButton2.style.backgroundColor = "#28a745";
            correctAudio.play();
            score++;
            answerResult.textContent = "Correct " + score + "/" + questions.length;
            answerResult.style.color = "green";
        } else {
            choiceButton2.style.backgroundColor = "#dc3545";
            wrongAudio.play();
            answerResult.textContent = "Wrong " + score + "/" + questions.length;
            answerResult.style.color = "red";
        }
    }else if( answerId === 3) {
        if(choiceButton3.textContent === questions[currentQuestion].answer){            
            choiceButton3.style.backgroundColor = "#28a745";
            correctAudio.play();
            score++;
            answerResult.textContent = "Correct " + score + "/" + questions.length;
            answerResult.style.color = "green";
        } else {
            choiceButton3.style.backgroundColor = "#dc3545";
            wrongAudio.play();
            answerResult.textContent = "Wrong " + score + "/" + questions.length;
            answerResult.style.color = "red";
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
var t;
var countdown = 49;

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
        //scoreRender();
        //
    }
}

function count() {
  countdown--;
  document.getElementById("txtCountdown").innerHTML = "Time: " + countdown;
  if (countdown === 0){
    stopInterval();
    var txt;
    if (confirm("Sorry, You have not completed the quiz on time!\nWould you like to try again")) {
        window.location.reload();
    } else {
        window.close();
    }
  }
}

function startInterval() {
  counter = setInterval(count,1000);
}

function stopInterval() {
  clearInterval(counter);
}

//Local Storage section
function SortLocalStorage(){
    if(localStorage.length > 0){
       var localStorageArray = new Array();
       for (i=0;i<localStorage.length;i++){
           localStorageArray[i] = localStorage.key(i)+localStorage.getItem(localStorage.key(i));
       }
    }
    var sortedArray = localStorageArray.sort();
    return sortedArray;
 }
