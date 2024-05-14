function solution(a, b) {
    const date = [0,31,29,31,30,31,30,31,31,30,31,30,31];
    const day = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
    
    return day[((date.reduce((acc,_,idx)=>acc + (idx<a ? date[idx] : 0),b-1)+5)%7)];

}