const { count } = require("console");
const { parse } = require("path");
var input = require("fs").readFileSync(
  __dirname + "/dev/stdin/file.txt",
  "utf8"
);

n = parseInt(input);

function fibonacciIterative(n) {
  if (n < 1) return 0;
  if (n <= 2) return 1;

  let fibMinus2 = 0,
    fibMinus1 = 1,
    fibN = n,
    fibArr = [0, 1];

  for (let i = 2; i < n; i++) {
    fibN = fibMinus1 + fibMinus2;
    fibMinus2 = fibMinus1;
    fibMinus1 = fibN;
    fibArr.push(fibN);
  }
  return fibArr;
}

console.log(fibonacciIterative(n).join(" "));
