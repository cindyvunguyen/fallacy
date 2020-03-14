// CINDY START

// CINDY END

// SOPHIA START

//            fallacy:"BANDWAGON FALLACY",
//            definition:"Listening to what is popular instead of listening to yourself."

//            fallacy:"APPEAL TO EMOTIONS",
//            definition:"Using people's feelings to convince them or win an argument."

//            fallacy:"AD HOMINEM",
//            definition:"Attacking someone instead of listening to what they're saying."

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

// var fallacyDefintion = 1;
// function fallacyChange() {
//     var myInp = document.querySelector("#tfp-text").innerText;
//     document.querySelector("#tfp-text").innerText = "Appeal to Emotion is an argument that is made due to the manipulation of emotions, rather than using valid reasoning.";
// } //i feel like i need to use arra

function fallacyChange() {
    document.querySelector("#tfp-text").innerText = "<p><b>Appeal to Emotion</b> is an argument that is made due to the manipulation of emotions,<br>rather than using valid reasoning.</p>";
}
// function fallacyChange(state) {
//     switch(state) {
//         case 0:
//             document.querySelector("#tfp-text").innerHTML = "<p><b>Appeal to Emotion</b> is an argument that is made due to the manipulation of emotions,<br>rather than using valid reasoning.</p>";
//         case 1:
//             document.querySelector("#tfp-text").innerHTML = "<p><b>Ad Hominem</b> is an argument that is built around an emotional appeal,<br>rather than logical appeal.</p>";
//         break;
//     }
// }

// CHLOE END