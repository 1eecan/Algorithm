function solution(number) {
    var answer = 0;
    let output = [];
    let count = 0;
    
    function combination(arr,data,s,idx,r){
        if(s==r){
            count++;
            if((data[0]+data[1]+data[2])==0){
                answer++;
            }
            return;
        }
        for (let i=idx; arr.length-i>=r-s;i++){
            data[s]=arr[i];
            combination(arr,data,s+1,i+1,r);
        }
    }
    
    combination(number,output,0,0,3)
    
    return answer;
}