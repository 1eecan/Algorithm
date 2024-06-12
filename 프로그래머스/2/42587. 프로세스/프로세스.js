function solution(priorities, location) {
    let answer = 1;
    let tempIndex = location;
    let index = 10;
    while(1){
        const shifted = priorities.shift();
        const len = priorities.filter(el=>el>shifted).length;
        if(len){
            priorities.push(shifted);
            tempIndex==0?tempIndex = priorities.length-1:tempIndex--;
        }
        if(len===0 && tempIndex===0){
            return answer;
        }
        if(len===0){
            tempIndex--;
            answer++;
        }
    }
    return answer;
}