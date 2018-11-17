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
    funfact: "Elaine's tasks with Mr. Pitt included finding the right pair of socks, removing salt from his pretzel sticks and sharpening pencils."
}, {
    q: "What soup did George order from the Soup Nazi?",
    a1: "Mulligatawny",
    a2: "Clam Chowder",
    a3: "Turkey chili",
    a4: "Gazpacho",
    correct: "a3",
    answertext: "Turkey chili",
    funfact: "The soup vendor who the character was based on was referenced a few years before in the movie Sleepless in Seattle."
}, {
    q: "When Newman’s mail truck catches on fire, what is he transporting?",
    a1: "Crates of fish",
    a2: "Aluminum cans",
    a3: "Large bags of ice",
    a4: "David Berkowitz’s mail bag",
    correct: "a1",
    answertext: "Crates of fish",
    funfact: "Newman was delivering supreme flounder to a Chinese restaurant, the restaurant that wouldn't deliver to Elaine's apartment."

}, {
    q: "What song does Elaine dance to at her company party?",
    a1: "“Brick House” by The Commodores",
    a2: "“Get Down On It” by Kool & The Gang",
    a3: "'Don’t Stop Til You Get Enough' by Michael Jackson",
    a4: "“Shining Star” by Earth, Wind & Fire",
    correct: "a4",
    answertext: "“Shining Star” by Earth, Wind & Fire",
    funfact: "Elaine's dance was based on the dancing of Saturday Night Live creator Lorne Michaels."
}, {
    q: "In “The Chinese Restaurant,” what name does the restaurant host call out instead of 'Costanza'?",
    a1: "Kruger",
    a2: "Esperanza",
    a3: "Cartwright",
    a4: "Vandelay",
    correct: "a3",
    answertext: "Cartwright",
    funfact: "A writer claims that the name Cartwright was based on a character from the TV show Bonanza, which rhymes with Costanza."

}, {
    q: "Why did Jerry and Donna break up?",
    a1: "She was upset that Jerry told his friends she liked the Cotton Dockers commercial.",
    a2: "She shushed him and ate her peas one at a time.",
    a3: "He couldn’t remember her name.",
    a4: "He wouldn’t admit to watching Melrose Place.",
    correct: "a1",
    answertext: "She was upset that Jerry told his friends she liked the Cotton Dockers commercial.",
    funfact: "Saturday Night Live also did a parody of the Cotton Dockers commercial, calling it Bad Idea jeans."

}, {
    q: "In “The Susie,” George’s answering machine message is based off the theme song for what TV show?",
    a1: "The White Shadow",
    a2: "Cheers",
    a3: "The Dukes of Hazzard",
    a4: "The Greatest American Hero",
    correct: "a4",
    answertext: "The Greatest American Hero",
    funfact: "'Believe It or Not', sung by Joey Scarbury, made it to No. 2 on the Billboard Hot 100."

}, {
    q: "What is the name of the clown George hires to work at a children’s party?",
    a1: "Steve",
    a2: "Eric",
    a3: "Bubbles",
    a4: "Phil",
    correct: "a2",
    answertext: "Eric",
    funfact: "Eric the Clown was played by Jon Favreau, who went on to star in Swingers and direct Elf and Iron Man 1 & 2."

}, {
    q: "The actor who portrayed Tim Whatley has NOT appeared in which show?",
    a1: "Breaking Bad",
    a2: "Malcolm in the Middle",
    a3: "Law & Order",
    a4: "How I Met Your Mother",
    correct: "a3",
    answertext: "Law & Order",
    funfact: "Bryan Cranston won four Emmys as Walter White in Breaking Bad."

}, {
    q: "What day is Festivus typically celebrated?",
    a1: "The first Thursday after Thanksgiving",
    a2: "December 23",
    a3: "December 25",
    a4: "December 27",
    correct: "a2",
    answertext: "December 23",
    funfact: "Festivus is an actual holiday created in the 60s by the father of one of the Seinfeld writers."

}, {
    q: "In “The Dinner Party” (which aired in 1993), Jerry vomits for the first time since what year?",
    a1: "1972",
    a2: "1980",
    a3: "1986",
    a4: "1990",
    correct: "a2",
    answertext: "1980",
    funfact: "Jerry's streak lasted 13 years and 5 months."

}, {
    q: "What baseball player spat on Kramer and Newman at a Mets game?",
    a1: "Roger McDowell",
    a2: "Keith Hernandez",
    a3: "Mookie Wilson",
    a4: "Darryl Strawberry",
    correct: "a1",
    answertext: "Roger McDowell",
    funfact: "Roger McDowell receives $13.52 in royalties every time this episode reruns."

}, {
    q: "Which item does Babu Bhatt NOT say is a specialty of the Dream Cafe?",
    a1: "Tacos",
    a2: "Moussaka",
    a3: "Franks and beans",
    a4: "Philly cheesesteaks",
    correct: "a4",
    answertext: "Philly cheesesteaks",
    funfact: "The character Babu is from Pakistan, but the actor Brian George is Israeli-English."

}, {
    q: "Why did Jerry and Lisi break up?",
    a1: "She had man hands.",
    a2: "He preferred to continue using a funny voice (heeeellllloooo).",
    a3: "She was a sentence-finisher.",
    a4: "She thought she caught him picking his nose.",
    correct: "a3",
    answertext: "She was a sentence-finisher.",
    funfact: "Jerry then tries to get back together with Lisi to avoid The Lopper."

}, {
    q: "Who was the first person to find out that Cosmo was Kramer’s first name?",
    a1: "Jerry",
    a2: "George",
    a3: "Elaine",
    a4: "Newman",
    correct: "a2",
    answertext: "George",
    funfact: "Kramer also took the aliases Dr./Prof. van Nostrand and H.E. Pennypacker."
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
var intervalID = 0;

// setTimeout variable for 30-second timer
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

// Overall function flow
// startGame() - Home screen displayed - click on start button fires displayQuestion();
// displayQuestion();
// clearInterval(intervalID);
// setTimeout(displayAnswer, 1000 * 30);
// decrement();
// displayAnswer(); fires from button click or setTimeout
// displayFinalResults(); fires when all questions have been asked
// restartGame(); fires when restart button is pushed;


// Fires after start button clicked or automatically afer question answer screen shown
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

function displayQuestion() {
    // Clear resultsTimer - moved from answer page to next question
    clearTimeout(resultsTimer);
    
    // Clear interval so timer refreshes
    clearInterval(intervalID);

    // Set countdown for amount of time to answer
    questionTimer = setTimeout(displayAnswer, 1000 * 30);

    // Reset timer to 30 seconds
    timer = 30;
    
    // Display 30-second countdown
    intervalID = setInterval(decrement, 1000);    

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
    answerGIF = "assets/images/gif" + questionsAsked + ".gif";

    // Set which screen to advance to in 7 seconds
    if (questionsAsked === (questions.length - 1)) {
        // if all questions have been asked, go to results screen
        resultsTimer = setTimeout(displayFinalResults, 1000 * 8);

    } else {
        // if all questions haven't been asked, go to next question
        resultsTimer = setTimeout(displayQuestion, 1000 * 8);
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
    // If 100% correct:
    if (correctTotal === (questions.length * 1)) {
        userRank = "Hoochie mama! You know your Seinfeld trivia.";
        finalGif = "assets/images/celebrate.gif"
    // If 90% correct:
    } else if (correctTotal >= (questions.length * .90)) {
        userRank = "That's gold, Jerry, gold! You're close to an expert on Seinfeld.";
        finalGif = "assets/images/celebrate.gif"
    // If 75-89% correct:
    } else if (correctTotal >= (questions.length * .70)) {
        userRank = "Not bad. Go reward yourself with some Ovaltine and Drake's Coffe Cake.";
        finalGif = "assets/images/celebrate.gif"
    // If 50-74% correct:
    } else if (correctTotal >= (questions.length * .50)) {
        userRank = "That's a shame. Watching more Seinfeld could be a help to you.";
        finalGif = "assets/images/jail.gif"
    // If less than 50% correct:
    } else {
        userRank = "No soup for you! Time to watch more Seinfeld.";
        finalGif = "assets/images/jail.gif"
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

    // Display restart button
    $("#restart").css("display", "block");
}

// Function that runs on click of restart button
function restartGame() {
    // Make display box bigger
    $(".displaybox").css("height", "500px")
    
    // Empty text from results screen
    $("#overall-rating").empty();
    $("#overall-results").empty();
    $("#gif-rating").empty();

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

    // Display restart button
    $("#restart").css("display", "none");

    // Display first question
    displayQuestion();
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
    displayQuestion();
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
});