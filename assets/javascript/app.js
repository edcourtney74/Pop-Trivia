// GLOBAL VARIABLES

// Array object containing question/answer objects, each with 1 question, 4 answers and the gif to display
var questions = [{
    q: "question1 text",
    a1: "answer1-1 text",
    a2: "answer1-2 text",
    a3: "answer1-3 text",
    a4: "answer1-4 text",
    correct: "a1",
    answertext: "answer text"
}, {
    q: "question2 text",
    a1: "answer2-1 text",
    a2: "answer2-2 text",
    a3: "answer2-3 text",
    a4: "answer2-4 text",
    correct: "a2",
    answertext: "answer text"
}, {
    q: "question2 text",
    a1: "answer2-1 text",
    a2: "answer2-2 text",
    a3: "answer2-3 text",
    a4: "answer2-4 text",
    correct: "a3",
    answertext: "answer text"
}, {
    q: "question2 text",
    a1: "answer2-1 text",
    a2: "answer2-2 text",
    a3: "answer2-3 text",
    a4: "answer2-4 text",
    correct: "a4",
    answertext: "answer text"
}, {
    q: "question2 text",
    a1: "answer2-1 text",
    a2: "answer2-2 text",
    a3: "answer2-3 text",
    a4: "answer2-4 text",
    correct: "a1",
    answertext: "answer text"
}, {
    q: "question2 text",
    a1: "answer2-1 text",
    a2: "answer2-2 text",
    a3: "answer2-3 text",
    a4: "answer2-4 text",
    correct: "a1",
    answertext: "answer text"
}, {
    q: "question2 text",
    a1: "answer2-1 text",
    a2: "answer2-2 text",
    a3: "answer2-3 text",
    a4: "answer2-4 text",
    correct: "a1",
    answertext: "answer text"
}, {
    q: "question2 text",
    a1: "answer2-1 text",
    a2: "answer2-2 text",
    a3: "answer2-3 text",
    a4: "answer2-4 text",
    correct: "a1",
    answertext: "answer text"
}, {
    q: "question2 text",
    a1: "answer2-1 text",
    a2: "answer2-2 text",
    a3: "answer2-3 text",
    a4: "answer2-4 text",
    correct: "a1",
    answertext: "answer text"
}, {
    q: "question2 text",
    a1: "answer2-1 text",
    a2: "answer2-2 text",
    a3: "answer2-3 text",
    a4: "answer2-4 text",
    correct: "a1",
    answertext: "answer text"
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
var userAnswer;

// FUNCTIONS

// Will be activated after start button clicked
function startGame() {
    // Reset answers correct
    correctTotal = 0;
    // Reset answers incorrect
    incorrectTotal = 0;
    // Reset answers timed out
    timeoutTotal = 0;
    // Set userAnswer to empty string
    userAnswer = "";
    // Display first question
    displayQuestion();
}

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

    // Advance to next question in 5 seconds
    setTimeout(displayQuestion, 1000 * 5);

    // Check if answer was provided and correct
    if ((userAnswer) && (userAnswer === questions[questionsAsked].correct)) {
        // add to correct variable
        correctTotal ++;
        console.log("Oh yeah");

        // Display "Correct!"
        $("#right-wrong").text("Correct!");
    
    // Check if answer was provided but incorrect:
    } else if ((userAnswer) && (userAnswer !== questions[questionsAsked].correct)) {
        // add to incorrect variable
        incorrectTotal ++;

        // Display "Incorrect!"
        $("#right-wrong").text("Incorrect!");
        
        // Display correct answer
        $("#right-answer").text("The correct answer was " + questions[questionsAsked].answertext);
    
    // If answer wasn't submitted
    } else {
        // add to timeout variable
        timeoutTotal ++;

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

    // if questions asked is equal to number of questions
        // Show final results
        // Calculate overall ranking
        // Display ranking
        // Display correct, incorrect, time out totals
        // Display reset button
}

// Click functions for user choice for all four answers
$("#a1").on("click", function() {
    // Set user's answer to a variable
    userAnswer = "a1";

    // Run function displayAnswer
    displayAnswer();
});

$("#a2").on("click", function() {
    // Set user's answer to a variable
    userAnswer = "a2";

    // Run function displayAnswer
    displayAnswer();
});

$("#a3").on("click", function() {
    // Set user's answer to a variable
    userAnswer = "a3";

    // Run function displayAnswer
    displayAnswer();
});

$("#a4").on("click", function() {
    // Set user's answer to a variable
    userAnswer = "a4";

    // Run function displayAnswer
    displayAnswer();
});

// Restart game
// Reset all variables
// Move straight to displayQuestion

// GAME PLAY============================================================
$(document).ready(function () {
    startGame();
});