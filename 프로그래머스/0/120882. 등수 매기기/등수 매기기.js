function solution(score) {
    let outsideRank = 0;
    return score.map(([english,math],id)=>[english+math,id]).sort((x,y)=>y[0]-x[0]).map(([score,id],rank,arr)=>{
        if(rank!==0 && arr[rank-1][0]===score) return [outsideRank+1,id];
        outsideRank = rank;
        return [rank+1,id];
    }).sort((x,y)=>x[1]-y[1]).map(el=>el[0])
}