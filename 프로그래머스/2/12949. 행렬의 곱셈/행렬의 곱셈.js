function solution(arr1, arr2) {
    const answer = [];
    
    const arr = [];
    for(let i=0;i<arr1.length;i++){
        for(let j=0;j<arr2[0].length;j++){
            let temp = 0;
            for(let k=0;k<arr2.length;k++){
                temp+=arr1[i][k]*arr2[k][j];
            }
            arr.push(temp);
        }
        answer.push(arr.splice(0,arr.length));
    }
    return answer;
}