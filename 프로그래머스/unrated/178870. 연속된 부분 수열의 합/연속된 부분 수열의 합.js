function solution(sequence, k) {
    //투포인터 알고리즘
    let pointer1=0;
    let pointer2=0;
    let partialSum=0;
    let answer=[];
    for(pointer1;pointer1<sequence.length;pointer1++){
        while(partialSum<k && pointer2<sequence.length){
            partialSum+=sequence[pointer2];
            pointer2++;
        }
        if(partialSum==k){
            answer.push([pointer1,pointer2-1]);
        }
        partialSum-=sequence[pointer1];
    }
    if(answer.length!=1){
        answer.sort((x,y)=>{
                if(x[1]-x[0]==y[1]-y[0]){
                    return x[0]>y[0]?1:-1;
                }else return x[1]-x[0]>y[1]-y[0]?1:-1;
            })
    }
    
    return answer[0];
}