var input = require("fs").readFileSync("dev/stdin/file.txt", "utf8");
var lines = input.split(/\s+/);

for (let i = 0; i < lines.length; i += 2) {
  const element = parseInt(lines[i]);
  const element2 = parseInt(lines[i + 1]);

  if (element <= 0 || element2 <= 0) break;
  else {
    console.log(rangeOfNumber(element, element2));
  }
}

function rangeOfNumber(e1, e2) {
  let bigger = Math.max(e1, e2);
  let smaller = Math.min(e1, e2);
  let range = [];
  let counter = 0;

  while (smaller <= bigger) {
    range.push(smaller);
    counter += smaller;
    smaller++;
  }

  return range.toString().replace(/,/g, " ") + (" Sum=" + counter);
}
