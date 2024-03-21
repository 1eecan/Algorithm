function solution(n, times) {
    if(times.length===1) return times[0]*n;
    let max = Math.max(...times)*n;
    let min = 1;
    let answer = max;
    
    while(min<=max){
        const mid = Math.floor((max+min)/2);
        const total = times.reduce((acc,time)=>acc+Math.floor(mid/time),0);
        if(total>=n){
            answer = mid;
            max = mid-1;
        }else{
            min = mid+1;
        }
    }
    return answer;
}