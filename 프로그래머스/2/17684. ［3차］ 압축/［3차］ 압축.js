function solution(msg) {
    const answer = [];
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const obj = {};
    alphabet.split("").forEach((char,idx)=>obj[char]=idx+1);
    const msgArr = msg.split("").reverse();
    while(msgArr.length){
        let w = msgArr.pop();
        while(obj[w+msgArr[msgArr.length-1]]!==undefined){
            w += msgArr.pop();
        }
        answer.push(obj[w]);
        obj[w+msgArr[msgArr.length-1]] = Object.keys(obj).length+1;
    }
    return answer;
}