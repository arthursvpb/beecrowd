var input = require("fs").readFileSync("dev/stdin/file.txt", "utf8");
var lines = input.split("\n");

// Removes the first item of the array.
entrada = lines.shift();

// Storing the variables
a = entrada.charAt(0);
b = entrada.charAt(2);
c = entrada.charAt(4);
d = entrada.charAt(6);

if (b > c && d > a && c + d > a + b && c >= 0 && d >= 0 && a % 2 == 0) {
  console.log("Valores aceitos");
} else {
  console.log("Valores nao aceitos");
}