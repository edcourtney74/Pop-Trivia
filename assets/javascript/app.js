// GLOBAL VARIABLES

// Array object containing question/answer objects, each with 1 question, 4 answers and the gif to display
var questions = [{
    q: "question1 text",
    a1: "answer1-1 text",
    a2: "answer1-2 text",
    a3: "answer1-3 text",
    a4: "answer1-4 text",
}, {
    q: "question2 text",
    a1: "answer2-1 text",
    a2: "answer2-2 text",
    a3: "answer2-3 text",
    a4: "answer2-4 text",
}, {
    q: "question2 text",
    a1: "answer2-1 text",
    a2: "answer2-2 text",
    a3: "answer2-3 text",
    a4: "answer2-4 text",
}, {
    q: "question2 text",
    a1: "answer2-1 text",
    a2: "answer2-2 text",
    a3: "answer2-3 text",
    a4: "answer2-4 text",
}, {
    q: "question2 text",
    a1: "answer2-1 text",
    a2: "answer2-2 text",
    a3: "answer2-3 text",
    a4: "answer2-4 text",
}, {
    q: "question2 text",
    a1: "answer2-1 text",
    a2: "answer2-2 text",
    a3: "answer2-3 text",
    a4: "answer2-4 text",
}, {
    q: "question2 text",
    a1: "answer2-1 text",
    a2: "answer2-2 text",
    a3: "answer2-3 text",
    a4: "answer2-4 text",
}, {
    q: "question2 text",
    a1: "answer2-1 text",
    a2: "answer2-2 text",
    a3: "answer2-3 text",
    a4: "answer2-4 text",
}, {
    q: "question2 text",
    a1: "answer2-1 text",
    a2: "answer2-2 text",
    a3: "answer2-3 text",
    a4: "answer2-4 text",
}, {
    q: "question2 text",
    a1: "answer2-1 text",
    a2: "answer2-2 text",
    a3: "answer2-3 text",
    a4: "answer2-4 text",
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

// FUNCTIONS

// Will be activated after start button clicked
function startGame() {
    // Reset answers correct
    correctTotal = 0;
    // Reset answers incorrect
    incorrectTotal = 0;
    // Reset answers timed out
    timeoutTotal = 0;
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

    // Start 30-second countdown
    setTimeout(displayAnswer, 1000 * 30); 

    // Display 30-second countdown
    intervalID = setInterval(decrement, 1000);

    // Add 1 to questions asked variable
    questionsAsked ++;
}

// Function to decrease countdown clock by 1 second
function decrement() {
    // Decrease timer by 1;
    timer --;

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
    


}

// checkAnswer
    // Remove question text
    // Show gif
    // Advance to next screen in 5 seconds

        // if answer is correct:
            // add to correct variable
            // Display "Correct!"

        // if answer is incorrect:
            // add to incorrect variable
            // Display "Incorrect!"
            // Display correct answer

        // if no answer - timed out:
            // add to time out variable
            // Display "You ran out of time!"
            // Display correct answer    

    // if questions asked is equal to number of questions, show final results
        // Calculate overall ranking
        // Display ranking
        // Display correct, incorrect, time out totals
        // Display reset button
    
    // Reset game
        // Reset all variables
        // Move straight to displayQuestion

// GAME PLAY============================================================
$(document).ready(function () {
    startGame();
});