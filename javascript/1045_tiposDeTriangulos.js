var input = require("fs").readFileSync("dev/stdin/file.txt", "utf8");
var lines = input.split(" ");

// Storing variables
var a = parseFloat(lines[0]);
var b = parseFloat(lines[1]);
var c = parseFloat(lines[2]);

// Armazenando em um vetor
var vetor = [a, b, c];

// Função para sortear em ordem decrescente
function sorteia(a, b) {
  return b - a;
}

// Função para checar se todos os elem do vetor são iguais
function todosIguais(element, index, array) {
  return element == array[0];
}

vetor.sort(sorteia);

a = vetor[0];
b = vetor[1];
c = vetor[2];

if (a >= b + c) {
  console.log("NAO FORMA TRIANGULO");
} else if (a * a == b * b + c * c) {
  console.log("TRIANGULO RETANGULO");
} else if (a * a > b * b + c * c) {
  console.log("TRIANGULO OBTUSANGULO");
} else if (a * a < b * b + c * c) {
  console.log("TRIANGULO ACUTANGULO");
}

if (vetor.every(todosIguais)) {
  console.log("TRIANGULO EQUILATERO");
} else if (a == b || a == c || b == c) {
  console.log("TRIANGULO ISOSCELES");
}
