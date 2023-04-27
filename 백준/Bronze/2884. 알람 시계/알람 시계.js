let input = require('fs').readFileSync('/dev/stdin').toString().split(" ");
let hour = parseInt(input[0]);
let min = parseInt(input[1]);
if(hour>=0&&min>=45){
    console.log(`${hour} ${min-45}`);
}else if(hour>0&&min<45){
    console.log(`${hour-1} ${min-45+60}`);
}else if(hour==0&&min<45){
    console.log(`${23} ${min-45+60}`);
}