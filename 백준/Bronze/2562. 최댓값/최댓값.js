let input = require("fs").readFileSync("/dev/stdin").toString().split("\n").map(Number);
let index = 0;
let answer = input.reduce((acc,cur,idx)=>{
    if(acc<cur){
        index = idx;
        return cur;
    }else{
        return acc;
    }
},0);
console.log(answer);
console.log(index+1);