let input = require("fs").readFileSync('/dev/stdin').toString().split("\n");
let num = parseInt(input[0]);
let three = parseInt(input[1][2]);
let four = parseInt(input[1][1]);
let five = parseInt(input[1][0]);

console.log(num*three);
console.log(num*four);
console.log(num*five);
console.log(num*parseInt(input[1]));