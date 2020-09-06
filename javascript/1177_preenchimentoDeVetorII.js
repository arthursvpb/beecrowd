const { parse } = require("path");
let input = require("fs").readFileSync(
  __dirname + "/dev/stdin/file.txt",
  "utf8"
);
let n = Number(input);

let arrN = [];
for (let i = 0; i < 1000; i++) {
  for (let j = 0; j < n; j++) {
    arrN.push(j);
  }
  console.log(`N[${i}] = ${arrN[i]}`);
}
