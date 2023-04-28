let input = require("fs").readFileSync("dev/stdin").toString().split(" ");
let A = "";
let B = "";
for(let i=0;i<3;i++){
    A+=input[0][2-i];
    B+=input[1][2-i];
}
if(Number(A)>Number(B)){
    console.log(A);
}else{
    console.log(B);
}