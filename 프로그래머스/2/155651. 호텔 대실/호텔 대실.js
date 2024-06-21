function solution(book_time) {
    book_time = book_time.map(([start,end])=>{
        start = start.split(":");
        end = end.split(":");
        return [Number(start[0]) * 60 + Number(start[1]), Number(end[0]) * 60 + Number(end[1]) +9];
    });
    
    const obj = {};
    for(const [start,end] of book_time){
        let i = start;
        while(i<=end){
            obj[i] ? obj[i]++ : obj[i] = 1;
            i++;
        }
    }
    return Math.max(...Object.values(obj))
}