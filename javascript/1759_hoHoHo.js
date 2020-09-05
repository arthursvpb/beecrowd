const { parse } = require("path");
let input = require("fs").readFileSync(
  __dirname + "/dev/stdin/file.txt",
  "utf8"
);

let n = parseInt(input);
let result = "";
for (let i = 1; i < n; i++) {
  result += "Ho ";
}

console.log(result + "Ho!");
