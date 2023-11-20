function solution(citations) {
    citations = citations.sort((x,y)=>y-x);
    for(let h = citations[0];h>0;h--){
        if(citations.reduce((acc,cur)=>cur>=h?acc+1:acc,0)>=h)
            return h
    }
    return 0
}
