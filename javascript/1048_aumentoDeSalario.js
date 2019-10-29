var input = require("fs").readFileSync("dev/stdin/file.txt", "utf8");
var lines = input.split("\n");

// Storing variables
var salario = parseFloat(lines[0]);

if (0 <= salario && salario <= 400) {
  console.log("Novo salario: " + (salario * 1.15).toFixed(2));
  console.log("Reajuste ganho: " + (salario * 0.15).toFixed(2));
  console.log("Em percentual: 15 %");
} 
else if (400.01 <= salario && salario <= 800) {
  console.log("Novo salario: " + (salario * 1.12).toFixed(2));
  console.log("Reajuste ganho: " + (salario * 0.12).toFixed(2));
  console.log("Em percentual: 12 %");
} 
else if (800.01 <= salario && salario <= 1200) {
  console.log("Novo salario: " + (salario * 1.1).toFixed(2));
  console.log("Reajuste ganho: " + (salario * 0.1).toFixed(2));
  console.log("Em percentual: 10 %");
} 
else if (1200.01 <= salario && salario <= 2000) {
  console.log("Novo salario: " + (salario * 1.07).toFixed(2));
  console.log("Reajuste ganho: " + (salario * 0.07).toFixed(2));
  console.log("Em percentual: 7 %");
} 
else if (salario > 2000) {
  console.log("Novo salario: " + (salario * 1.04).toFixed(2));
  console.log("Reajuste ganho: " + (salario * 0.04).toFixed(2));
  console.log("Em percentual: 4 %");
}
