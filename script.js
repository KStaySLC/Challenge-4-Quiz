let timer = document.getElementById("header1");
let sec = 45;

const startButton = document.getElementById('start');
startButton.addEventListener('click', startTimer, nextQuestion);

let questionsBox = document.getElementById('question-container');

const answers = document.getElementById('answers');

let randomQuestion, questionIndex;
let score = 0;


const questions = [
    {
        question: "What does HTML stand for?",
        answers: [
            'HyperText Markup Language',
            'HydroThermal Mediterranean Logistics', 
            'Herculean Tasks Made Lazy', 
            'Hateful Thoughtless Mandatory Lists', 
        ], 
        correct: 'HyperText Markup Language'
    },
    {
        question: "If text is wrapped in quotation marks it is considered what?",
        answers: [
           'Number',  
           'String', 
           'Boolean',  
           'Undefined',  
        ], 
        correct: 'String'
    },
    {
        question: "My dog is named what?",
        answers: [
           'Canon',  
           'Canon',  
           'Canon',  
           'Canon',  
        ], 
        correct: 'Canon'
    },
    {
        question: "What does a cascading style sheet do?",
        answers: [
           'Make developers loose their minds', 
           'Style JavaScript applications for an evening out', 
           'Create a more appealing asthenic for Node.Js', 
           'They are demons escaped from hell and should be avoided at all costs',

        ], 
        correct: 'Make developers loose their minds' || 'They are demons escaped from hell and should be avoided at all costs'
    },
];

let numberCorrect;
let numberIncorrect;
let questionArrayOrder;


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

    for (let i = 0; i < questions.length; i++) {
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
    let displayQuestion = 
    document.getElementById('question');
    displayQuestion.innerHTML = questions[0].question;

    let displayAnswer = 
    document.getElementsByClassName('.button');
    console.log('got this far...');

    for (let i = 0; i< answers.length; i++) {
      displayAnswer.innerHTML = questions.answers[i];
        
    }  
    console.log('but not this far...')
};

