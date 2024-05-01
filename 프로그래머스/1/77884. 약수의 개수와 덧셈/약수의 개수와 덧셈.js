function solution(left, right) {
    var answer = 0;
    function getDivisorCount(num){
        let divider = 1;
        let count = 0;
        while(divider<=num){
            if(num%divider===0){
                count++;
            }
            divider++;
        }
        return count
    }
    for(let i=left;i<=right;i++){
        const num = getDivisorCount(i);
        if(num%2===0) answer+=i;
        else answer-=i;
    }
    return answer;
}