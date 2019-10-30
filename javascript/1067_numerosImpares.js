var input = require("fs").readFileSync("dev/stdin/file.txt", "utf8");
var lines = input.split("\n");

var numero = parseInt(lines[0]);

for(let i = 1; i <= numero; i++){
  console.log(i++);
}