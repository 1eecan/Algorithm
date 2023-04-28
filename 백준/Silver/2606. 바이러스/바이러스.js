let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let N = Number(input[0]);
let M = Number(input[1]);
let computer = [[]];
for(let i=1;i<=N;i++){
    computer.push([]);
}
for(let i=2;i<=M+1;i++){
    let connect = input[i].split(" ").map(Number);
    computer[connect[0]].push(connect[1]);
    computer[connect[1]].push(connect[0]);
}
let answer = 0;
let visited = new Array(N+1).fill(false);
function dfs(graph,v,visited){
    visited[v] = true;
    answer++;
    for(i of graph[v]){
        if(!visited[i]){
            dfs(graph,i,visited);
        }
    }
}
dfs(computer,1,visited);
console.log(answer-1);