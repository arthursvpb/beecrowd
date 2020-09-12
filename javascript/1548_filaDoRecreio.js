const { count } = require("console");
const { parse } = require("path");
let input = require("fs").readFileSync(
  __dirname + "/dev/stdin/file.txt",
  "utf8"
);

let notas = input.split("\n");
notas.shift();

let counter;
for (let i = 1; i < notas.length; i += 2) {
  counter = 0;
  let notasNotOrdered = notas[i].split(" ").map((x) => Number(x));
  let notasOrdered = [...notasNotOrdered];
  notasOrdered.sort((a, b) => a - b).reverse();

  for (let j = 0; j < notasNotOrdered.length; j++) {
    if (notasNotOrdered[j] === notasOrdered[j]) {
      counter++;
    }
  }

  console.log(counter);
}

// // for (let j = 0; j < notasO.length; j++) {
//     //     let max = Math.max(notasO[j], notasO[j + 1]);

//     //     if (max == notasO[j + 1]) {
//     //       let aux = notasO[j];
//     //       notasO[j] = notasO[j + 1];
//     //       notasO[j + 1] = aux;
//     //     }
//     //     if (max == notasO[j]) {
//     //       counter++;
//     //     }
//     //   }
