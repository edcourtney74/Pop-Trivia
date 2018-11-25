// GLOBAL VARIABLES=============================================================

// Array object containing question/answer objects, each with 1 question, 4 answers and the gif to display
var questions = [{
    q: "Who is the only person to win the cash prize after achieving 'Total Victory'?",
    a1: "Drew Drechsel", 
    a2: "Isaac Caldiero",
    a3: "Joe Moravsky",
    a4: "Brent Steffensen",
    correct: "a2",
    answertext: "Isaac Caldiero",
    funfact: ""
}, {
    q: "What is Joe Moravsky's nickname?",
    a1: "The Ageless Wonder",
    a2: "Captain NBC",
    a3: "The Weatherman",
    a4: "The Beast",
    correct: "a3",
    answertext: "The Weatherman",
    funfact: ""
}, {
    q: "What color is Captain NBC's cape?",
    a1: "Red",
    a2: "Blue",
    a3: "Yellow",
    a4: "Black",
    correct: "a1",
    answertext: "Red",
    funfact: ""

}, {
    q: "What was in Jake Murray's fanny pack?",
    a1: "A yo-yo and glow ring",
    a2: "A corn dog and sunglasses",
    a3: "A McDonald's cheeseburger",
    a4: "A corn dog and goggles",
    correct: "a4",
    answertext: "A corn dog and goggles",
    funfact: ""
}, {
    q: "Who was the first woman to climb the warped wall?",
    a1: "Jesse Labreck",
    a2: "Jessie Graff",
    a3: "Kacy Catanzaro",
    a4: "Meagan Martin",
    correct: "a3",
    answertext: "Kacy Catanzaro",
    funfact: ""

}, {
    q: "What is the name of the location of the national finals?",
    a1: "Mount Midoriyama",
    a2: "Mount Fuji",
    a3: "Mount Fantastic",
    a4: "Mount Salmon Ladder",
    correct: "a1",
    answertext: "Mount Midoriyama",
    funfact: ""

}, {
    q: "How tall is the Mega Wall?",
    a1: "12 feet",
    a2: "14 feet",
    a3: "16 feet",
    a4: "18 feet",
    correct: "a4",
    answertext: "18 feet",
    funfact: ""

}, {
    q: "Who won $100,000 as the last man standing in Season 10?",
    a1: "Ethan Courtney",
    a2: "Drew Drechsel",
    a3: "Jake Murray",
    a4: "Daniel Gil",
    correct: "a2",
    answertext: "Drew Drechsel",
    funfact: ""

}, {
    q: "Who was the first woman to complete Stage 1 at the Las Vegas Finals?",
    a1: "Michelle Warnky",
    a2: "Kacy Catanzaro",
    a3: "Jessie Graff",
    a4: "Allyssa Beird",
    correct: "a3",
    answertext: "Jessie Graff",
    funfact: ""

}, {
    q: "Mathis 'Kid' Owhadi is the youngest person to make it to Las Vegas. How old is he?",
    a1: "17",
    a2: "19",
    a3: "21",
    a4: "23",
    correct: "a2",
    answertext: "19",
    funfact: ""
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
var timer = 60;

// IntervalID variable
var intervalID = 0;

// setTimeout variable for 60-second timer
var questionTimer;

// setTimeout variable for 8-second timer to move from results screen
var resultsTimer;

// GIF variable
var answerGIF;

// User answer variable
var userAnswer = "";

// User rank variable
var userRank = 0;

// Final results GIF variable
var finalGIF;

// ==============================================================================

// FUNCTIONS ====================================================================

// Function that runs on click of restart button
function startGame() {
    // Empty text from results screen
    $("#overall-rating").empty();
    $("#overall-results").empty();
    $("#right-wrong").empty();
    $("#gif-display").empty();
    $("#right-answer").empty();
    $("#time-display").empty();
    $("#question-text").empty();
    $(".answer-button").empty();     
    
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

    // Hide menu button
    $(".new-game").css("display", "none");

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
        
        // run stopTimer function 
        stopTimer();
    }
}

function runTimer() {
    // Clear resultsTimer - was set to move from question page to answer page
    clearTimeout(resultsTimer);
    
    // Clear interval so timer refreshes
    clearInterval(intervalID);
    
    // Reset timer to 60 seconds
    timer = 60;
    
    // Set countdown for amount of time to answer
    questionTimer = setTimeout(displayAnswer, 1000 * 60);
    
    // Display 60-second countdown
    intervalID = setInterval(decrement, 1000);
    
    // Show timer in time-display ID
    $("#time-display").text("Time remaining: " + timer);
    
    // Display next question
    displayQuestion();
}

function displayQuestion() {

    // Empty text from previous screen
    $("#right-wrong").empty();
    $("#gif-display").empty();
    $("#right-answer").empty();

    // Make answer buttons visible again
    $(".answer-button").css("display", "block");
    
    // Display question and answers from questions array using questionsAsked variable as index
    $("#question-text").text(questions[questionsAsked].q);
    $("#a1").text(questions[questionsAsked].a1);
    $("#a2").text(questions[questionsAsked].a2);
    $("#a3").text(questions[questionsAsked].a3);
    $("#a4").text(questions[questionsAsked].a4);
}

// Function to display answer on answer click or timeout
function displayAnswer() {
    // Clear questionTimer
    clearTimeout(questionTimer);
    
    // Remove question-screen text
    $("#time-display").empty();
    $("#question-text").empty();
    $(".answer-button").empty();

    // Hide answer buttons
    $(".answer-button").css("display", "none");

    // Create variable for GIF based on questionsAsked
    answerGIF = "assets/images/anw/gif" + questionsAsked + ".gif";

    // Set which screen to advance to in 8 seconds
    if (questionsAsked === (questions.length - 1)) {
        // if all questions have been asked, go to results screen
        resultsTimer = setTimeout(displayFinalResults, 1000 * 5);

    } else {
        // if all questions haven't been asked, go to next question
        resultsTimer = setTimeout(runTimer, 1000 * 5);
    }

    // Check if answer was provided and correct
    if ((userAnswer) && (userAnswer === questions[questionsAsked].correct)) {
    // add to correct variable
    correctTotal++;

    // Display "Correct!"
    $("#right-wrong").text("Correct!");

    // Display fun fact - only if correct
    $("#right-answer").text(questions[questionsAsked].funfact);

    // Check if answer was provided but incorrect:
    } else if ((userAnswer) && (userAnswer !== questions[questionsAsked].correct)) {
    // add to incorrect variable
    incorrectTotal++;

    // Display "Incorrect!"
    $("#right-wrong").text("Incorrect!");

    // Display correct answer
    $("#right-answer").html("<h5>The correct answer: </h5><h3>" + questions[questionsAsked].answertext + "</h3>");
    
    // If answer wasn't submitted
    } else {
    // add to timeout variable
    timeoutTotal++;

    // Display "You ran out of time!"
    $("#right-wrong").text("You ran out of time!");

    // Display correct answer
    $("#right-answer").html("<h5>The correct answer: </h5><h3>" + questions[questionsAsked].answertext + "</h3>");
    }

    // Display GIF
    $("#gif-display").html("<img class='mx-auto light-border' src=" + answerGIF + ">");

    // Add 1 to questionsAsked variable
    questionsAsked++;

    // Set userAnswer back to empty string
    userAnswer = "";
}

// Function to show final results screen when all questions asked
function displayFinalResults() {

    // Stop resultsTimer
    clearTimeout(resultsTimer);
    stopTimer();

    // Clear info from answer screen
    $("#time-display").empty();
    $("#right-wrong").empty();
    $("#gif-display").empty();
    $("#right-answer").empty();

    // Change height of displaybox
    $(".displaybox").css("height", "auto");


    // Calculate, assign overall ranking
    // If 90% correct:
    if (correctTotal >= (questions.length * .50)) {
        userRank = "Great job! You are an American Ninja Warrior!";
        finalGif = "assets/images/anw/winner.gif"
    // If less than 50% correct:
    } else {
        userRank = "You need to watch more American Ninja Warrior. Go ahead and try again.";
        finalGif = "assets/images/anw/fail.gif"
    }
    console.log("User rank: " + userRank);
    
    // Display ranking
    $("#overall-rating").html("<h2 class='text-center'>" + userRank + "</h2>");
    
    // Display finalGif
    $("#gif-rating").html("<img src='" + finalGif + "' class='final-gif float-left'</img>");

    // Display correct, incorrect, time out totals
    $("#overall-results").html("<h4>Your Results</h4><p><strong>Total correct: </strong>" + correctTotal
        + "</p><p><strong>Total incorrect: </strong>" + incorrectTotal + "</p><p><strong>Total unanswered: </strong>" + timeoutTotal
        + "</p>");

    // Display menu button
    $(".new-game").css("display", "block");
}

function stopTimer () {
    clearTimeout(questionTimer);
    clearInterval(intervalID);
}

// ================================================================================

// CLICK FUNCTIONS ===============================================================
// Click function for opening start button
$("#start").on("click", function () {

    // Empty page title - won't need again 
    $(".start-title").empty();

    // Hide start button - won't need again
    $("#start").css("display", "none");

    // Move display box up on screen
    $(".displaybox").css("margin-top", "70px")
    
    // Make display box bigger
    $(".displaybox").css("height", "500px")

    // Displays first question
    runTimer();
});

// Click functions for user choice for all four answers
$("#a1").on("click", function () {
    // Run function to stop timer
    stopTimer();
   
    // Set user's answer to a variable
    userAnswer = "a1";

    // Run function displayAnswer
    displayAnswer();
});

$("#a2").on("click", function () {
     // Run function to stop timer
     stopTimer();
    
    // Set user's answer to a variable
    userAnswer = "a2";

    // Run function displayAnswer
    displayAnswer();
});

$("#a3").on("click", function () {
    // Run function to stop timer
     stopTimer();
     
    // Set user's answer to a variable
    userAnswer = "a3";

    // Run function displayAnswer
    displayAnswer();
});

$("#a4").on("click", function () {
    // Run function to stop timer
     stopTimer();
    
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
    startGame();
    document.getElementById("background-music").loop = true;

});