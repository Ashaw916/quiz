//array of question objects

var questions = [
    {
        question: "sgdfdfsdgssjfjshfg",
        answers: [" ", " ", " ", " "],
        get correctAnswer() {
            return this.answers[1];
        }
    },
    {
        question: "sgdfdfsdgssjfjshfg",
        answers: [" ", " ", " ", " "],
        get correctAnswer() {
            return this.answers[1];
        }
    },
    {
        question: "sgdfdfsdgssjfjshfg",
        answers: [" ", " ", " ", " "],
        get correctAnswer() {
            return this.answers[1];
        }
    },
    {
        question: "sgdfdfsdgssjfjshfg",
        answers: [" ", " ", " ", " "],
        get correctAnswer() {
            return this.answers[1];
        }
    },
    {
        question: "sgdfdfsdgssjfjshfg",
        answers: [" ", " ", " ", " "],
        get correctAnswer() {
            return this.answers[1];
        }
    }
];

var qIndex = 0;
//var displayQuestion = document.getElementById("display-q");
var currentQuestion = questions[qIndex].question;
    
// variables to track score
var score = 0;

//variable for place in test
var $testLocation = 0;
var $buttons = [$("#a1"), $("#a2"), $("#a3")];

//locations in html
//  "test-sections"
//  "start-btn"
//  "timer"
//  "question"
//  "answers"
//  "a1"
//  "a2"
//  "a3"
//  "confirm"
//  "answer-text"
//  "next-btn"

// timer
var $totalSeconds = 120;
var $secondsElapsed = 0;
var $secondsLeft = 120;
var $interval;

//event listener for document
$(document).ready(function() {

    $("#start-btn").on("click", function() {

    $("#start-btn").attr("class", "hide")

        function setTime() {
            var $timerInterval = setInterval(function() {
              $secondsLeft--;
              $("#timer").text($secondsLeft + "seconds left.");
          
              if($secondsLeft === 0) {
                clearInterval($timerInterval);
                alert($score + " out of 4")
              }
            }, 1000);
          }

          function sendMessage() {
            $("#timer").text(" ");
          }
          
          setTime();
    });
    function makeQuiz() {

        $("#question").text($currentQ);

        for (i = 0; i < $buttons.length; i++) {
            var $addAnswers = $questionObj[$questIndex].answers;
            $buttons[i].textContent = $addAnswers[i];
        }
    }
    //event listener for each answer button
    

        //if else right answer
        function selectAnswer() {

        }

            // display answer 
            //change answer text color depending on right/wrong
            //change score
            //change question number

    //event listener for next button
    
        //function to display next question object
        function nextQuestion() {

        }
        //change button to say done on last question and display score


});