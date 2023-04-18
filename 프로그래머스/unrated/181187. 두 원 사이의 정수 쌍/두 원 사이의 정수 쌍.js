function solution(r1, r2) {
    let count = 0;
    let xMax = 0;
    let xMin = 0;
    for(let y=0;y<=r2;y++){
        xMax=Math.sqrt(r2**2-y**2);
        if(y<r1){
            xMin=Math.sqrt(r1**2-y**2);
        }else{xMin=0;}
        count+=(Math.floor(xMax)-Math.ceil(xMin)+1);
        
    }
    return (count-(r2-r1+1))*4;
}