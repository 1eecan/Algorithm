let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let sum = 0;
for(i=0;i<input[1].length;i++){
    sum+=Number(input[1][i]);
}
console.log(sum);