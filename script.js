var timer = document.getElementById("header1");
var sec = 45;
var timerID = setInterval(1000);

function countDownTimer() {
    if (sec == -1) {
        clearTimeout(timerID);
        // "DO Something this is where the question switches"
    } else {
        timer.innerHTML = sec + ' seconds remaining!';
        sec--;
    }
}


var startButton = document.getElementById('start');
startButton.addEventListener('click', startTimer, countDownTimer);
var questionsBox = document.getElementById('question-container');

var questionRandom = 
var currentQuestion = 



function startTimer(quiz) {
    startButton.classList.add('hide');
    questionRandom = questions.sort(() => Math.random() - .5);
    currentQuestion = 0
    questionsBox.classList.remove('hide');
    nextQuestion();
    
}

var questions = [
    {
        question: "What does HTML stand for?",
        answers: [
            { text: 'HyperText Markup Language', correct: true },
            { text: 'HydroThermal Medeteranian Logistics', correct: false},
            { text: 'Herculean Tasks Made Lazy', correct: false},
            { text: 'Hateful Thoughtless Manditory Lists', correct: false},
        ]
        question: "If text is wrapped in quotation marks it is considered what?",
        answers: [
            {text: 'Number', correct: false},
            {text: 'String', correct: true},
            {text: 'Boolean', correct: false},
            {text: 'Undefined', correct: false},
        ]
        question: "My dog's name is...?"
        answers: [
            {text: 'Canon', correct: true},
            {text: 'Canon', correct: true},
            {text: 'Canon', correct: true},
            {text: 'Canon', correct: true},
        ]

    }
]
function nextQuestion() {

}

function correctAnswer() {

}
