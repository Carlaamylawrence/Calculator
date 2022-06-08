let sum = "";

function buildSum(char) {
  sum += char;
  document.getElementById("output").innerHTML = sum;
}

function calculate() {
  sum = eval(sum);
  document.getElementById("output").innerHTML = sum;
}

function reset() {
  sum = "";
  document.getElementById("output").innerHTML = sum;
}

function colorChange() {
  document.getElementById("output").style.color = "red";
}

function colorChange2() {
  document.getElementById("output").style.color = "green";
}

function colorChange3() {
  document.getElementById("output").style.color = "blue";
}
