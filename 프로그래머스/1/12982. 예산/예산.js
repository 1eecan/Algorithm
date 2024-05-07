function solution(d, budget) {
    var answer = 0;
    d.sort((x,y)=>y-x);
    while(d[d.length-1]<=budget){
        budget-=d.pop();
        answer++;
    }
    return answer;
}