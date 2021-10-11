var showTime = document.querySelector("p#showTime");
var startClock = document.querySelector("button#init");
var pauseClock = document.querySelector("button#pause");
var stopClock = document.querySelector("button#stop"); 

var time = {
  hour: 0,
  minutes: 0,
  seconds: 0
};
var count;


function clock() {
  showTime.innerHTML = `${time.hour}:${time.minutes}:${time.seconds}`;
  if ( time.hour == 0 && time.minutes == 0 && time.seconds == 0) {
    return restart();
  }
  if(time.seconds == 00) {
    time.seconds = 59;
    
    if(time.minutes == 00) {
      time.minutes = 59;
    }
    else {time.minutes--;}
    if(time.hour > 0) {
      time.hour--;
    }
  } else{ time.seconds--;}
}


startClock.onclick = () => {
  var timeInput = document.querySelector("input#time");

  time.hour = timeInput.value.split(":")[0],
  time.minutes = timeInput.value.split(":")[1],
  time.seconds = timeInput.value.split(":")[2]

  pauseClock.removeAttribute("disabled");
  stopClock.removeAttribute("disabled");
  startClock.setAttribute("disabled", "disabled"); //*impossibilito de o usuario clicar de novo em "Done" para iniciar o clock novamente enviar bug de duplo intervalo
  clock();
  count = setInterval(clock, 1000);
}

stopClock.onclick = () => {
  time.hour = "00";
  time.minutes = "00";
  time.seconds = "00";
  restart();
}

var p = true;
pauseClock.onclick =() => {
  if (p) {
    clearInterval(count);
    p = false;
    pauseClock.textContent = "Continue";
  } else {
    count = setInterval(clock, 1000);
    p = true;
    pauseClock.textContent = "Pause";
  }
}


function restart(){
  showTime.innerHTML = `${time.hour}:${time.minutes}:${time.seconds}`;
  clearInterval(count);
  p = true;
  pauseClock.textContent = "Pause";
  startClock.removeAttribute("disabled");
  pauseClock.setAttribute("disabled", "disabled"); 
  stopClock.setAttribute("disabled", "disabled"); 
}
