function solution(s) {
    var answer = 0;

    while(s.length){
        let count = 1;
        let i = 1;
        while(count!==0){
            if(s[i]===s[0]){
                count++;
            }else{
                count--;
            }
            i++;
        }
        s = s.slice(i);
        answer++;
    }
    return answer;
}