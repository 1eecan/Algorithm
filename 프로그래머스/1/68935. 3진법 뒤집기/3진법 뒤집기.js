function solution(n) {
    if(n<3) return n;
    const reversedTernary = []
    while(1){
        reversedTernary.push(n%3);
        n = (n-n%3)/3;
        if(n<3){
            reversedTernary.push(n);
            break;
        }
    }

    return reversedTernary.reduce((acc,cur,idx)=>acc+cur*(3**(reversedTernary.length-1-idx)),0);
}