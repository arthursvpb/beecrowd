const { parse } = require("path");
let input = require("fs").readFileSync(
  __dirname + "/dev/stdin/file.txt",
  "utf8"
);

// Pick all elements and converting to number.
let arrX = input.split("\n").map((arrX) => parseInt(arrX));

// Loop for arrX array and modifying element
arrX.forEach((e, i, arr) => {
  if (e <= 0) {
    arr[i] = 1;
  }
});

// Output the result using for..of and iterable.
let c = 0;
for (const x of arrX) {
  console.log(`X[${c++}] = ${x}`);
}
