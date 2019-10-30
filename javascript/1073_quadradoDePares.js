var input = require("fs").readFileSync("dev/stdin/file.txt", "utf8");
var lines = input.split("\n");

var n = parseInt(lines[0]);
var i = 1;

while (i <= n) {
  if (i % 2 === 0) {
    console.log(i + "^2 = " + i * i);
  }
  i++;
}
