//question object
var $questArray = [
    { 
        question: "3?",
        optionA: "1 ",
        optionB: "2 ",
        optionC: "3 ",
        answer: "3 ",
    },
    {
        question: "1?",
        optionA: "1 ",
        optionB: "2 ",
        optionC: "3 ",
        answer: "1 ",
    },
    {
        question: "2?",
        optionA: "1 ",
        optionB: "2 ",
        optionC: "3 ",
        answer: "2 ",
    },
    {
        question: "3?",
        optionA: "1 ",
        optionB: "2 ",
        optionC: "3 ",
        answer: "3 ",
    },
    {
        question: "2?",
        optionA: "1 ",
        optionB: "2 ",
        optionC: "3 ",
        answer: "2 ",
    },
    {  
        question: " ",
        optionA: " ",
        optionB: " ",
        optionC: " ",
        answer: " ",
    },
];

// variables to track score
var $score = 0;
//variable for place in test
var $testLocation = 0;
var $a1 = $("#a1");
var $a2 = $("#a2");
var $a3 = $("#a3");
var $buttons = [$a1, $a2, $a3];
// timer
var $secondsLeft = 60;
var $interval;
//event listener for document
$(document).ready(function() {

    // event listener for start button
    $("#start-btn").on("click", function() {
        // hide start after click
        $("#start-btn").addClass("hide");
        //show everything after click
        $("#timer-div").removeClass("hide");
        $("#question-div").removeClass("hide");
        $("#answers").removeClass("hide");
        $("#confirm").removeClass("hide");
        $("#next-div").removeClass("hide");
        // call function to populate question and answers
        createQuestions();

        // timer function
        function setTimer() {
        
            var $timerInterval = setInterval(function() {
                $secondsLeft--;
                $("#timer").text($secondsLeft + " seconds left.");
                if($secondsLeft === 0) {
                clearInterval($timerInterval);
                alert($score + " out of 4");
            }}, 
                1000);
            };

            function sendMessage() {   
                $("#timer").text(" ");
                $("#timer").removerClass("hide");
            };
            
            setTimer();
    });

    // function to populate question and answers
    function createQuestions() {
        $("#question").text($questArray[$testLocation].question);
        $("#a1").text($questArray[$testLocation].optionA);
        $("#a2").text($questArray[$testLocation].optionB);
        $("#a3").text($questArray[$testLocation].optionC);
    };

    //event listener for a1 button
    $("#a1").on("click", function(){
        // disable buttons
        
        if (($questArray[$testLocation].optionA) === ($questArray[$testLocation].answer)) {
            console.log("correct");
            // change color to green if correct and change font size to 2rem
            $("#confirm").css({"color": "green", "font-size": "2rem"});
            $score ++;
        }

        else {
            console.log("wrong");
            // change color to red if wrong and change font size to 2rem
            $("#confirm").css({"color": "red", "font-size": "2rem"});
            $secondsLeft -10;
        };

        $("#confirm").text($questArray[$testLocation].answer);
        console.log($score);
        console.log($testLocation);
    });

    //event listener for a2 button
    $("#a2").on("click", function(){
        // disable buttons

        if (($questArray[$testLocation].optionB) === ($questArray[$testLocation].answer)) {
            console.log("correct");
            // change color to green if correct and change font size to 2rem
            $("#confirm").css({"color": "green", "font-size": "2rem"});
            $score ++;
        }

        else {
            console.log("wrong");
            // change color to red if wrong and change font size to 2rem
            $("#confirm").css({"color": "red", "font-size": "2rem"});
            $secondsLeft -10;
        }

        $("#confirm").text($questArray[$testLocation].answer);
        console.log($score);
        console.log($testLocation);
    });

    //event listener for a3 button
    $("#a3").on("click", function(){
        // disable buttons

        if (($questArray[$testLocation].optionC) === ($questArray[$testLocation].answer)) {
            console.log("correct");
            // change color to green if correct and change font size to 2rem
            $("#confirm").css({"color": "green", "font-size": "2rem"});
            $score ++;
        }

        else {
            console.log("wrong");
            // change color to red if wrong and change font size to 2rem
            $("#confirm").css({"color": "red", "font-size": "2rem"});
            $secondsLeft --;
        }
        // show correct answer
        $("#confirm").text($questArray[$testLocation].answer)
        console.log($score);
        console.log($testLocation);
    });

    //event listener for next button
    $("#next-btn").on("click", function() {
        // add one to test location
        $testLocation++;
        // call function to create quiz
        createQuestions();
        //call function to end
        $endQuiz();
    });

    // end quiz,  show score, and hide everthing else
    function $endQuiz() {
        if ($testLocation === 4){
            $("#next-btn").text("Done");
        }
        if ($testLocation === 5){
            $("#confirm").text($score + " out of 5")
            $("#timer").addClass("hide");
            var initials = prompt("You Scored " + $score + " out of 5 " + "Enter Initials");
            localStorage.setItem("initials", initials);
        };
        if ($secondsLeft === 0) {
            $("#confirm").text($score + " out of 5")
            $("#timer").addClass("hide");
            var initials = prompt("You Scored " + $score + " out of 5 " + "Enter Initials");
            var $scoreSave = $score;
            localStorage.setItem("initials", initials);
        };
    };  
});