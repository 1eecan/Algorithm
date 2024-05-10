function solution(answers) {
    const answer = [];
    
    const first = [1, 2, 3, 4, 5];
    const second = [2, 1, 2, 3, 2, 4, 2, 5];
    const third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    let firstCorrect = 0;
    let secondCorrect = 0;
    let thirdCorrect = 0;
    
    for(let i=0;i<answers.length;i++){
        if(answers[i]===first[i%first.length]) firstCorrect++;
        if(answers[i]===second[i%second.length]) secondCorrect++;
        if(answers[i]===third[i%third.length]) thirdCorrect++;
    }
    
    return firstCorrect === secondCorrect && secondCorrect === thirdCorrect ? [1,2,3] : firstCorrect === secondCorrect && secondCorrect > thirdCorrect ? [1,2] : firstCorrect === thirdCorrect && thirdCorrect > secondCorrect ? [1,3] : secondCorrect === thirdCorrect && thirdCorrect > firstCorrect ? [2,3] : firstCorrect > secondCorrect && firstCorrect > thirdCorrect ? [1] : secondCorrect > firstCorrect && secondCorrect > thirdCorrect ? [2] : [3];
    
}