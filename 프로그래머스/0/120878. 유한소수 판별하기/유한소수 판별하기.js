function solution(a, b) {
    let bigger = a > b ? a : b;
    for(let i=2;i<bigger;i++){
        if(a%i===0 && b%i===0){
            a/=i;
            b/=i;
        }
    }
    while(b%2===0) b/=2;
    while(b%5===0) b/=5;
    return b === 1 ? 1 : 2;
}