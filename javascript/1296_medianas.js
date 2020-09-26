const { count } = require("console");
const { parse } = require("path");
let input = require("fs").readFileSync(
  __dirname + "/dev/stdin/file.txt",
  "utf8"
);

let lines = input.split(" ");

let i = 0;
for (; i < 3; i++) {
  let a = lines[i];
  let b = lines[++i];
  let c = lines[++i];
}

function checkTriangle(a, b, c) {
  if (a + b <= c || a + c <= b || b + c <= a) return 0;
  return 1;
}
