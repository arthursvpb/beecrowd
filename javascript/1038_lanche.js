var input = require("fs").readFileSync("dev/stdin/file.txt", "utf8");
var lines = input.split(" ");

// Storing variables
var codigo = parseInt(lines[0]);
var qnt = parseFloat(lines[1]);

switch (codigo) {
  case 1:
    console.log("Total: R$ " + (4 * qnt).toFixed(2));
    break;
  case 2:
    console.log("Total: R$ " + (4.5 * qnt).toFixed(2));
    break;
  case 3:
    console.log("Total: R$ " + (5 * qnt).toFixed(2));
    break;
  case 4:
    console.log("Total: R$ " + (2 * qnt).toFixed(2));
    break;
  case 5:
    console.log("Total: R$ " + (1.5 * qnt).toFixed(2));
    break;

  default:
    console.log("Valor invalido");
}
