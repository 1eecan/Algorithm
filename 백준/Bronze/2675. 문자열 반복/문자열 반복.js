let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let answer = "";
let n = Number(input[0]);
for(let i=1;i<=n;i++){
    let R = Number(input[i].split(" ")[0]);
    let S = input[i].split(" ")[1];
    for(let j=0;j<S.length;j++){
        for(let k=0;k<R;k++){
            answer+=`${S[j]}`;
        }
    }
    answer+="\n";
}
console.log(answer);