function solution(n, words) {
    const obj = {};
    for(let word of words){
        obj[word] = 0;
    }
    
    if(obj[words[0]] === 0 && words[0].length!==1){
        obj[words[0]]++;
    }else{
        return [(0+1)%n,Math.floor(0/n)+1];
    }
    
    for(let i=1;i<words.length;i++){
        const nowWord = words[i];
        if(obj[nowWord] === 0 && nowWord.length!==1 && words[i-1][words[i-1].length-1]==nowWord[0]) obj[words[i]]++;
        else return [i%n+1,Math.floor(i/n)+1];
    }
    
    return [0,0];
}