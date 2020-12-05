const { parse } = require("path");
let input = require("fs").readFileSync(
  __dirname + "/dev/stdin/file.txt",
  "utf8"
);

let numbers = input.split(/\s/).map((n) => Number(n));
numbers.shift();

let c = 0;
for (let number of numbers) {
  c += number - 1;
}

console.log(c);
