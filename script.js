$(document).ready(function(){
let num1=$("#num1");
let num2=$("#num2");
let result=$("#result");

$("#add").click(function(){
result.val(parseFloat(num1.val())+parseFloat(num2.val()));
result.css({"color":"green","border":"2px solid green"});
});
$("#sub").hover(function(){
result.val(parseFloat(num1.val())-parseFloat(num2.val()));
result.css({
    "color":"red",
    "border":"2px solid red"
});
});

$("#mul").mouseleave(function(){
result.val(parseFloat(num1.val())*parseFloat(num2.val()));
result.css({
    "color":"blue",
    "border":"2px solid blue"
}
);

});

$("#divi").mouseup(function(){
result.val(parseFloat(num1.val())/parseFloat(num2.val()));
result.css({
    "color":"orange",
    "border":"2px solid orange"
});
});

$("#mod").focus(function(){
result.val(parseFloat(num1.val())%parseFloat(num2.val()));
result.css({
    "color":"pink",
    "border":"2px solid pink"
});
});
$("#answer1").hide();
$("#btn1").click(function(){
$("#answer1").toggle();
});

$("#answer2").hide();
$("#btn2").click(function(){
$("#answer2").toggle();
});
$("#answer3").hide();
$("#btn3").click(function(){
$("#answer3").toggle();
});
$("#answer4").hide();
$("#btn4").click(function(){
$("#answer4").toggle();
});
$("#answer5").hide();
$("#btn5").click(function(){
$("#answer5").toggle();
});
$("#answer6").hide();
$("#btn6").click(function(){
$("#answer6").toggle();
});
$("#answer7").hide();
$("#btn7").click(function(){
$("#answer7").toggle();
});
$("#answer8").hide();
$("#btn8").click(function(){
$("#answer8").toggle();
});
$("#answer9").hide();
$("#btn9").click(function(){
$("#answer9").toggle();
});
$("#answer10").hide();
$("#btn10").click(function(){
$("#answer10").toggle();
});
$("#answer11").hide();
$("#btn11").click(function(){
$("#answer11").toggle();
});
$("#answer12").hide();
$("#btn12").click(function(){
$("#answer12").toggle();
});
});
