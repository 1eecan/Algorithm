function solution(word) {
    const arr = [];
    const set = ["A","E","I","O","U"];
    const setWithBlank = [...set,""];
    for(let i1=0;i1<set.length;i1++){
        for(let i2=0;i2<setWithBlank.length;i2++){
            for(let i3=0;i3<setWithBlank.length;i3++){
                for(let i4=0;i4<setWithBlank.length;i4++){
                    for(let i5=0;i5<setWithBlank.length;i5++){
                        arr.push(set[i1]+setWithBlank[i2]+setWithBlank[i3]+setWithBlank[i4]+setWithBlank[i5]);
                    }
                }
            }
        }
    }
    return [...new Set(arr)].sort().indexOf(word)+1;
}