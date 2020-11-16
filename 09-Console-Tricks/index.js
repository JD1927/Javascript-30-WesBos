const dogs = [
  { name: 'Snickers', age: 2 },
  { name: 'hugo', age: 8 }
];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log('Hello');

// Interpolated
console.log(`Hello, I'm a %s string`, '💩');

// Styled
console.log(`%c I'm some great text`, `font-size: 30px; background: tomato; text-shadow: 10px 10px 0 red`);

// warning!
console.warn('OH NOOO!');

// Error :|
console.error('💩!');

// Info
console.info('Crocodiles eat 3-4 people per year!');
// Testing
console.assert(1 !== 1, `That's wrong`);
// clearing
// console.clear();

// Viewing DOM Elements
const p = document.querySelector('p');
console.log(p);
console.dir(p);
// Grouping together
dogs.forEach((dog) => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.groupEnd(`${dog.name}`);

});
// counting
console.count()
// timing
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data');
    console.log(data);
  });

console.table(dogs);