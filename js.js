// CINDY START
var data = {
    qnum: 0,
    questions: [
        {
            scenario: "The popular kid in your class starts picking his nose and wiping it onto everyone's desk. Since everyone thinks he's so cool, they do it too.",
            answers: [
                "JOIN THEM SO I CAN BE COOL TOO!",
                "No... I think that's gross, so I’ll pass."
            ],
            correctAnswer: "",
            img: ""
        },
        {
            scenario: "",
            answer1: "",
            img: ""
        },
        {
            scenario: "",
            answer1: "",
            answer2: "",
            img: ""
        },
        {
            scenario: "",
            answer1: "",
            answer2: "",
            img: ""
        },
        {
            scenario: "",
            answer1: "",
            answer2: "",
            img: ""
        },
        {
            scenario: "",
            answer1: "",
            answer2: "",
            img: ""
        },
        {
            scenario: "",
            answer1: "",
            answer2: "",
            img: ""
        },
        {
            scenario: "",
            answer1: "",
            answer2: "",
            img: ""
        },
        {
            scenario: "",
            answer1: "",
            answer2: "",
            img: ""
        },
        {
            scenario: "",
            answer1: "",
            answer2: "",
            img: ""
        },
        {
            scenario: "",
            answer1: "",
            answer2: "",
            img: ""
        },
    ]
}

// ====================  PAGE TRANSITIONS ==================== 
var page = "home_page";
// home_page, start_page, question_page, correct_page, incorrect_page, etc.


function goStartPage() {
    document.querySelector("#home-page").style.display = "none";
    document.querySelector("#lets-start-page").style.display = "flex";
    page = "start_page"
}

function startQuiz() {
    document.querySelector("#lets-start-page").style.display = "none";
    document.querySelector("#question-page").style.display = "flex";
    page = "question_page"
}

// ==================== QUIZ ====================

function leftAnswer() {
    document.querySelector("#scenario-answer1").style.border = "solid 5px #FAFAFA";
    document.querySelector("#scenario-answer2").style.border = "0";
    document.querySelector("#scenario-submit").style.opacity = "1";
}

function rightAnswer() {
    document.querySelector("#scenario-answer2").style.border = "solid 5px #FAFAFA";
    document.querySelector("#scenario-answer1").style.border = "0";
    document.querySelector("#scenario-submit").style.opacity = "1";
}

showQuestions();

function showQuestions() {
    document.querySelector("#scenario-prompt").innerText = data.questions[data.qnum].scenario;
    document.querySelector("#scenario-answer1").innerText = data.questions[data.qnum].answers[0];
    document.querySelector("#scenario-answer2").innerText = data.questions[data.qnum].answers[1];
    data.qnum++;
}


// CINDY END

// SOPHIA START

// SOPHIA END

// CHLOE START

// CHLOE END