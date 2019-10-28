var input = require("fs").readFileSync("dev/stdin/file.txt", "utf8");
var lines = input.split(" ");

// Storing variables
var vetor = [];
var vetor_old = [];

vetor[0] = parseInt(lines[0]);
vetor[1] = parseInt(lines[1]);
vetor[2] = parseInt(lines[2]);

vetor_old = vetor.slice();

function sortfunction(a, b) {
  return a - b;
}

console.log(vetor.sort(sortfunction)[0]);
console.log(vetor.sort(sortfunction)[1]);
console.log(vetor.sort(sortfunction)[2]);

console.log("\n" + vetor_old[0]);
console.log(vetor_old[1]);
console.log(vetor_old[2]);