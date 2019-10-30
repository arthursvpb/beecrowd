var input = require("fs").readFileSync("dev/stdin/file.txt", "utf8");
var lines = input.split("\n");

var somador = 0;
var contador = 0;

lines.forEach(function(elem, index, array) {
  array[index] = parseFloat(elem);
  if (array[index] > 0) {
    somador += array[index];
    contador++;
  }
});

console.log(contador + " valores positivos\n" 
+ (somador / contador).toFixed(1));
