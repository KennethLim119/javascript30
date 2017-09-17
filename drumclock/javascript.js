window.addEventListener('keydown', function(e){
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key='${e.keyCode}']`);
  if(!audio) return; //stop the whole function from running
  audio.currentTime = 0; //rewinding to the beginning
  audio.play();
  key.classList.add('playing');

});

function removeTransition(e){
  if (e.propertyName !=='transform') return;
  this.classList.remove('playing');
}
 const keys = Array.from(document.querySelectorAll('.key'));;
keys.forEach(key => key.addEventListener('transitionend', removeTransition));


const secondHand = document.querySelector('.second')
const minuteHand = document.querySelector('.minute')
const hourHand = document.querySelector('.hour')

const time = document.querySelector('span.time')

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondDegrees = ((seconds / 60) * 360) + 90;
  
  const minutes = now.getMinutes();
  const minuteDegrees = ((minutes / 60) * 360) + 90;
  
  const hours = now.getHours();
  const hourDegrees = ((hours / 12) * 360) + 90;
  
  secondHand.style.transform = `rotate(${secondDegrees}deg)`
  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`
  hourHand.style.transform = `rotate(${hourDegrees}deg)`
  
  time.innerHTML = `${hours}:${minutes}:${seconds < 10 ? '0'+seconds : seconds}`
}

setInterval(setDate, 1000);