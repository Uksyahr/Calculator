// This function clears all the values
const audio = new Audio("click.mp3");
function clearScreen() {
    document.getElementById("result").value = "";
    audio.play()
  }
  
  
  // This function displays the values
  function display(value) {
    document.getElementById("result").value += value;
    audio.play()
  }
  
  
  // This function evaluates the expression and returns the result
  function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
  }
