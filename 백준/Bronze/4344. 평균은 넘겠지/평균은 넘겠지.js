let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let n = Number(input[0]);
let answer="";
for(let i=1;i<=n;i++){
    let curr = input[i].split(" ").map(Number);
    let num = curr[0];
    let sum = 0;
    for(let j=1;j<=num;j++){
        sum+=curr[j];
    }
    let avg = sum/num;
    let up = 0;
    for(let k=1;k<=num;k++){
        if(curr[k]>avg){
            up++;
        }
    }
    answer+=`${((up/num)*100).toFixed(3)}%\n`;
}
console.log(answer);
