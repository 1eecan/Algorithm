function solution(numbers, target) {
    var answer = 0;
    function traverse(number,index){
        if(index===numbers.length-1 && number===target) return answer++;
        else if(index===numbers.length-1) return;
        traverse(number+numbers[index+1],index+1);
        traverse(number-numbers[index+1],index+1);
        }
    traverse(0,-1);
    return answer;
}