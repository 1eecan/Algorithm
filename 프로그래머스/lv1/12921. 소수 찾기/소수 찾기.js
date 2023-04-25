function solution(n) {
    let answer = 1;
    let idx = 2;
    let check = true;
    while(idx!=n){
        check = true;
        idx++;
        for(let i=2;i*i<=idx;i++){
            if(idx%i==0){
                check = false;
                break;
            }
        }
        if(check){
            answer++;
        }
    }
    return answer;
}