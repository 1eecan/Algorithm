function solution(N, stages) {
    const answer = [];
    const obj = {};
    for(let i=1;i<=N;i++){
        obj[i] = 0;
    }
    let length = stages.length; 
    stages = stages.filter(stage=>stage<=N).sort((x,y)=>x-y).forEach(stage=>{
        obj[stage]++;
    });
    for(let key in obj){
        answer.push(`${key}:${(obj[key]/length)}`);
        length-=obj[key];
    }
    answer.sort((x,y)=>y.split(":")[1]-x.split(":")[1]);
    return answer.map(item=>Number(item.split(":")[0]));
}