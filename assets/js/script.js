//Variables
var startButton = document.getElementById("startButton");
var startContainer = document.getElementById("startContainer");
var questionContainer = document.getElementById("questionContainer");
var finalscoreContainer = document.getElementById("finalscoreContainer");
var highscoreContainer = document.getElementById("highscoreContainer");
var viewHighscores = document.getElementById("viewHighscores");
var title = document.getElementById("title");
const choiceButton0 = document.getElementById("choiceButton0");
const choiceButton1= document.getElementById("choiceButton1");
const choiceButton2 = document.getElementById("choiceButton2");
const choiceButton3 = document.getElementById("choiceButton3");
var wrongAudio = document.getElementById("wrongAudio");
var correctAudio = document.getElementById("correctAudio");
var answerResult = document.getElementById("answerResult");
var finalscore = document.getElementById("finalscore");
var highscoresUl = document.querySelector("#highscoresUl");
var initial = document.getElementById("initial");
var initialSubmit = document.getElementById("initialSubmit");
var goBackButton = document.getElementById("goBackButton");
var clearHighscoresButton = document.getElementById("clearHighscoresButton");
let highscoresArray = localStorage.getItem('hscore') ? JSON.parse(localStorage.getItem('hscore')) : [];
var currentQuestion = 0;
var score = 0;

localStorage.setItem('hscore', JSON.stringify(highscoresArray));
var data = JSON.parse(localStorage.getItem('hscore'));

startButton.addEventListener("click", startQuiz);

function startQuiz(){
    startContainer.style.display = "none";
    viewHighscores.disabled = true;
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
var countdown = 20;

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

    if((currentQuestion + 1) < questions.length){
        currentQuestion++;
        renderQuestion();
    }else{
        stopInterval();
        scoreRender();
    }
}

function scoreRender(){
    questionContainer.style.display = "none";
    finalscoreContainer.style.display = "block";
    finalscore.textContent = score; 
}

function saveToLocaleStorage(){
    var highscoresObj = {
        initials: initial.value.trim(),
        score: score
    };
    highscoresArray.push(highscoresObj);
    localStorage.setItem('hscore', JSON.stringify(highscoresArray));
    renderHighscores();
    
}

function displayHighscores(){
    startContainer.style.display = "none";
    finalscoreContainer.style.display = "none";
    highscoreContainer.style.display = "block";
}

function renderHighscores(){
    displayHighscores()
    data = JSON.parse(localStorage.getItem('hscore'));
    data.sort(dynamicSort("-score"));
    var j = 1;
    data.forEach(function(item){
         liMaker(item, j);
         j++;
    });
}

function dynamicSort(property) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        /* next line works with strings and numbers, 
         * and you may want to customize it to your needs
         */
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}


function goBack(){
    window.location.reload();
    viewHighscores.disabled = false;
}

function clearHighscores(){
    localStorage.clear();
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
        exit();
        //window.close();
    }
  }
}

function startInterval() {
  counter = setInterval(count,1000);
}

function stopInterval() {
  clearInterval(counter);
}

 function sortHighscoresArray(){
     highscoresArray = highscoresArray.sort();
 }

 function liMaker(text, index){
    console.log(index);
    var li = document.createElement('li');
    li.textContent = index + " - " + text.initials + " " + text.score;
    highscoresUl.appendChild(li);
  }
