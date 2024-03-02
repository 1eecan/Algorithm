function solution(park, routes) {
    var answer = [];
    
    //시작점 찾기
    for(let i=0;i<park.length;i++){
        for(let j=0;j<park[i].length;j++){
            if(park[i][j]==='S') [answer[0],answer[1]]=[i,j];
        }
    }
    //공원밖으로 나가는지 확인하는 함수
    function isOut(coordinate){
        return (coordinate<0||coordinate>=park.length||coordinate>=park[0].length) ? true : false;
    }
    //장애물을 만났는지 확인하는 함수
    function isX(x,y){
        return park[x][y]==="X" ? true : false;
    }
    
    //routes 분석하기
    for(let i=0;i<routes.length;i++){
        let [row,col] = [answer[0],answer[1]];
        let flag = true;
        const [op,n] = routes[i].split(" ");
        
        if(op==="E"){
            for(let j=0;j<n;j++){
                if(isOut(col+1)||isX(row,col+1)){
                    flag=false;
                    break;
                }
                col++;
            }
            if(flag) answer[1]=col;
        }else if(op==="W"){
            for(let j=0;j<n;j++){
                if(isOut(col-1)||isX(row,col-1)){
                    flag=false;
                    break;
                }
                col--;
            }
            if(flag) answer[1]=col;
        }else if(op==="N"){
            for(let j=0;j<n;j++){
                if(isOut(row-1)||isX(row-1,col)){
                    flag=false;
                    break;
                }
                row--;
            }
            if(flag) answer[0]=row;
        }else if(op==="S"){
            for(let j=0;j<n;j++){
                if(isOut(row+1)||isX(row+1,col)){
                    flag=false;
                    break;
                }
                row++;
            }
            if(flag) answer[0]=row;
        }
    }
    
    return answer;
}