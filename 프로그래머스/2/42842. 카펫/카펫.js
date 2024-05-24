function solution(brown, yellow) {
    var possibleYellow = [];
    
    for(let i=1;i<=Math.sqrt(yellow);i++){
        if(yellow%i===0) possibleYellow.push([i,yellow/i]);
    }
    
    const isBrown = ([x,y])=>((x+2)*2+(y*2))==brown ? true : false;
    
    for(let arr of possibleYellow){
        if(isBrown(arr)) return [arr[1]+2,arr[0]+2];
    }
}