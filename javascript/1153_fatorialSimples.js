var input = require("fs").readFileSync(
    __dirname + "/dev/stdin/file.txt",
    "utf8"
  );
var n = parseInt(input);

function fac (n){
  if (n === 0 || n === 1){
    return 1;
  }
  return fac(n-1) * n;
}

console.log(fac(n))