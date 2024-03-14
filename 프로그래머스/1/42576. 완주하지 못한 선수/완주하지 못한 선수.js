function solution(participant, completion) {
    const map = new Map();
    
    participant.forEach(person=>{
        if(!map.has(person)) map.set(person,0);
        else map.set(person,map.get(person)+1);
    });
    
    completion.forEach(person=>{
        if(map.get(person)===0) map.delete(person);
        else map.set(person,map.get(person)-1);
    });
    
    return map.keys().next().value;
}