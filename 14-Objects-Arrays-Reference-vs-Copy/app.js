// Start with strings, numbers and booleans.
// let age = 100;
// let age2 = age;
// console.log(age, age2);

// age = 200;
// console.log(age, age2);

// let name = 'JD';
// let name2 = name;

// console.log(name, name2);
// name = 'Juan';
// console.log(name, name2);

// let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.
// const team = players;

// console.log(players, team);
// You might think we can just do something like this:
// team[3] = 'Lux';

// However that happens when we update that array?
// now here is the problem!
// oh no - we have edited the original array too!
// Why? It's because that is an array reference, not an array copy. They both point the same array!

// So, how do we fix this? We take a copy instead!
const team2 = players.slice();

// one day

// or create a new array and concat the old one in
const team3 = [].concat(players);

// or use the new ES6 Spread
const team4 = [ ...players ];

const team5 = Array.from(players);


// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object with objects

const person = {
  name: 'JD',
  age: 80,
  social: {
    twitter: '@jd1927',
  }
};

// and think we make a copy:
const captain = person;
captain.number = 99;

// how do we take a copy instead?
const cap2 = Object.assign({}, person, { number: 99, age: 12 });

// We will hopefully soon see the object ...spread
const cap3 = { ...person };
cap3.age = 25;

const p2 = JSON.parse(JSON.stringify(person));
/* 
  Things to note - this is only 1 level deep - both for Arrays and Objects. 
  Lodash has a cloneDeep method, but you should think twice before using it.
 */ 