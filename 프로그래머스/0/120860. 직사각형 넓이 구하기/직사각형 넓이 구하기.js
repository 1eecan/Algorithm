function solution(dots) {
    let x = dots[0][0];
    let y = dots[0][1];
    let x2,y2;
    for(let i=1;i<4;i++){
        if(dots[i][0]!==x&&dots[i][1]!==y) [x2,y2] = [dots[i][0],dots[i][1]]
    }
    return Math.abs((x-x2)*(y-y2));
    
}