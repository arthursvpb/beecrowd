const { parse } = require("path");
let input = require("fs").readFileSync(
  __dirname + "/dev/stdin/file.txt",
  "utf8"
);

let arr = input.split("\n").map((x) => Number(x));
arr.shift();

for (let i = 0; i < arr.length; i++) {
  console.log(`Fib(${arr[i]}) = ${fibonacciIterative(arr[i])}`);
}

function fibonacciIterative(n) {
  if (n < 1) return 0;
  if (n <= 2) return 1;

  let fibMinus2 = 0,
    fibMinus1 = 1,
    fibN = n,
    fibArr = [0, 1];

  for (let i = 2; i <= n; i++) {
    fibN = fibMinus1 + fibMinus2;
    fibMinus2 = fibMinus1;
    fibMinus1 = fibN;
    fibArr.push(fibN);
  }
  return fibArr.pop();
}
