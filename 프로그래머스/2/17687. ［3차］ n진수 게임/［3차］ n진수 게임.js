function solution(n, t, m, p) {
    let str = "";
    let answer = "";
    let num = 0;
    while(str.length<t*m){
        str+=num.toString(n);
        num++;
    }
    str=str.toUpperCase();
    for(let i=p;i<=t*m;i+=m){
        answer+=str[i-1];
    }

    return answer;
}