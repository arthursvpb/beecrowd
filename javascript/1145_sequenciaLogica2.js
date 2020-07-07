const { count } = require("console");
var input = require("fs").readFileSync(
  __dirname + "/dev/stdin/file.txt",
  "utf8"
);
let [x, y] = input.split(" "),
  c = 0,
  output = [];

for (let i = 1; i <= y; ) {
  while (c < x) {
    output.push(i++);
    c++;
  }
  console.log(output.toString().replace(/,/g, " "));
  output = [];
  c = 0;
}
