// var input = require("fs").readFileSync("dev/stdin/file.txt", "utf8");


// ! Giving Wrong answer 5%

var input = 
`18
10`;

var lines = input.split("\n");

var [x, y] = [parseInt(Math.max(lines[0], lines[1])), parseInt(Math.min(lines[1], lines[0]))];

for (; y < x; y++) {
    if (y % 5 === 2 || y % 5 === 3) {
        console.log(y);
    }
}
