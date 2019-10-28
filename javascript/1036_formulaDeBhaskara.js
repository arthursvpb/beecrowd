var input = require("fs").readFileSync("dev/stdin/file.txt", "utf8");
var lines = input.split(" ");

// Storing variables
var a = parseFloat(lines[0]);
var b = parseFloat(lines[1]);
var c = parseFloat(lines[2]);

// Bhaskara
var delta = b * b - 4 * a * c;

if (delta >= 0 && a !== 0) {
  var r1 = (-b + Math.sqrt(delta)) / (2 * a);
  var r2 = (-b - Math.sqrt(delta)) / (2 * a);

  console.log("R1 = " + r1.toFixed(5) + "\n"
            + "R2 = " + r2.toFixed(5));
}else{
  console.log("Impossivel calcular");
}


