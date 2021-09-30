var showTime = document.querySelector("p#showTime");
var startClock = document.querySelector("button#init");
var stopClock = document.querySelector("button#stop"); 

var count;

var hour = 00;
var minutes = 00;
var seconds = 00;


startClock.onclick = () => {
  startClock.setAttribute("disabled", "disabled");
  count = setInterval(() => {
  showTime.innerHTML = `${hour}:${minutes}:${seconds}`;
  if ( hour == 0 && minutes == 0 && seconds == 0) {
    clearInterval(count);
  }
  if(seconds == 00) {
    seconds = 59;
    
    if(minutes == 00) {
      minutes = 59;
    }
    else {minutes--;}
    if(hour > 0) {
      hour--;
    }
  } else{ seconds--;}
  }, 1000);
}

stopClock.onclick = () => {
  startClock.removeAttribute("disabled");
  clearInterval(count);
}

