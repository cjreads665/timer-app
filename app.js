let min = document.getElementById("min"); // minutes element
let sec = document.getElementById("sec"); //seconds element
let startBtn = document.getElementById("start"); //start button element
let pauseBtn = document.getElementById("pause"); //seconds element
let resetBtn = document.getElementById("reset"); //seconds element
let mins = 14;
let secs = 60;
let stats = "stopped";
let interval = null;
function time() {
  secs--;
  min.textContent = mins < 10 ? "0" + mins : mins;
  sec.textContent = secs < 10 ? "0" + secs : secs;
  if (secs == 0) {
    //when seconds hits zero two cases arise:
    /**
     * its more than 1 -> keep decreasing after reset
     * its less than 1 -> stop it. get some help.
     */
    if (mins == 0) clearInterval(start);
    else {
      mins--;
      secs = 60;
    }
  }
}

function startStop() {
  interval = setInterval(time, 500);
  stats = "started";
}
function pauseStop() {
  window.clearInterval(interval);
  stats = "stopped";
}
function resetStop() {
  mins = 14;
  min.textContent = mins;
  secs = 59;
  sec.textContent =secs;
}

startBtn.addEventListener("click", startStop);
pauseBtn.addEventListener("click", pauseStop);
resetBtn.addEventListener("click", resetStop);
