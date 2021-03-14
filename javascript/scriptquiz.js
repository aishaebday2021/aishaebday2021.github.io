
const getScore = document.querySelector("#checkscore"),
  result = document.querySelector("#yourscore");

getScore.addEventListener("click", function () {
  score = 0;
  const answerOne = document.querySelector("#q1answer").value.toLowerCase();
  const answerTwo = document.querySelector("#q2answer").value.toLowerCase();
  const answerThree = document.querySelector("#q3answer").value.toLowerCase();
  const answerFour = document.querySelector("#q4answer").value.toLowerCase();
  const answerFive = document.querySelector("#q5answer").value.toLowerCase();
  const answerSix = document.querySelector("#q6answer").value.toLowerCase();
  const answerSeven = document.querySelector("#q7answer").value.toLowerCase();
  const answerEight = document.querySelector("#q8answer").value.toLowerCase();
  const answerNine = document.querySelector("#q9answer").value.toLowerCase();
  const answerTen = document.querySelector("#q10answer").value.toLowerCase();
  const answerEleven = document.querySelector("#q11answer").value.toLowerCase();
  const answerTwelve = document.querySelector("#q12answer").value.toLowerCase();

  if (
    answerOne === "yusuf" ||
    answerOne === "me" ||
    answerOne === "mohamed nousath yusuf"
  ) {
    score += 10;
  }
  if (
    answerTwo === "no one" ||
    answerTwo === "not both" ||
    answerTwo === "none"
  ) {
    score += 10;
  }
  if (answerThree === "my birthday" || answerThree === "birthday" || answerThree ==="29 feburary" || answerThree =="29 02") {
    score += 10;
  }
  if (answerFour === "yusuf" || answerFour === "me" || answerFour === "mohamed nousath yusuf") {
    score += 10;
  }
  if (answerFive === "goa" || answerFive === "goa bungee jumping" || answerFive === "goa beach") {
    score += 10;
  }
  if (
    answerSeven === "yusuf" ||
    answerSeven === "me" ||
    answerSeven === "mohamed nousath yusuf"
  ) {
    score += 10;
  }
  if (answerSix === "bangalore" || answerSix === "chennai") {
    score += 10;
  }
  if (answerEight === "abarna" || answerEight === "she" || answerEight === "her") {
    score += 10;
  }
  if (answerNine === "maldives" || answerNine === "hill station" || answerNine === "hill") {
    score += 10;
  }
  if (answerTen === "abarna" || answerTen === "she" || answerTen === "her") {
    score += 10;
  }
  if (answerEleven === "anger" || answerEleven === "shouting at abarna" || answerEleven === "angry" || answerEleven === "shouting" ) {
    score += 10;
  }
  if (answerTwelve === "abarna" || answerTwelve === "she" || answerTwelve === "her") {
    score += 10;
  }
  document.getElementById( "class12").style.display = "none";
  yourscore.innerText = "Dumboooo your score is " + score + " out of 120!!!";
  $("#yourscore").show()
  $("#checkscore").hide();
  $("#restart").show();
  
});

let i = 0;
$(document).ready(function(){
    $("#checkscore").hide();
    $("#restart").hide();
    $(".container1 div").each(function(e) {
        if (e != 0)
            $(this).hide();
    });
   
    $("#next").click(function(){
        const len = $(".container1 div:visible").next().length;
        if (len!==0){
            $(".container1 div:visible").next().show().prev().hide();
            i = i +1;
            console.log(i);
        }   
        if(i===11){
            console.log("hi");
            $("#next").hide();
            $("#checkscore").show();
            i++;
        }
        
        else {
            // $(".container1 div:visible").hide();
            // $(".container1 div:first").show();
        }
        return false;
    });
});



$('#restart').on('click', function (e) {
    e.preventDefault();
    $(".container1 div:visible").hide();
    $(".container1 div:first").show();
    $("#next").show();
    $("#checkscore").hide();
    $("#yourscore").hide();
    i = 0;
    score = 0;
    $('#restart').hide();
    $( ".form-control" ).each(function() {
        $('.form-control').val('');
    });
  });

  