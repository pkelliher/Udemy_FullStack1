const birdsPerDay = [3, 0, 3, 3, 2, 1, 0];

function birdsInWeek(birdsPerDay) {
  let total = 0;
  for (let i = 0; i < birdsPerDay.length; i++) {
    total += birdsPerDay[i];
  }
  return total;
}
