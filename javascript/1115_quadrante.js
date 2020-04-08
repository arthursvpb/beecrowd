var input = require("fs").readFileSync("dev/stdin/file.txt", "utf8");
var lines = input.split(/\s+/);

for (let i = 0; i < lines.length; i += 2) {
  let x = parseInt(lines[i]);
  let y = parseInt(lines[i + 1]);

  if (x === 0 || y === 0) break;
  else if (x >= 0 && y >= 0) {
    console.log("primeiro");
  } else if (x <= 0 && y >= 0) {
    console.log("segundo");
  } else if (x <= 0 && y <= 0) {
    console.log("terceiro");
  } else if (x >= 0 && y <= 0) {
    console.log("quarto");
  }
}
