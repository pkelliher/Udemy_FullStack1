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

let maximum = parseInt(prompt("Enter the maximum number"));
while (!maximum) {
  maximum = parseInt(prompt("Enter a valid number!"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = parseInt(prompt("Enter your first guess!"));

while (guess !== targetNum) {
  if (guess > targetNum) {
    guess = parseInt(prompt("Too high! Enter a new guess:"));
  } else {
    guess = parseInt(prompt("Too low! Enter a new guess!"));
  }
}
console.log("YOU GOT IT!");
