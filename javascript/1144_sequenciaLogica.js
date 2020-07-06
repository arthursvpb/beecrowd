const { count } = require("console");
var input = require("fs").readFileSync(
  __dirname + "/dev/stdin/file.txt",
  "utf8"
);
var n = input;

for (let i = 1; i <= n; i++) {
  console.log(`${i} ${i * i} ${i * i * i}`);
  console.log(`${i} ${i * i + 1} ${i * i * i + 1}`);
}
