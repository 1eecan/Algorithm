function solution(name, yearning, photo) {
    var answer = [];
    const nameObject = Object.fromEntries(name.map((key,index)=>[key,yearning[index]]));
    for(let i=0;i<photo.length;i++){
        let temp = 0;
        for(let j=0;j<photo[i].length;j++){
            if(nameObject[photo[i][j]]!==undefined) temp += nameObject[photo[i][j]];
        }
        answer.push(temp);
    }
    return answer;
}