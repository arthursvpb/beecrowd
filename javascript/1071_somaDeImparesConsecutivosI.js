var input = require("fs").readFileSync("dev/stdin/file.txt", "utf8");
var lines = input.split("\n");

var x = parseInt(lines[0]);
var y = parseInt(lines[1]);

if (x == y) {
  console.log("0");
} else {
  if (x > y) {
    var maior = x;
    var menor = y;
  } else if (y > x) {
    var maior = y;
    var menor = x;
  }
  var somador = 0;
  menor++;
  while (menor < maior) {
    if (menor % 2 != 0) {
      somador += menor;
    }
    menor++;
  }
  console.log(somador);
}