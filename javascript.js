var result() {
  var a = parseFloat(document.getElementById('Value 1').value);
  var b = parseFloat(document.getElementById('Value 2').value);
  var c = parseFloat(document.getElementById('Value 3').value);
  var answer = document.getElementById('answer');

if (a+b>c && b+c>a && c+a>b){

  if (a!===b && b!==c && c!===a){
    answer.textContent="SCALENE";
  }

  else if (a===b && b===c && c===a){
    answer.textContent="EQUILATERAL";
  }

  else (a===b || b===c || c===a){
    answer.textContent="ISOSCELES";
  }
}
else {
  answer.textContent="That is not a triangle";
}
}
function reset(){
  var Value 1=parseInt(document.getElementById('Value 1').value);
  var Value 2=parseInt(document.getElementById('Value 2').value);
  var Value 3=parseInt(document.getElementById('Value 3').value);
  var answer=document.getElementById('answer');
}
