var input = require("fs").readFileSync("dev/stdin/file.txt", "utf8");
var lines = input.split("\n");

var x = parseInt(Math.max(lines[0], lines[1]));
var y = parseInt(Math.min(lines[1], lines[0]));

for (var counter = 0; y <= x; y++) {
    if (y % 13 !== 0) {
        counter += y;
    }
}

console.log(counter);