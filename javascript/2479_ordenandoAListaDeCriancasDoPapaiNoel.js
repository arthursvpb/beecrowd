const { parse } = require("path");
let input = require("fs").readFileSync(
  __dirname + "/dev/stdin/file.txt",
  "utf8"
);

let criancasIndicativo = input.split("\n");
criancasIndicativo.shift();

let criancas = [];
let indicativo = [];

for (let i = 0; i < criancasIndicativo.length; i++) {
  [indicativo[i], criancas[i]] = criancasIndicativo[i].split(" ");
}

comportaram = 0;
naoComportaram = 0;
indicativo.forEach((e) => {
  if (e == "+") {
    comportaram++;
  } else if (e == "-") {
    naoComportaram++;
  }
});

criancas = criancas.sort();
for (let crianca of criancas) {
  console.log(crianca);
}
console.log(
  `Se comportaram: ${comportaram} | Nao se comportaram: ${naoComportaram}`
);
