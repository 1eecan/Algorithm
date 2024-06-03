function solution(want, number, discount) {
    let answer = 0;
    const len = number.reduce((acc,cur)=>acc+cur,0);
    const wantObj = {};
    want.forEach((el,idx)=>wantObj[el]=number[idx]);

    function makeObj(arr){
        const obj = {};
        arr.forEach(el=>obj[el]===undefined ? obj[el]=1 : obj[el]++);
        return obj;
    }
    function isPossible(want,discount){
        for(const key in want){
            if(discount[key]===undefined || want[key]>discount[key]) return false;
        }
        return true;
    }
    
    while(discount.length>=len){
        if(isPossible(wantObj,makeObj(discount.slice(0,10)))) answer++;
        discount.shift();
    }
    
    return answer;
}