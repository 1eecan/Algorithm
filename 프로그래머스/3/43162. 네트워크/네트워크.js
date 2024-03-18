function solution(n, computers) {
    let visited = Array(n).fill(false);
    let count = 0;
    
    function dfs(current) {
        visited[current] = true;
        for (let i = 0; i < n; i++) {
            if (computers[current][i] === 1 && !visited[i]) {
                dfs(i);
            }
        }
    }
    
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            dfs(i);
            count++;
        }
    }
    
    return count;
}
