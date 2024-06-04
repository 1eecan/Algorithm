function solution(lines) {
    let answer = 0;
    const obj = {};
    for(let i=lines[0][0];i<lines[0][1];i++) obj[i]===undefined?obj[i]=1:obj[i]++;
    for(let i=lines[1][0];i<lines[1][1];i++) obj[i]===undefined?obj[i]=1:obj[i]++;
    for(let i=lines[2][0];i<lines[2][1];i++) obj[i]===undefined?obj[i]=1:obj[i]++;
    for(const key in obj){
        if(obj[key]>1) answer++;
    }
    return answer;
}