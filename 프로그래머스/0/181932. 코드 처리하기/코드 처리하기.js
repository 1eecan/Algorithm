function solution(code) {
    var answer = '';
    let mode = 0;
    const arr = code.split("");
    for(let i=0;i<arr.length;i++){
        if(mode===0){
            if(arr[i]!=="1" && i%2===0) answer+=arr[i];
            if(arr[i]==1) mode = 1;
        }
        else if(mode===1){
            if(arr[i]!=="1" && i%2===1) answer+=arr[i];
            if(arr[i]==1) mode = 0;
        }
    }
    return answer.length?answer:"EMPTY";
}