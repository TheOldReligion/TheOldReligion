function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;
    var question6 = document.quiz.question6.value;
    var question7 = document.quiz.question7.value;
    var question8 = document.quiz.question8.value;

    if (question1 == "true") {
    correct =+ 1;
    }
    if (question2 == "true") {
        correct =+ 1;
    }
    if (question3 == "true") {
        correct =+ 1;
    }
    if (question4 == "true") {
        correct =+ 1;
    }
    if (question5 == "true") {
        correct =+ 1;
    }
    if (question6 == "true") {
        correct =+ 1;
    }
    if (question7 == "true") {
        correct =+ 1;
    }
    if (question8 == "true") {
        correct =+ 1;
    }
    document.getElementById("after_submit").style.visibility = "visible";
    document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
}