function solution(n) {
    // const F = n => n==0 ? 0 : n==1 ? 1 : F(n-1) + F(n-2); 
    // return F(n) % 1234567;
    // 이렇게 쓰면 콜스택이 꽉차나 봄;;
    const F = n => {
        let count = 0;
        let F0 = 0; 
        let F1 = 1;
        let F2 = 1;        
        while(n>count){
            F0 = F1%1234567; 
            F1 = F2%1234567; 
            F2 = (F1+F0); 
            count++;
        }
        return F2-F1;
    }
    return F(n);
}