// wrong answer

const { parse } = require("path");
let input = require("fs").readFileSync(
  __dirname + "/dev/stdin/file.txt",
  "utf8"
);

input = input.split("\n");
input.shift();

for (let str of input) {
  if (str.match(/Q/) && str.match(/J/) && str.match(/K/) && str.match(/A/)) {
    console.log("Aaah muleke");
  } else {
    console.log("Ooo raca viu");
  }
}

console.log();
