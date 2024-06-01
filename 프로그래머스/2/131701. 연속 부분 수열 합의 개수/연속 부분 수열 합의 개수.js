function solution(elements) {
    const set = new Set();
    const len = elements.length;
    let partial = 1;
    for(let i=0;i<len;i++){
        for(let j=0;j<len;j++){
            let temp = 0;
            for(let k=j;k<j+partial;k++){
                temp+=elements[k%len];
            }
            set.add(temp);
        }
        partial++;
    }
    return [...set].length;
}