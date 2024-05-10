function solution(s){
    s = s.toLowerCase();
    let numP = 0;
    let numY = 0;
    for(let i=0;i<s.length;i++){
        if(s[i]==="p") numP++;
        else if(s[i]==="y") numY++;
    }
    return numP===0 && numY===0 ? true : numP===numY ? true : false;

}