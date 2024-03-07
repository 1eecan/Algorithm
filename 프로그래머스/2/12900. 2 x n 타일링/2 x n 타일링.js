function solution(n) {
    let n1=1;
    let n2=2;
    let temp=0;
    if(n==1) return n1;
    if(n==2) return n2;
    if(n>2){
        for(let i=2;i<n;i++){
            temp=n2%1000000007;
            n2=(n2+n1)%1000000007;
            n1=temp;
        }
    }
    return n2;
}