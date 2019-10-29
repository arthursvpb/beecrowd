var input = require("fs").readFileSync("dev/stdin/file.txt", "utf8");
var lines = input.split(" ");

// Storing variables
var hora_inicial = parseInt(lines[0]);
var minuto_inicial = parseInt(lines[1]);
var hora_final = parseInt(lines[2]);
var minuto_final = parseInt(lines[3]);
var tempo_horas;
var tempo_minutos;

tempo_horas = hora_final - hora_inicial;

if (tempo_horas < 0) {
  tempo_horas = 24 + (hora_final - hora_inicial);
}

tempo_minutos = minuto_final - minuto_inicial;
if (tempo_minutos < 0) {
  tempo_minutos = 60 + (minuto_final - minuto_inicial);
  tempo_horas--;
}

if (hora_final == hora_inicial && minuto_final == minuto_inicial) {
  console.log("O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)");
} else {
  console.log(
    "O JOGO DUROU " + tempo_horas + " HORA(S) E " + tempo_minutos + " MINUTO(S)"
  );
}
