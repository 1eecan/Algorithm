let input = require("fs").readFileSync("/dev/stdin").toString().split("\n").map(Number);
let remain = [];
for(let i=0;i<10;i++){
    remain.push(input[i]%42);
}
let set = new Set(remain);
console.log(set.size);
