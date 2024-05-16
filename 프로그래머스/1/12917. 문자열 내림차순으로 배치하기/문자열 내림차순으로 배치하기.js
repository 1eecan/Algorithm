function solution(s) {
    return s.split("").sort((x,y)=>y.charCodeAt()-x.charCodeAt()).join("");
}