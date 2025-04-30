let timer = [];
let btnOption;
let seconds = document.querySelector("#seconds");
let minutes = document.querySelector("#minutes");
let hours = document.querySelector("#hours");
timer[0] = parseInt(seconds.textContent);
timer[1] = parseInt(minutes.textContent);
timer[2] = parseInt(hours.textContent);



function control() {
  if (btnOption == 1) {
    increment();
  }
  else if (btnOption == 1) {
    // decrement();
  }
}

function increment() {
  btnOption = 1;
  timer[0]++;
  if (timer[0] >= 5) {
    timer[0] = 0;
    timer[1]++;
  }
  if (timer[1] >= 5) {
    timer[1] = 0;
    timer[2]++;
  }
  seconds.innerHTML = timer[0];
  minutes.innerHTML = timer[1];
  hours.innerHTML = timer[2];
}


setInterval(control, 1000);