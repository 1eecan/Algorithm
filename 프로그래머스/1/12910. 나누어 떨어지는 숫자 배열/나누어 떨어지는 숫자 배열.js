function solution(arr, divisor) {
    return arr.filter(num=>num%divisor===0).length===0 ? [-1] : arr.filter(num=>num%divisor===0).sort((x,y)=>x-y);
}