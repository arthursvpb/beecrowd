const { parse } = require("path");
let input = require("fs").readFileSync(
  __dirname + "/dev/stdin/file.txt",
  "utf8"
);

let arr = input.split("\n").map((x) => parseFloat(x).toFixed(1));

arr.forEach((e, i, arr) => {
  if (e <= 10) {
    console.log(`A[${i}] = ${arr[i]}`);
  }
});
