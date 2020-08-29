let s = 1;
for (let i = 2; i <= 101; i++) {
  s += 1 / i;
}
// Truncate the 2 digits after decimal number
console.log(Math.floor(s * 100) / 100);
