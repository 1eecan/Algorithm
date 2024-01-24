function solution(k, score) {
    const honor = [];
    const announce = [];
    for(let i=0;i<k;i++){
        honor.push(score.shift());
        announce.push(Math.min(...honor));
        if(!score.length) break;
    }
    score.forEach((item)=>{
        honor.push(item);
        honor.sort((x,y)=>y-x);
        honor.pop()
        announce.push(honor[honor.length-1]);
    })
    return announce;
}