function solution(n, k) {
    function isPrimeNumber(num){
        if(num===1) return false;
        const limit = Math.floor(Math.sqrt(num));
        let temp = 2;
        while(temp<=limit) if(num%temp++===0) return false;
        return true;
    }
    return n.toString(k).split("0").filter(el=>el!=="").filter(el=>isPrimeNumber(Number(el))).length;
    
}