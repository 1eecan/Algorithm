var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');
let year = parseInt(input[0]);

if(!(year%400)){console.log(1);return;}
else if(year%4===0&&year%100!==0){console.log(1);return;}
console.log(0);
