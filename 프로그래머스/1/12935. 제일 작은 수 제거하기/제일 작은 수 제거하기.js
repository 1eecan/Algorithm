function solution(arr) {
    var answer = [];
    var copiedArr = [...arr];
    var minimum = copiedArr.sort((x,y)=>y-x).pop();
    arr.splice(arr.indexOf(minimum),1);
    return arr.length ? arr : [-1];
}