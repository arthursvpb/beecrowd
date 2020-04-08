var input = require("fs").readFileSync("dev/stdin/file.txt", "utf8");
var lines = input.split(/\s+/);

for (let i = 0; i < lines.length; i += 2) {
  const element = parseInt(lines[i]);
  const element2 = parseInt(lines[i + 1]);

  if (element == element2) break;
  else if (element < element2) {
    console.log("Crescente");
  } else {
    console.log("Decrescente");
  }
}
