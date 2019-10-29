var input = require("fs").readFileSync("dev/stdin/file.txt", "utf8");
var lines = input.split("\n");

// Storing variables
var a = parseInt(lines[0]);

var cidade = {
  61: "Brasilia",
  71: "Salvador",
  11: "Sao Paulo",
  21: "Rio de Janeiro",
  32: "Juiz de Fora",
  19: "Campinas",
  27: "Vitoria",
  31: "Belo Horizonte"
};

if (cidade[a] === undefined) {
  console.log("DDD nao cadastrado");
} else {
  console.log(cidade[a]);
}
