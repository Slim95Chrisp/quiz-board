$(document).ready(function(){
  $("form#quiz").submit(function(event){

    var questionOne = $("input:radio[questionOne]:checked").val();
    var questionTwo = $("input:radio[questionTwo]:checked").val();
    var questionThree = $("input:radio[questionThree]:checked").val();
    var questionFour = $("input:radio[questionFour]:checked").val();
    var questionFive = $("input:radio[questionFive]:checked").val();
    var result = parseInt(questionOne) + parseInt(questionTwo) + parseInt(questionThree) + parseInt(questionFour) + parseInt(questionFive);
    $("#result").text("You Score: " + result + "%");

    $("button").click(function(){
      $("#result-showing").toggle();
    })
    $("form#quiz").show();
    $("#result").show();
    event.preventDefault();
  });
});
