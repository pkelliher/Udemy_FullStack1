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

let nums = [1, 2, 3, 4];

nums.push(5, 6, 7);

console.log(nums);

nums.pop(7);

console.log(nums);

nums.unshift(-1, 0);

console.log(nums);

nums.shift(-1);

console.log(nums);

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
function repeat(str, numTimes) {
  for (let i = 0; i < numTimes; i++) {
    console.log("Hi");
  }
}

repeat("test", 4);
