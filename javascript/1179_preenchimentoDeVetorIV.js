const { parse } = require("path");
let input = require("fs").readFileSync(
  __dirname + "/dev/stdin/file.txt",
  "utf8"
);

// ! tentar em outra linguagem com array estático

// let vetor = input.split("\n").map((x) => Number(x));

// let vetorPares = vetor.filter((x) => x % 2 === 0);
// let vetorImpares = vetor.filter((x) => x % 2 !== 0);
// let limitPares = vetorPares.length;
// let limitImpares = vetorImpares.length;

// while (vetorPares.length !== 0 || vetorImpares.length !== 0) {
//   if (vetorPares[0] != undefined) {
//     for (let i = 0; i < limitPares; i++) {
//       console.log(`par[${i}] = ${vetorPares.shift()}`);
//       if (i === 4) break;
//     }
//   }
//   if (vetorImpares[0] != undefined) {
//     for (let i = 0; i < limitImpares; i++) {
//       console.log(`impar[${i}] = ${vetorImpares.shift()}`);
//       if (i === 4) break;
//     }
//   }
// }
