function solution(a, b) {
    var answer = 0;
    var start,end = 0;
    if(a===b) return a;
    if(a<b){
        start = a;
        end = b;
    }else{
        start = b;
        end = a;
    }
    for(let i=start;i<=end;i++){
        answer += i;
    }
    return answer;
}