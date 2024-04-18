function solution(X, Y) {
    var answer = "";
    const arr = [];
    const XObj = {};
    const YObj = {};
    for(let i=0;i<X.length;i++){
        if(XObj[X[i]]===undefined) XObj[X[i]] = 1;
        else XObj[X[i]]++;
    }
    for(let i=0;i<Y.length;i++){
        if(YObj[Y[i]]===undefined) YObj[Y[i]] = 1;
        else YObj[Y[i]]++;
    }
    
    for(let key in XObj){
        if(YObj[key]){
            const length = XObj[key]<YObj[key] ? XObj[key]:YObj[key];
            for(let i=0;i<length;i++){
                arr.push(key);
            }
        }
    }
    
    if(arr.length===0) return "-1";
    else if(arr[arr.length-1]==='0') return "0";
    else{
        console.log(answer)
        while(arr.length){
            answer += arr.pop();
        }
        return answer;
    }

}