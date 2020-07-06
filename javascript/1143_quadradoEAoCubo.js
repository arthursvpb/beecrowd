const { count } = require("console");

var input = require("fs").readFileSync(__dirname + "/dev/stdin/file.txt", "utf8");
var n = input;

console.log("1 1 1");
for (let counter = 2, lineCount = 1; lineCount < n; lineCount++) {
  console.log(`${counter} ${counter ** 2} ${counter ** 3}`);
  counter++;
}
