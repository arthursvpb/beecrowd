var input = require("fs").readFileSync("dev/stdin/file.txt", "utf8");
var lines = input.split("\n");

// Storing variables
var salario = parseFloat(lines[0]);
var imposto = 0.0;
var i1,
  i2,
  i3 = 0.0;

if (0 <= salario && salario <= 2000) {
  console.log("Isento");
} 

else if (2000.01 <= salario && salario <= 3000) {
  imposto = (salario - 2000) * 0.08;
  console.log("R$ " + imposto.toFixed(2));
} 

else if (3000.01 <= salario && salario <= 4500) {
  i1 = 1000 * 0.08;
  i2 = (salario - 3000) * 0.18;
  imposto = i1 + i2;
  console.log("R$ " + imposto.toFixed(2));
} 

else if (4500 < salario) {
  i1 = 1000 * 0.08;
  i2 = 1500 * 0.18;
  i3 = (salario - 4500) * 0.28;
  imposto = i1 + i2 + i3;
  console.log("R$ " + imposto.toFixed(2));
}