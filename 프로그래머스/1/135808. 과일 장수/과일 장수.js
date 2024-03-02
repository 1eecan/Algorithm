function solution(k, m, score) {
    var answer = 0;
    score.sort((x,y)=>y-x);
    const rest = -(score.length%m);
    if(rest!==0)score.splice(rest);
    for(let i=m-1;i<score.length;i+=m) answer+=m*score[i];
    return answer;
}