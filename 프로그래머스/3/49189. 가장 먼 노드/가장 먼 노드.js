function solution(n, edge) {
    const graph = Array.from({length:n+1}, ()=>[]);
    edge.forEach(([a,b])=>{
        graph[a].push(b);
        graph[b].push(a);
    });
    
    const distance = Array.from({length:n+1}, ()=>0);
    distance[1] = 1;
    const queue = [1];
    
    while(queue.length){
        const current = queue.shift();
        graph[current].forEach((node)=>{
            if(distance[node]===0){
                distance[node] = distance[current]+1;
                queue.push(node);
            }
        })
    }
    return distance.filter(i=>i===Math.max(...distance)).length;
}