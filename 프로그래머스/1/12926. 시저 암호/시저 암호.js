function solution(s, n) {
    var answer = '';
    for(let i=0;i<s.length;i++){
        const flag = s[i].charCodeAt();
        if(s[i]===" ") answer+=" "
        else if(flag<91){
            if(flag+n<91) answer+=String.fromCharCode(flag+n);
            else answer+=String.fromCharCode(64+(flag+n)%90);
        }
        else{
            if(flag+n<123) answer+=String.fromCharCode(flag+n);
            else answer+=String.fromCharCode(96+(flag+n)%122);
        }
    }
    return answer;
}