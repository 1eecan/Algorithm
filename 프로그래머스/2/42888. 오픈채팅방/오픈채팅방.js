function solution(record) {
    var answer = [];
    const obj = {};
    record.forEach(el=>{
        const [state,id,name] = el.split(" ");
        if(state!=="Leave") obj[id] = name;
        if(state!=="Change") answer.push([state,id]);
    });
    return answer.map(el=>{
        const [state,id] = el;
        if(state==="Enter") return `${obj[id]}님이 들어왔습니다.`
        if(state==="Leave") return `${obj[id]}님이 나갔습니다.`
    })
}