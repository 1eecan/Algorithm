function solution(nums) {
    let answer = 0;
    //일단 수를 다 만들고 그 수가 소수인지 검사
    //수를 다 만드는 로직, 소수인지 검사하는 로직 필요
    function isDecimal(num){
        let div = 2;
        while(num%div!==0){
            div++;
        }
        return div===num ? true : false;
    }
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            for(let k=j+1;k<nums.length;k++){
                if(isDecimal(nums[i]+nums[j]+nums[k])) answer++;
            }
        }
    }
    
    return answer;
}