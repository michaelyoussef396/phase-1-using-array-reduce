const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

let initalVal = 0;
const totalBatteries = batteryBatches.reduce(fnRed);
function fnRed(a, b) {
  return a + b;
}
