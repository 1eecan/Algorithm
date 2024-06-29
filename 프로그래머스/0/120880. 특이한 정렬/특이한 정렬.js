function closer(a,b,n){
    const an = Math.abs(a-n);
    const bn = Math.abs(b-n);
    if(an>bn) return 1;
    if(an<bn) return -1;
    if(an===bn) return a>b ?-1:1;
}

function solution(numlist, n) {
    return numlist.sort((x,y)=>closer(x,y,n));
}