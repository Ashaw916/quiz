//question object
var $questArray = [
    { 
        question: "What symbol is used as a short hand for jquery",
        optionA: "&",
        optionB: "#",
        optionC: "$",
        answer: "$",
    },
    {
        question: "How do you select html elements?",
        optionA: "( )",
        optionB: "$('  ')",
        optionC: "$(< >)",
        answer: "$('  ')",
    },
    {
        question: "what would you use to change the text of an element?",
        optionA: ".text()",
        optionB: ".addText()",
        optionC: ".attr()",
        answer: ".text()",
    },
    {
        question: "what is jquery",
        optionA: "a coding language",
        optionB: "a javascript library",
        optionC: "an api",
        answer: "a javascript library",
    },
    {
        question: "How would you add a source to and image tag",
        optionA: ".addClass()",
        optionB: ".add()",
        optionC: ".attr()",
        answer: ".attr()",
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
var answered = false;

//event listener for document
$(document).ready(function() {

    // event listener for start button
    $("#start-btn").on("click", function() {

        answered = false;
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
        if (answered === true){
            return;
        }
        

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
            $secondsLeft -=10;
        };

        $("#confirm").text($questArray[$testLocation].answer);
        console.log($score);
        console.log($testLocation);
        answered = true;
    });

    //event listener for a2 button
    $("#a2").on("click", function(){
        if (answered === true){
            return;
        }
        

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
            $secondsLeft -=10;
        }

        $("#confirm").text($questArray[$testLocation].answer);
        console.log($score);
        console.log($testLocation);
        answered = true;
    });

    //event listener for a3 button
    $("#a3").on("click", function(){
        if (answered === true){
            return;
        }

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
            $secondsLeft -=10;
        }
        // show correct answer
        $("#confirm").text($questArray[$testLocation].answer)
        console.log($score);
        console.log($testLocation);
        answered = true;
    });

    //event listener for next button
    $("#next-btn").on("click", function() {
        // add one to test location
        $testLocation++;
        // clear confirm div
        $("#confirm").text("");
        // call function to create quiz
        createQuestions();
        //call function to end
        $endQuiz();
        answered = false;
    });

    // end quiz,  show score, and hide everthing else
    function $endQuiz() {
        if ($testLocation === 4){
            $("#next-btn").text("Done");
        }
        if ($testLocation === 5){
            var initials = prompt("You Scored " + $score + " out of 5 " + "Enter Initials");
            $("#confirm").append(initials + " ").append($score + " out of 5");
            $("#timer").addClass("hide");
            $("#next-btn").addClass("hide");
            timer === 0;
        };
        if ($secondsLeft === 0) {
            var initials = prompt("You Scored " + $score + " out of 5 " + "Enter Initials");
            $("#confirm").append(initials + " ").append($score + " out of 5");
            $("#timer").addClass("hide");
            $("#next-btn").addClass("hide");
        };
    };  
});