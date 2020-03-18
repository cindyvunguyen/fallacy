// CINDY START
var data = {
    qnum: 0,
    questions: [
        {
            scene: 1,
            scenario: "The popular kid in your class starts picking his nose and wiping it onto everyone's desk. Since everyone thinks he's so cool, they do it too.",
            answers: [
                "JOIN THEM SO I CAN BE COOL TOO!",
                "No... I think that's gross, so I'll pass."
            ],
            correct_answer: "right-answer",
            img: ""
        },
        {
            scene: 2,
            scenario: "A politician was caught up in a lousy scandal and later complained of his feelings by posting a tearful video on YouTube rather than confirming it.",
            answers: [
                "They are trying to persuade people through feelings rather than facts.",
                "I think that is enough… They were crying! What a poor person."
            ],
            correct_answer: "left-answer",
            img: ""
        },
        {
            scene: 3,
            scenario: "Your parents don’t like your music teacher because she did not graduate from the top-rated local university and graduated from a smaller college.",
            answers: [
                "I agree, teachers should have their degrees from prestigious universities.",
                "I don't think a prestigious college diploma matters."
            ],
            correct_answer: "right-answer",
            img: ""
        },
        {
            scene: 4,
            scenario: "Johnny likes to play the piano and would rather do that than play sports. His friends make fun of him, telling him that playing the piano is for nerds.",
            answers: [
                "He should stop playing the piano and start to play sports, because he'll be a nerd.",
                "Continue to play the piano because he really enjoys it."
            ],
            correct_answer: "right-answer",
            img: ""
        },
        {
            scene: 5,
            scenario: "Cindy is against social media because she prefers face-to-face interactions. However, more and more of Cindy's friends have joined social media sites.",
            answers: [
                "She should stay true to my values of not wanting social media.",
                "Join all the social medias to fit in!"
            ],
            correct_answer: "left-answer",
            img: ""
        },
        {
            scene: 6,
            scenario: "A Foodbank commercial that shows hungry family members with no food on the dinner table. The commercial proceeds to ask viewers to donate money for the food.",
            answers: [
                "They look so desperate! They need help, so I need to donate right now!",
                "The commercial brings awareness, however, donations alone will not solve the problem."
            ],
            correct_answer: "right-answer",
            img: ""
        },
        {
            scene: 7,
            scenario: "Victor didn't want to eat his carrots and broccoli. His father told him to think about the poor, starving children in the world who weren't fortunate enough to have any food at all.",
            answers: [
                "Think of the starving children, Victor's gotta finish it now!",
                "No, persuading his son through feelings is not a good reason to eat the vegetable against his will."
            ],
            correct_answer: "right-answer",
            img: ""
        },
        {
            scene: 8,
            scenario: "Joy Tribbiani loves eating triple-double hamburgers with extra large french fries. He notices that many of his friends have started eating a low-carb diet and drinking protein shakes.",
            answers: [
                "If Joy wants a burger, she sohuld eat a burger.",
                "Join her friends’ low-carb diet, since all my friends are doing it."
            ],
            correct_answer: "left-answer",
            img: ""
        },
        {
            scene: 9,
            scenario: "A politician, Andrew argues that his opponent cannot possibly be a good choice for female voters because he married and divorced five times despite his competency in politics.",
            answers: [
                "Why should I trust someone who failed their marriage FIVE times?!",
                "Well, I'm not voting for a marriage counselor. I need a competent and honest politician."
            ],
            correct_answer: "right-answer",
            img: ""
        },
        {
            scene: 10,
            scenario: "Your younger sister has a fever so you and mom are taking her to the clinic.  There are two doctors at the clinic. One is a mother, Dr. Amy, and the other is Dr. Jason who just graduated from medical school from Europe.",
            answers: [
                "I think my mom is right. I also prefer a mom pediatrician.",
                "What's wrong with either of them?"
            ],
            correct_answer: "right-answer",
            img: ""
        }
    ]
}

// ====================  PAGE TRANSITIONS ==================== 

function goStartPage() {
    document.querySelector("#home-page").style.display = "none";
    document.querySelector("#lets-start-page").style.display = "flex";
}

function startQuiz() {
    document.querySelector("#lets-start-page").style.display = "none";
    document.querySelector("#question-page").style.display = "flex";
}

// ==================== QUIZ ====================

function showQuestions() {
    document.querySelector("#scenario-prompt").innerText = data.questions[data.qnum].scenario;
    document.querySelector("#left-answer").innerText = data.questions[data.qnum].answers[0];
    document.querySelector("#right-answer").innerText = data.questions[data.qnum].answers[1];
}

var selected_answer;

function leftAnswer() {
    document.querySelector("#left-answer").style.border = "solid 5px #FAFAFA";
    document.querySelector("#right-answer").style.border = "0";
    document.querySelector("#scenario-submit").style.opacity = "1";
    selected_answer = "left-answer";
}

function rightAnswer() {
    document.querySelector("#right-answer").style.border = "solid 5px #FAFAFA";
    document.querySelector("#left-answer").style.border = "0";
    document.querySelector("#scenario-submit").style.opacity = "1";
    selected_answer = "right-answer";
}

showQuestions();

function checkAnswer() {
    if (selected_answer === data.questions[data.qnum].correct_answer) {
        // INSERT CODE HERE TO GO TO CORRECT PAGE
        document.querySelector("#scenario-prompt").innerText = "Sick dude.";
        // qnum++
    } else {
        // INSERT CODE HERE TO GO TO INCORRECT PAGE
        document.querySelector("#scenario-prompt").innerText = "You're wrong."
    }
}

function endGame() {
    if (qnum >= 9) {
        // INSERT CODE TO END SCREEN
    }
}


// CINDY END

// SOPHIA START

// SOPHIA END

// CHLOE START

// CHLOE END