function solution(n) {
    return Number(String(n).split("").map((n)=>Number(n)).sort((x,y)=>y-x).join(""));
}