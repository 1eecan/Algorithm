function solution(quiz) {
    return quiz.map(str=>eval(str.replace("=","==")) ? "O" : "X");
}