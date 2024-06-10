function solution(num, total) {
    const init = ((2*total)/num - num + 1)/2;
    return Array.from({length:num},(_,index)=>init+index);
}