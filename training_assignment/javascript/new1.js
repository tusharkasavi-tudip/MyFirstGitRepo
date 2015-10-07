<!DOCTYPE html>
<html>
<head>
</head>
<body>
<p id="demo"> please enter the number between 1 to10 </p>

<input id="num" type="number ">

<button type="button" onclick="myfunction()"> submit </button>

<script>
function myfunction() {
  var x, text;
 var x = document.getElement0ById("num").value;
  if (isNaN(x) || x < 1 || x > 10) {
  text = "input not valid";
}  else {
  text = "input ok"; 
 document.getElementById("demo").innerHTML = text;
}
}

</script>



</body>
</html> 