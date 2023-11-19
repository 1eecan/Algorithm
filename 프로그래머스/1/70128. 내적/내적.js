function solution(a, b) {
    return a.reduce((acc,cur,index)=> acc = acc + cur*b[index],0);
}