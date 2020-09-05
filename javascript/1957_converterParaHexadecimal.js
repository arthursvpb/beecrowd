const { parse } = require("path");
let input = require("fs").readFileSync(
  __dirname + "/dev/stdin/file.txt",
  "utf8"
);

let v = parseInt(input);
console.log(v.toString(16).toUpperCase());
