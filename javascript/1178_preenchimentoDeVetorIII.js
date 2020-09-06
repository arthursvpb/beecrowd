// ! This question is currently unsolvable using JavaScript
// https://www.urionlinejudge.com.br/judge/pt/questions/view/1178/5693

const { parse } = require("path");
let input = require("fs").readFileSync(
  __dirname + "/dev/stdin/file.txt",
  "utf8"
);
let n = parseFloat(input).toFixed(4);

let arrN = [];
for (let i = 0; i < 100; i++) {
  arrN.push(n);
  n = (n / 2).toFixed(4);
  console.log(`N[${i}] = ${arrN[i]}`);
}
