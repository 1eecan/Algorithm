function solution(numbers) {
    if(numbers.filter(number=>number!==0).length===0) return '0'
    return numbers.sort((x,y)=>Number(`${y}${x}`)-Number(`${x}${y}`)).join('')
}