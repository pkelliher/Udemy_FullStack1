// const seatingChart = [
//   ["Kristen", "Erik", "Namita"],
//   ["Geoffrey", "Juanita", "Antonio", "Kevin"],
//   ["Yuma", "Sakura", "Jack", "Erika"],
// ];

// for (let i = 0; i < seatingChart.length; i++) {
//   const row = seatingChart[i];
//   console.log(`ROW #${i + 1}`);
//   for (let j = 0; j < row.length; j++) {
//     console.log(row[j]);
//   }
// }

// // For Loop nested example
// const userNames = [
//   ["test1", "test2", "dogcat"],
//   ["jack123", "john543", "tim1465", "peter9898", "6tnsdssi"],
//   ["uaenc445", "indie098k", "gnesse0knd", "cndresc56"],
// ];

// for (let i = 0; i < userNames.length; i++) {
//   const row = userNames[i];
//   console.log(`ROW #${i + 1}`);
//   for (let j = 0; j < row.length; j++) {
//     console.log(row[j]);
//   }
// }

// Loop 1 - 10
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// // While loop example
// let count = 0;
// while (count < 10) {
//   count++;
//   console.log(count);
// }

// Function with argument

// [1,2,3].push(4)

// let nums = [1, 2, 3, 4];

// nums.push(5, 6, 7);

// console.log(nums);

// nums.pop(7);

// console.log(nums);

// nums.unshift(-1, 0);

// console.log(nums);

// nums.shift(-1);

// console.log(nums);

// Function with argument
// function greet(firstName) {
//   console.log(`Hi, ${firstName}!`);
// }

// greet("Patrick");

// function greet(firstName, lastName) {
//   console.log(`Hey there, ${firstName} ${lastName[0]}!`);
// }

// greet("Patrick", "Kelliher");

// Function with multiple arguments
// function repeat(str, numTimes) {
//   for (let i = 0; i < numTimes; i++) {
//     console.log("Hi");
//   }
// }

// repeat("test", 4);

// Function that repeats the string multiple times ORDER MATTERS!!!!
// function repeat(str, numTimes) {
//   let result = "";
//   for (let i = 0; i < numTimes; i++) {
//     result += str;
//   }
//   console.log(result);
// }

// repeat("This is a test ", 6);

// function add(x, y) {
//   console.log(x + y);
// }

// add(3, 4);

// function add(x, y) {
//   let sum = x + y;
//   return sum;
// }

// add(4, 7);

// function add(x, y) {
//   if (typeof x !== "number" || typeof y !== "number") {
//     return false;
//   }
//   return x + y;
// }

// function expression
// const add = function (x, y) {
//   return x + y;
// };

// console.log(add(3, 7));

// calling on another function as an argument
// function callTwice(func) {
//   func();
//   func();
// }

// function callTenTimes(f) {
//   for (let i = 0; i < 10; i++) {
//     f();
//   }
// }

// function rollDie() {
//   const roll = Math.floor(Math.random() * 6) + 1;
//   console.log(roll);
// }

// callTwice(rollDie);

// callTenTimes(rollDie);

// function makeMysteryFunc() {
//   const rand = Math.random();
//   if (rand > 0.5) {
//     return function () {
//       console.log("Congrats, I am a good function!");
//     };
//   } else {
//     return function () {
//       alert("You have been infected");
//     };
//   }
// }

// Factory Function
// function makeBetweenFunc(min, max) {
//   return function (num) {
//     return num >= min && num <= max;
//   };
// }

// const isSenior = makeBetweenFunc(65, 100)

// function isBetween(num) {
//   return num >= 50 && num <= 100;
// }

// Methods adding a function  as properties on object.
// const myMath = {
//   PI: 3.14,
//   square: function (num) {
//     return num * num;
//   },
//   cube: function (num) {
//     return num ** 3;
//   },
// };

// New shorthand variation no key name or funciton key word required.

// const myMath = {
//   PI: 3.14,
//   square(num) {
//     return num * num;
//   },
//   cube(num) {
//     return num ** 3;
//   },
// };

// using this keyword

// const cat = {
//   name: "Charlie Kelliher",
//   color: "grey",
//   breed: "scottish fold",
//   meow() {
//     console.log(`${this.name} says hello`);
//   },
// };

// Count the Number of Vowels Using a Loop

// const vowels = ["a", "e", "i", "o", "u"];

// function countVowel(str) {
//   let count = 0;

//   for (let letter of str.toLowerCase()) {
//     if (vowels.includes(letter)) {
//       count++;
//     }
//   }

//   return count;
// }

// const string = prompt("Enter a string: ");

// const result = countVowel(string);

// console.log(result);

// Try/catch

// try {
//   hello.toUpperCase();
// } catch {
//   console.log("Error!!!!");
// }

// Example:
// function yell(msg) {
//   try {
//     console.log(msg.toUpperCase().repeat(3));
//   } catch (e) {
//     console.log("Please pass a string");
//   }
// }

// For each examples

// const numbers = [1, 2, 3, 4, 5, 6];

// numbers.forEach(function (el) {
//   if (el % 2 === 0) {
//     console.log(el);
//   }
// });

// For of example
// for (let el of numbers) {
//   console.log(el);
// }

// const movies = [
//   {
//     title: "Amadeus",
//     score: 99,
//   },
//   {
//     title: "Stand By Me",
//     score: 85,
//   },
//   {
//     title: "Parasite",
//     score: 95,
//   },
//   {
//     title: "Alien",
//     score: 90,
//   },
// ];

// movies.forEach(function (movie) {
//   console.log(`${movie.title} - ${movie.score}/100`);
// });

// Map examples

// const numbers = [1, 2, 3, 4, 5, 6];

// const doubles = numbers.map(function (num) {
//   return num * 2;
// });

// const movies = [
//   {
//     title: "Amadeus",
//     score: 99,
//   },
//   {
//     title: "Stand By Me",
//     score: 85,
//   },
//   {
//     title: "Parasite",
//     score: 95,
//   },
//   {
//     title: "Alien",
//     score: 90,
//   },
// ];

// const titles = movies.map(function (movie) {
//   return movie.title.toUpperCase();
// });

// const fullNames = [
//   {
//     first: "Albus",
//     last: "Dumbledore",
//   },
//   {
//     first: "Harry",
//     last: "Potter",
//   },
//   {
//     first: "Hermione",
//     last: "Granger",
//   },
//   {
//     first: "Ron",
//     last: "Weasley",
//   },
//   {
//     first: "Rubeus",
//     last: "Hagrid",
//   },
//   {
//     first: "Minerva",
//     last: "McGonagall",
//   },
//   {
//     first: "Severus",
//     last: "Snape",
//   },
// ];

// // Write your code here
// const firstNames = fullNames.map(function (name) {
//   return name.first;
// });

// Function expression example:

// const add = function(x,y) {
//     return x + y;
// }

// Regular function:

// function add(x,y) {
//     return x+y;
// }

// Arrow function example:
// const add = (x, y) => {
//   return x + y;
// };

// const square = (x) => {
//   return x * x;
// };

// Or without parenthesis, only works with a single parameter:

// const square = (x) => {
//   return x * x;
// };

// const rollDie = () => {
//   return Math.floor(Math.random() * 6) + 1;
// };

// or with the return omitted:

// const rollDie = () => Math.floor(Math.random() * 6) + 1;

// const add = (a, b) => a + b;

// Arrow functions continued:
// const movies = [
//   {
//     title: "Amadeus",
//     score: 99,
//   },
//   {
//     title: "Stand By Me",
//     score: 85,
//   },
//   {
//     title: "Parasite",
//     score: 95,
//   },
//   {
//     title: "Alien",
//     score: 90,
//   },
// ];

// // const newMovies = movies.map(function (movie) {
// //   return `${movie.title} - ${movie.score / 10}`;
// // });

// const newMovies = movies.map((movie) => `${movie.title} - ${movie.score / 10}`);

// setTimeout setInterval examples

// Example with arrow function:
// setTimeout(() => {
//   console.log("hello");
// }, 3000);

// // Example with traditional function:
// setTimeout(function () {
//   console.log("Test2");
// }, 5000);

// SetInterval example:

// const id = setInterval(() => {
//   console.log(Math.random());
// }, 2000);

// You can call on clearInterval(id) to stop the setInterval.

// Filter method example:

// const numbers = [1, 2, 3, 4, 5, 6];

// numbers.filter((n) => {
//   return n === 4;
// });

// numbers.filter((n) => {
//   return n < 4;
// });

const movies = [
  {
    title: "Amadeus",
    score: 99,
  },
  {
    title: "Stand By Me",
    score: 85,
  },
  {
    title: "Parasite",
    score: 95,
  },
  {
    title: "Alien",
    score: 90,
  },
];

// const goodMovies = movies.filter((movie) => {
//   return movie.score > 94;
// });

const goodMovies = movies.filter((m) => m.score > 94);
const badMovies = movies.filter((m) => m.score < 90);

// chaining map on to the filter to get just the title:

movies.filter((m) => m.score > 94).map((m) => m.title);
