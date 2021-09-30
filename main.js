var showTime = document.querySelector("p#showTime");
var startClock = document.querySelector("button#init");
var stopClock = document.querySelector("button#stop"); 

var count;

startClock.onclick = () => {
  var timeInput = document.querySelector("input#time");

  var time = {
    hour: timeInput.value.split(":")[0],
    minutes: timeInput.value.split(":")[1],
    seconds: timeInput.value.split(":")[2]
  }

  startClock.setAttribute("disabled", "disabled");
  count = setInterval(() => {
  showTime.innerHTML = `${time.hour}:${time.minutes}:${time.seconds}`;
  if ( time.hour == 0 && time.minutes == 0 && time.seconds == 0) {
    clearInterval(count);
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
  }, 1000);
}

stopClock.onclick = () => {
  startClock.removeAttribute("disabled");
  clearInterval(count);
}

