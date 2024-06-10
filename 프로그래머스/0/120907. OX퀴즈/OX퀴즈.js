function solution(quiz) {
    var answer = [];
    quiz.forEach(str=>{
        eval(str.replace("=","==")) ? answer.push("O") : answer.push("X");
    })
    return answer;
}