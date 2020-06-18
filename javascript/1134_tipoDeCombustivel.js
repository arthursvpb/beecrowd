var readline = require("readline");
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let alcool = 0;
let gasolina = 0;
let diesel = 0;

async function recursiveAsyncReadLine() {
  rl.question("", (answer) => {
    if (answer == 4) return rl.close();
    else if (answer == 1) alcool++;
    else if (answer == 2) gasolina++;
    else if (answer == 3) diesel++;
    recursiveAsyncReadLine();
  });
}

recursiveAsyncReadLine().then(
  console.log(`
    MUITO OBRIGADO
    Alcool: ${alcool}
    Gasolina: ${gasolina}
    Diesel: ${diesel}`)
);
