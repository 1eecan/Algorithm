function solution(l, r) {
    const arr = [];
    for(let i=l;i<=r;i++){
        if(!String(i).split("").filter(el=>el!=="0").filter(el=>el!=="5").length) arr.push(i);
    }
    return arr.length ? arr : [-1];
}