var input = require("fs").readFileSync("dev/stdin/file.txt", "utf8");
var lines = input.split("\n");

var numero = parseInt(lines[0]);

for(let i = 0; i < 6; i++){
  if (numero % 2 != 0){
    console.log(numero+=2);
  }else{
    console.log(++numero);
  }
}