// presentation error

const { parse } = require("path");
let rawHtml = require("fs").readFileSync(
  __dirname + "/dev/stdin/file.txt",
  "utf8"
);

const bodyIndex = rawHtml.search(/<body>/) + 7;
const bodyCloseIndex = rawHtml.search(/<\/body>/);

const bodyContent = rawHtml.slice(bodyIndex, bodyCloseIndex);
console.log(bodyContent);