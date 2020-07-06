var input = require("fs").readFileSync("dev/stdin/file.txt", "utf8");
var n = input;

for (let counter = 1, lineCount = 1; lineCount <= n; lineCount++) {
  console.log(`${counter} ${++counter} ${++counter} PUM`);
  counter += 2;
}
