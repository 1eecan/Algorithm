function solution(strings, n) {
    return strings.sort().sort((x,y)=>x[n].charCodeAt()-y[n].charCodeAt());
}