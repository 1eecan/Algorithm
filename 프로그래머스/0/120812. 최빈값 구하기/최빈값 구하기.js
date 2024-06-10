function solution(array) {
    const obj = {};
    array.forEach(el=>obj[el]===undefined ? obj[el]=1 : obj[el]++);
    array.sort((x,y)=>obj[y]-obj[x]);
    const set = [...new Set(array)];
    return obj[set[0]]!==obj[set[1]] ? set[0] : -1;
}