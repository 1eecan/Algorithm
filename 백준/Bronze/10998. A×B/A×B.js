let input = require("fs").readFileSync('/dev/stdin').toString().split("\n");
let a = parseInt(input[0][0]);
let b = parseInt(input[0][2]);
console.log(a*b);