function solution(my_string) {
    const arr = [];
    let index = 0;
    while(index<my_string.length){
        arr.push(my_string.substr(index++));
    }
    return arr.sort();   
}