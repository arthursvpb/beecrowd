const { count } = require("console");
const { parse } = require("path");
var input = require("fs").readFileSync(
  __dirname + "/dev/stdin/file.txt",
  "utf8"
);

// could be used (x)=>{return +x} insted of parseInt
let numbers = input
  .split(" ")
  .map((x) => parseInt(x))
  .filter((x) => x > 0);

let [a, n] = numbers,
  result = 0;

for (let i = 0; i < n; i++) {
  result += a + i;
}

console.log(result);
