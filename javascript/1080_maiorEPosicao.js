var input = require("fs").readFileSync("dev/stdin/file.txt", "utf8");
var lines = input.split("\n");

var vetor = [];

for (let i = 0; i < 100; i++) {
  vetor[i] = parseInt(lines[i]);
}

var maior = Math.max.apply(null, vetor);
console.log(maior);
console.log(vetor.indexOf(maior) + 1);
