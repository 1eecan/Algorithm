function solution(n) {
    let dirIdx = 0;
    const arr = new Array(n).fill(0).map(el=>new Array(n).fill(0));
    const dir = [[0,1],[1,0],[0,-1],[-1,0]];
    let x = 0;
    let y = 0;
    for(let i=1;i<=n*n;i++){
        if(!((0<=x && x<n) && (0<=y && y<n)) || arr[y][x]!==0){
            y-=dir[dirIdx%4][0];
            x-=dir[dirIdx%4][1];
            dirIdx+=1;
            y+=dir[dirIdx%4][0];
            x+=dir[dirIdx%4][1];
            i-=1;
            continue;
        }
            arr[y][x] = i;
            y+=dir[dirIdx%4][0];
            x+=dir[dirIdx%4][1];
    }
    return arr;
}