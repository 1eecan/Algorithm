let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let array = input[1].split(" ").map(Number);

console.log(Math.min(...array)+" "+Math.max(...array));