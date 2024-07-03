function solution(chicken) {
    var answer = 0;
    while(chicken>=10){
        let rest = 0;
        rest = chicken % 10;
        chicken = (chicken - rest)/10;
        answer+=chicken;
        chicken+=rest;
    }
    return answer;
}