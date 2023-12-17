function solution(x) {
    const arr = x.toString().split('');
    for(let i=0;i<arr.length;i++) arr[i]=Number(arr[i])
    return x % arr.reduce((acc,cur)=>acc+=cur,0) === 0 ? true : false;
}