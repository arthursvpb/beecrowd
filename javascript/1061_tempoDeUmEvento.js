var input = require("fs").readFileSync("dev/stdin/file.txt", "utf8");
var lines = input.split("\n");

// Storing initial time
var dinicial = parseInt(lines[0].split(" ")[1]);
var hinicial = parseInt(lines[1].split(" : ")[0]);
var minicial = parseInt(lines[1].split(" : ")[1]);
var sinicial = parseInt(lines[1].split(" : ")[2]);

// Storing final time
var dfinal = parseInt(lines[2].split(" ")[1]);
var hfinal = parseInt(lines[3].split(" : ")[0]);
var mfinal = parseInt(lines[3].split(" : ")[1]);
var sfinal = parseInt(lines[3].split(" : ")[2]);

var dias,
  horas,
  minutos,
  segundos = 0;

dias = dfinal - dinicial;

horas = hfinal - hinicial;
if (horas < 0) {
  horas = 24 + (hfinal - hinicial);
  dias--;
}

minutos = mfinal - minicial;
if (minutos < 0) {
  minutos = 60 + (mfinal - minicial);
  horas--;
}

segundos = sfinal - sinicial;
if (segundos < 0) {
  segundos = 60 + (sfinal - sinicial);
  minutos--;
}

console.log(
  dias +    " dia(s)\n" +
  horas +   " hora(s)\n" +
  minutos + " minuto(s)\n" +
  segundos +" segundo(s)"
);
