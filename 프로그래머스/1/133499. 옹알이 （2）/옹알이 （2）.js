function solution(babbling) {
    let answer = 0;
    for(let i=0;i<babbling.length;i++){
        if(babbling[i].indexOf("ayaaya")!==-1){answer++; continue}
        else if(babbling[i].indexOf("yeye")!==-1){answer++; continue}
        else if(babbling[i].indexOf("woowoo")!==-1){answer++; continue}
        else if(babbling[i].indexOf("mama")!==-1){answer++; continue}
        else if(babbling[i].split("aya").join("1").split("ye").join("1").split("woo").join("1").split("ma").join("1").split("1").join("") !== ""){answer++; continue};
    }
    return babbling.length-answer;
}