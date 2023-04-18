function solution(targets) {
    targets.sort((x,y)=>{
        return x[1]>y[1]?1:-1;
    });
    let count = 1;
    let rangeMin = targets[0][0];
    let rangeMax = targets[0][1];
    let currentMin = 0;
    let currentMax = 0;
    for(let i=0;i<targets.length;i++){
        currentMin = targets[i][0];
        currentMax = targets[i][1];
        if((rangeMax<=currentMin)){
            count++;
            rangeMin=currentMin;
            rangeMax=currentMax;
        }else{
            continue;   
        }
    }
    return count;
}