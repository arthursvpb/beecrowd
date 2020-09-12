const { parse } = require("path");
let input = require("fs").readFileSync(
  __dirname + "/dev/stdin/file.txt",
  "utf8"
);

let convidados = 0;
let minutos = input.split("\n");

for (let i = 1; i < minutos.length; i += 2) {
  minutosFesta = minutos[i].split(" ").map((x) => Number(x));

  minutosFesta.sort((a, b) => a - b).reverse();

  // TODO Calcular a quantidade de minutos máxima simultânea
  let x = parseInt(minutosFesta.length / 2);
  let y = minutosFesta[0] - minutosFesta[1];

  console.log(x, y);
}
