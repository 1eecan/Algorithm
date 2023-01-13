var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');

let n = parseInt(input[0]);
let i = 2;

function recursive(n) {
  if (n == 1) return;
  while (n >= i) {
    if (n % i == 0) {
      console.log(i);
      return recursive(n / i);
    } else {
      i++;
    }
  }
}

recursive(n);
