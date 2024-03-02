function solution(n, m, section) {
    var answer = 0;
    
    //벽 만들기
    const wall = [...new Array(n)].map(()=>true);
    section.forEach(section=>wall[section-1]=false);
    
    //칠 시작구간 설정
    let start = section[0]-1;
    
    //칠하기
    //칠 시작 구역 + 롤러의 길이가 벽을 넘어가면 칠 시작 구역 전에서부터 칠해도 끝까지 다 칠할 수 있음 
    while(start!==-1 && start<n){
        for(let i=0;i<m;i++){
            wall[start++]=true;
        }
        start = wall.indexOf(false);
        answer++;
    }
    
    return answer;
}