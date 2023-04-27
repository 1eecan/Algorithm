let input  = require("fs").readFileSync('/dev/stdin').toString().split("\n");
let hour = parseInt(input[0].split(" ")[0]);
let min = parseInt(input[0].split(" ")[1]);
let take = parseInt(input[1]);
let takeHour = parseInt(take/60);
let takeMin = parseInt(take%60);
hour+=takeHour;
min+=takeMin;
if(min>59){
    hour+=1;
    min%=60;    
}
if(hour>23){
    hour%=24;
}
console.log(hour+" "+min);