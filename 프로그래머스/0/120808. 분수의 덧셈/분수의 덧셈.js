function solution(numer1, denom1, numer2, denom2) {
    const arr = [numer1 * denom2 + numer2 * denom1, denom1 * denom2];
    const min = Math.min(...arr);
    let temp = 2;
    while(temp<=min){
        if(arr[0]%temp===0 && arr[1]%temp===0){
            arr[0]/=temp;
            arr[1]/=temp;
        }else temp++;
    }
    return arr;
}