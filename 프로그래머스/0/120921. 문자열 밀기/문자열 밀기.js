function solution(A, B) {
    let answer = 0;
    while(answer<B.length){
        if(A===B) return answer;
        else{
            A = A[A.length-1] + A.substr(0,A.length-1);
            answer++;
        }
    }
    return -1;
}