function solution(t, p) {
    let answer = 0;
        
    const len = p.length;
    let i = 0;
    while(i+len<=t.length){
        let str = "";
        for(let j=i;j<i+len;j++){
            str += t[j];
        }
        if(Number(str)<=Number(p)) answer++;
        i++;
    }
    return answer;
}