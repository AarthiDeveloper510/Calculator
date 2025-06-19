function press(val) {
  document.getElementById("display").value += val;
}

function calculate() {
  try {
    const output = eval(document.getElementById("display").value);
    document.getElementById("display").value = output;
  } catch {
    document.getElementById("display").value = "Error";
  }
}

function clearDisplay() {
  document.getElementById("display").value = "";
}