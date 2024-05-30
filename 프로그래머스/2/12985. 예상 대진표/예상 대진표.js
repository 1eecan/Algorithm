function solution(n,a,b){
    const { floor } = Math;
    let answer = 0;
    while(floor(a+1)/2!==floor(b+1)/2){
        a=floor(a+1)/2;
        b=floor(b+1)/2;
        answer++;
    }
    return answer;
}