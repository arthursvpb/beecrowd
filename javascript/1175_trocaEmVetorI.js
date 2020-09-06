const { parse } = require("path");
let input = require("fs").readFileSync(
  __dirname + "/dev/stdin/file.txt",
  "utf8"
);

let arr = input.split("\n").map((x) => Number(x));
arr.reverse();
for (let i in arr) {
  console.log(`N[${i}] = ${arr[i]}`);
}

