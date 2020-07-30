const { parse } = require("path");

let input = require("fs").readFileSync(
  __dirname + "/dev/stdin/file.txt",
  "utf8"
);

let numbers = input.split("\n");
let ages = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < 0) {
    break;
  }
  ages[i] = parseInt(numbers[i]);
}

let averageAge = ages.reduce((a, b) => a + b) / ages.length;

console.log(averageAge.toFixed(2));

conselo.log();
