$(document).ready(function(){
  $("form#quiz").submit(function(event){

    var questionOne = $("input:radio[name=questionOne]:checked").val();
    var questionTwo = $("input:radio[name=questionTwo]:checked").val();
    var questionThree = $("input:radio[name=questionThree]:checked").val();
    var questionFour = $("input:radio[name=questionFour]:checked").val();
    var questionFive = $("input:radio[name=questionFive]:checked").val();
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
