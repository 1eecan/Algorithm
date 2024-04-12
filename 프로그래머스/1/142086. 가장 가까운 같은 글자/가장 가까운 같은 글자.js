function solution(s) {
    var answer = [];
    for(let i=0;i<s.length;i++){
        let j=i-1;
        let temp=-1;
        while(j>=0){
            if(s[j]===s[i]){
                temp=i-j;
                break;
            }
            j--;
        }
        answer.push(temp);
    }
    
    return answer;
}