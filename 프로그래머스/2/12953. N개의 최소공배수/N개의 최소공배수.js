function solution(arr) {
    let answer=1;
    const result = {};
    
    function divide(n){
        const obj = {};
        let temp = 2;
        while(1){
            if(n%temp===0){
                n/=temp;
                obj[temp]==undefined?obj[temp]=1:obj[temp]++;
            }else temp++;
            
            if(temp>n) break;
        }
        return obj;
    }
    arr.forEach((el)=>{
        const obj = divide(el)
        for(let key in obj){
            if(result[key]==undefined||result[key]<obj[key]) result[key] = obj[key];
        }
    });
    for(let key in result){
        answer*=key**result[key];
    }
    return answer;
}