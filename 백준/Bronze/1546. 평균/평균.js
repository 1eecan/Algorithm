let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let n = Number(input[0]);
let score = input[1].split(" ").map(Number);
let maxScore = Math.max(...score);
let newSum = 0;
for(let i=0;i<n;i++){
    newSum+=(score[i]/maxScore)*100;
}
console.log(newSum/n);