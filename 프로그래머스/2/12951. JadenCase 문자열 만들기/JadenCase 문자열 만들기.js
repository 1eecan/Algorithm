function solution(s) {
    return s.split(" ").map((word)=>word.substr(0,1).toUpperCase()+word.substr(1,word.length-1).toLowerCase()).join(" ");
}