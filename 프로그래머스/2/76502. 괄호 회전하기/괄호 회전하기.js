function solution(s) {
    let answer = 0;
    s = s.split("");
    if(s.length%2===1) return answer;

    for(let i=0;i<s.length;i++){
        const stack = [];
        for(let j=0;j<s.length;j++){
            stack.push(s[j]);
            
            if(stack.length>=2){
                if(stack[stack.length-2]==="(" && stack[stack.length-1]===")"){
                    stack.pop();
                    stack.pop();
                }
                if(stack[stack.length-2]==="{" && stack[stack.length-1]==="}"){
                    stack.pop();
                    stack.pop();
                } 
                if(stack[stack.length-2]==="[" && stack[stack.length-1]==="]"){
                    stack.pop();
                    stack.pop();
                }
            }
        }
        if(stack.length===0) answer++;
        const shift = s.shift();
        s.push(shift);
    }
     return answer;
}