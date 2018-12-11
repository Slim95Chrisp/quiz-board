$(document).ready(function(){
 $("#result").click(function(event){

   var questionOne = $("input:radio[name=questionOne]:checked").val();
   var questionTwo = $("input:radio[name=questionTwo]:checked").val();
   var questionThree = $("input:radio[name=questionThree]:checked").val();
   var questionFour = $("input:radio[name=questionFour]:checked").val();
   var questionFive = $("input:radio[name=questionFive]:checked").val();
   var result = parseInt(questionOne) + parseInt(questionTwo) +
   parseInt(questionThree) + parseInt(questionFour) + parseInt(questionFive);
   $("#result").text("You Score: " + result + "%");
   $("#result").show();
   $("#quiz").hide();
   event.preventDefault();
 });
});
