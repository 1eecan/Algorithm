function solution(n) {
    var answer = 0;
    const num = [];
    for(let i=0;i<n;i++){
        num.push(i+1);
    }
    for(let i of num){
        if(n%i===0)
            answer += i;
    }
    return answer;
}