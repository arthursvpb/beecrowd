const { parse } = require("path");
let number = require("fs").readFileSync(
  __dirname + "/dev/stdin/file.txt",
  "utf8"
);

for (let i = 0; i <= number; i++) {
  if (number % i === 0) {
    console.log(i);
  }
}
