// Movement Animation
const container = document.querySelector('.container');
const card = document.querySelector('.card');
// Items
const title = document.querySelector('.title');
const sneaker = document.querySelector('.sneaker img');
const purchase = document.querySelector('.purchase button');
const info = document.querySelector('.info h3');

container.addEventListener('mousemove', (e) => {
  let xAxis = ((window.innerWidth / 2) - e.pageX) / 25;
  let yAxis = ((window.innerHeight / 2) - e.pageY) / 25;

  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
// Animate In
container.addEventListener('mouseenter', () => {
  card.style.transition = `none`;
  // Popout
  title.style.transform = 'translateZ(150px)';
  sneaker.style.transform = 'translateZ(150px) rotateZ(-45deg)';
  purchase.style.transform = 'translateZ(150px)';
  info.style.transform = 'translateZ(150px)';
  sizes.style.transform = 'translateZ(150px)';
});
// Animate Out
container.addEventListener('mouseleave', () => {
  card.style.transition = `all 500ms ease`;
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  // Popout
  title.style.transform = 'translateZ(0)';
  sneaker.style.transform = 'translateZ(0)';
  purchase.style.transform = 'translateZ(0)';
  info.style.transform = 'translateZ(0)';
  sizes.style.transform = 'translateZ(0)';
});
