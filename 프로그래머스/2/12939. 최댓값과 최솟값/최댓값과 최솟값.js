function solution(s) {
    return s.split(" ").sort((x,y)=>x-y).filter((_,i)=>i===0||i===s.split(" ").length-1).join(" ");
}