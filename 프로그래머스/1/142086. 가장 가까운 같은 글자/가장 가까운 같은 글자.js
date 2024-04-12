function solution(s) {
    var answer = [];
    let i=0;
    while(i<s.length){
        for(let j=i-1;j>0;j--){
            if(s[j]===s[i]){
                answer.push(i-j);
                break;
            }
        }
        if(answer[i]===undefined) answer.push(-1);
        i++;
    }
    
    return answer;
}