function solution(a, b, n) {
    let count = 0;
    while(n>=a){
        const quotient = ((n-n%a)/a)*b;
        const remainder = n%a;
        count+=quotient;
        n=quotient+remainder;
    }
    return count;
}