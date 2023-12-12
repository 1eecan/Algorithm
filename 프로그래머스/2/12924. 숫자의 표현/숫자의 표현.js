function solution(n) {
    if(n===1) return 1;
    const arr = Array(Math.ceil(n/2)).fill().map((_,index)=>index+1);
    const sum = [0];
    for(let i = 0;i<arr.length;i++){
        sum.push(sum[i]+arr[i]);
    }
    
    let answer = 1;
    let start = 0;
    let end = 1;
    
    while(end<=arr.length){
        let result = sum[end]-sum[start];
        if(result===n){
            answer++;
            start++;
        }else if(result<n){
            end++;
        }else{
            start++;
        }
    }
    return answer;
}