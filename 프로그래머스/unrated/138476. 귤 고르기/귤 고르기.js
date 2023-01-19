function solution(k, tangerine) {
    let result = tangerine.reduce((acc,cur)=>{
        acc[cur] = (acc[cur]||0)+1;
        return acc;
    },{});
    result = Object.values(result);
    result.sort((x,y)=>y-x);
    let answer=0;
    while(k>0){
        k-=result[answer];
        answer++;
    }
    return answer;
}