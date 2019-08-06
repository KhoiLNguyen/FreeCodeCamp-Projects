window.addEventListener('keydown', playSound);

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  const keys = document.querySelector(`div[data-key="${e.keyCode}"]`)
  if(!audio) return;
  keys.classList.add('playing');
  audio.currentTime = 0; // So sound can play continuously as we press 
  audio.play();
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeClass));

function removeClass(e) {
  this.classList.remove('playing');
}

keys.forEach(key => key.addEventListener('click', mouseClick));

function mouseClick(e) {
  console.log(e);
  const keyCode = this.getAttribute('data-key');

  const audio = document.querySelector(`audio[data-key="${keyCode}"]`)
  audio.currentTime = 0;
	audio.play();
	const key = document.querySelector(`.key[data-key="${keyCode}"]`);
  key.classList.add('playing');
}
