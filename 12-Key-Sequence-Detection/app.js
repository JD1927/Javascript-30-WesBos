const pressed = [];
const secretCode = 'jd1927';

window.addEventListener('keyup', (e) => {
  console.log(e.key);
  pressed.push(e.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  if (pressed.join('').includes(secretCode)) {
    console.log('GOTCHA BITCH');
    cornify_add();
  }
});