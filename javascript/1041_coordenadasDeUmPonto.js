var input = require("fs").readFileSync("dev/stdin/file.txt", "utf8");
var lines = input.split(" ");

// Storing variables
var x = parseFloat(lines[0]);
var y = parseFloat(lines[1]);

if (x === 0 && y === 0) {
  console.log("Origem");
} else if (x === 0) {
  console.log("Eixo Y");
} else if (y === 0) {
  console.log("Eixo X");
} else if (x > 0 && y > 0) {
  console.log("Q1");
} else if (x < 0 && y > 0) {
  console.log("Q2");
} else if (x < 0 && y < 0) {
  console.log("Q3");
} else if (x > 0 && y < 0) {
  console.log("Q4");
}
