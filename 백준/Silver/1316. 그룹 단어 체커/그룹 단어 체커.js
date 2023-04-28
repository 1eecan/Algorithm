let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let n = Number(input[0]);
let answer = 0;
for(let i=1;i<=n;i++){
    let checker = new Set();
    let TF = true;
    checker.add(input[i][0]);
    for(let j=1;j<input[i].length;j++){
        if(!checker.has(input[i][j])||input[i][j]==input[i][j-1]){
            checker.add(input[i][j]);
        }else{
            TF = false;
            break;
        }
    }
    if(TF){
        answer++;
    }
}
console.log(answer);