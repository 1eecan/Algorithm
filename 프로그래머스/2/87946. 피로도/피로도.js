function solution(k, dungeons) {
    let answer = 0;
    const idx = new Array(dungeons.length).fill(()=>0).map((item,idx)=>idx);
    const list = [];
    
    function isEnter(remain,consume){
        return remain<consume ? false : true;
    }
    (function permutation(permu, rests, output){
        if (rests.length == 0) {
            return output.push(permu);
        }
        rests.forEach((v,idx) => {
            const rest = [...rests.slice(0,idx), ...rests.slice(idx+1)]
            permutation([...permu,v], rest, output);
        })
    })([],idx,list);
    
    for(let arr of list){
        let tired = k;
        let temp = 0;
        for(let i of arr){
            if(isEnter(tired,dungeons[i][0])){
                temp++;
                tired-=dungeons[i][1];
            }else break;
        }
        if(temp>answer) answer = temp;
    }
    return answer;
}