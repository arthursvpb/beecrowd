const { parse } = require("path");
let input = require("fs").readFileSync(
  __dirname + "/dev/stdin/file.txt",
  "utf8"
);

let arrN = [];
let n = parseInt(input);

for (let i = 0; i < 10; i++) {
  arrN.push(n);
  console.log(`N[${i}] = ${arrN[i]}`);
  n *= 2;
}
