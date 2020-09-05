const { parse } = require("path");
let input = require("fs").readFileSync(
  __dirname + "/dev/stdin/file.txt",
  "utf8"
);

let arrCPF = input.split("\n");

for (let e of arrCPF) {
    console.log(e);
}
