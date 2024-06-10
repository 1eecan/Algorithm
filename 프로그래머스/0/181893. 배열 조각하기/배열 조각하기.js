function solution(arr, query) {
    query.forEach((el,index)=>index%2===0 ? arr.splice(el+1,arr.length+1) : arr.splice(0,el));
    return arr;
}