function solution(ingredient) {
    var answer = 0;
    const stack = [];
    let length = stack.length;
    for(let i=0;i<ingredient.length;i++){
        stack.push(ingredient[i]);
        length = stack.length;
        if(stack[length-1]=='1' &&
           stack[length-2]=='3' &&
           stack[length-3]=='2' &&
           stack[length-4]=='1'
          ) {
            stack.splice(-4);
            answer++;
        }
    }
    
    return answer;
}