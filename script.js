let timer = document.getElementById("header1");
let sec = 30;
let startButton = document.getElementById('start');
startButton.addEventListener('click', startTimer);
let questionsBox = document.getElementById('question-container');
let questions = [
    question1={
        question: "What does HTML stand for?",
        answers: [
            'HyperText Markup Language', 
            'HydroThermal Medeteranian Logistics', 
            'Herculean Tasks Made Lazy',
            'Hateful Thoughtless Manditory Lists',
        ],
        correctAnsw:'HyperText Markup Language'
    },
    question2={
        question: "If text is wrapped in quotation marks it is considered what?",
        answers: [
           'Number',
           'String',
           'Boolean',
           'Undefined',
        ],
        correctAnsw:'String'
    }
    question3= {
        question: "My dog is named what?",
        answers: [
            'Canon',
            'Canon',
            'Canon',
            'Canon',
        ],
        correctAnsw: 'Canon'
    }
]

let numberCorrect;
let numberIncorrect;
let questionArrayOrder;
let questionIndex;

let pageArray = [startButton, questionsBox]

function countDownTimer() {
    
    let timeLeft = setInterval(() => {
        timer.innerHTML = sec + ' seconds remaining!';
        sec--;
        if (sec < 0) {
            clearTimeout(timeLeft);
            timer.innerHTML = 'Time is up!'
        } 
    }, 1000);
}

function hidePage(){
    for (let i = 0; i < pageArray.length; i++) {
        if(!pageArray[i].classList.contains('hide')){
            pageArray[i].classList.add('hide');
        }
    }
}

function shuffle(array){
    return array.sort(() => Math.random() - .5);
}

function questionsOrder(array){
    let arrayIndex = [];

    for (let i = 0; i < array.length; i++) {
        arrayIndex.push(i);
    }
    return shuffle(arrayIndex)
}


function startTimer() {
    numberCorrect = 0;
    numberIncorrect = 0
    countDownTimer()
    hidePage()
    currentQuestion = 0
    questionsBox.classList.remove('hide')
    questionIndex = 0;
    questionArrayOrder = questionsOrder(questions)
    nextQuestion(questions, questionArrayOrder[questionIndex]);
    
}
function nextQuestion(array, index) {
    console.log('array ', array , 'index ', index)
    // showQuestion(question)
}

function correctAnswer() {

}
