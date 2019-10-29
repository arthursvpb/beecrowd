var input = require("fs").readFileSync("dev/stdin/file.txt", "utf8");
var lines = input.split(" ");

// Storing variables
var a = parseInt(lines[0]);
var b = parseInt(lines[1]);

var maior = a > b ? maior = a : maior = b;
var menor = a < b ? menor = a : menor = b;

if (maior % menor === 0) {
  console.log("Sao Multiplos");
} else {
  console.log("Nao sao Multiplos");
}
