function solution(a, b, c, d) {
    const obj = {};
    [a,b,c,d].forEach(el=>obj[el]===undefined?obj[el]=1:obj[el]++);
    const keys = Object.keys(obj).sort((x,y)=>obj[y]-obj[x]).map(el=>Number(el));
    const len = keys.length;
    if(len===1) return a*1111;
    if(len===4) return [a,b,c,d].sort((x,y)=>x-y)[0];
    
    if(len===3){
        const [p,q,r] = keys;
        return q*r;
    }
    if(obj[keys[0]]===1 || obj[keys[0]]===3){
        const [p,q] = keys;
        return (10*p+q)**2;
    }
    const [p,q] = keys;
    return (p+q) * Math.abs(p-q)
}