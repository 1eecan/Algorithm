let input = require("fs").readFileSync('/dev/stdin').toString();
let num = Number(input);
let answer='';

for(let i=1;i<10;i++){
    answer+=`${num} * ${i} = ${num*i}\n`;
}
console.log(answer);
