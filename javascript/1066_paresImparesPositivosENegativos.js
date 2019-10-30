var input = require("fs").readFileSync("dev/stdin/file.txt", "utf8");
var lines = input.split("\n");

var pares = 0;
var impares = 0;
var positivos = 0;
var negativos = 0;

// Deu problema com o forEach, minha ideia era que esse algoritmo
// funcionasse para uma quantidade n de numeros
// O algoritmo funciona, mas o URI não aceitou.

// lines.forEach(function(elem, index, array) {
//   array[index] = parseInt(elem);

//   if (array[index] % 2 === 0) {
//     pares++;
//   } else {
//     impares++;
//   }

//   if (array[index] > 0) {
//     positivos++;
//   } else if (array[index] < 0) {
//     negativos++;
//   }
// });

// Refazendo sem o forEach
for(let i = 0; i < 5; i++){

    lines[i] = parseInt(lines[i]);

    if (lines[i] % 2 === 0) {
      pares++;
    } else {
      impares++;
    }

    if (lines[i] > 0) {
      positivos++;
    } else if (lines[i] < 0) {
      negativos++;
    }

}

console.log(
  pares +
    " valor(es) par(es)\n" +
    impares +
    " valor(es) impar(es)\n" +
    positivos +
    " valor(es) positivo(s)\n" +
    negativos +
    " valor(es) negativo(s)"
);
