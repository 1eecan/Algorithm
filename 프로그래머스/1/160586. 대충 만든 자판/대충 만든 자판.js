function solution(keymap, targets) {
    var answer = [];
    var newKeymap = {};
    
    for(let i=65;i<91;i++){
        newKeymap[String.fromCharCode(i)] = 0;
    }
    
    keymap.forEach(keys=>{
        keys.split("").forEach((key,index)=>{
            if(newKeymap[key]===0||index<newKeymap[key]) newKeymap[key]=index+1;
        });
    });
    
    targets.forEach((target,index)=>{
        let temp=0;
        for(let i=0;i<target.length;i++){
            if(newKeymap[target[i]]===0){
                answer.push(-1);
                break;
            }
            else temp+=newKeymap[target[i]];
        }
        if(answer[index]!==-1) answer.push(temp);
    });
    
    return answer;
}