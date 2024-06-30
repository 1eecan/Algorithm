function solution(n) {
    let num = 1;
    for(let i=1;i<n;i++){
        num++;
        while(num%3===0||String(num).includes(3)) num++;
    }
    return num;
}