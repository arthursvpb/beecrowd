var input = require("fs").readFileSync("dev/stdin/file.txt", "utf8");
var lines = input.split(" ");

// Storing variables
var a = parseFloat(lines[0]);
var b = parseFloat(lines[1]);
var c = parseFloat(lines[2]);

// Check if it is a triangle
if (a < b + c && b < a + c && c < a + b) {
  console.log("Perimetro = " + (a + b + c).toFixed(1));
} else {
  console.log("Area = "+ (((a+b)*c)/2).toFixed(1));
}
