// GLOBAL VARIABLES=============================================================

// Array object containing question/answer objects, each with 1 question, 4 answers and the gif to display
var questions = [{
    q: "What is the correct order of Elaine’s occupations during the series, from earliest to most recent?",
    a1: "Assistant to Justin Pitt, editor at Pendant Publishing, writer for J. Peterman Catalog", 
    a2: "Editor at Pendant Publishing, assistant to Justin Pitt, writer for J. Peterman Catalog",
    a3: "Real estate agent, editor at Pendant Publishing, writer for J. Peterman Catalog",
    a4: "Writer for J. Peterman Catalog, assistant to Justin Pitt, editor at Pendant Publishing",
    correct: "a2",
    answertext: "Editor at Pendant Publishing, assistant to Justin Pitt, writer for J. Peterman Catalog",
    gif: "../images/elaine-pitt.gif)",
}, {
    q: "What soup did George order from the Soup Nazi?",
    a1: "Mulligatawny",
    a2: "Clam Chowder",
    a3: "Turkey chili",
    a4: "Gazpacho",
    correct: "a3",
    answertext: "Turkey chili",
    gif: "../images/george-soup.gif)",
}, {
    q: "When Newman’s mail truck catches on fire, what is he transporting?",
    a1: "Crates of fish",
    a2: "Aluminum cans",
    a3: "Large bags of ice",
    a4: "David Berkowitz’s mail bag",
    correct: "a1",
    answertext: "Crates of fish",
    gif: "../images/newman-truck.gif)"
}, {
    q: "What song does Elaine dance to at her company party?",
    a1: "“Brick House” by The Commodores",
    a2: "“Get Down On It” by Kool & The Gang",
    a3: "Don’t Stop Til You Get Enough",
    a4: "“Shining Star” by Earth, Wind & Fire",
    correct: "a4",
    answertext: "“Shining Star” by Earth, Wind & Fire",
    gif: "../images/elaine-dance.gif)",
}, {
    q: "In “The Chinese Restaurant,” what name does the restaurant host call out instead of 'Costanza'?",
    a1: "Kruger",
    a2: "Esperanza",
    a3: "Cartwright",
    a4: "Vandelay",
    correct: "a3",
    answertext: "Cartwright",
    gif: "../images/george-restaurant.gif)",
}, {
    q: "Why did Jerry and Donna break up?",
    a1: "Jerry told his friends that she liked a Cotton Dockers commercial",
    a2: "She shushed him and ate her peas one at a time",
    a3: "He couldn’t remember her name",
    a4: "He wouldn’t admit to watching Melrose Place",
    correct: "a1",
    answertext: "Jerry told his friends that she liked a Cotton Dockers commercial",
    gif: "../images/jerry-donna.jpg)",
}, {
    q: "In “The Susie,” George’s answering machine message is based off the theme song for what TV show?",
    a1: "The White Shadow",
    a2: "Cheers",
    a3: "The Dukes of Hazzard",
    a4: "The Greatest American Hero",
    correct: "a4",
    answertext: "The Greatest American Hero",
    gif: "../images/george-answering-machine.gif)",
}, {
    q: "What is the name of the clown George hires to work at a children’s party?",
    a1: "Steve",
    a2: "Eric",
    a3: "Bubbles",
    a4: "Phil",
    correct: "a2",
    answertext: "Eric",
    gif: "../images/george-clown.gif)",
}, {
    q: "The actor who portrayed Tim Whatley has NOT appeared in which show?",
    a1: "Breaking Bad",
    a2: "Malcolm in the Middle",
    a3: "Law & Order",
    a4: "How I Met Your Mother",
    correct: "a3",
    answertext: "Law & Order",
    gif: "../images/tim-whatley.gif)",
}, {
    q: "What day is Festivus typically celebrated?",
    a1: "The first Thursday after Thanksgiving",
    a2: "December 23",
    a3: "December 25",
    a4: "December 27",
    correct: "a2",
    answertext: "December 23",
    gif: "../images/festivus.gif)",
}, {
    q: "In “The Dinner Party” (which aired in 1993), Jerry vomits for the first time since what year?",
    a1: "1972",
    a2: "1980",
    a3: "1986",
    a4: "1990",
    correct: "a2",
    answertext: "1980",
    gif: "../images/jerry-cookie.gif)",
}, {
    q: "What baseball player spat on Kramer and Newman at a Mets game?",
    a1: "Roger McDowell",
    a2: "Keith Hernandez",
    a3: "Mookie Wilson",
    a4: "Darryl Strawberry",
    correct: "a1",
    answertext: "Roger McDowell",
    gif: "../images/spitter.gif)",
}, {
    q: "Which item does Babu Bhatt NOT say is a specialty of the Dream Cafe?",
    a1: "Tacos",
    a2: "Moussaka",
    a3: "Franks and beans",
    a4: "Philly cheesesteaks",
    correct: "a4",
    answertext: "Philly cheesesteaks",
    gif: "../images/babu.gif)",
}, {
    q: "Why did Jerry and Lisi break up?",
    a1: "She had man hands",
    a2: "He preferred to continue using a funny voice (heeeellllloooo)",
    a3: "She was a sentence-finisher",
    a4: "She thought she caught him picking his nose",
    correct: "a3",
    answertext: "She was a sentence-finisher",
    gif: "../images/jerry-lisi.gif)",
}, {
    q: "Who was the first person to find out that Cosmo was Kramer’s first name?",
    a1: "Jerry",
    a2: "George",
    a3: "Elaine",
    a4: "Newman",
    correct: "a2",
    answertext: "George",
    gif: "../images/george-kramer.gif)",
}];

// Answer correct variable
var correctTotal = 0;

// Answers incorrect variable
var incorrectTotal = 0;

// Answers times out variable
var timeoutTotal = 0;

// Questions asked so far variable
var questionsAsked = 0;

// Timer variable
var timer = 30;

// IntervalID variable
var intervalID;

// GIF variable
var answerGIF;

// User answer variable
var userAnswer = "";

// User rank variable
var userRank = 0;

// ==============================================================================

// FUNCTIONS ====================================================================

// Overall function flow
// Home screen displayed - click on start button fires displayQuestion();
// displayQuestion();
// clearInterval(intervalID);
// setTimeout(displayAnswer, 1000 * 30);
// decrement();
// displayAnswer(); fires from button click or setTimeout
// displayFinalResults(); fires when all questions have been asked
// restartGame(); fires when restart button is pushed;


// Fires after start button clicked or automatically afer question answer screen shown
function displayQuestion() {
    // Empty text from previous screen
    $("#right-wrong").empty();
    $("#gif-display").empty();
    $("#right-answer").empty();

    // Display question and answers from questions array using questionsAsked variable as index
    $("#question-text").text(questions[questionsAsked].q);
    $("#a1").text(questions[questionsAsked].a1);
    $("#a2").text(questions[questionsAsked].a2);
    $("#a3").text(questions[questionsAsked].a3);
    $("#a4").text(questions[questionsAsked].a4);

    // Clear interval so timer refreshes
    clearInterval(intervalID);

    // Start 30-second countdown
    setTimeout(displayAnswer, 1000 * 30);

    // Display 30-second countdown
    intervalID = setInterval(decrement, 1000);
}

// Function to decrease countdown clock by 1 second
function decrement() {
    // Decrease timer by 1;
    timer--;

    // Show timer in time-display ID
    $("#time-display").text("Time remaining: " + timer);

    // If the timer hits 0
    if (timer === 0) {
        // Display answer
        displayAnswer();
    }
}

// Function to display answer on answer click or timeout
function displayAnswer() {
    // Remove question text
    $("#time-display").empty();
    $("#question-text").empty();
    $("#a1").empty();
    $("#a2").empty();
    $("#a3").empty();
    $("#a4").empty();

    // Create variable for GIF based on questionsAsked
    answerGIF = "assets/images/crystal" + questionsAsked;

    // Display GIF
    $("#gif-display").html("<img src=" + answerGIF + ".png>");

    // Set which screen to advance to in 7 seconds
    if (questionsAsked === questions.length) {
        // if all questions have been asked, go to results screen
        setTimeout(displayFinalResults, 1000 * 7);

    } else {
        // if all questions haven't been asked, go to next question
        setTimeout(displayQuestion, 1000 * 7);
    }
}

// Check if answer was provided and correct
if ((userAnswer) && (userAnswer === questions[questionsAsked].correct)) {
    // add to correct variable
    correctTotal++;
    console.log("Oh yeah");

    // Display "Correct!"
    $("#right-wrong").text("Correct!");

    // Check if answer was provided but incorrect:
} else if ((userAnswer) && (userAnswer !== questions[questionsAsked].correct)) {
    // add to incorrect variable
    incorrectTotal++;

    // Display "Incorrect!"
    $("#right-wrong").text("Incorrect!");

    // Display correct answer
    $("#right-answer").text("The correct answer was " + questions[questionsAsked].answertext);

    // If answer wasn't submitted
} else {
    // add to timeout variable
    timeoutTotal++;

    // Display "You ran out of time!"
    $("#right-wrong").text("You ran out of time!");

    // Display correct answer
    $("#right-answer").text("The correct answer was " + questions[questionsAsked].answertext);
}

// Add 1 to questionsAsked variable
questionsAsked++;
console.log(questionsAsked);

// Reset timer
timer = 30;

// Set userAnswer back to empty string
userAnswer = "";

// Function to show final results screen when all questions asked
function displayFinalResults() {

    // Clear interval so timer refreshes
    clearInterval(intervalID);

    // Calculate, assign overall ranking
    // If 100% correct:
    if (correctTotal === (questions.length * .100)) {
        userRank = "Hoochie mama! You know your Seinfeld trivia";
        // If 90% correct:
    } else if (correctTotal >= (questions.length * .90)) {
        userRank = "That's gold, Jerry. Gold! You're close to an expert on Seinfeld";
        // If 75-89% correct:
    } else if (correctTotal >= (questions.length * .70)) {
        userRank = "Not bad. Go reward yourself with some Ovaltine and Drake's Coffe Cake";
        // If 50-74% correct:
    } else if (correctTotal >= (questions.length * .50)) {
        userRank = "That's a shame. Watching more Seinfeld could be a help to you.";
        // If less than 50% correct:
    } else {
        userRank = "No soup for you! Time to watch more Seinfeld.";
    }

    // Display ranking
    $("#overall-rating").text(userRank);
    // Display correct, incorrect, time out totals
    $("#overall-results").html("<h2>Your Results</h2><p><strong>Total correct: </strong>" + correctTotal
        + "</p><p><strong>Total incorrect: </strong>" + incorrectTotal + "</p><p><strong>Total unanswered: </strong>" + timeoutTotal
        + "</p>");

    // Display restart button           
}

// Function that runs on click of restart button
function restartGame() {
    // Empty text from results screen
    $("#overall-rating").empty();
    $("#overall-results").empty();

    // Reset all variables
    correctTotal = 0;
    incorrectTotal = 0;
    timeoutTotal = 0;
    questionsAsked = 0;
    timer = 30;
    intervalID;
    answerGIF;
    userAnswer = "";
    userRank = 0;

    // Display first question
    displayQuestion();
}

// ================================================================================

// CLICK FUNCTIONS ===============================================================
// Click function for opening start button
$("#start").on("click", function () {
    displayQuestion();
});

// Click functions for user choice for all four answers
$("#a1").on("click", function () {
    // Set user's answer to a variable
    userAnswer = "a1";

    // Run function displayAnswer
    displayAnswer();
});

$("#a2").on("click", function () {
    // Set user's answer to a variable
    userAnswer = "a2";

    // Run function displayAnswer
    displayAnswer();
});

$("#a3").on("click", function () {
    // Set user's answer to a variable
    userAnswer = "a3";

    // Run function displayAnswer
    displayAnswer();
});

$("#a4").on("click", function () {
    // Set user's answer to a variable
    userAnswer = "a4";

    // Run function displayAnswer
    displayAnswer();
});

// Click function for restart button
$("#restart").on("click", function () {
    // Run function restartGame
    restartGame();
})



// GAME PLAY============================================================
$(document).ready(function () {

});