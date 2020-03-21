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
            img: "scenario-images/scenario1.jpg",
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
            img: "scenario-images/scenario2.jpg",
            fallacy: "APPEAL TO EMOTION FALLACY",
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
            img: "scenario-images/scenario3.jpg",
            fallacy: "AD HOMINEM FALLACY",
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
            img: "scenario-images/scenario4.jpg",
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
            img: "scenario-images/scenario5.jpg",
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
            img: "scenario-images/scenario6.jpg",
            fallacy: "APPEAL TO EMOTION FALLACY",
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
            img: "scenario-images/scenario7.jpg",
            fallacy: "APPEAL TO EMOTION FALLACY",
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
            img: "scenario-images/scenario8.jpg",
            fallacy: "BANDWAGON FALLACY",
            explanation: "Listening to what is popular instead of listening to yourself."
        },
        {
            scene: 9,
            scenario: "A politician, Andrew argues that his opponent cannot possibly be a good choice for female voters because he married and divorced five times despite his competency in politics.",
            answers: [
                "Why should I trust someone who failed their marriage THREE times?!",
                "I'm not voting for a marriage counselor. I need a competent and honest politician."
            ],
            correct_answer: "right-answer",
            img: "scenario-images/scenario9.jpg",
            fallacy: "AD HOMINEM FALLACY",
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
            img: "scenario-images/scenario10.jpg",
            fallacy: "AD HOMINEM FALLACY",
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
    showQuestions();
}

// ==================== QUIZ ====================

function showQuestions() {
    document.querySelector("#scenario-current-number").innerText = data.questions[data.qnum].scene;
    document.querySelector("#scenario-prompt").innerText = data.questions[data.qnum].scenario;
    document.querySelector("#scenario-illustration").style.backgroundImage = "url('" + data.questions[data.qnum].img + "')";
    document.querySelector("#left-answer").innerText = data.questions[data.qnum].answers[0];
    document.querySelector("#right-answer").innerText = data.questions[data.qnum].answers[1];
}

var selected_answer;

function leftAnswer() {
    document.querySelector("#left-answer").style.border = "solid 5px #FAFAFA";
    document.querySelector("#right-answer").style.border = "0";
    document.querySelector("#scenario-submit").style.opacity = "1";
    document.querySelector("#scenario-submit").style.pointerEvents = "auto";
    selected_answer = "left-answer";
}

function rightAnswer() {
    document.querySelector("#right-answer").style.border = "solid 5px #FAFAFA";
    document.querySelector("#left-answer").style.border = "0";
    document.querySelector("#scenario-submit").style.opacity = "1";
    document.querySelector("#scenario-submit").style.pointerEvents = "auto";
    selected_answer = "right-answer";
}

// resets buttons, so none are selected on new question
function resetButtons() {
    document.querySelector("#right-answer").style.border = "0";
    document.querySelector("#left-answer").style.border = "0";
    document.querySelector("#scenario-submit").style.opacity = "0.5";
    document.querySelector("#scenario-submit").style.pointerEvents = "none";
}

var game_score = 0;
var health = 3;
console.log("Game Score:" + game_score);
console.log("Health:" + health);

function checkAnswer() {
    if (selected_answer === data.questions[data.qnum].correct_answer) {

        // switches the pages
        document.querySelector("#correct-incorrect-page").style.display = "flex";
        document.querySelector("#question-page").style.display = "none";

        // makes the page correct
        correctPage();
        game_score++;

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
        health--;
        decreaseHealth();
        
        // inputs the text required
        document.querySelector("#cip-fallacy").innerText = data.questions[data.qnum].fallacy;
        document.querySelector("#cip-definition").innerText = data.questions[data.qnum].explanation;
        data.qnum++;
    }
}

function nextQuestion() {
    if (health == 0) {
        loseGame();
    } else if (data.qnum == 10) {
        winGame();
    } else {
        // switches pages
        document.querySelector("#correct-incorrect-page").style.display = "none";
        document.querySelector("#question-page").style.display = "flex";

        resetButtons();

        showQuestions();
    }
}

function decreaseHealth() {
    if (health == 2) {
        document.querySelector("#heart3").style.opacity = "0.25";
    } else if (health == 1) {
        document.querySelector("#heart2").style.opacity = "0.25";
    } else if (health == 0) {
        document.querySelector("#heart1").style.opacity = "0.25";
    }
}

function resetHealth() {
    document.querySelector("#heart1").style.opacity = "1";
    document.querySelector("#heart2").style.opacity = "1";
    document.querySelector("#heart3").style.opacity = "1";
}

// CINDY END

// SOPHIA START

function correctPage() {
    document.querySelector("#correct-incorrect-page").style.backgroundColor = "#6eb748";
    document.querySelector("#cip-text1").innerText = "HORRAY!";
    document.querySelector("#cip-text2").innerText = "You avoided the";
    document.querySelector("#icon").src = "icons/happy-face.png";
}

function incorrectPage() {
    document.querySelector("#correct-incorrect-page").style.backgroundColor = "#860000";
    document.querySelector("#cip-text1").innerText = "OH NO!";
    document.querySelector("#cip-text2").innerText = "You committed the";
    document.querySelector("#icon").src = "icons/sad-face.png";
}

function winGame() {
    document.querySelector("#correct-incorrect-page").style.display = "none";
    document.querySelector("#results-page").style.display = "flex";
    document.querySelector("#results-page").style.backgroundColor = "#468091";
    document.querySelector("#rp-message").innerText = "YOU GOT...";
    document.querySelector("#rp-results").innerText = game_score + " out of 10 scenarios!";
    document.querySelector("#rp-message2").innerText = "AMAZING JOB!";
}

function loseGame() {
    document.querySelector("#correct-incorrect-page").style.display = "none";
    document.querySelector("#results-page").style.display = "flex";
    document.querySelector("#results-page").style.backgroundColor = "#860000";
    document.querySelector("#rp-message").innerText = "GAME OVER";
    document.querySelector("#rp-results").innerText = "You committed too many fallacies...";
    document.querySelector("#rp-message2").innerText = "Let's try this again.";
}

// SOPHIA END

// CHLOE START

function startReview () {
    document.querySelector("#results-page").style.display = "none";
    document.querySelector("#fallacy-review-page").style.display = "flex";
}

function threeFallacies() {
    document.querySelector("#fallacy-review-page").style.display = "none";
    document.querySelector("#three-fallacies-page").style.display = "flex";
}

var fallacy_review = "bandwagon";

function fallacyChange() {
    if (fallacy_review == "bandwagon") {
        document.querySelector("#tfp-text").innerHTML = "<p><b>Appeal to Emotion</b> relies on <span class='text-emphasis'>playing with someone's emotions.</span></p><p>Appeal to emotion is an argument that is made due to the manipulation of emotions, rather than the use of valid reasoning.</p>"
        document.querySelector("#review-icon").style.backgroundImage = "url(icons/appeal-to-emotion.png)";
        fallacy_review = "emotion";

    } else if (fallacy_review == "emotion") {
        document.querySelector("#tfp-text").innerHTML = "<p><b>Ad Hominem</b> is similar to <span class='text-emphasis'>attacking an opponent.</span></p><p>An ad hominem argument emotionally attacks a person's character rather than logically arguing against their position.</p>";
        document.querySelector("#review-icon").style.backgroundImage = "url(icons/adhominem.png)";
        fallacy_review = "adhominem";
    } else {
        document.querySelector("#three-fallacies-page").style.display = "none";
        document.querySelector("#thank-you-page").style.display = "flex";
    }
}

function playAgain() {
    document.querySelector("#thank-you-page").style.display = "none";
    document.querySelector("#lets-start-page").style.display = "flex";

    // resets everything
    resetButtons();
    resetHealth();
    data.qnum = 0;
    game_score = 0;
    health = 3;
}

// CHLOE END