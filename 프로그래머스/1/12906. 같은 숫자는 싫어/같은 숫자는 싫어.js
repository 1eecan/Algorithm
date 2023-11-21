function solution(arr) {
    const stack = [arr.pop()];
    while(arr.length){
        if(stack[stack.length-1]!==arr[arr.length-1])
            stack.push(arr.pop());
        else arr.pop()
    }
    return stack.reverse();
}
