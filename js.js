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
            img: "",
            fallacy: "BANDWAGON FALLACY",
            explanation: "Listening to what is popular instead of listening to yourself."
        },
        {
            scene: 2,
            scenario: "A politician was caught up in a lousy scandal and later complained of his feelings by posting a tearful video on YouTube rather than confirming it.",
            answers: [
                "They are trying to persuade people through feelings rather than facts.",
                "I think that is enough… They were crying! What a poor person."
            ],
            correct_answer: "left-answer",
            img: "",
            fallacy: "APPEAL TO EMOTION",
            explanation: "Using people's feelings to convince them or win an argument."
        },
        {
            scene: 3,
            scenario: "Your parents don’t like your music teacher because she did not graduate from the top-rated local university and graduated from a smaller college.",
            answers: [
                "Agree, teachers should graduate from prestigious universities.",
                "I don't think a prestigious college diploma matters."
            ],
            correct_answer: "right-answer",
            img: "",
            fallacy: "AD HOMINEM",
            explanation: "Attacking someone instead of listening to what they're saying."
        },
        {
            scene: 4,
            scenario: "Johnny likes to play the piano and would rather do that than play sports. His friends make fun of him, telling him that playing the piano is for nerds.",
            answers: [
                "Stop playing the piano because he'll be a nerd.",
                "Continue to play the piano because he really enjoys it."
            ],
            correct_answer: "right-answer",
            img: "",
            fallacy: "BANDWAGON FALLACY",
            explanation: "Listening to what is popular instead of listening to yourself."
        },
        {
            scene: 5,
            scenario: "Cindy is against social media because she prefers face-to-face interactions. However, more and more of Cindy's friends have joined social media sites.",
            answers: [
                "She should stay true to my values of not wanting social media.",
                "Join all the social medias to fit in! Cindy can't be a loser!"
            ],
            correct_answer: "left-answer",
            img: "",
            fallacy: "BANDWAGON FALLACY",
            explanation: "Listening to what is popular instead of listening to yourself."
        },
        {
            scene: 6,
            scenario: "A Foodbank commercial that shows hungry family members with no food on the dinner table. The commercial proceeds to ask viewers to donate money for the food.",
            answers: [
                "They look so desperate! I need to donate right now!",
                "The commercial brings awareness. I will donate if I want to."
            ],
            correct_answer: "right-answer",
            img: "",
            fallacy: "APPEAL TO EMOTION",
            explanation: "Using people's feelings to convince them or win an argument."
        },
        {
            scene: 7,
            scenario: "Victor didn't want to eat his carrots and broccoli. His father told him to think about the poor, starving children in the world who weren't fortunate enough to have any food at all.",
            answers: [
                "Think of the starving children, Victor NEEDS to finish it now!",
                "Victor should eat it if he wants to. He should not be persuaded."
            ],
            correct_answer: "right-answer",
            img: "",
            fallacy: "APPEAL TO EMOTION",
            explanation: "Using people's feelings to convince them or win an argument."
        },
        {
            scene: 8,
            scenario: "Joy Tribbiani loves eating triple-double hamburgers with extra large french fries. He notices that many of his friends have started eating a low-carb diet and drinking protein shakes.",
            answers: [
                "If Joy wants a burger, she should eat a burger.",
                "Immediately join her friends’ fancy low-carb diet, since all her friends are doing it."
            ],
            correct_answer: "left-answer",
            img: "",
            fallacy: "BANDWAGON FALLACY",
            explanation: "Listening to what is popular instead of listening to yourself."
        },
        {
            scene: 9,
            scenario: "A politician, Andrew argues that his opponent cannot possibly be a good choice for female voters because he married and divorced five times despite his competency in politics.",
            answers: [
                "Why should I trust someone who failed their marriage FIVE times?!",
                "I'm not voting for a marriage counselor. I need a competent and honest politician."
            ],
            correct_answer: "right-answer",
            img: "",
            fallacy: "AD HOMINEM",
            explanation: "Attacking someone instead of listening to what they're saying."
        },
        {
            scene: 10,
            scenario: "Your younger sister has a fever so you and mom are taking her to the clinic.  There are two doctors at the clinic. One is a mother, Dr. Amy, and the other is Dr. Jason who just graduated from medical school from Europe.",
            answers: [
                "I think my mom is right. I also prefer a mom pediatrician.",
                "What's wrong with either of them? Both are great."
            ],
            correct_answer: "right-answer",
            img: "",
            fallacy: "AD HOMINEM",
            explanation: "Attacking someone instead of listening to what they're saying."
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
    document.querySelector("#scenario-current-number").innerText = data.questions[data.qnum].scene;
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

// resets buttons, so none are selected on new question
function resetButtons() {
    document.querySelector("#right-answer").style.border = "0";
    document.querySelector("#left-answer").style.border = "0";
    document.querySelector("#scenario-submit").style.opacity = "0.5";
}

showQuestions();

function checkAnswer() {
    if (selected_answer === data.questions[data.qnum].correct_answer) {
        console.log(data.qnum)

        // switches the pages
        document.querySelector("#correct-incorrect-page").style.display = "flex";
        document.querySelector("#question-page").style.display = "none";

        //
        correctPage();

        // inputs the text required
        document.querySelector("#cip-fallacy").innerText = data.questions[data.qnum].fallacy;
        document.querySelector("#cip-definition").innerText = data.questions[data.qnum].explanation;
        data.qnum++;
    } else {
        console.log(data.qnum)

        // switches the pages
        document.querySelector("#correct-incorrect-page").style.display = "flex";
        document.querySelector("#question-page").style.display = "none";

        // makes the page incorrect
        incorrectPage();
        
        // inputs the text required
        document.querySelector("#cip-fallacy").innerText = data.questions[data.qnum].fallacy;
        document.querySelector("#cip-definition").innerText = data.questions[data.qnum].explanation;
        data.qnum++;
    }
}

function nextQuestion() {

    if (data.qnum == 10) {
        endGame();
    } else {

        // switches pages
        document.querySelector("#correct-incorrect-page").style.display = "none";
        document.querySelector("#question-page").style.display = "flex";

        resetButtons();

        // inserts new question
        document.querySelector("#scenario-current-number").innerText = data.questions[data.qnum].scene;
        document.querySelector("#scenario-prompt").innerText = data.questions[data.qnum].scenario;
        document.querySelector("#left-answer").innerText = data.questions[data.qnum].answers[0];
        document.querySelector("#right-answer").innerText = data.questions[data.qnum].answers[1];
    }
}

function endGame() {
    document.querySelector("#correct-incorrect-page").style.display = "none";
    document.querySelector("#results-page").style.display = "flex";
}

// CINDY END

// SOPHIA START

//            fallacy:"BANDWAGON FALLACY",
//            definition:"Listening to what is popular instead of listening to yourself."

//            fallacy:"APPEAL TO EMOTIONS",
//            definition:"Using people's feelings to convince them or win an argument."

//            fallacy:"AD HOMINEM",
//            definition:"Attacking someone instead of listening to what they're saying."

function correctPage() {
    document.querySelector("#correct-incorrect-page").style.backgroundColor = "#6eb748";
    document.querySelector("#cip-text1").innerText = "HORRAY!";
    document.querySelector("#cip-text2").innerText = "You avoided the";
    document.querySelector("#icon").style.backgroundColor = "olive";
}

function incorrectPage() {
    document.querySelector("#correct-incorrect-page").style.backgroundColor = "#860000";
    document.querySelector("#cip-text1").innerText = "OH NO!";
    document.querySelector("#cip-text2").innerText = "You committed the";
    document.querySelector("#icon").style.backgroundColor = "#b34c20";
}

function gameOver() {
    document.querySelector("#results-page").style.backgroundColor = "#860000";
    document.querySelector("#rp-message").innerText = "GAME OVER";
    document.querySelector("#rp-results").innerText = "You committed too many fallacies";
    document.querySelector("#rp-congrats").style.display = "none";
}

// SOPHIA END

// CHLOE START

function reviewPage() {
    document.querySelector("#review-page").style.display = "none";
    document.querySelector("#fallacy-review-page").style.display = "flex";
}

function threeFallacies() {
    document.querySelector("#fallacy-review-page").style.display = "none";
    document.querySelector("#three-fallacies-page").style.display = "flex";
}

function fallacyChange() {
    document.querySelector("#tfp-text").innerHTML = "<p><b>Appeal to Emotion</b> is an argument that is made due to the manipulation of emotions,<br>rather than using valid reasoning.</p>";
}

// CHLOE END