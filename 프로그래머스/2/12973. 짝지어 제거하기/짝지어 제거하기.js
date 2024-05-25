function solution(s){
    const stack = [];
    for(let char of s){
        if(stack.length>0 && char===stack[stack.length-1]){
            stack.pop();
        }else{
            stack.push(char);
        }
    }
    return stack.length===0 ? 1 : 0;
}