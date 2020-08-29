let s = 1;
for (let a = 3, b = 2; a <= 41; a++) {
  s += a / b;
  b *= 2;
  a++;
}
console.log(s.toFixed(2));
