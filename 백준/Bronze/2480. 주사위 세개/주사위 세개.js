let input = require("fs").readFileSync('/dev/stdin').toString().split(" ");
let [a,b,c] = input.map(Number);
let dice = [a,b,c];
dice.sort((x,y)=>{
    return y>x?1:-1;
})
if(dice[0]==dice[1]&&dice[1]==dice[2]){
    console.log(10000+dice[0]*1000);
}else if(dice[0]==dice[1]||dice[1]==dice[2]){
    console.log(1000+dice[1]*100);
}else{
    console.log(dice[0]*100);
}