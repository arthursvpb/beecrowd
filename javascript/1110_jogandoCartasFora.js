const { COPYFILE_FICLONE_FORCE } = require("constants");
const { parse } = require("path");
let input = require("fs").readFileSync(
  __dirname + "/dev/stdin/file.txt",
  "utf8"
);

// ! Embora funcione no uDebug, está dando erro 100% (não sei pq)
let lines = input.split("\n").map((x) => Number(x));
lines.pop();

let pCartas = [];
for (let i = 0; i < lines.length; i++) {
  let pLixo = [];
  pCartas[i] = [];
  for (let j = 1; j <= lines[i]; j++) {
    pCartas[i].push(j);
  }

  for (let j = 1; j < lines[i]; j++) {
    pLixo.push(pCartas[i].shift());
    pCartas[i].push(pCartas[i].shift());
  }

  console.log('Discarded cards: ' + pLixo.join(", "));
  console.log('Remaining card: ' + pCartas[i]);
}
console.log("");