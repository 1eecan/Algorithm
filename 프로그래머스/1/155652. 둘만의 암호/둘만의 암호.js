function solution(s, skip, index) {
    var answer = '';
    var alphabet = new Set("abcdefghijklmnopqrstuvwxyz".split(""));
    skip.split("").forEach(i=>alphabet.delete(i));
    alphabet = [...alphabet];
    s.split("").forEach(i=>{
        answer+=alphabet[(alphabet.indexOf(i)+index)%alphabet.length];
    })
    
    return answer;
}