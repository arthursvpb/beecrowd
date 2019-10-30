var input = require("fs").readFileSync("dev/stdin/file.txt", "utf8");
var lines = input.split("\n");

var contador = 0;

lines.forEach(function(elem, index, array) {
  array[index] = parseInt(elem);
  if (array[index] % 2 === 0) {
    contador++;
  }
});

console.log(contador + " valores pares");