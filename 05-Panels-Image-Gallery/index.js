const panels = document.querySelectorAll('.panel');

function toggleOpen() {
  this.classList.toggle('open');
}
function toggleActive(e) {
  console.log(e);
  this.classList.toggle('open-active');
  /* if (e.propertyName.includes('flex')) {
  } */
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('click', toggleActive));