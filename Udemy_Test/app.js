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

// // const goodMovies = movies.filter((movie) => {
// //   return movie.score > 94;
// // });

// const goodMovies = movies.filter((m) => m.score > 94);
// const badMovies = movies.filter((m) => m.score < 90);

// // chaining map on to the filter to get just the title:

// movies.filter((m) => m.score > 94).map((m) => m.title);

// Sorting without sort() method:

// function bubbleSort(array) {
//   var done = false;
//   while (!done) {
//     done = true;
//     for (var i = 1; i < array.length; i += 1) {
//       if (array[i - 1] > array[i]) {
//         done = false;
//         var tmp = array[i - 1];
//         array[i - 1] = array[i];
//         array[i] = tmp;
//       }
//     }
//   }

//   return array;
// }

// var numbers = [12, 10, 15, 11, 14, 13, 16];
// bubbleSort(numbers);
// console.log(numbers);

// Sort with sort() method:

// const unsorted = ['d', 'd', 'h', 'r', 'v', 'z', 'f', 'c', 'g'];
// const sorted = unsorted.sort();

// console.log(sorted);
// //["c", "d", "d", "f", "g", "h", "r", "v", "z"]

// const unsortedNums = [45, 56, 3, 3, 4, 6, 7, 45, 1];
// const sortedNums = unsortedNums.sort((a, b) => {
// 	return a - b;
// });

// console.log(sortedNums);
// //[1, 3, 3, 4, 6, 7, 45, 45, 56]

// Without Default Params function params:
// function rollDie(numSides) {
//   return Math.floor(Math.random() * numSides) + 1;
// }

// // With default param function, using 6 as the default.

// function rollDie(numSides = 6) {
//   return Math.floor(Math.random() * numSides) + 1;
// }

// Antoher example without default params"

// function greet(msg, person) {
//   console.log(`${msg}, ${person}!`);
// }

// Another exmpal with a deault param for msg

// function greet(person, msg = "Hey there") {
//   console.log(`${msg}, ${person}!`);
// }

// function bubbleSort(array) {
//   var done = false;
//   while (!done) {
//     done = true;
//     for (var i = 1; i < array.length; i += 1) {
//       if (array[i - 1] > array[i]) {
//         done = false;
//         var tmp = array[i - 1];
//         array[i - 1] = array[i];
//         array[i] = tmp;
//       }
//     }
//   }

//   return array;
// }

// var numbers = [12, 10, 15, 11, 14, 13, 16];
// bubbleSort(numbers);
// console.log(numbers);

// Variation on sort:
// const nums = [67, 43, 5, 2, 89, 22, 4];

// function sortNums(numArr) {
//   let isSorted = false;
//   while (!isSorted) {
//     isSorted = true;
//     for (let i = 1; i < numArr.length; i += 1) {
//       if (numArr[i - 1] > numArr[i]) {
//         isSorted = false;
//         let tempArr = numArr[i - 1];
//         numArr[i - 1] = numArr[i];
//         numArr[i] = tempArr;
//       }
//     }
//   }

//   return numArr;
// }

// const nums = [67, 43, 5, 2, 89, 22, 4];
// sortNums(nums);
// console.log(nums);

// Destructuring objects:

// const user = {
//   email: "rehillek76@gmail.com",
//   password: "asdfasdf",
//   firstName: "Patrick",
//   lastName: "Kelliher",
//   born: 1976,
//   died: "Still alive",
//   bio: "Patrick was born in the SF Bay area...",
//   city: "San Francisco",
//   state: "California",
// };

// const firstName = user.firstName;
// const lastName = user.lastName;
// const email = user.email;

// Multiple keys stored as var:
// const { email, firstName, lastName, city, bio } = user;

// Renaming var name:
// const { born: birthYear } = user;

// ----------

// function frontDoorPassword(responses) {
//   return responses.charAt(0).toUpperCase() + responses.toLowerCase().slice(1);
// }

// responses.charAt(0).toUpperCase() +

// const CODE_WORK = [
//   "Compilers intensily bestow",
//   "On commencing without ego",
//   "Different processes ajar",
//   "Exit with zero quick",
// ];

// function backDoorPassword(responses) {
//   return responses.charAt(responses.length - 1);
// }

// const unsortedNums = [3, 1, 4, 10, 5];

// const sortedNums = unsortedNums.sort(function (a, b) {
//   return a - b;
// });

// const arr = [3, 6, 2, 11, 1];

// const bubbleSort = (arr) => {
//   const len = arr.length;

//   for (let i = 0; i < len; i++) {
//     for (let j = 0; j < len; j++) {
//       // console.log("operation")
//       if (arr[j] > arr[j + 1]) {
//         //swap
//         const temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// };

// console.log(arr);
// bubbleSort(arr);
// console.log(arr);

// const input = `Lead Chef, Chipotle, Denver, CO, 10, 15
// Stunt Double, Equity, Los Angeles, CA, 15, 25
// Manager of Fun, IBM, Albany, NY, 30, 40
// Associate Tattoo Artist, Tit 4 Tat, Brooklyn, NY, 250, 275
// Assistant to the Regional Manager, IBM, Scranton, PA, 10, 15
// Lead Guitarist, Philharmonic, Woodstock, NY, 100, 200`;

// // Create an object that stores the data
// // Create key for each part of the line - Title, Organization, Location

// // str = "Lead Chef, Chipotle, Denver, CO, 10, 15"
// // return {
// //     Title: "Lead Chef",
// //     Organization: "Chipotle",
// //     Location: "Denver, CO",
// //     minPay: 1,
// //     maxPay: 3
// // }
// function parseStr(str) {
//   // let { Title, Organization, Location, } =  arrayValues;
//   // {
//   //     Title: Title,
//   //     Organization: Organization,
//   //     Location: Location,
//   //     Pay: Pay,
//   // }

//   const jarynTest = "Lead Chef, Chipotle, Denver, CO, 10, 15".split(",");
//   console.log(jarynTest);
//   let arrayValues = [];
//   // ["Hello", "Goodbye", "Thanks"] = "Hello|Goodbye|Thanks".function('|')
//   // ["Lead Chef", "Chipotle", "Denver"] = "Lead Chef, Chipotle, Denver, CO, 10, 15".function(', ')

//   // {
//   //     Title: arrayValues[0],
//   //     Organization: arrayValues[1],
//   //     Location: arrayValues[2],
//   //     MinPay: arrayValues[3],
//   //     MaxPay: arrayValues[3]
//   // }
// }

// parseStr();
// const allOpp = {
//   Title: "This is the title",
//   Organization: "This is the org",
//   Location: "This is the location",
//   Pay: "min_num - max_num",
// };
// // "Title: This is the title, Organization: This is the org, Location: This is the location, Pay: min_num-max_num"

// // const title = allOpp.Title
// // console.log(title)

// function printOpportunity(opp) {
//   let { Title, Organization, Location, Pay } = opp;
//   console.log(
//     `Title: ${Title}, Organization: ${Organization}, Location: ${Location}, Pay: ${Pay} `
//   );
// }

// printOpportunity(allOpp);

// //const printOpportunity = (opp) => {}

// // I will test this this week

const position = 2;
const newCard = 6;
setItem([1, 2, 4, 1], position, newCard);

const stack = [1, 2, 3];
const position = 0;
const replacement = 7;
const expected = [7, 2, 3];

// adding a new card to the bginning of the deck of cards

// Will workd on excersism JS course to determine the cause of sleight of hand issue
