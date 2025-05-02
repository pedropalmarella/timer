let timer = [];
let miliseconds = document.querySelector("#miliseconds");
let seconds = document.querySelector("#seconds");
let minutes = document.querySelector("#minutes");
let hours = document.querySelector("#hours");
timer[0] = parseInt(miliseconds.textContent);
timer[1] = parseInt(seconds.textContent);
timer[2] = parseInt(minutes.textContent);
timer[3] = parseInt(hours.textContent);
const intervalTime = 1;
let idInterval;

function control(option) {
  //Restat the interval always when a action is exec
  clearInterval(idInterval); // Clear the interval
  idInterval = setInterval(() => control(option), intervalTime); //Restart the interval

  if (option == 1) {
    increment();
  }
  else if (option == 2) {
    decrement();
  }
  else if (option == 3) {
    stop();
  }
  else if (option == 4) {
    reset();
  }
}

function increment() {
  timer[0]++;
  if (timer[0] >= 10) {
    timer[0] = 0;
    timer[1]++;
  }
  if (timer[1] >= 10) {
    timer[1] = 0;
    timer[2]++;
  }
  if (timer[2] >= 10) {
    timer[2] = 0;
    timer[3]++;
  }
  updateDisplay();
}

function decrement() {
  if (timer[0] !== 0 || timer[1] !== 0 || timer[2] !== 0 || timer[3] !== 0) {
    timer[0]--;
    if (timer[0] < 0) {
      timer[0] = 10;
      timer[1]--;
    }
    if (timer[1] < 0) {
      timer[1] = 10;
      timer[2]--;
    }
    if (timer[2] < 0) {
      timer[2] = 10;
      timer[3]--;
    }
    if (timer[3] < 0) {
      timer[3] = 0;
    }
    updateDisplay();
  }
}

function stop() {
  clearInterval(idInterval);
}

function reset() {
  timer.splice(0, 4, 0, 0, 0, 0);
  updateDisplay();
}

function updateDisplay() {
  miliseconds.innerHTML = timer[0].toString().padStart(2, "0")
  seconds.innerHTML = timer[1].toString().padStart(2, "0");
  minutes.innerHTML = timer[2].toString().padStart(2, "0");
  hours.innerHTML = timer[3].toString().padStart(2, "0");
}

