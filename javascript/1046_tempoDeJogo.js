var input = require("fs").readFileSync("dev/stdin/file.txt", "utf8");
var lines = input.split(" ");

// Storing variables
var hora_inicial = parseInt(lines[0]);
var hora_final = parseInt(lines[1]);
var tempo_percorrido;

// Desse jeito estava dando Time limit exceeded
// var horario = [];

// for (let i = 0; i <= 24; i++) {
//   horario[i] = i;
// }

// var contador = 0;
// if (hora_inicial != hora_final) {
//   for (var i = hora_inicial; horario[i] != hora_final; i++) {
//     if (horario[i] == 24) {
//       i = 0;
//     }
//     contador++;
//   }
//   console.log("O JOGO DUROU " + contador + " HORA(S)");
// } else {
//   console.log("O JOGO DUROU 24 HORA(S)");
// }

// Melhor jeito de fazer
tempo_percorrido = hora_final - hora_inicial;

if (tempo_percorrido < 0) {
  tempo_percorrido = 24 + (hora_final - hora_inicial);
}

if (hora_final == hora_inicial) {
  console.log("O JOGO DUROU 24 HORA(S)");
} else {
  console.log("O JOGO DUROU " + tempo_percorrido + " HORA(S)");
}
