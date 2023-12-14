function solution(arr) {
    const stack = [arr[0]];
    for(let i of arr) if(stack[stack.length-1]!== i) stack.push(i);
    return stack;
}
