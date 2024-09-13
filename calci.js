function appendtodisplay(value) {
  const display = document.getElementById("display");
  display.value += value;
}
function clear() {
  const display = document.getElementById("display");
  display.value = " ";
}
function del() {
  const display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}
function calcRes() {
  const display = document.getElementById("display");
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
