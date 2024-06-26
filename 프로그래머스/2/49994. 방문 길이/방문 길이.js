function solution(dirs) {
    var answer = 0;
    const cor = [0,0];
    const cache = {};
    dirs = dirs.split("");
    for(const dir of dirs){
        const orgn = [...cor];
        
        if(dir==="U") cor[1] += 1;
        if(dir==="D") cor[1] -= 1;
        if(dir==="L") cor[0] -= 1;
        if(dir==="R") cor[0] += 1;
        
        if(Math.abs(cor[0])>5 || Math.abs(cor[1])>5){
            cor[0] = orgn[0];
            cor[1] = orgn[1];
            continue;
        }
        
        const info = [0.5 * (orgn[0]+cor[0]), 0.5 * (orgn[1]+cor[1])];
        
        if(cache[info]) continue;
        
        cache[info] = true;
        answer++;
    }
    return answer;
}