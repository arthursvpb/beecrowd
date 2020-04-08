var input = require("fs").readFileSync("dev/stdin/file.txt", "utf8");
var lines = input.split(/\s+/);

for (let i = 0; i < lines.length; i++) {
  const password = lines[i];

  if (password == "2002") {
    console.log("Acesso Permitido");
    break;
  } else {
    console.log("Senha Invalida");
  }
}
